//Node Modules:
const net = require('net')
import { store, state } from '../../reducers/store'
import { remoteConnections } from '../../mainClasses'

//Utils:
import {
    fxParamsList,
    IMixerProtocol,
} from '../../constants/MixerProtocolInterface'
import { storeSetOutputLevel } from '../../reducers/channelActions'
import {
    storeFaderLevel,
    storeTogglePgm,
    storeSetMute,
} from '../../reducers/faderActions'
import { logger } from '../logger'
import { storeSetMixerOnline } from '../../reducers/settingsActions'
import { sendVuLevel, VuType } from '../vuServer'

export class QlClMixerConnection {
    mixerProtocol: IMixerProtocol
    mixerIndex: number
    cmdChannelIndex: number
    midiConnection: any
    mixerOnlineTimer: any

    constructor(mixerProtocol: IMixerProtocol, mixerIndex: number) {
        this.sendOutMessage = this.sendOutMessage.bind(this)
        this.pingMixerCommand = this.pingMixerCommand.bind(this)

        store.dispatch(storeSetMixerOnline(this.mixerIndex, false))

        this.mixerProtocol = mixerProtocol
        this.mixerIndex = mixerIndex

        this.cmdChannelIndex = this.mixerProtocol.channelTypes[0].fromMixer.CHANNEL_OUT_GAIN[0].mixerMessage
            .split('/')
            .findIndex((ch) => ch === '{channel}')

        this.midiConnection = new net.Socket()
        this.midiConnection.connect(
            50000,
            state.settings[0].mixers[this.mixerIndex].deviceIp,
            () => {
                logger.info('Connected to Yamaha mixer', {})
            }
        )
        this.setupMixerConnection()
    }

