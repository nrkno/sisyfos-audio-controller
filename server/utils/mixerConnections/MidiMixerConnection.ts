// *** Work around to run Web-midi on nodejs ***

// The `web-midi-api` module takes care of importing the `jazz-midi` module (which needs to be
// installed) and the WebMIDIAPI shim (which is already part of `web-midi-api`).
global.navigator = require('web-midi-api')
// WebMidi.js depends on the browser's performance.now() so we fake it with the `performance-now`
// Node module (which is installed as a dependency of `web-midi-api`).
if (!global.performance)
    global.performance = { now: require('performance-now') }
//Node Modules:
const WebMidi = require('webmidi')

import { store, state } from '../../reducers/store'
import { remoteConnections } from '../../mainClasses'

//Utils:
import { MixerProtocolPresets } from '../../constants/MixerProtocolPresets'
import {
    fxParamsList,
    IMixerProtocol,
} from '../../constants/MixerProtocolInterface'
import { storeSetOutputLevel } from '../../reducers/channelActions'
import { storeFaderLevel, storeTogglePgm } from '../../reducers/faderActions'

export class MidiMixerConnection {
    store: any
    mixerProtocol: any
    mixerIndex: number
    midiInput: any
    midiOutput: any

    constructor(mixerProtocol: IMixerProtocol, mixerIndex: number) {
        this.sendOutMessage = this.sendOutMessage.bind(this)
        this.pingMixerCommand = this.pingMixerCommand.bind(this)

        this.mixerProtocol = mixerProtocol || MixerProtocolPresets.genericMidi
        this.mixerIndex = mixerIndex

        WebMidi.enable((err: any) => {
            if (err) {
                console.log('WebMidi could not be enabled.', err)
            }
            console.log(
                'Connecting Mixer Midi input on port :',
                state.settings[0].mixers[this.mixerIndex].mixerMidiInputPort
            )
            console.log(
                'Connecting Mixer Midi output on port :',
                state.settings[0].mixers[this.mixerIndex].mixerMidiOutputPort
            )
            this.midiInput = WebMidi.getInputByName(
                state.settings[0].mixers[this.mixerIndex].mixerMidiInputPort
            )
            this.midiOutput = WebMidi.getOutputByName(
                state.settings[0].mixers[this.mixerIndex].mixerMidiOutputPort
            )

            this.setupMixerConnection()
        })
    }

    setupMixerConnection() {
        this.midiInput.addListener('controlchange', 1, (message: any) => {
            console.log(
                "Received 'controlchange' message (" + message.data + ').'
            )
            if (
                message.data[1] >=
                    parseInt(
                        this.mixerProtocol.channelTypes[0].fromMixer
                            .CHANNEL_OUT_GAIN[0].mixerMessage
                    ) &&
                message.data[1] <=
                    parseInt(
                        this.mixerProtocol.channelTypes[0].fromMixer
                            .CHANNEL_OUT_GAIN[0].mixerMessage
                    ) +
                        24
            ) {
                let ch =
                    1 +
                    message.data[1] -
                    parseInt(
                        this.mixerProtocol.channelTypes[0].fromMixer
                            .CHANNEL_OUT_GAIN[0].mixerMessage
                    )
                let faderChannel =
                    1 +
                    state.channels[0].chMixerConnection[this.mixerIndex]
                        .channel[ch - 1].assignedFader
                store.dispatch(
                    storeFaderLevel(faderChannel - 1, message.data[2])
                )
                if (!state.faders[0].fader[faderChannel - 1].pgmOn) {
                    store.dispatch(
                        storeTogglePgm(
                            state.channels[0].chMixerConnection[this.mixerIndex]
                                .channel[ch - 1].assignedFader - 1
                        )
                    )
                }
                if (remoteConnections) {
                    remoteConnections.updateRemoteFaderState(
                        faderChannel - 1,
                        state.faders[0].fader[faderChannel - 1].faderLevel
                    )
                }
                if (state.faders[0].fader[faderChannel - 1].pgmOn) {
                    state.channels[0].chMixerConnection[
                        this.mixerIndex
                    ].channel.forEach((channel: any, index: number) => {
                        if (channel.assignedFader === faderChannel - 1) {
                            this.updateOutLevel(index)
                        }
                    })
                }
            }
        })
        this.midiInput.addListener('noteon', 'all', (error: any) => {
            console.log(
                "Received 'noteon' message (" +
                    error.note.name +
                    error.note.octave +
                    ').'
            )
        })
        /*
            if (
                this.checkOscCommand(message.address, this.mixerProtocol.channelTypes[0].fromMixer.CHANNEL_VU)
            ) {
                if (state.settings[0].mixers[this.mixerIndex].mixerProtocol === 'behringer') {
                    behringerMeter(message.args);
                } else {
                    let ch = message.address.split("/")[2];
                    store.dispatch({
                        type:SET_VU_LEVEL,
                        channel: ch - 1,
                        level: message.args[0]
                    });
                }
            }
            if (
                this.checkOscCommand(message.address, this.mixerProtocol.channelTypes[0].fromMixer.CHANNEL_NAME)
            ) {
                    let ch = message.address.split("/")[2];
                    store.dispatch({
                        type: SET_CHANNEL_LABEL,
                        channel: ch - 1,
                        label: message.args[0]
                    });
                console.log("OSC message: ", message.address);
            }
*/
        return true
        //Ping OSC mixer if mixerProtocol needs it.
        if (this.mixerProtocol.pingTime > 0) {
            let oscTimer = setInterval(() => {
                this.pingMixerCommand()
            }, this.mixerProtocol.pingTime)
        }
    }

