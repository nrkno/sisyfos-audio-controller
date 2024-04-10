// Node Modules:
import fs from 'fs'
import path from 'path'
import { homedir, platform as getPlatform } from 'os'
const platform = getPlatform()
const homeDir = homedir()

import { store } from '../reducers/store'
import { checkVersion } from './migrations'

// Redux:
import {  ChannelActionTypes } from '../../../shared/src/actions/channelActions'
import { FaderActionTypes } from '../../../shared/src/actions/faderActions'
import { logger } from './logger'
import { defaultFadersReducerState } from '../../../shared/src/reducers/fadersReducer'

import {
    Channels,
    NumberOfChannels,
    defaultChannelsReducerState,
} from '../../../shared/src/reducers/channelsReducer'

import {
    CustomPages,
    Settings,
} from '../../../shared/src/reducers/settingsReducer'
import { Faders } from '../../../shared/src/reducers/fadersReducer'

export interface ShotStorage {
    channelState: Channels
    faderState: Faders
}

// Linux place in "app"/storage to be backward compatible with Docker containers.
// Windows and Mac place the storagefolder in home -> sisyfos-storage
export const STORAGE_FOLDER = (platform === 'linux') ?
    path.resolve(process.cwd(), 'storage') :
    path.resolve(homeDir, 'sisyfos-storage')


export const loadSettings = (storeRedux: any): Settings => {
    let newSettings = storeRedux.settings[0]
    try {
        newSettings = JSON.parse(
            fs.readFileSync(
                path.resolve(STORAGE_FOLDER, 'settings.json'),
                'utf8'
            )
        )
        checkVersion(newSettings)
        return newSettings
    } catch (error) {
        logger
            .data(error)
            .error('Couldn´t read Settings.json file, creating af new')
        saveSettings(newSettings)
        return newSettings
    }
}

export const saveSettings = (settings: any) => {
    const settingsCopy = { ...settings }
    delete settingsCopy.customPages
    let json = JSON.stringify(settingsCopy)
    if (!fs.existsSync(STORAGE_FOLDER)) {
        fs.mkdirSync(STORAGE_FOLDER)
    }
    fs.writeFile(
        path.resolve(STORAGE_FOLDER, 'settings.json'),
        json,
        'utf8',
        (error: any) => {
            if (error) {
                logger.data(error).error('Error writing settings.json file: ')
            }
        }
    )
}

export const loadSnapshotState = (
    numberOfChannels: NumberOfChannels[],
    numberOfFaders: number,
    fileName: string,
    loadAll: boolean
) => {
    try {
        const stateFromFile: ShotStorage = JSON.parse(
            fs.readFileSync(fileName, 'utf8')
        )

        if (loadAll) {
            store.dispatch({
                type: ChannelActionTypes.SET_COMPLETE_CH_STATE,
                numberOfTypeChannels: numberOfChannels,
                allState: stateFromFile.channelState as Channels,
            })
            store.dispatch({
                type: FaderActionTypes.SET_COMPLETE_FADER_STATE,
                numberOfFaders: numberOfFaders,
                allState: stateFromFile.faderState as Faders,
            })
        }
    } catch (error) {
        if (fileName.includes('default.shot')) {
            store.dispatch({
                type: FaderActionTypes.SET_COMPLETE_FADER_STATE,
                numberOfFaders: numberOfFaders,
                allState: defaultFadersReducerState(numberOfFaders, numberOfChannels)[0],
            })
            store.dispatch({
                type: ChannelActionTypes.SET_COMPLETE_CH_STATE,
                numberOfTypeChannels: numberOfChannels,
                allState: defaultChannelsReducerState(numberOfChannels)[0],
            })
        
            logger.data(error).error('Initializing empty faders/channels')
        } else {
            logger.data(error).error('Error loading Snapshot')
        }
    }
}

export const saveSnapshotState = (stateSnapshot: any, fileName: string) => {
    let json = JSON.stringify(stateSnapshot)
    fs.writeFile(fileName, json, 'utf8', (error: any) => {
        if (error) {
            logger.data(error).error('Error saving Snapshot')
        } else {
            logger.trace('Snapshot ' + fileName + ' Saved to storage folder')
        }
    })
}

export const getSnapShotList = (): string[] => {
    const files = fs
        .readdirSync(path.resolve(STORAGE_FOLDER))
        .filter((file: string) => {
            if (file.includes('.shot') && file !== 'default.shot') {
                return true
            }
        })
    return files
}

export const getMixerPresetList = (fileExtension: string): string[] => {
    if (fileExtension === '') {
        return []
    }
    const files = fs
        .readdirSync(path.resolve(STORAGE_FOLDER))
        .filter((file: string) => {
            if (
                file.toUpperCase().includes('.' + fileExtension.toUpperCase())
            ) {
                return true
            }
        })
    return files
}

export const getCcgSettingsList = () => {
    const files = fs
        .readdirSync(path.resolve(STORAGE_FOLDER))
        .filter((file: string) => {
            if (file.includes('.ccg') && file !== 'default-casparcg.ccg') {
                return true
            }
        })
    return files
}

export const setCcgDefault = (fileName: string) => {
    let data: any
    try {
        data = fs.readFileSync(path.join(STORAGE_FOLDER, fileName))
    } catch (error) {
        logger.error('Couldn´t read ' + fileName + ' file')
        return
    }

    const defaultFile = path.join(STORAGE_FOLDER, 'default-casparcg.ccg')
    fs.writeFile(defaultFile, data, 'utf8', (error: any) => {
        if (error) {
            logger.data(error).error('Error setting default CasparCG setting')
        } else {
            logger.info('CasparCG' + fileName + ' Saved as default CasparCG')
        }
    })
}

export const getCustomPages = (): CustomPages[] => {
    try {
        return JSON.parse(
            fs.readFileSync(path.resolve(STORAGE_FOLDER, 'pages.json'), 'utf8')
        )
    } catch (error) {
        logger.error('Couldn´t read pages.json file')
        return []
    }
}

export const saveCustomPages = (
    stateCustomPages: any,
    fileName: string = 'pages.json'
) => {
    let json = JSON.stringify(stateCustomPages)
    fs.writeFile(
        path.join(STORAGE_FOLDER, fileName),
        json,
        'utf8',
        (error: any) => {
            if (error) {
                logger.data(error).error('Error saving pages file')
            } else {
                logger.info('Pages ' + fileName + ' Saved to storage folder')
            }
        }
    )
}
