//Node Modules:
const osc = require('osc')
import { store, state } from '../reducers/store'
import { mixerGenericConnection } from '../mainClasses'

//Utils:
import {
    IAutomationProtocol,
    AutomationPresets,
} from '../constants/AutomationPresets'
import { IFader } from '../reducers/fadersReducer'
import {
    SNAP_RECALL,
    storeFaderLevel,
    storeFaderLabel,
    storeSetPgm,
    storeSetVo,
    storeSetPstVo,
    storeSetMute,
    storeSetPst,
    storeShowChannel,
    storeXmix,
    storeFadeToBlack,
    storeClearPst,
} from '../reducers/faderActions'
import { logger } from './logger'

const AUTOMATION_OSC_PORT = 5255
export class AutomationConnection {
    oscConnection: any
    automationProtocol: IAutomationProtocol

    constructor() {
        this.sendOutMessage = this.sendOutMessage.bind(this)

        this.automationProtocol = AutomationPresets.sofie

        this.oscConnection = new osc.UDPPort({
            localAddress: '0.0.0.0',
            localPort: AUTOMATION_OSC_PORT,
        })
        this.setupAutomationConnection()
    }

    setupAutomationConnection() {
        this.oscConnection
            .on('ready', () => {
                this.automationProtocol.initializeCommands.map((item) => {
                    // this.sendOutMessage(item.oscMessage, 1, item.value, item.type);
                    logger.info(
                        'Listening for Automation via OSC over UDP.',
                        {}
                    )
                })
            })
            .on(
                'message',
                (message: any, timetag: number | undefined, info: any) => {
                    logger.info(
                        'RECIEVED AUTOMATION MESSAGE :' +
                            message.address +
                            message.args[0],
                        {}
                    )
                    //Set state of Sisyfos:
                    if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .CHANNEL_PGM_ON_OFF
                        )
                    ) {
                        let ch = message.address.split('/')[2]
                        if (
                            state.faders[0].fader[ch - 1] &&
                            !state.faders[0].fader[ch - 1].ignoreAutomation
                        ) {
                            if (message.args[0] === 1) {
                                mixerGenericConnection.checkForAutoResetThreshold(
                                    ch - 1
                                )
                                store.dispatch(storeSetPgm(ch - 1, true))
                            } else if (message.args[0] === 2) {
                                mixerGenericConnection.checkForAutoResetThreshold(
                                    ch - 1
                                )
                                store.dispatch(storeSetVo(ch - 1, true))
                            } else {
                                store.dispatch(storeSetPgm(ch - 1, false))
                            }

                            if (message.args.length > 1) {
                                mixerGenericConnection.updateOutLevel(
                                    ch - 1,
                                    parseFloat(message.args[1])
                                )
                            } else {
                                mixerGenericConnection.updateOutLevel(ch - 1)
                            }
                        }
                        global.mainThreadHandler.updatePartialStore(ch - 1)
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .CHANNEL_PST_ON_OFF
                        )
                    ) {
                        let ch = message.address.split('/')[2]
                        if (
                            state.faders[0].fader[ch - 1] &&
                            !state.faders[0].fader[ch - 1].ignoreAutomation
                        ) {
                            if (message.args[0] === 1) {
                                store.dispatch(storeSetPst(ch - 1, true))
                            } else if (message.args[0] === 2) {
                                store.dispatch(storeSetPstVo(ch - 1, true))
                            } else {
                                store.dispatch(storeSetPst(ch - 1, false))
                            }
                            mixerGenericConnection.updateNextAux(ch - 1)
                            global.mainThreadHandler.updatePartialStore(ch - 1)
                        }
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.CHANNEL_MUTE
                        )
                    ) {
                        let ch = message.address.split('/')[2]
                        if (
                            state.faders[0].fader[ch - 1] &&
                            !state.faders[0].fader[ch - 1].ignoreAutomation
                        ) {
                            store.dispatch(
                                storeSetMute(ch - 1, message.args[0] === 1)
                            )
                            mixerGenericConnection.updateMuteState(ch - 1)
                            global.mainThreadHandler.updatePartialStore(ch - 1)
                        }
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .CHANNEL_FADER_LEVEL
                        )
                    ) {
                        let ch = message.address.split('/')[2]
                        if (
                            state.faders[0].fader[ch - 1] &&
                            !state.faders[0].fader[ch - 1].ignoreAutomation
                        ) {
                            store.dispatch(
                                storeFaderLevel(ch - 1, message.args[0])
                            )
                            mixerGenericConnection.updateOutLevel(ch - 1)
                            global.mainThreadHandler.updatePartialStore(ch - 1)
                        }
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .INJECT_COMMAND
                        )
                    ) {
                        let ch = message.address.split('/')[2]
                        store.dispatch(storeFaderLabel(ch - 1, message.args[0]))
                        mixerGenericConnection.injectCommand(message.args)
                        global.mainThreadHandler.updatePartialStore(ch - 1)
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.SNAP_RECALL
                        )
                    ) {
                        let snapNumber = message.address.split('/')[2]
                        store.dispatch({
                            type: SNAP_RECALL,
                            snapIndex: snapNumber - 1,
                        })
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.SET_LABEL
                        )
                    ) {
                        let ch = message.address.split('/')[2]
                        store.dispatch(storeFaderLabel(ch - 1, message.args[0]))
                        mixerGenericConnection.updateChannelName(ch - 1)
                        global.mainThreadHandler.updatePartialStore(ch - 1)
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.X_MIX
                        )
                    ) {
                        store.dispatch(storeXmix())
                        mixerGenericConnection.updateOutLevels()
                        global.mainThreadHandler.updateFullClientStore()
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .CHANNEL_VISIBLE
                        )
                    ) {
                        let ch = message.address.split('/')[2]
                        store.dispatch(
                            storeShowChannel(ch - 1, message.args[0] === 1)
                        )
                        global.mainThreadHandler.updatePartialStore(ch - 1)
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.FADE_TO_BLACK
                        )
                    ) {
                        store.dispatch(storeFadeToBlack())
                        mixerGenericConnection.updateFadeToBlack()
                        global.mainThreadHandler.updateFullClientStore()
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.CLEAR_PST
                        )
                    ) {
                        store.dispatch(storeClearPst())
                        mixerGenericConnection.updateOutLevels()
                        global.mainThreadHandler.updateFullClientStore()
                        // Get state from Producers Audio Mixer:
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.STATE_FULL
                        )
                    ) {
                        this.sendOutMessage(
                            this.automationProtocol.toAutomation.STATE_FULL,
                            0,
                            JSON.stringify({
                                channel: state.faders[0].fader.map(
                                    ({
                                        faderLevel,
                                        pgmOn,
                                        voOn,
                                        pstOn,
                                        showChannel,
                                    }: IFader) => ({
                                        faderLevel,
                                        pgmOn,
                                        voOn,
                                        pstOn,
                                        showChannel,
                                    })
                                ),
                            }),
                            's',
                            info
                        )
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .STATE_CHANNEL_PGM
                        )
                    ) {
                        let ch = message.address.split('/')[3]
                        this.sendOutMessage(
                            this.automationProtocol.toAutomation
                                .STATE_CHANNEL_PGM,
                            ch,
                            state.faders[0].fader[ch - 1].pgmOn,
                            'i',
                            info
                        )
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .STATE_CHANNEL_PST
                        )
                    ) {
                        let ch = message.address.split('/')[3]
                        this.sendOutMessage(
                            this.automationProtocol.toAutomation
                                .STATE_CHANNEL_PST,
                            ch,
                            state.faders[0].fader[ch - 1].pstOn,
                            'i',
                            info
                        )
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .STATE_CHANNEL_MUTE
                        )
                    ) {
                        let ch = message.address.split('/')[3]
                        this.sendOutMessage(
                            this.automationProtocol.toAutomation
                                .STATE_CHANNEL_MUTE,
                            ch,
                            state.faders[0].fader[ch - 1].muteOn,
                            'i',
                            info
                        )
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation
                                .STATE_CHANNEL_FADER_LEVEL
                        )
                    ) {
                        let ch = message.address.split('/')[3]
                        this.sendOutMessage(
                            this.automationProtocol.toAutomation
                                .STATE_CHANNEL_FADER_LEVEL,
                            ch,
                            state.faders[0].fader[ch - 1].faderLevel,
                            'f',
                            info
                        )
                    } else if (
                        this.checkOscCommand(
                            message.address,
                            this.automationProtocol.fromAutomation.PING
                        )
                    ) {
                        let pingValue = state.settings[0].mixers[0].mixerOnline
                            ? message.address.split('/')[2]
                            : 'offline'

                        this.sendOutMessage(
                            this.automationProtocol.toAutomation.PONG,
                            0,
                            pingValue,
                            's',
                            info
                        )
                    }
                }
            )
            .on('error', (error: any) => {
                logger.error('Error : ', error)
                logger.info('Lost OSC Automation connection', {})
            })

        this.oscConnection.open()
        logger.info(
            'OSC Automation listening on port ' + String(AUTOMATION_OSC_PORT),
            {}
        )
    }

    checkOscCommand(message: string, command: string) {
        if (message === command) return true

        let cmdArray = command.split('{value1}')

        if (
            message.substr(0, cmdArray[0].length) === cmdArray[0] &&
            (message.substr(-cmdArray[1].length) === cmdArray[1] ||
                cmdArray[1].length === 0) &&
            message.length >= command.replace('{value1}', '').length
        ) {
            return true
        } else {
            return false
        }
    }

    sendOutMessage(
        oscMessage: string,
        channel: number,
        value: string | number | boolean,
        type: string,
        to: { address: string; port: number }
    ) {
        let channelString = this.automationProtocol.leadingZeros
            ? ('0' + channel).slice(-2)
            : channel.toString()
        let message = oscMessage.replace('{value1}', channelString)
        if (message != 'none') {
            this.oscConnection.send(
                {
                    address: message,
                    args: [
                        {
                            type: type,
                            value: value,
                        },
                    ],
                },
                to.address,
                to.port
            )
        }
    }
}