    pingMixerCommand() {
        //Ping OSC mixer if mixerProtocol needs it.
        this.mixerProtocol.pingCommand.map((command: any) => {
            this.sendOutMessage(command.mixerMessage, 0, command.value)
        })
    }

    sendOutMessage(ctrlMessage: string, channel: number, value: string) {
        if (
            ctrlMessage != 'none' &&
            0 <= parseFloat(value) &&
            parseFloat(value) <= 127
        ) {
            let ctrlMessageInt = parseInt(ctrlMessage) + channel - 1
            this.midiOutput.sendControlChange(ctrlMessageInt, value, 1)
        }
    }

    updateOutLevel(channelIndex: number) {
        let faderIndex =
            state.channels[0].chMixerConnection[this.mixerIndex].channel[
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
            this.mixerProtocol.channelTypes[0].toMixer.CHANNEL_OUT_GAIN[0]
                .mixerMessage,
            channelIndex + 1,
            String(
                state.channels[0].chMixerConnection[this.mixerIndex].channel[
                    channelIndex
                ].outputLevel
            )
        )
        /* Client mode is disabled
        this.sendOutMessage(
            this.mixerProtocol.channelTypes[0].toMixer.CHANNEL_FADER_LEVEL[0].mixerMessage,
            channelIndex+1,
            state.faders[0].fader[channelIndex].faderLevel
        );
        */
    }

    updatePflState(channelIndex: number) {
        if (state.faders[0].fader[channelIndex].pflOn === true) {
            this.sendOutMessage(
                this.mixerProtocol.channelTypes[0].toMixer.PFL_ON[0]
                    .mixerMessage,
                channelIndex + 1,
                this.mixerProtocol.channelTypes[0].toMixer.PFL_ON[0].value
            )
        } else {
            this.sendOutMessage(
                this.mixerProtocol.channelTypes[0].toMixer.PFL_OFF[0]
                    .mixerMessage,
                channelIndex + 1,
                this.mixerProtocol.channelTypes[0].toMixer.PFL_OFF[0].value
            )
        }
    }

    updateMuteState(channelIndex: number, muteOn: boolean) {
        return true
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
        this.sendOutMessage(
            this.mixerProtocol.channelTypes[0].toMixer.CHANNEL_OUT_GAIN[0]
                .mixerMessage,
            channelIndex + 1,
            String(outputLevel)
        )
    }

    updateChannelName(channelIndex: number) {
        let channelName = state.faders[0].fader[channelIndex].label
        this.sendOutMessage(
            this.mixerProtocol.channelTypes[0].toMixer.CHANNEL_NAME[0]
                .mixerMessage,
            channelIndex + 1,
            channelName
        )
    }

    loadMixerPreset(presetName: string) {}

    injectCommand(command: string[]) {
        return true
    }
}
