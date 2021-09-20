import * as React from 'react'
import ClassNames from 'classnames'
import { connect } from 'react-redux'
import { Store } from 'redux'
import '../assets/css/NoUiSlider.css'

//assets:
import '../assets/css/MiniChannel.css'
import { IFader } from '../../server/reducers/fadersReducer'
import { IChannels } from '../../server/reducers/channelsReducer'
import { ISettings } from '../../server/reducers/settingsReducer'
import { storeShowChanStrip } from '../../server/reducers/settingsActions'
import { getFaderLabel } from '../utils/labels'

interface IChannelInjectProps {
    channels: IChannels
    fader: IFader
    settings: ISettings
    channelType: number
    channelTypeIndex: number
    label: string
}

interface IChannelProps {
    faderIndex: number
}

class MiniChannel extends React.Component<
    IChannelProps & IChannelInjectProps & Store
> {
    faderIndex: number

    constructor(props: any) {
        super(props)
        this.faderIndex = this.props.faderIndex
    }

    public shouldComponentUpdate(nextProps: IChannelInjectProps) {
        return (
            nextProps.fader.showChannel != this.props.fader.showChannel ||
            nextProps.label != this.props.label ||
            nextProps.settings.showChanStrip !=
                this.props.settings.showChanStrip
        )
    }

    handleShowChanStrip() {
        this.props.dispatch(storeShowChanStrip(this.faderIndex))
    }

    chanStripButton = () => {
        return (
            <button
                className={ClassNames('monitor-channel-strip-button', {
                    on:
                        this.props.settings.showChanStrip ===
                        this.props.channelTypeIndex,
                })}
                onClick={(event) => {
                    this.handleShowChanStrip()
                }}
            >
                {this.props.label}
            </button>
        )
    }

    render() {
        return this.props.fader.showChannel === false ? null : (
            <div className={ClassNames('monitor-channel-body', {})}>
                <React.Fragment>
                    {this.chanStripButton()}
                    <br />
                </React.Fragment>
            </div>
        )
    }
}

const mapStateToProps = (state: any, props: any): IChannelInjectProps => {
    return {
        channels: state.channels[0].chMixerConnection[0].channel,
        fader: state.faders[0].fader[props.faderIndex],
        settings: state.settings[0],
        channelType: 0 /* TODO: state.channels[0].channel[props.channelIndex].channelType, */,
        channelTypeIndex:
            props.faderIndex /* TODO: state.channels[0].chMixerConnection[0].channel[props.channelIndex].channelTypeIndex, */,
        label: getFaderLabel(props.faderIndex)
    }
}

export default connect<any, IChannelInjectProps, any>(mapStateToProps)(
    MiniChannel
) as any