    setupMixerConnection() {
        this.midiConnection
            .on('ready', () => {
                logger.info('Receiving state of desk', {})
                this.mixerProtocol.initializeCommands.map((item) => {
                    if (item.mixerMessage.includes('{channel}')) {
                        state.channels[0].chConnection[
                            this.mixerIndex
                        ].channel.forEach((channel: any, index: any) => {
                            this.sendOutMessage(
                                item.mixerMessage,
                                index + 1,
                                0,
                                ''
                            )
                        })
                    } else {
                        this.sendOutMessage(
                            item.mixerMessage,
                            0,
                            item.value,
                            item.type
                        )
                    }
                })
                global.mainThreadHandler.updateFullClientStore()
            })
            .on('data', (data: any) => {
                clearTimeout(this.mixerOnlineTimer)
                store.dispatch(storeSetMixerOnline(this.mixerIndex, true))

                let buffers = []
                let lastIndex = 0
                for (let index = 1; index < data.length; index++) {
                    if (data[index] === 240) {
                        buffers.push(data.slice(lastIndex, index))
                        lastIndex = index
                    }
                }
                if (buffers.length === 0) {
                    buffers.push(data)
                }

                buffers.forEach((message) => {
                    logger.verbose(
                        'Received Midi Message : ' + message.toString('hex')
                    )
                    if (
                        this.checkMidiCommand(
                            message,
                            this.mixerProtocol.channelTypes[0].fromMixer
                                .CHANNEL_VU[0].mixerMessage
                        )
                    ) {
                        let mixerValues: string[] = message.split(' ')
                        let ch = parseInt(mixerValues[3])
                        let assignedFader =
                            1 +
                            state.channels[0].chConnection[this.mixerIndex]
                                .channel[ch - 1].assignedFader
                        let mixerValue = parseInt(mixerValues[6])
                        sendVuLevel(
                            assignedFader,
                            VuType.Channel,
                            0,
                            mixerValue
                        )
                    } else if (
                        this.checkMidiCommand(
                            message,
                            this.mixerProtocol.channelTypes[0].fromMixer
                                .CHANNEL_OUT_GAIN[0].mixerMessage
                        )
                    ) {
                        let ch = 1 + (message[11] | (message[10] << 8))
                        let assignedFader =
                            1 +
                            state.channels[0].chConnection[this.mixerIndex]
                                .channel[ch - 1].assignedFader
                        let mixerLevel: number =
                            message[16] | (message[15] << 8) // parseFloat(message[16])
                        let faderLevel = Math.pow(2, mixerLevel / 1920) - 1
                        //let faderLevel = Math.log10((mixerLevel + 32768) / (1000 + 32768))
                        if (
                            !state.channels[0].chConnection[this.mixerIndex]
                                .channel[ch - 1].fadeActive &&
                            faderLevel > this.mixerProtocol.fader.min
                        ) {
                            store.dispatch(
                                storeFaderLevel(assignedFader - 1, faderLevel)
                            )
                            if (
                                !state.faders[0].fader[assignedFader - 1].pgmOn
                            ) {
                                store.dispatch(
                                    storeTogglePgm(assignedFader - 1)
                                )
                            }

                            if (remoteConnections) {
                                remoteConnections.updateRemoteFaderState(
                                    assignedFader - 1,
                                    faderLevel
                                )
                            }
                            if (
                                state.faders[0].fader[assignedFader - 1].pgmOn
                            ) {
                                state.channels[0].chConnection[
                                    this.mixerIndex
                                ].channel.forEach(
                                    (channel: any, index: number) => {
                                        if (
                                            channel.assignedFader ===
                                            assignedFader - 1
                                        ) {
                                            this.updateOutLevel(index)
                                        }
                                    }
                                )
                            }
                        }
                        global.mainThreadHandler.updatePartialStore(
                            assignedFader - 1
                        )
                    } else if (
                        this.checkMidiCommand(
                            message,
                            this.mixerProtocol.channelTypes[0].fromMixer
                                .CHANNEL_MUTE_ON[0].mixerMessage
                        )
                    ) {
                        // MUTE ON/OFF COMMAND
                        let channelIndex = message[11] | (message[10] << 8)

                        let value: boolean = message[16] === 0 ? true : false
                        logger.verbose(
                            'Receive Buffer Channel On/off - Channel ' +
                                String(channelIndex + 1) +
                                ' Val :' +
                                String(message[16])
                        )

                        let assignedFaderIndex =
                            state.channels[0].chConnection[this.mixerIndex]
                                .channel[channelIndex].assignedFader

                        store.dispatch(storeSetMute(assignedFaderIndex, value))

                        if (remoteConnections) {
                            remoteConnections.updateRemoteFaderState(
                                assignedFaderIndex,
                                value ? 1 : 0
                            )
                        }
                        state.channels[0].chConnection[
                            this.mixerIndex
                        ].channel.forEach((channel: any, index: number) => {
                            if (
                                channel.assignedFader === assignedFaderIndex &&
                                index !== channelIndex
                            ) {
                                this.updateMuteState(
                                    index,
                                    state.faders[0].fader[assignedFaderIndex]
                                        .muteOn
                                )
                            }
                        })
                        global.mainThreadHandler.updatePartialStore(
                            assignedFaderIndex
                        )
                    }
                })
            })
            .on('error', (error: any) => {
                logger.error('Error : ' + String(error), {})
                logger.info('Lost QlCl connection', {})
            })

        //Ping OSC mixer if mixerProtocol needs it.
        if (this.mixerProtocol.pingTime > 0) {
            let oscTimer = setInterval(() => {
                this.pingMixerCommand()
            }, this.mixerProtocol.pingTime)
        }
    }

    pingMixerCommand() {
        this.mixerOnlineTimer = setTimeout(() => {
            store.dispatch(storeSetMixerOnline(this.mixerIndex, false))
        }, this.mixerProtocol.pingTime)
    }

    checkMidiCommand(midiMessage: number[], command: string) {
        if (!midiMessage) return false
        let commandArray = command.split(' ')
        let valid = true
        for (let i = 0; i <= 8; i++) {
            if (i < midiMessage.length) {
                if (
                    ('0' + midiMessage[i].toString(16)).substr(-2) !==
                    commandArray[i]
                ) {
                    valid = false
                }
            } else {
                valid = false
            }
        }
        return valid
    }

