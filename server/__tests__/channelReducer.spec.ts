import indexReducer from '../reducers/indexReducer'
import {
    storeFadeActive,
    storeSetAssignedFader,
    storeSetCompleteChState,
    storeSetOutputLevel,
} from '../reducers/channelActions'
import { IChannel, InumberOfChannels } from '../reducers/channelsReducer'

let fs = require('fs')
const parsedFullStoreJSON = fs.readFileSync(
    'server/__tests__/__mocks__/parsedFullStore.json'
)

describe('Test redux channelReducer actions', () => {
    /**
     * TEST SET_OUTPUT_LEVEL:
     */

    it('should return the new output_level state on channels', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let nextState = JSON.parse(parsedFullStoreJSON)
        nextState.channels[0].chConnection[0].channel[10].outputLevel = 0.5
        expect(
            indexReducer(parsedFullStore, storeSetOutputLevel(0, 10, 0.5))
        ).toEqual(nextState)
    })

    /**
     * TEST SET_ASSIGNED_FADER:
     */

    it('should return the new assignedFader state on channels', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let nextState = JSON.parse(parsedFullStoreJSON)
        nextState.channels[0].chConnection[0].channel[10].assignedFader = 2
        expect(
            indexReducer(parsedFullStore, storeSetAssignedFader(0, 10, 2))
        ).toEqual(nextState)
    })

    /**
     * TEST FADE_ACTIVE:
     */

    it('should return the new FADE_ACTIVE state on channels', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let nextState = JSON.parse(parsedFullStoreJSON)
        nextState.channels[0].chConnection[0].channel[10].fadeActive = true
        expect(
            indexReducer(parsedFullStore, storeFadeActive(0, 10, true))
        ).toEqual(nextState)
    })

    /**
     * TEST SET_COMPLETE_CHANNEL_STATE:
     */

    it('should return the new COMPLETE_CHANNEL_STATE on channels', () => {
        let parsedFullStore = JSON.parse(parsedFullStoreJSON)
        let nextState = JSON.parse(parsedFullStoreJSON)
        let channels: IChannel[] = []
        let numberOfChannels: InumberOfChannels[] = [{ numberOfTypeInCh: [24] }]

        for (let i = 0; i < 24; i++) {
            channels.push({
                channelType: 0,
                channelTypeIndex: i,
                assignedFader: i,
                auxLevel: [],
                fadeActive: false,
                outputLevel: 0.75,
            })
            nextState.channels[0].chConnection[0].channel[i].outputLevel = 0.75
        }
        expect(
            indexReducer(
                parsedFullStore,
                storeSetCompleteChState(
                    { chConnection: [{ channel: channels }] },
                    numberOfChannels
                )
            )
        ).toEqual(nextState)
    })
})
