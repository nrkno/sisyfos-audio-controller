# Sofie Sisyfos Audio Controller

This is the _Sisyfos Audio Controller_ application of the [**Sofie** TV Automation System](https://github.com/nrkno/Sofie-TV-automation/), an audiomixer control build for intelligent automation.

### Repository-specific Info for Developers
* [Developer Info](DEVELOPER.md)
* [Contribution Guidelines](CONTRIBUTING.md)

### General Sofie System Info
* [Documentation](https://nrkno.github.io/sofie-core/)
* [Releases](https://nrkno.github.io/sofie-core/releases)

---
## Usage
You use the fader for the level, and PGM on/off for fade-in/out.
TAKE NEXT crossfades from NEXT to PGM.
It's fast to see what faders are on air, and whether they are PGM level or Voiceover level.

### GUI with Open Channel Strip

<img src="Docs/pix/sisyfos.png">

### Functions per Channel

<img src="Docs/pix/SisyfosChanneldescription.jpg">

### Functions on the Channel Strip

(You open the Channel Strip by clicking on the channel label)
The features on the Channel Strip depends on the Mixer Protocol.

<img src="Docs/pix/SisyfosChannelStripdescription.jpg">

### Full Channel Strip

(You open the channel strip by clicking on the "Full Ch.Strip" in the normal channel strip).

The advanced channel strip has all the features the seleced mixer protocol supports. (Example: Midas M32.)

<img src="Docs/pix/AdvancedChannelStrip.png">

### MiniMonitorView for a Client

Run webpage with

```
localhost/?view=minimonitor
```

<img src="Docs/pix/minimonitorview.png">

### Microphone Tally View for a Client

Run webpage with

```
localhost/?view=mic-tally
```

<img src="Docs/pix/mic-tally-view.png" alt="Microphone Tally View" style="zoom: 150%;" />

### Routing of Faders to Channels

Routing of Faders to multiple channels or a single channel are possible. This way Sisyfos can control some or all channels on a mixer. And a single fader can be used for E.G. a 5.1 (on 6 mono faders)

### Load/Save Routing

Routing setups can be stored in STORAGE. So it's possible to have different Routings dependent of what setup the Audio mixer is using.

### Run as Docker (on Linux)

```
docker pull tv2media/sisyfos-audio-controller:develop
docker volume create sisyfos-vol
sudo docker run --mount source=sisyfos-vol,target=/opt/sisyfos-audio-controller/storage --network="host" --restart always tv2media/sisyfos-audio-controller:develop
```

### Run as Docker (on Windows)

```
docker pull tv2media/sisyfos-audio-controller:develop
docker volume create sisyfos-vol
docker run --mount source=sisyfos-vol,target=/opt/sisyfos-audio-controller/storage -p 1176:1176 -p 5255:5255 --restart always tv2media/sisyfos-audio-controller:develop
```

### Install Local Node Host

(Be aware that a server reload will quit server and you need an external source to restart)

```
git clone https://github.com/tv2media/sisyfos-audio-controller.git
cd sisyfos-audio-controller
yarn
yarn build
yarn start
```

### Log Levels

When running Sisyfos you can define the log level by setting the environment variable `LOG_LEVEL` to one of the following log levels:

-   error (only errors)
-   warn (errors and warning)
-   info (standard info regarding connectiviy and data from Automation protocol etc. including errors and warnings)
-   debug (info level plus: data send and received from Audiomixer)
-   trace (debug level plus: data send and received from Automation protocol)

### Open GUI in a Browser

```
localhost:1176 (or whatever ip you use for Sisyfos Nodejs/Docker)
```

#### Important — To Enable Settings

```
localhost:1176/?settings=1
```

To see the MiniMonitorView:

```
localhost:1176/?minimonitor=1
```

If you want to disable the VU meters:

```
localhost:1176/?vu=0
```

## Settings

### Show PFL Controls

As NEXT has been implemented, and PFL usually only work on on channel at a time, the PFL is only working correctly on 1:1 routed setups (And with the CasparCG protocol)

(Mixer presets are stored in MixerProtocolPresets.js)

### Possible Preset Names

-   CasparCG
    -   use storage/default-casparcg.ccg as template and place you own file in storage folder.
    -   base your casparcg.config by the casparcg.config file in the same folder
    -   remember to activate OSC in the casparcg.config file to it points to Sisyfos
-   Midas Master
    -   OSC protocol for Midas M32 and Behringer X32
    -   Port 10023
    -   Mixer preset loading (using .x32 files in storage folder)
    -   Protocol supports:
        -   Eq, Comp, Delay, Mix minus
-   Lawo Mc2
    -   Ember Protocol
-   reaper
    -   OSC protocol for control Reaper (reaper.fm)
-   Ardour Master
    -   OSC protocol for Ardour (www.ardour.org)
    -   Port 3819
    -   The volume change in Ardour is on it's channel faders.
    -   Todo:
        -   Meter calibration
-   SSL System T - Broadcast Mixer
    -   SSL Automation Protocol for System T
    -   Port 10001
    -   Set Protocol Latency to around 120ms
-   Behringer xr master
    -   OSC protocol for Behringer XR12,16,18
    -   Port 10024
    -   In this version the Behringer is slave of Producers-Audio-mixer, so faders on the behringer is turned down when channel is of.
-   DMXIS - Sisyfos control of DMX Lightcontroller
    -   Default Port is 8000
    -   Controls Fader On/Off with preset level from Sisyfos.
    -   Easy implementation of state based lightcontrol from Automation.
    -   the PROTOCOL DELAY setting should be raised to 50ms, as DMXIS is responding a little slowly.
-   midi
    -   Generic MIDI - still preminilary
    -   When using MIDI protocols, the PROTOCOL DELAY setting should be rised to at least 50ms
-   Yamaha QL1
    -   Ip - MIDI based Protocol
    -   Port 50000
    -   Stable implementation of 2-ways Fader and Mute
-   Studer Vista 1-5-9 (untested)
    -   mono, stereo, 51 channels fader level mute and Aux send from Sisyfos TO mixer
    -   No 2 way support for now
-   Studer OnAir 3000 (untested)
    -   channel 1 to 24 fader level from Sisyfos TO mixer
    -   No 2 way support for now

## Skaarhoj Panels

Skaarhoj in RAW panel mode is supported for rotary buttons including labels.

-   HWC#1-xx = fader level on Sisyfos
-   HWC#81-89 = enabled Monitor sends for Aux mix% on fader 1
-   HWC#91-99 = enabled Monitor sends for Aux mix% on fader 2
-   HWC#101-109 = enabled Monitor sends for Aux mix% on fader 3

The monitor sends are the same as those on the Channel Strip.

## Automation Support

It's possible to control the Producers-Audio-Mixer from an automationsystem, for it to act as middleware.

## Setting State

To set the state send these OSC commands from you Automation to ProducersAudioMixer Port: 5255:

#### Set Channel to PGM (Optional: Individual Fadetime)

(the integer defines: 0 - Off, 1 - Pgm On, 2 - Voice Over)
(if second is missing it will take default fade value)
/ch/1/mix/pgm - integer: { 0, 1 or 2 } - float { fadetime in ms }

#### Set Channel to PST

/ch/1/mix/pst - integer: { 0, 1 or 2 } (the integer defines: 0 - Off, 1 - Pgm On, 2 - Voice Over)

#### Mute Channel

/ch/1/mute - integer: { 0, 1 } (the integer defines: 0 - Mute off, 1 - Mute On)

#### Set Channel Fader Level

/ch/1/mix/faderlevel - float {between 0 and 1}

#### Set Channel Label

/ch/1/label - string {name of channel}

#### Inject Command

Pass a command directly from Automation to Audiomixer
/inject

#### Crossfade Between PGM and PST

/take

#### Set Snap 1-xx to PST

/snap/1

#### Fade All Channels to Black (mute)

/fadetoblack

#### Clear All PST Buttons

/clearpst

#### Hide or Show Channel Strips in GUI

/ch/{value1}/visible - integer { 0 or 1 }

## Get State

#### Get Full State of All Channels

/state/full - returns a json string with an array of channels: { pgmOn: boolean, pstOn: boolean, faderLevel: boolean }

#### Get State of Channel PGM

/state/ch/1/mix/pgm - returns pgm state integer { 0 or 1 }

#### Get State of Channel PST

/state/ch/1/mix/pst - returns pgm state integer { 0 or 1 }

#### Get State of Channel Fader Level

/state/ch/1/mix/faderlevel - float {between 0 and 1}

#### Get State of Channel Mute

/state/ch/1/mute - returns mute state integer { 0 or 1 }

#### Get State of Group PGM

/state/ch/1/mix/pgm - returns pgm state integer { 0 or 1 }

#### Get State of Group PST

/state/ch/1/mix/pst - returns pgm state integer { 0 or 1 }

#### Get State of Group Fader Level

/state/ch/1/mix/faderlevel - float {between 0 and 1}

## Check Connectivity

/ping/{value}
_In response to a ping, sisyfos will reply with /pong and the provided value OR 'offline' if Audiomixer is not connected_

## Localization

Localization can be found in: /client/i18n.ts

If we end up with a huge amount of translations we move the translations to seperate files, but for now we keep it simple.

---

_The NRK logo is a registered trademark of Norsk rikskringkasting AS. The license does not grant any right to use, in any way, any trademarks, service marks or logos of Norsk rikskringkasting AS._
