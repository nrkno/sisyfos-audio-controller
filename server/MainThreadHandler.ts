import { store, state } from './reducers/store'
import {
    mixerProtocolList,
    mixerProtocolPresets,
    mixerGenericConnection,
    remoteConnections,
} from './mainClasses'
import { SnapshotHandler } from './utils/SnapshotHandler'
import { socketServer } from './expressHandler'

import { storeUpdateSettings } from './reducers/settingsActions'
import {
    loadSettings,
    saveSettings,
    getSnapShotList,
    getCcgSettingsList,
    setCcgDefault,
    getMixerPresetList,
    getCustomPages,
    saveCustomPages,
} from './utils/SettingsStorage'
import {
    SOCKET_TOGGLE_PGM,
    SOCKET_TOGGLE_VO,
    SOCKET_TOGGLE_PST,
    SOCKET_TOGGLE_PFL,
    SOCKET_TOGGLE_MUTE,
    SOCKET_SET_FADERLEVEL,
    SOCKET_SET_INPUT_GAIN,
    SOCKET_SAVE_SETTINGS,
    SOCKET_GET_SNAPSHOT_LIST,
    SOCKET_RETURN_SNAPSHOT_LIST,
    SOCKET_GET_CCG_LIST,
    SOCKET_RETURN_CCG_LIST,
    SOCKET_LOAD_SNAPSHOT,
    SOCKET_SAVE_SNAPSHOT,
    SOCKET_SET_ASSIGNED_FADER,
    SOCKET_SET_AUX_LEVEL,
    SOCKET_NEXT_MIX,
    SOCKET_CLEAR_PST,
    SOCKET_SET_FX,
    SOCKET_RESTART_SERVER,
    SOCKET_SET_FADER_MONITOR,
    SOCKET_TOGGLE_IGNORE,
    SOCKET_SET_FULL_STORE,
    SOCKET_SET_STORE_FADER,
    SOCKET_SET_STORE_CHANNEL,
    SOCKET_SET_INPUT_OPTION,
    SOCKET_SAVE_CCG_FILE,
    SOCKET_SHOW_IN_MINI_MONITOR,
    SOCKET_GET_MIXER_PRESET_LIST,
    SOCKET_RETURN_MIXER_PRESET_LIST,
    SOCKET_LOAD_MIXER_PRESET,
    SOCKET_SET_INPUT_SELECTOR,
    SOCKET_GET_PAGES_LIST,
    SOCKET_RETURN_PAGES_LIST,
    SOCKET_TOGGLE_AMIX,
    SOCKET_TOGGLE_ALL_MANUAL,
    SOCKET_SET_PAGES_LIST,
    SOCKET_SET_MIXER_ONLINE,
    SOCKET_SET_LABELS,
    SOCKET_GET_LABELS,
    SOCKET_FLUSH_LABELS,
} from './constants/SOCKET_IO_DISPATCHERS'
import {
    storeFaderLevel,
    storeInputGain,
    storeFaderFx,
    storeFaderMonitor,
    storeTogglePgm,
    storeToggleVo,
    storeTogglePst,
    storeTogglePfl,
    storeToggleMute,
    storeToggleIgnoreAutomation,
    storeShowInMiniMonitor,
    storeNextMix,
    storeClearPst,
    storeToggleAMix,
    storeAllManual,
    storeInputSelector,
    removeAllAssignedChannels,
    storeSetAssignedChannel,
    updateLabels,
    flushExtLabels,
} from './reducers/faderActions'
import {
    storeFlushChLabels,
    storeSetAssignedFader,
    storeSetAuxLevel,
} from './reducers/channelActions'
import { IChannel } from './reducers/channelsReducer'
import { logger } from './utils/logger'
import { ICustomPages } from './reducers/settingsReducer'
import { fxParamsList } from './constants/MixerProtocolInterface'
const path = require('path')

export class MainThreadHandlers {
    snapshotHandler: SnapshotHandler

    constructor() {
        logger.info('Setting up MainThreadHandlers', {})

        this.snapshotHandler = new SnapshotHandler()
        store.dispatch(storeUpdateSettings(loadSettings(state)))
    }

    updateFullClientStore() {
        this.recalcAssignedChannels()
        socketServer.emit(SOCKET_SET_FULL_STORE, state)
    }

