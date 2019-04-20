import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import Select from 'react-select';

//Utils:
import { saveSettings } from '../utils/SettingsStorage';
import '../assets/css/Settings.css';
import { MixerProtocolPresets, MixerProtocolList } from '../constants/MixerProtocolPresets';


class Channels extends PureComponent {
    constructor(props) {
        super(props);
        this.templateOptions = MixerProtocolList;
        this.mixerProtocolPresets = MixerProtocolPresets;
        this.state = {
            settings: this.props.store.settings[0]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleTemplateChange = this.handleTemplateChange.bind(this);
    }

    handleChange() {
        var settingsCopy= Object.assign({}, this.state.settings);
        settingsCopy[event.target.name] = event.target.value;
        this.setState(
            {settings: settingsCopy}
        );
    }


    handleTemplateChange(selectedOption ) {
        var settingsCopy= Object.assign({}, this.state.settings);
        settingsCopy.mixerProtocol = selectedOption.value;
        this.setState(
            {settings: settingsCopy}
        );
    }

    handleSave() {
        let settingsCopy= Object.assign({}, this.state.settings);
        settingsCopy.showSettings = false;

        saveSettings(settingsCopy);
        location.reload();
    }

    render() {
        return (
            <div className="settings-body">
                <div className="settings-header">
                    SETTINGS:
                </div>

                <Select
                    value={{label: this.mixerProtocolPresets[this.state.settings.mixerProtocol].label, value: this.state.settings.mixerProtocol}}
                    onChange={this.handleTemplateChange}
                    options={this.templateOptions}
                />
                <br/>
                <label className="settings-input-field">
                    LOCAL IP :
                    <input name="localOscIp" type="text" value={this.state.settings.localOscIp} onChange={this.handleChange} />
                </label>
                <br/>
                <label className="settings-input-field">
                    LOCAL PORT :
                    <input name="localOscPort" type="text" value={this.state.settings.localOscPort} onChange={this.handleChange} />
                </label>
                <br/>
                <label className="settings-input-field">
                    MIXER IP :
                    <input name="machineOscIp" type="text" value={this.state.settings.machineOscIp} onChange={this.handleChange} />
                </label>
                <br/>
                <label className="settings-input-field">
                    MIXER PORT :
                    <input name="machineOscPort" type="text" value={this.state.settings.machineOscPort} onChange={this.handleChange} />
                </label>
                <br/>
                <input
                className="settings-save-button"
                onClick=
                    {() => {
                        this.handleSave();
                    }}
                value="SAVE SETTINGS" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

export default connect(mapStateToProps)(Channels);
