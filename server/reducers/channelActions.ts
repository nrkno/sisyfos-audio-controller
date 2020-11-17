import { IChannel, IChannels, InumberOfChannels } from './channelsReducer'

export const SET_OUTPUT_LEVEL = 'SET_OUTPUT_LEVEL'
export const SET_AUX_LEVEL = 'SET_AUX_LEVEL'
export const SET_COMPLETE_CH_STATE = 'SET_COMPLETE_CH_STATE'
export const SET_SINGLE_CH_STATE = 'SET_SINGLE_CH_STATE'
export const FADE_ACTIVE = 'FADE_ACTIVE'
export const SET_ASSIGNED_FADER = 'SET_ASSIGNED_FADER'
export const SET_PRIVATE = 'SET_PRIVATE'

export const storeSetOutputLevel = (
    mixerIndex: number,
    channel: number,
    level: number
) => {
    return {
        type: SET_OUTPUT_LEVEL,
        mixerIndex: mixerIndex,
        channel: channel,
        level: level,
    }
}

export const storeSetAuxLevel = (
    mixerIndex: number,
    channel: number,
    auxIndex: number,
    level: number
) => {
    return {
        type: SET_AUX_LEVEL,
        mixerIndex: mixerIndex,
        channel: channel,
        auxIndex: auxIndex,
        level: level,
    }
}

export const storeSetCompleteChState = (
    allState: IChannels,
    numberOfChannels: InumberOfChannels[]
) => {
    return {
        type: SET_COMPLETE_CH_STATE,
        allState: allState,
        numberOfTypeChannels: numberOfChannels,
    }
}

export const storeSetSingleChState = (
    channelIndex: number,
    state: IChannel
) => {
    return {
        type: SET_SINGLE_CH_STATE,
        channelIndex: channelIndex,
        state: state,
    }
}

export const storeFadeActive = (
    mixerIndex: number,
    channelIndex: number,
    active: boolean
) => {
    return {
        type: FADE_ACTIVE,
        mixerIndex: mixerIndex,
        channel: channelIndex,
        active: active,
    }
}

export const storeSetAssignedFader = (
    mixerIndex: number,
    channel: number,
    faderNumber: number
) => {
    return {
        type: SET_ASSIGNED_FADER,
        mixerIndex: mixerIndex,
        channel: channel,
        faderNumber: faderNumber,
    }
}

export const storeSetChPrivate = (channel: number, tag: string, value: any) => {
    return {
        type: SET_PRIVATE,
        channel: channel,
        tag: tag,
        value: value,
    }
}