    updatePartialStore(faderIndex: number) {
        this.recalcAssignedChannels()
        socketServer.emit(SOCKET_SET_STORE_FADER, {
            faderIndex: faderIndex,
            state: state.faders[0].fader[faderIndex],
        })
        state.channels[0].chMixerConnection.forEach((chMixerConnection) => {
            chMixerConnection.channel.forEach(
                (channel: IChannel, index: number) => {
                    if (channel.assignedFader === faderIndex) {
                        socketServer.emit(SOCKET_SET_STORE_CHANNEL, {
                            channelIndex: index,
                            state: channel,
                        })
                    }
                }
            )
        })
    }

    updateMixerOnline(mixerIndex: number, onLineState?: boolean) {
        socketServer.emit(SOCKET_SET_MIXER_ONLINE, {
            mixerIndex,
            mixerOnline:
                onLineState ?? state.settings[0].mixers[mixerIndex].mixerOnline,
        })
    }

    // Assigned channel to faders are right now based on Channel.assignedFader
    // Plan is to change it so fader.assignedChannel will be the master (a lot of change in code is needed)
    recalcAssignedChannels() {
        store.dispatch(removeAllAssignedChannels())
        state.channels[0].chMixerConnection.forEach((mixer, mixerIndex) => {
            mixer.channel.forEach((channel: IChannel, channelIndex) => {
                if (
                    channel.assignedFader >= 0 &&
                    state.faders[0].fader[channel.assignedFader]
                ) {
                    store.dispatch(
                        storeSetAssignedChannel(
                            channel.assignedFader,
                            mixerIndex,
                            channelIndex,
                            true
                        )
                    )
                }
            })
        })
    }

