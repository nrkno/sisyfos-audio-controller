import { IMixerProtocol, emptyMixerMessage } from '../MixerProtocolInterface'

export const LawoRuby: IMixerProtocol = {
    protocol: 'LAWORUBY',
    label: 'Lawo Ruby',
    presetFileExtension: '',
    loadPresetCommand: [emptyMixerMessage()],
    FADE_DISPATCH_RESOLUTION: 15,
    leadingZeros: false, //some OSC protocols needs channels to be 01, 02 etc.
    pingCommand: [emptyMixerMessage()],
    pingResponseCommand: [emptyMixerMessage()],
    pingTime: 0, //Bypass ping when pingTime is zero
    initializeCommands: [emptyMixerMessage()],
    channelTypes: [
        {
            channelTypeName: 'CH',
            channelTypeColor: '#2f2f2f',
            fromMixer: {
                CHANNEL_INPUT_GAIN: [
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.Gain[dB]',
                        value: 0,
                        type: 'int',
                        min: -30,
                        max: 18,
                        zero: 0,
                    },
                ],
                CHANNEL_INPUT_SELECTOR: [
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.LR Mode',
                        value: 0,
                        type: 'int',
                        label: 'LR',
                    },
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.LR Mode',
                        value: 4,
                        type: 'int',
                        label: 'LL',
                    },
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.LR Mode',
                        value: 1,
                        type: 'int',
                        label: 'RR',
                    },
                ],
                CHANNEL_OUT_GAIN: [
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.Fader.Motor dB Value',
                        value: 0,
                        type: 'int',
                        min: -191,
                        max: 9,
                        zero: 0.75,
                    },
                ],
                CHANNEL_NAME: [
                    {
                        mixerMessage: '',
                        value: 0,
                        type: 'real',
                        min: -200,
                        max: 20,
                        zero: 0,
                    },
                ],
                PFL: [emptyMixerMessage()],
                CHANNEL_AMIX: [emptyMixerMessage()],
            },
            toMixer: {
                CHANNEL_INPUT_GAIN: [
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.Gain[dB]',
                        value: 0,
                        type: 'int',
                        min: -30,
                        max: 18,
                        zero: 0,
                    },
                ],
                CHANNEL_INPUT_SELECTOR: [
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.LR Mode',
                        value: 0,
                        type: 'int',
                        label: 'LR',
                    },
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.LR Mode',
                        value: 4,
                        type: 'int',
                        label: 'LL',
                    },
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.DSP.Input.LR Mode',
                        value: 1,
                        type: 'int',
                        label: 'RR',
                    },
                ],
                CHANNEL_OUT_GAIN: [
                    // {
                    //     mixerMessage:
                    //         'Ruby.Sources.{channel}.Fader.Motor Position',
                    //     value: 0,
                    //     type: 'int',
                    //     min: 0,
                    //     max: 255,
                    //     zero: 204,
                    // },
                    {
                        mixerMessage:
                            'Ruby.Sources.{channel}.Fader.Motor dB Value',
                        value: 0,
                        type: 'int',
                        min: -191,
                        max: 9,
                        zero: 0,
                    },
                ],
                CHANNEL_NAME: [
                    {
                        mixerMessage: '',
                        value: 0,
                        type: 'real',
                        min: -200,
                        max: 20,
                        zero: 0,
                    },
                ],
                PFL_ON: [emptyMixerMessage()],
                PFL_OFF: [emptyMixerMessage()],
                CHANNEL_AMIX: [
                    {
                        mixerMessage: 'Ruby.Sources.{channel}.DSP.AMix.On',
                    },
                ],
            },
        },
    ],
    fader: {
        min: 0,
        max: 255,
        zero: 204,
        step: 5,
    },
    meter: {
        min: 0,
        max: 1,
        zero: 0.75,
        test: 0.6,
    },
}