    sendOutMessage(
        message: string,
        channel: number,
        value: string | number,
        type: string
    ) {
        let valueNumber: number
        if (typeof value === 'string') {
            value = parseFloat(value)
        }

        valueNumber = value * 2048
        let valueByte = new Uint8Array([
            (valueNumber & 0xff00) >> 8,
            valueNumber & 0x00ff,
        ])

        let channelByte = new Uint8Array([
            (channel & 0xff00) >> 8,
            channel & 0x00ff,
        ])

        let command = message.replace(
            '{channel}',
            channelByte[0].toString(16) + ' ' + channelByte[1].toString(16)
        )
        command = command.replace(
            '{level}',
            valueByte[0].toString(16) + ' ' + valueByte[1].toString(16)
        )
        let a = command.split(' ')
        let buf = new Buffer(
            a.map((val: string) => {
                return parseInt(val, 16)
            })
        )
        logger.verbose('Sending Command :' + command)
        this.midiConnection.write(buf)
    }

    updateOutLevel(channelIndex: number) {
        let channelType =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelType
        let channelTypeIndex =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelTypeIndex
        let faderIndex =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].assignedFader
        if (state.faders[0].fader[faderIndex].pgmOn) {
            store.dispatch(
                storeSetOutputLevel(
                    this.mixerIndex,
                    channelIndex,
                    state.faders[0].fader[faderIndex].faderLevel
                )
            )
        }
        this.sendOutMessage(
            this.mixerProtocol.channelTypes[channelType].toMixer
                .CHANNEL_OUT_GAIN[0].mixerMessage,
            channelTypeIndex,
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].outputLevel,
            'f'
        )
    }

    updatePflState(channelIndex: number) {
        let channelType =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelType
        let channelTypeIndex =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelTypeIndex
        if (state.faders[0].fader[channelIndex].pflOn === true) {
            this.sendOutMessage(
                this.mixerProtocol.channelTypes[channelType].toMixer.PFL_ON[0]
                    .mixerMessage,
                channelTypeIndex,
                this.mixerProtocol.channelTypes[channelType].toMixer.PFL_ON[0]
                    .value,
                this.mixerProtocol.channelTypes[channelType].toMixer.PFL_ON[0]
                    .type
            )
        } else {
            this.sendOutMessage(
                this.mixerProtocol.channelTypes[channelType].toMixer.PFL_OFF[0]
                    .mixerMessage,
                channelTypeIndex,
                this.mixerProtocol.channelTypes[channelType].toMixer.PFL_OFF[0]
                    .value,
                this.mixerProtocol.channelTypes[channelType].toMixer.PFL_OFF[0]
                    .type
            )
        }
    }

    updateMuteState(channelIndex: number, muteOn: boolean) {
        let channelType =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelType
        let channelTypeIndex =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelTypeIndex
        if (muteOn === true) {
            this.sendOutMessage(
                this.mixerProtocol.channelTypes[channelType].toMixer
                    .CHANNEL_MUTE_ON[0].mixerMessage,
                channelTypeIndex,
                '',
                ''
            )
        } else {
            this.sendOutMessage(
                this.mixerProtocol.channelTypes[channelType].toMixer
                    .CHANNEL_MUTE_OFF[0].mixerMessage,
                channelTypeIndex,
                '',
                ''
            )
        }
    }

    updateNextAux(channelIndex: number, level: number) {
        return true
    }

    updateInputGain(channelIndex: number, level: number) {
        return true
    }
    updateInputSelector(channelIndex: number, inputSelected: number) {
        return true
    }

    updateFx(fxParam: fxParamsList, channelIndex: number, level: number) {
        return true
    }
    updateAuxLevel(channelIndex: number, auxSendIndex: number, level: number) {
        return true
    }

    updateFadeIOLevel(channelIndex: number, outputLevel: number) {
        let channelType =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelType
        let channelTypeIndex =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelTypeIndex
        this.sendOutMessage(
            this.mixerProtocol.channelTypes[channelType].toMixer
                .CHANNEL_OUT_GAIN[0].mixerMessage,
            channelTypeIndex,
            String(outputLevel),
            'f'
        )
    }

    updateChannelName(channelIndex: number) {
        let channelType =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelType
        let channelTypeIndex =
            state.channels[0].chConnection[this.mixerIndex].channel[
                channelIndex
            ].channelTypeIndex
        let channelName = state.faders[0].fader[channelIndex].label
        this.sendOutMessage(
            this.mixerProtocol.channelTypes[channelType].toMixer.CHANNEL_NAME[0]
                .mixerMessage,
            channelTypeIndex,
            channelName,
            's'
        )
    }

    loadMixerPreset(presetName: string) {}

    injectCommand(command: string[]) {
        return true
    }
}