    socketServerHandlers(socket: any) {
        logger.info('SETTING UP SOCKET IO MAIN HANDLERS', {})

        // get-store get-settings and get-mixerprotocol will be replaces with
        // serverside Redux middleware emitter when moved to Socket IO:
        socket
            .on('get-store', () => {
                logger.info(
                    'Settings initial store on :' + String(socket.client.id),
                    {}
                )
                this.updateFullClientStore()
            })
            .on('get-settings', () => {
                socketServer.emit('set-settings', state.settings[0])
            })
            .on('get-mixerprotocol', () => {
                socketServer.emit('set-mixerprotocol', {
                    mixerProtocol:
                        mixerProtocolPresets[
                            state.settings[0].mixers[0].mixerProtocol
                        ],
                    mixerProtocolPresets: mixerProtocolPresets,
                    mixerProtocolList: mixerProtocolList,
                })
            })
            .on(SOCKET_GET_SNAPSHOT_LIST, () => {
                logger.info('Get snapshot list', {})
                socketServer.emit(
                    SOCKET_RETURN_SNAPSHOT_LIST,
                    getSnapShotList()
                )
            })
            .on(SOCKET_LOAD_SNAPSHOT, (payload: string) => {
                logger.info('Load Snapshot', {})
                this.snapshotHandler.loadSnapshotSettings(
                    path.resolve('storage', payload),
                    true
                )
                this.updateFullClientStore()
            })
            .on(SOCKET_SAVE_SNAPSHOT, (payload: string) => {
                logger.info('Save Snapshot', {})
                this.snapshotHandler.saveSnapshotSettings(
                    path.resolve('storage', payload)
                )

                socketServer.emit(
                    SOCKET_RETURN_SNAPSHOT_LIST,
                    getSnapShotList()
                )
            })
            .on(SOCKET_GET_CCG_LIST, () => {
                logger.info('Get CCG settings list', {})
                socketServer.emit(SOCKET_RETURN_CCG_LIST, getCcgSettingsList())
            })
            .on(SOCKET_GET_MIXER_PRESET_LIST, () => {
                logger.info('Get Preset list', {})
                socketServer.emit(
                    SOCKET_RETURN_MIXER_PRESET_LIST,
                    getMixerPresetList(
                        mixerGenericConnection.getPresetFileExtention()
                    )
                )
            })
            .on(SOCKET_SAVE_CCG_FILE, (payload: any) => {
                logger.info('Set default CCG File :' + String(payload), {})
                setCcgDefault(payload)
                this.updateFullClientStore()
            })
            .on(SOCKET_LOAD_MIXER_PRESET, (payload: any) => {
                logger.info('Set Mixer Preset :' + String(payload), {})
                mixerGenericConnection.loadMixerPreset(payload)
                this.updateFullClientStore()
            })
            .on(SOCKET_GET_PAGES_LIST, () => {
                logger.info('Get custom pages list', {})
                let customPages: ICustomPages[] = getCustomPages()
                if (
                    customPages.length === state.settings[0].numberOfCustomPages
                ) {
                    socketServer.emit(SOCKET_RETURN_PAGES_LIST, customPages)
                } else {
                    for (
                        let i = 0;
                        i < state.settings[0].numberOfCustomPages;
                        i++
                    ) {
                        if (!customPages[i]) {
                            customPages.push({
                                id: 'custom' + String(i),
                                label: 'Custom ' + String(i),
                                faders: [],
                            })
                        }
                    }
                    socketServer.emit(
                        SOCKET_RETURN_PAGES_LIST,
                        customPages.slice(
                            0,
                            state.settings[0].numberOfCustomPages
                        )
                    )
                }
            })
            .on(SOCKET_SET_PAGES_LIST, (payload: any) => {
                saveCustomPages(payload)
                logger.info('Save custom pages list: ' + String(payload), {})
            })
            .on(SOCKET_SAVE_SETTINGS, (payload: any) => {
                logger.info('Save settings :' + String(payload), {})
                saveSettings(payload)
                this.updateFullClientStore()
            })
            .on(SOCKET_RESTART_SERVER, () => {
                process.exit(0)
            })
            .on(SOCKET_SET_ASSIGNED_FADER, (payload: any) => {
                logger.verbose(
                    'Set assigned fader. Mixer:' +
                        String(payload.mixerIndex + 1) +
                        'Channel:' +
                        String(payload.channel) +
                        'Fader :' +
                        String(payload.faderAssign),
                    {}
                )
                store.dispatch(
                    storeSetAssignedFader(
                        payload.mixerIndex,
                        payload.channel,
                        payload.faderAssign
                    )
                )

                this.updateFullClientStore()
            })
            .on(SOCKET_SET_FADER_MONITOR, (payload: any) => {
                store.dispatch(
                    storeFaderMonitor(payload.faderIndex, payload.auxIndex)
                )
                this.updateFullClientStore()
            })
            .on(SOCKET_SHOW_IN_MINI_MONITOR, (payload: any) => {
                store.dispatch(
                    storeShowInMiniMonitor(
                        payload.faderIndex,
                        payload.showInMiniMonitor
                    )
                )
                this.updateFullClientStore()
            })
            .on(SOCKET_SET_INPUT_OPTION, (payload: any) => {
                mixerGenericConnection.updateChannelSettings(
                    payload.channel,
                    payload.prop,
                    payload.option
                )
            })
            .on(SOCKET_SET_AUX_LEVEL, (payload: any) => {
                logger.verbose(
                    'Set Auxlevel Channel:' + String(payload.channel),
                    {}
                )
                store.dispatch(
                    storeSetAuxLevel(
                        0,
                        payload.channel,
                        payload.auxIndex,
                        payload.level
                    )
                )
                mixerGenericConnection.updateAuxLevel(
                    payload.channel,
                    payload.auxIndex
                )
                this.updateFullClientStore()
                remoteConnections.updateRemoteAuxPanels()
            })
            .on(SOCKET_SET_FX, (payload: any) => {
                logger.verbose(
                    'Set ' +
                        fxParamsList[payload.fxParam] +
                        ': ' +
                        String(payload.channel),
                    {}
                )
                store.dispatch(
                    storeFaderFx(
                        payload.fxParam,
                        payload.channel,
                        payload.level
                    )
                )
                mixerGenericConnection.updateFx(
                    payload.fxParam,
                    payload.channel
                )
                this.updatePartialStore(payload.channel)
            })
            .on(SOCKET_NEXT_MIX, () => {
                store.dispatch(storeNextMix())
                mixerGenericConnection.updateOutLevels()
                this.updateFullClientStore()
            })
            .on(SOCKET_CLEAR_PST, () => {
                store.dispatch(storeClearPst())
                mixerGenericConnection.updateOutLevels()
                this.updateFullClientStore()
            })
            .on(SOCKET_TOGGLE_PGM, (faderIndex: any) => {
                mixerGenericConnection.checkForAutoResetThreshold(faderIndex)
                store.dispatch(storeTogglePgm(faderIndex))
                mixerGenericConnection.updateOutLevel(faderIndex)
                this.updatePartialStore(faderIndex)
            })
            .on(SOCKET_TOGGLE_VO, (faderIndex: any) => {
                mixerGenericConnection.checkForAutoResetThreshold(faderIndex)
                store.dispatch(storeToggleVo(faderIndex))
                mixerGenericConnection.updateOutLevel(faderIndex)
                this.updatePartialStore(faderIndex)
            })
            .on(SOCKET_TOGGLE_PST, (faderIndex: any) => {
                store.dispatch(storeTogglePst(faderIndex))
                mixerGenericConnection.updateNextAux(faderIndex)
                this.updatePartialStore(faderIndex)
            })
            .on(SOCKET_TOGGLE_PFL, (faderIndex: any) => {
                store.dispatch(storeTogglePfl(faderIndex))
                mixerGenericConnection.updatePflState(faderIndex)
                this.updatePartialStore(faderIndex)
            })
            .on(SOCKET_TOGGLE_MUTE, (faderIndex: any) => {
                store.dispatch(storeToggleMute(faderIndex))
                mixerGenericConnection.updateMuteState(faderIndex)
                this.updatePartialStore(faderIndex)
            })
            .on(SOCKET_TOGGLE_AMIX, (faderIndex: any) => {
                store.dispatch(storeToggleAMix(faderIndex))
                mixerGenericConnection.updateAMixState(faderIndex)
                this.updatePartialStore(faderIndex)
            })
            .on(SOCKET_TOGGLE_IGNORE, (faderIndex: any) => {
                store.dispatch(storeToggleIgnoreAutomation(faderIndex))
                this.updatePartialStore(faderIndex)
            })
            .on(SOCKET_SET_FADERLEVEL, (payload: any) => {
                logger.verbose(
                    'Set faderlevel  Channel : ' +
                        String(payload.faderIndex + 1) +
                        '  Level : ' +
                        String(payload.level)
                )
                store.dispatch(
                    storeFaderLevel(
                        payload.faderIndex,
                        parseFloat(payload.level)
                    )
                )
                mixerGenericConnection.updateOutLevel(payload.faderIndex, 0)
                mixerGenericConnection.updateNextAux(payload.faderIndex)
                this.updatePartialStore(payload.faderIndex)
            })
            .on(SOCKET_SET_INPUT_GAIN, (payload: any) => {
                logger.verbose(
                    'Set fInput Gain Channel : ' +
                        String(payload.faderIndex + 1) +
                        '  Level : ' +
                        String(payload.level)
                )
                store.dispatch(
                    storeInputGain(
                        payload.faderIndex,
                        parseFloat(payload.level)
                    )
                )
                mixerGenericConnection.updateInputGain(payload.faderIndex)
                this.updatePartialStore(payload.faderIndex)
            })
            .on(SOCKET_SET_INPUT_SELECTOR, (payload: any) => {
                logger.verbose(
                    'Set Input selector : ' +
                        String(payload.faderIndex + 1) +
                        '  Selected : ' +
                        String(payload.selected)
                )
                console.log(payload)
                store.dispatch(
                    storeInputSelector(
                        payload.faderIndex,
                        parseFloat(payload.selected)
                    )
                )
                mixerGenericConnection.updateInputSelector(payload.faderIndex)
                this.updatePartialStore(payload.faderIndex)
            })
            .on(SOCKET_TOGGLE_ALL_MANUAL, () => {
                logger.verbose('Toggle manual mode for all')
                store.dispatch(storeAllManual())
                this.updateFullClientStore()
            })
            .on(SOCKET_SET_LABELS, (payload: any) => {
                store.dispatch(updateLabels(payload.update))
            })
            .on(SOCKET_GET_LABELS, () => {
                socketServer.emit(
                    SOCKET_GET_LABELS,
                    state.faders[0].fader.map((f) => f.userLabel)
                )
            })
            .on(SOCKET_FLUSH_LABELS, () => {
                store.dispatch(flushExtLabels())
                store.dispatch(storeFlushChLabels())
            })
    }
}
