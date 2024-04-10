import indexReducer from '../../shared/src/reducers/indexReducer'
import { Fader, Faders } from '../../shared/src/reducers/fadersReducer'
import {
    FaderActionTypes,
} from '../../shared/src/actions/faderActions'

import fs from 'fs'
const parsedSimpleStoreJSON = fs.readFileSync(
    '__tests__/__mocks__/parsedSimpleStore.json',
    'utf-8'
)
const parsedFullStoreJSON = fs.readFileSync(
    '__tests__/__mocks__/parsedFullStore.json',
    'utf-8'
)

describe('Test redux faderReducers actions', () => {
    /**
     * TEST ALL SET ACTIONS
     */
    it('should return the new fader level state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].faderLevel = 0.5
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_FADER_LEVEL,
                faderIndex: 0,
                level: 0.5,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new pgmOn state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].pgmOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_PGM,
                faderIndex: 0,
                pgmOn: true,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new voOn state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].voOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_VO,
                faderIndex: 0,
                voOn: true,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new PST state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].pstOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_PST,
                faderIndex: 0,
                pstOn: true,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new PFL state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].pflOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_PFL,
                faderIndex: 0,
                pflOn: true,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new MUTE state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].muteOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_MUTE,
                faderIndex: 0,
                muteOn: true,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new Channel label state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].label = 'NEW LABEL'
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_FADER_LABEL,
                faderIndex: 0,
                label: 'NEW LABEL',
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new PST VO state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].pstVoOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.SET_PST_VO,
                faderIndex: 0,
                pstVoOn: true,
            })
        ).toEqual(parsedInitialStore)
    })

    /**
     * TEST ALL TOGGLE ACTIONS
     */

    it('should return the new TOGGLE pgmOn state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].pgmOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.TOGGLE_PGM,
                faderIndex: 0,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new TOGGLE VoOn state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].voOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.TOGGLE_VO,
                faderIndex: 0,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new TOGGLE_PST state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].pstOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.TOGGLE_PST,
                faderIndex: 0,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new TOGGLE_PFL state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].pflOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.TOGGLE_PFL,
                faderIndex: 0,
            })
        ).toEqual(parsedInitialStore)
    })

    it('should return the new TOGGLE_MUTE state on faders', () => {
        let parsedInitialStore = JSON.parse(parsedSimpleStoreJSON)
        parsedInitialStore.faders[0].fader[0].muteOn = true
        expect(
            indexReducer(JSON.parse(parsedSimpleStoreJSON), {
                type: FaderActionTypes.TOGGLE_MUTE,
                faderIndex: 0,
            })
        ).toEqual(parsedInitialStore)
    })

    /**
     * TEST CLEAR_PST:
     */
    it('should SET PST ch 10-14 and return the new CLEAR_PST state on faders', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let newState = JSON.parse(parsedFullStoreJSON)

        for (let i = 10; i < 14; i++) {
            newState.faders[0].fader[i].pstOn = true
            expect(
                indexReducer(parsedFullStore, {
                    type: FaderActionTypes.SET_PST,
                    faderIndex: i,
                    pstOn: true,
                })
            ).toEqual(newState)
        }

        parsedFullStore = JSON.parse(parsedFullStoreJSON)
        expect(
            indexReducer(newState, { type: FaderActionTypes.CLEAR_PST })
        ).toEqual(parsedFullStore)
    })

    /**
     * TEST FADE_TO_BLACK:
     */
    it('should SET VO ch 10-14 and set PGM ch 6-8 and return the new FADE_TO_BLACK state on faders', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let newState = JSON.parse(parsedFullStoreJSON)

        for (let i = 10; i < 14; i++) {
            newState.faders[0].fader[i].voOn = true
            expect(
                indexReducer(parsedFullStore, {
                    type: FaderActionTypes.SET_VO,
                    faderIndex: i,
                    voOn: true,
                })
            ).toEqual(newState)
        }

        for (let i = 6; i < 8; i++) {
            newState.faders[0].fader[i].pgmOn = true
            expect(
                indexReducer(
                    parsedFullStore,
                    //storeSetPgm(i, true)
                    {
                        type: FaderActionTypes.SET_PGM,
                        faderIndex: i,
                        pgmOn: true,
                    }
                )
            ).toEqual(newState)
        }

        parsedFullStore = JSON.parse(parsedFullStoreJSON)
        expect(
            indexReducer(
                newState,
                //storeFadeToBlack()
                { type: FaderActionTypes.FADE_TO_BLACK }
            )
        ).toEqual(parsedFullStore)
    })

    /**
     * TEST NEXT_MIX:
     */
    it('should SET PST_VO ch 10-14 and set PST ch 6-8 and return the new NEXT_MIX state on faders', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let newState = JSON.parse(parsedFullStoreJSON)

        for (let i = 10; i < 14; i++) {
            newState.faders[0].fader[i].pstVoOn = true
            expect(
                indexReducer(parsedFullStore, {
                    type: FaderActionTypes.SET_PST_VO,
                    faderIndex: i,
                    pstVoOn: true,
                })
            ).toEqual(newState)
        }

        for (let i = 6; i < 8; i++) {
            newState.faders[0].fader[i].pstOn = true
            expect(
                indexReducer(parsedFullStore, {
                    type: FaderActionTypes.SET_PST,
                    faderIndex: i,
                    pstOn: true,
                })
            ).toEqual(newState)
        }

        // Generate Expected NEXT_MIX:
        parsedFullStore = JSON.parse(parsedFullStoreJSON)
        for (let i = 10; i < 14; i++) {
            parsedFullStore.faders[0].fader[i].voOn = true
        }
        for (let i = 6; i < 8; i++) {
            parsedFullStore.faders[0].fader[i].pgmOn = true
        }

        expect(
            indexReducer(
                newState,
                //storeNextMix()
                { type: FaderActionTypes.NEXT_MIX }
            )
        ).toEqual(parsedFullStore)
    })

    /**
     * TEST X_MIX:
     */
    it('should SET PST_VO ch 10-14 and set PST ch 6-8 and return the new X_MIX state on faders twice', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let newState = JSON.parse(parsedFullStoreJSON)

        for (let i = 10; i < 14; i++) {
            newState.faders[0].fader[i].pstVoOn = true
            expect(
                indexReducer(parsedFullStore, {
                    type: FaderActionTypes.SET_PST_VO,
                    faderIndex: i,
                    pstVoOn: true,
                })
            ).toEqual(newState)
        }

        for (let i = 6; i < 8; i++) {
            newState.faders[0].fader[i].pstOn = true
            expect(
                indexReducer(parsedFullStore, {
                    type: FaderActionTypes.SET_PST,
                    faderIndex: i,
                    pstOn: true,
                })
            ).toEqual(newState)
        }

        // Generate Expected NEXT_MIX:
        parsedFullStore = JSON.parse(parsedFullStoreJSON)
        for (let i = 10; i < 14; i++) {
            parsedFullStore.faders[0].fader[i].voOn = true
        }
        for (let i = 6; i < 8; i++) {
            parsedFullStore.faders[0].fader[i].pgmOn = true
        }

        // First X_MIX:
        expect(indexReducer(newState, 
            { type: FaderActionTypes.X_MIX }
            )).toEqual(parsedFullStore)

        // SETUP Expected for second X_MIX:
        let finalState = JSON.parse(parsedFullStoreJSON)
        for (let i = 10; i < 14; i++) {
            finalState.faders[0].fader[i].pstVoOn = true
        }
        for (let i = 6; i < 8; i++) {
            finalState.faders[0].fader[i].pstOn = true
        }

        // SECOND X_MIX:
        expect(indexReducer(newState, 
            //storeXmix()
            { type: FaderActionTypes.X_MIX }
            )).toEqual(finalState)
    })

    /**
     * TEST SHOW_CHANNEL:
     */
    it('should HIDE ch 10 and return the new SHOW_CHANNEL state on faders', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let newState = JSON.parse(parsedFullStoreJSON)

        newState.faders[0].fader[10].showChannel = false
        expect(
            indexReducer(parsedFullStore, 
                { type: FaderActionTypes.SHOW_CHANNEL, faderIndex: 10, showChannel: false }
                )
        ).toEqual(newState)
    })

    /**
     * TEST SET_COMPLETE_FADER_STATE:
     */
    it('should return the new SET_COMPLETE_FADER_STATE state on faders', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let newState = JSON.parse(parsedFullStoreJSON)
        let faders: Fader[] = []
        for (let i = 0; i < 24; i++) {
            faders.push(parsedFullStore.faders[0].fader[i])
        }
        let fullFaderState: Faders = { fader: faders, vuMeters: [] }

        expect(
            indexReducer(
                parsedFullStore,
                {
                    type: FaderActionTypes.SET_COMPLETE_FADER_STATE,
                    allState: fullFaderState,
                    numberOfFaders: 24,
                }
            )
        ).toEqual(newState)
    })
})
