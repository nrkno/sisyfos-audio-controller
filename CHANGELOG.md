# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.11.3](https://github.com/tv2/sisyfos-audio-controller/compare/v4.11.2...v4.11.3) (2021-09-17)

### Bug Fixes

-   emit labels over automation protocol ([46eff39](https://github.com/tv2/sisyfos-audio-controller/commit/46eff39965514505af9287017978ec1c7efa8500))

### [4.11.2](https://github.com/tv2/sisyfos-audio-controller/compare/v4.11.1...v4.11.2) (2021-09-03)

### Bug Fixes

-   docker image workflow ([d4f733c](https://github.com/tv2/sisyfos-audio-controller/commit/d4f733ce70347e5c0bc2d1199edc703031a9bb4b))

### [4.11.1](https://github.com/tv2/sisyfos-audio-controller/compare/v4.11.0...v4.11.1) (2021-08-30)

### Bug Fixes

-   Automation protocol should not crossfade on channels with ignoreAutomation active ([3fbe07e](https://github.com/tv2/sisyfos-audio-controller/commit/3fbe07ef9216c297e82eaa811e5d564d02cdb0d9))

## [4.11.0](https://github.com/tv2/sisyfos-audio-controller/compare/v4.10.0...v4.11.0) (2021-08-19)

### Features

-   vMix - basic receive data and connetiont established ([a2d99da](https://github.com/tv2/sisyfos-audio-controller/commit/a2d99da3f22948060c0ae5c00bdfc5a6912a94e0))
-   VMix - Faders, Mute, PFL, Gain & Matrix Select ([6551e22](https://github.com/tv2/sisyfos-audio-controller/commit/6551e2221e69aa3d88911d740bda340d6648ac53))
-   vmix - initial vmix setup (copy form osc) ([7784eb2](https://github.com/tv2/sisyfos-audio-controller/commit/7784eb25e19a78d4697c434d966db7eeb7b61e98))
-   vMix - initial working on 2 way connection ([bfbce5b](https://github.com/tv2/sisyfos-audio-controller/commit/bfbce5b9635a4dd50f06f6d9867a17cab45b00d8))
-   vmix add vmix protocol files ([e7354f1](https://github.com/tv2/sisyfos-audio-controller/commit/e7354f1507340805fcc4c4ba45526b7dcee13257))

### Bug Fixes

-   yarn had been added to dependencies ([db82974](https://github.com/tv2/sisyfos-audio-controller/commit/db8297451f7d036c379057c6ffe5ffaba8fb16a0))

## [4.10.0](https://github.com/tv2/sisyfos-audio-controller/compare/v4.9.1...v4.10.0) (2021-08-18)

### Features

-   label system with user, automation & channel labels ([81e9d5b](https://github.com/tv2/sisyfos-audio-controller/commit/81e9d5b6a83fa6c4ef63c128facad72c30c23ecc))
-   use labels in automation protocol ([04d454c](https://github.com/tv2/sisyfos-audio-controller/commit/04d454ce3893d46140aa37d977bb6876afc79fea))

### Bug Fixes

-   wrong test command ([0e4d69a](https://github.com/tv2/sisyfos-audio-controller/commit/0e4d69a2f0074780359162647c9c9f621c82dc73))

### [4.9.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.9.0...v4.9.1) (2021-07-26)

### Bug Fixes

-   Fade down was sending command in each loop in setInterval not respecting drivers dispatchResolution ([283cad0](https://github.com/olzzon/sisyfos-audio-controller/commit/283cad02850753ba13c6901725518ebbebaf2218))
-   If default.shot file is missing Sisyfos couln´t startup because trying to set assigned fader on store before faders in store was recreated. ([ece0623](https://github.com/olzzon/sisyfos-audio-controller/commit/ece06235849470b3e099facc153fcece9d16378e))
-   OSC buffer added to avoid overloading of Midas mixers ([0e4607b](https://github.com/olzzon/sisyfos-audio-controller/commit/0e4607ba9b033d5a6643709cf489262ff772d331))
-   OSC connection buffer interval lowered to 0.5ms ([9302cf3](https://github.com/olzzon/sisyfos-audio-controller/commit/9302cf38f523194be5e987b4319d931cbd993341))

## [4.9.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.8.3...v4.9.0) (2021-06-22)

### Features

-   remove logging til logfile.log - as this is not used ([59d6b03](https://github.com/olzzon/sisyfos-audio-controller/commit/59d6b031a5e76175d9c775ebb6a3a3a0ef409eca))

### [4.8.3](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.8.2...v4.8.3) (2021-06-22)

### Bug Fixes

-   remove winston-elasticsearch support. Caused crash and is no longer used. ([955d52a](https://github.com/olzzon/sisyfos-audio-controller/commit/955d52a4c66304f6e717d249e54110f0edd58852))

### [4.8.2](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.8.1...v4.8.2) (2021-05-19)

### Bug Fixes

-   resolution on hosted-git-info package to force fix vulnerability ([ef0c283](https://github.com/olzzon/sisyfos-audio-controller/commit/ef0c28333b6329c1ed10c5b46ea73c54c45e3cff))

### [4.8.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.8.0...v4.8.1) (2021-05-17)

### Bug Fixes

-   load of snapshot was not enabled. Will now load full snapshot. ToDo filter output non-config based values. ([18fbc22](https://github.com/olzzon/sisyfos-audio-controller/commit/18fbc22e1a8827fa932719f40be431a71b4306dc))

## [4.8.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.7.1...v4.8.0) (2021-03-25)

### Features

-   Display Sisyfos version in Settings menu ([d5ec220](https://github.com/olzzon/sisyfos-audio-controller/commit/d5ec220ace35557d437482ea49d6dea41ea00ff3))

### Bug Fixes

-   migration test also for minor version changes ([1ad86d6](https://github.com/olzzon/sisyfos-audio-controller/commit/1ad86d6075d170eba43e9bbe96ae9cac4cd3effd))

### [4.7.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.7.0...v4.7.1) (2021-03-25)

### Bug Fixes

-   migrations version handling as numeric values ([95b80d5](https://github.com/olzzon/sisyfos-audio-controller/commit/95b80d53c60ebff9cd13696d6e8ded7afadf1bda))

## [4.7.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.6.0...v4.7.0) (2021-03-25)

### Features

-   add fader store set and remove assigned channel from fader ([73749ab](https://github.com/olzzon/sisyfos-audio-controller/commit/73749ab5245f47be0b5f64738e6426a3e4cf0af5))
-   CSS - less space for Multiple meter ([dc1c4e4](https://github.com/olzzon/sisyfos-audio-controller/commit/dc1c4e4a0bd558ce10a4dc0ef81c6ece86220ec1))
-   implemented Midas support for multiple meters based on the assigned channels to a fader. ToDo full support for multiple mixers ([01a6e36](https://github.com/olzzon/sisyfos-audio-controller/commit/01a6e363cd7f5080cad310ae43032b266b0c4b5b))
-   inital migration.ts and version check. ([15e9b79](https://github.com/olzzon/sisyfos-audio-controller/commit/15e9b797a63c032f27af28a732cfb6d1da97df72))
-   Migration - handler updates from 4.xx to 4.6 and also .shot files from 3.xx ([60da92c](https://github.com/olzzon/sisyfos-audio-controller/commit/60da92c10bae6b49a250af2abe13925d5e387526))
-   prepare change to meter pr assigned channel ([fefa810](https://github.com/olzzon/sisyfos-audio-controller/commit/fefa810ed33f972dfd7564224db7e0007dac57fd))

### Bug Fixes

-   import of faderActions.ts had bad path reference ([39c9f05](https://github.com/olzzon/sisyfos-audio-controller/commit/39c9f05e91da5b246ff9bafc8f19deb6b76a777a))
-   migration should write settings in sync mode to prevent async loading of old settings ([00e004f](https://github.com/olzzon/sisyfos-audio-controller/commit/00e004ffccde364301685a59c743282e0db382db))
-   OSC mixerconnection - make initializeCommands optional for protocols without it ([d008250](https://github.com/olzzon/sisyfos-audio-controller/commit/d00825031e2993cde8ec400bade3637c7a688db4))

## [4.6.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.5.2...v4.6.0) (2021-03-19)

### Features

-   code cleanup, remove unused emptyMixerProtocol() function in OSC mixer protocols ([66e3d9c](https://github.com/olzzon/sisyfos-audio-controller/commit/66e3d9cbdca19911f227f567293020ac103d0cbf))
-   refactor - all snaps code from old implementation removed ([62d2ea2](https://github.com/olzzon/sisyfos-audio-controller/commit/62d2ea2a0761bdc3a0cd827e42b87b6600dfb125))
-   refactor - rename channel to faderIndex in all faderReducers and faderActions ([e738ba4](https://github.com/olzzon/sisyfos-audio-controller/commit/e738ba46777706599f14804653e92d7c5afb600c))
-   refactor - rename chConnection to chMixerConnection ([fc22e4e](https://github.com/olzzon/sisyfos-audio-controller/commit/fc22e4e5adb7c95a124bc88bbee0fbfc43d181da))
-   settings are changed so they are only available when /?settings=1 is added ([48f61a4](https://github.com/olzzon/sisyfos-audio-controller/commit/48f61a4a45f4fc8d1751b59e41ea477d717d040c))

### Bug Fixes

-   delay button had a + sign in from nomatter if it was positive og negative ([3aa404a](https://github.com/olzzon/sisyfos-audio-controller/commit/3aa404adf0928e79854c7d2061c832e4a8a76214))
-   OscMixerConnection check parameter as optional for support when not in the mixerprotocol ([609cb91](https://github.com/olzzon/sisyfos-audio-controller/commit/609cb9157a27ee8441bfe3c5df81ee7968d693b9))
-   types for ClassNames and .babelrc for jest tests ([f9e4d16](https://github.com/olzzon/sisyfos-audio-controller/commit/f9e4d1638bbabab8d8c7aa811c9783f4c7648bad))
-   update tests for support of faderActions ([731ce0f](https://github.com/olzzon/sisyfos-audio-controller/commit/731ce0f0c787e6b8db5eaa42e5daf57d3a54d59e))

### [4.5.2](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.5.1...v4.5.2) (2021-03-18)

### Bug Fixes

-   Fader resolution increased to 1/1000 so delay on Midas could be handled ([c8272dc](https://github.com/olzzon/sisyfos-audio-controller/commit/c8272dcf14aa7ff642a9561c8e3470f7e659113b))

### [4.5.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.5.0...v4.5.1) (2021-02-25)

### Bug Fixes

-   Full channelstrip - vertical faders in react-slider module, inherited "reverse" setting from horisontal faders. ([30505ac](https://github.com/olzzon/sisyfos-audio-controller/commit/30505ac4c5cbf023e28143e5124e4cb52f0d6bbf))

## [4.5.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.4.0...v4.5.0) (2021-02-24)

### Features

-   Midas/X32 - Input gain trim in full channel view ([6e3ccbc](https://github.com/olzzon/sisyfos-audio-controller/commit/6e3ccbc983390092a7977949adc2026e8dd50833))
-   More Generic Preset load files for midas/X32 ([bc292d4](https://github.com/olzzon/sisyfos-audio-controller/commit/bc292d436b5036e1265b1f8ed0355b2f8aac57f7))
-   show dB range on the fader ([d38b4ba](https://github.com/olzzon/sisyfos-audio-controller/commit/d38b4ba98e48cf7ddb8d95a484290f94b816fd96))
-   **ember:** load mixer snapshots ([14c4d71](https://github.com/olzzon/sisyfos-audio-controller/commit/14c4d715be1144be77a3c8c76823bb096e4baedf))

### Bug Fixes

-   casparcg online status ([b0c079d](https://github.com/olzzon/sisyfos-audio-controller/commit/b0c079d7558782d842062574b6ae5508b05e2867))
-   change PFL color to green ([40d8514](https://github.com/olzzon/sisyfos-audio-controller/commit/40d851463462612ad76038ec17ae88a295dc5a26))
-   default number of custompages changed from 16 to 4 ([353ac95](https://github.com/olzzon/sisyfos-audio-controller/commit/353ac95b86c280ea0862abe68ddcf05783e3c398))
-   hide unused Lawo Ruby channels ([c7356cb](https://github.com/olzzon/sisyfos-audio-controller/commit/c7356cb618ecfa4ed5a25958bb6db55eb42b3c0c))
-   mc2 input gain ([7a07fdc](https://github.com/olzzon/sisyfos-audio-controller/commit/7a07fdc6b805a693325566476fa060ddb4990016))
-   mc2 mixer protocol ([0602048](https://github.com/olzzon/sisyfos-audio-controller/commit/0602048b0b4237f288f82942bf0f0f62d736d78f))
-   Midas/Behringer X32 load first scene in mixer (index 0) ([ee31992](https://github.com/olzzon/sisyfos-audio-controller/commit/ee3199204a4d5dc5b6d5ed1caafa190001962214))
-   Midas/X32 - Q-param in Eq was reverted and non exponential ([41e3809](https://github.com/olzzon/sisyfos-audio-controller/commit/41e380985a0febd00e733b3647659b6684aa2299))
-   mixer status + mc2 reconnects ([80bc452](https://github.com/olzzon/sisyfos-audio-controller/commit/80bc45293f98f6c12171376e2aa06117cf8ee4fb))
-   OSC protocol - set mixer online when auto reconnecting ([18ac6c0](https://github.com/olzzon/sisyfos-audio-controller/commit/18ac6c034fad2af9bfb067dabc4b9331834beb9a))
-   rename "Gain Trim" to "Input" as gain trim is the name of the parameter ([804235b](https://github.com/olzzon/sisyfos-audio-controller/commit/804235bc41a55dce5716ae89725fc4c7d148bdb4))
-   show storage with settings disabled ([a7563a6](https://github.com/olzzon/sisyfos-audio-controller/commit/a7563a6583ecb1db2bbb648a1a831c075f14d8b0))
-   ui crash when an invalid channel number was used by automation ([66ee580](https://github.com/olzzon/sisyfos-audio-controller/commit/66ee5803a6cb8f750120fed42694417984a6d46b))

## [4.4.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.3.0...v4.4.0) (2020-11-14)

### Features

-   multi-channel vu meter ([5447042](https://github.com/olzzon/sisyfos-audio-controller/commit/54470423e27fba3ea1d70b59505b2aeda2907039))

### Bug Fixes

-   directly setting fader should not send any more commands ([f196cc1](https://github.com/olzzon/sisyfos-audio-controller/commit/f196cc19caddd585b7e259910f2f012c8c399099))
-   Midas/Behringer X32 Gain reduction metering, implemented in new metering structure ([de5c255](https://github.com/olzzon/sisyfos-audio-controller/commit/de5c255ba5a670aa60d57a13ce616f94655ec2dd))
-   Multiple Mixers intial state, if default.shot was empty, a crash could occour. ([ca94894](https://github.com/olzzon/sisyfos-audio-controller/commit/ca94894ee71d9afbb93afb91c09b965bff251a0f))
-   Multiple we clients - returning -1 when using indexOf() cause all clients reference to be deleted ([006b7ec](https://github.com/olzzon/sisyfos-audio-controller/commit/006b7ecdfc4b7cb342147afad5b6e5aff4ad5b0a))
-   put vu messages back on main socket ([d23d3ca](https://github.com/olzzon/sisyfos-audio-controller/commit/d23d3caf69a700a8341e60f974a351b107137a2b))
-   Reduction metering - only update active channelstrip ([948ab79](https://github.com/olzzon/sisyfos-audio-controller/commit/948ab798b9e8ed17de1f298f8e874c1219c0a68e))
-   remove ccg component from new ChannelStripFull ([a11de4f](https://github.com/olzzon/sisyfos-audio-controller/commit/a11de4f743651ab1002f3897f7096cba95fe113c))
-   subscribe to VU meters upon connection ([bf5fce7](https://github.com/olzzon/sisyfos-audio-controller/commit/bf5fce76d95c61a2578786f28d2288baadd115b7))
-   use getState on client side instead of servers redux store ([18d0562](https://github.com/olzzon/sisyfos-audio-controller/commit/18d0562a04ed812ed8844321842cb84706d85a14))
-   Use sendVuLevel for reduction in Behringer XR and plain OSC protocol ([6300181](https://github.com/olzzon/sisyfos-audio-controller/commit/6300181a0d886de5dee4881ce1fa0aa0afb00a36))
-   **casparcg:** better fader response ([50b3c30](https://github.com/olzzon/sisyfos-audio-controller/commit/50b3c30191409272f0db7ef0b2cba9a868d0d4e6))
-   **casparcg:** better support for multiple mixers ([9caa210](https://github.com/olzzon/sisyfos-audio-controller/commit/9caa210f4ad9201447aa1c230a965599c7045e35))
-   **casparcg:** calculate proper VU level ([ee89d7c](https://github.com/olzzon/sisyfos-audio-controller/commit/ee89d7c45e283826609493e64dfad0b101abdaca))
-   **casparcg:** use normal input selector rather than custom component ([f33a18f](https://github.com/olzzon/sisyfos-audio-controller/commit/f33a18fb5b212b1a5fb56820983fc41adcc76e4a))

## [4.3.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.2.0...v4.3.0) (2020-11-09)

### Features

-   full ch strip - digit on gain read out, adjusted freq indicators ([26e44b5](https://github.com/olzzon/sisyfos-audio-controller/commit/26e44b58959c5cc22c718d71042c5ce98a550742))
-   full ch strip - initial setup ([48c08de](https://github.com/olzzon/sisyfos-audio-controller/commit/48c08defc39962e8728c9a1054bc5ab11ad5bc18))
-   full ch strip - list all eq feature (preparation for graphic Eq GUI) ([0f68a0d](https://github.com/olzzon/sisyfos-audio-controller/commit/0f68a0da6297dcd677c6f1af983df7ea9a3f24ee))
-   full ch strip - OSCMixerProtocol a lot of code removed with support for fxParams ([486dfce](https://github.com/olzzon/sisyfos-audio-controller/commit/486dfce0a91168e5f50b7867973cb0e89febab82))
-   full ch strip - set draggrid to 20x20 for better performance. ([b243a71](https://github.com/olzzon/sisyfos-audio-controller/commit/b243a713a3cfb6b9c380717505505549729afaad))
-   full ch strip graphic eq - better colors ([abf4e10](https://github.com/olzzon/sisyfos-audio-controller/commit/abf4e1069c309e54a2a59caa3f6cd9d426527059))
-   full ch-strip - full comp parameters on X32 mixer ([4defbad](https://github.com/olzzon/sisyfos-audio-controller/commit/4defbad86dee5538aee0734cc0e999719ae396bb))
-   full ch-strip - gain freq values in Eq ([5e4ae42](https://github.com/olzzon/sisyfos-audio-controller/commit/5e4ae42ed2a5a146eb35d2f3f1e88583d3f1f04b))
-   full ch-strip - graphical eq drag gain+freq working ([d4efe28](https://github.com/olzzon/sisyfos-audio-controller/commit/d4efe2862d3cd2c6386c194303f3b9bce9adc8da))
-   full ch-strip - logarithmic Freq on graph eq, adding Q ([f4e63b0](https://github.com/olzzon/sisyfos-audio-controller/commit/f4e63b0f771c1e33fb2c1d85ccdc3b4e5405fc85))
-   full ch-strip - XY, freq labels zero gain etc ([5382c6f](https://github.com/olzzon/sisyfos-audio-controller/commit/5382c6f4f568c623b5b2fbb527e65b5a533a11fa))
-   full ch-strip add new files ([df1f538](https://github.com/olzzon/sisyfos-audio-controller/commit/df1f538803ced4b665a45ee4b73a7a0b27b9416a))
-   full ch-strip move eq to seperate function preparing EQ GUI ([b746112](https://github.com/olzzon/sisyfos-audio-controller/commit/b746112d30f347eece51f905dadb41a97f90f692))
-   Full channelstrip - only show eq,comp,delay if part of protocol ([104cbbc](https://github.com/olzzon/sisyfos-audio-controller/commit/104cbbce3c1f76644d06ec9cdea856a85daca0fb))
-   full chstrip - clean up code - delay buttons moved to array ([12937e4](https://github.com/olzzon/sisyfos-audio-controller/commit/12937e44c20b20c31034bc2ad06c0efa3b4483af))
-   full chstrip - Delay fader uses fxParam ([55d7de4](https://github.com/olzzon/sisyfos-audio-controller/commit/55d7de4b4bc3beb4862d46ae1d9cbf92d3ec0a3e))
-   full-ch-strip - move monitor sends to upper area of GUI ([6dea7fe](https://github.com/olzzon/sisyfos-audio-controller/commit/6dea7fefaa9735497665a4074fc41b12985f6236))
-   labels on parameters in chstrip ([592dc2c](https://github.com/olzzon/sisyfos-audio-controller/commit/592dc2c42bdf5913a4008e6adbcadf6286c9631b))

### Bug Fixes

-   checkFxCommands didn´t filter out non numbered ([d98f592](https://github.com/olzzon/sisyfos-audio-controller/commit/d98f59202516d3b801dc69eb6934df3e98a1e959))
-   Custom Pages "ALL" button didn´t work ([c2f500e](https://github.com/olzzon/sisyfos-audio-controller/commit/c2f500eb6bc8ab75719e39b59d0de3e0fb331fc0))
-   datastructure didn´t reference to key but to index. ([75c5944](https://github.com/olzzon/sisyfos-audio-controller/commit/75c5944f9071fbf04f4a11e87d4f717e1b8f27a9))
-   full ch strip - better placement of freq text on graph eq ([28a96ef](https://github.com/olzzon/sisyfos-audio-controller/commit/28a96efbbebe8efbcf9986da63d77cd9737ffd98))
-   full ch strip - crash when using mixer protocol without eq. ([2f9518c](https://github.com/olzzon/sisyfos-audio-controller/commit/2f9518c07bf7790a398de0dc6415aeddde7bb22c))
-   full ch strip - move log-lin conversion from graphic eq to freq readout ([de16b9b](https://github.com/olzzon/sisyfos-audio-controller/commit/de16b9b5e0e2c1c8cec7451ac8555fc1c78f755d))
-   full ch strip - typo: Q value always changed channel 0 ([c0f870d](https://github.com/olzzon/sisyfos-audio-controller/commit/c0f870def67f1828a7617adb356dabe8600936c5))
-   midas/behringer X32 initial fetch of all fx parameters ([d1a9cf0](https://github.com/olzzon/sisyfos-audio-controller/commit/d1a9cf001705bbc356991bc978cfee76717a1132))
-   min ratio in midas should be 1:1 ([c9abc07](https://github.com/olzzon/sisyfos-audio-controller/commit/c9abc0794700d7750a16971975a568558f1d25b0))
-   touchscreen event in graphical Eq ([54329f2](https://github.com/olzzon/sisyfos-audio-controller/commit/54329f293424cedc07c06ac10e14e4764227eeab))
-   Y axis in graphics Eq only draw minValue ([61300dc](https://github.com/olzzon/sisyfos-audio-controller/commit/61300dcff9eaae9ff0014a10ffa41c4ae66184cc))

## [4.2.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.1.0...v4.2.0) (2020-10-22)

### Features

-   custom page menu - implementing page selector ([f755ece](https://github.com/olzzon/sisyfos-audio-controller/commit/f755ece52756677233cff200eb82122d49c28c9e))
-   custom pages menu - add css file to git - move "PAGES SETUP" in Channels view ([944c633](https://github.com/olzzon/sisyfos-audio-controller/commit/944c6335282c72772b5be0167a35641cf1180b4f))
-   custom pages menu - CCS for GUI ([b68599c](https://github.com/olzzon/sisyfos-audio-controller/commit/b68599c7ee4a7303b91390c1a18167db9f8cc5f6))
-   custom pages menu - css align tick boxes ([3bf4d60](https://github.com/olzzon/sisyfos-audio-controller/commit/3bf4d600afcd0fc0199fe866d4765ee29ae0eca1))
-   custom pages menu - initialize label field correctly ([5d7bf9a](https://github.com/olzzon/sisyfos-audio-controller/commit/5d7bf9a95d86aba05df94902aae85cab45357c3a))
-   custom pages menu - move from global space (window.customPages) to redux settings[0].customPages for realtime rendering ([865a467](https://github.com/olzzon/sisyfos-audio-controller/commit/865a467193c851c4fc1f3dafff3e6d3561f224b1))
-   custom pages menu - realtime update of fader config in GUI ([4f4c542](https://github.com/olzzon/sisyfos-audio-controller/commit/4f4c5426e6519c3d342ec37cbf5e1e082b838a05))
-   custom pages menu - set number of custom pages in Settings menu ([2167faa](https://github.com/olzzon/sisyfos-audio-controller/commit/2167faa92c15ec9f081577943fd4e17255e557ae))
-   custom pages menu - working - ToDo: CSS ([329014a](https://github.com/olzzon/sisyfos-audio-controller/commit/329014a3fa1da472a4628ee49232f02f392a9ee5))
-   custom pages setup - change label support ([93b8451](https://github.com/olzzon/sisyfos-audio-controller/commit/93b84518cab9ab761dc7090835a51c288774c82e))
-   custom pages setup menu - bind and undbind to first custom page working ([648f880](https://github.com/olzzon/sisyfos-audio-controller/commit/648f88074867b4e09088ef911f120096c60a1ace))
-   pages setup menu - creating menu and store ([70f7374](https://github.com/olzzon/sisyfos-audio-controller/commit/70f7374fd528b2728378a7c348a72f7cbeefc96d))

### Bug Fixes

-   OSC mixer protocol receiving channels not assigned to a fader should be ignored ([994e42d](https://github.com/olzzon/sisyfos-audio-controller/commit/994e42d5f5c1d93370687ed55ebc6dc43a1dd3ea))
-   OSC mixerprotocol initial mixer state was resetting preset fader state ([aecfcb2](https://github.com/olzzon/sisyfos-audio-controller/commit/aecfcb2c76844e4eb0633962aeb7a526af886208))
-   set all fader state, arguments was in wrong order. ([125bd1f](https://github.com/olzzon/sisyfos-audio-controller/commit/125bd1f9f7e2bbfb6b0d294705834cb1236d0bf9))
-   storeSetPage() didn´t handle the different type of page selectors correctly ([5425603](https://github.com/olzzon/sisyfos-audio-controller/commit/542560304895c76a1309613d77e6c9d40c016e6e))

## [4.1.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.0.2...v4.1.0) (2020-10-14)

### Features

-   add button to toggle manual mode for all faders ([ee94d84](https://github.com/olzzon/sisyfos-audio-controller/commit/ee94d847b512c93a7b2bc3d0bedb8579a87ae5c0))
-   implemented Lawo MC2 support ([e78d2c4](https://github.com/olzzon/sisyfos-audio-controller/commit/e78d2c4cac2ec40de40824b930aaaec6e86b7f2e))

### Bug Fixes

-   **mc2:** remove firmware 5.6.0 support ([8568719](https://github.com/olzzon/sisyfos-audio-controller/commit/8568719c3d9708c732d6d5af8830327c6e79d8ac))
-   **mc2:** support mc2 firmware 5.6.0 ([fa80bde](https://github.com/olzzon/sisyfos-audio-controller/commit/fa80bde87eb0d61963a9234da74d2d712c200cf4))
-   dispatch manual fader movements immediately ([2552797](https://github.com/olzzon/sisyfos-audio-controller/commit/2552797dce35fc32b9a6f8e4b53e7c262c6b8198))

### [4.0.2](https://github.com/olzzon/sisyfos-audio-controller/compare/v4.0.1...v4.0.2) (2020-10-13)

### Bug Fixes

-   limit speed of VU updates on mixers with independent VU and VU reduction protocol ([cb59a70](https://github.com/olzzon/sisyfos-audio-controller/commit/cb59a706d3b37c31d4aea6efa977e6ebcca9cb89))
-   Midas - Behringer X32 metering update correct when musing ultiple mixers with Vumeters ([0b628f0](https://github.com/olzzon/sisyfos-audio-controller/commit/0b628f09290e3787638b4fb4ee87779c1bbfdbf2))
-   remove console.log in midas.ts metering ([f7f4c24](https://github.com/olzzon/sisyfos-audio-controller/commit/f7f4c248f452f5ff0aa0a1333dc76cc810f7903b))

### [4.0.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.6.1...v4.0.1) (2020-10-12)

### Features

-   adding support for multiple mixers in all product specific mixerConnections ([95209b5](https://github.com/olzzon/sisyfos-audio-controller/commit/95209b541d4d881d2358873571b3d7048063b0e0))
-   mixerconnection initialize multiple mixers ([b33ea95](https://github.com/olzzon/sisyfos-audio-controller/commit/b33ea950511e526ed7a97fb7baee918a58ad7331))
-   multiple faders - channel-fader routing ([6fdd8be](https://github.com/olzzon/sisyfos-audio-controller/commit/6fdd8beca00ad5465b71a1a4c96243e9a51a5445))
-   multiple mixers - Aux working for first mixer. ([37c0ab8](https://github.com/olzzon/sisyfos-audio-controller/commit/37c0ab8eb3fbff35f191ba4c83bd7e407343391d))
-   multiple mixers - behringer midas metering support ([0f6aff4](https://github.com/olzzon/sisyfos-audio-controller/commit/0f6aff403464d87f34b874757ecf6fb84aba6fc3))
-   multiple mixers - Channel Fader routing: clear all assignments ([d62f3ea](https://github.com/olzzon/sisyfos-audio-controller/commit/d62f3eaa2805394b64e61053f7388037bc79c5af))
-   multiple mixers - channel faders assign menu - label for each mixer ([f49a953](https://github.com/olzzon/sisyfos-audio-controller/commit/f49a953e1fbf1edab1538a353076a2162b47029f))
-   multiple mixers - clean up routing options ([32a4abb](https://github.com/olzzon/sisyfos-audio-controller/commit/32a4abba5c3766b73b84a169d61ef822513366a4))
-   multiple mixers - create channel structure and timing in front end ([c1871f0](https://github.com/olzzon/sisyfos-audio-controller/commit/c1871f0a19b40ed3a537c10c1251e91b320d5a85))
-   multiple mixers - move local Ip and port to "mixers" so multiple OSC protocols can be supported ([b071cca](https://github.com/olzzon/sisyfos-audio-controller/commit/b071cca4cd2c9579d2f57e2d49814e440aa73916))
-   multiple mixers - prepare channel-fader Routing ([5f55b95](https://github.com/olzzon/sisyfos-audio-controller/commit/5f55b95e44979673dc657bc379c537dafb186596))
-   multiple mixers - settings working ([a2657dc](https://github.com/olzzon/sisyfos-audio-controller/commit/a2657dcbe331f2031c279f8351d066a4eff9487e))
-   multiple mixers - update redux actions: outputLevel and fadeActive ([975f65b](https://github.com/olzzon/sisyfos-audio-controller/commit/975f65bf94638bc846102f2305109f78d7224f8e))
-   multiple mixers support loop through all mixers in generic connection ([f29b09f](https://github.com/olzzon/sisyfos-audio-controller/commit/f29b09ffd87ad46e3b07b5c2f07b2d48840658af))
-   multiple mixers, timer fade inout support ([f59036a](https://github.com/olzzon/sisyfos-audio-controller/commit/f59036af204f4d4a2441073d09dc46433248d458))
-   multiple-mixers implementing restore full channel store ([c2e524f](https://github.com/olzzon/sisyfos-audio-controller/commit/c2e524f1a4633f4179f13f7a1857117217523426))
-   preparing multiple mixer connections in channel store. ([c1ba41d](https://github.com/olzzon/sisyfos-audio-controller/commit/c1ba41d08ccacd6609bbae03d1011c812c18e2bf))
-   preparing support for multiple mixers in settings store ([1796992](https://github.com/olzzon/sisyfos-audio-controller/commit/1796992ac283a86daf3181cc8d4ac601ec478797))
-   settings.tsx preparing multiple audio mixers support ([d2076b2](https://github.com/olzzon/sisyfos-audio-controller/commit/d2076b2379b5d80670f0293d11aa2970a78e03de))
-   support multiple mixers in Fade in-out ([b67c06d](https://github.com/olzzon/sisyfos-audio-controller/commit/b67c06da7b1f91e01326183951de2d4748a8a3b8))

### Bug Fixes

-   crash when starting with a pre 4.xx settings.json file ([35b7732](https://github.com/olzzon/sisyfos-audio-controller/commit/35b7732980dcb5fbbdcc1049431d087855f3c14f))
-   deep clone to new mixer added in settings ([dc077be](https://github.com/olzzon/sisyfos-audio-controller/commit/dc077be58350870b622957672f1018993e292bee))
-   limit VU updatespeed to 100ms for performance issues on large mixer setups ([858acf1](https://github.com/olzzon/sisyfos-audio-controller/commit/858acf1e0f72f1c74581352d9648ca886d02374a))
-   metering - possibly undefined (wasn´t discovered, as the metering previously wasn´t visible if it was undefined) ([9ee5094](https://github.com/olzzon/sisyfos-audio-controller/commit/9ee5094b27440559812bd3fe755c83551e082f78))
-   mixer online forced rerendering. Mixer Online i still only status for first mixer. (ToDO: support all mixers in GUI) ([622cc2e](https://github.com/olzzon/sisyfos-audio-controller/commit/622cc2e16c4760896ef1a003c7c928a27a8e5e1e))
-   multiple mixers - assign channels to fader only assigned first mixer ([2086754](https://github.com/olzzon/sisyfos-audio-controller/commit/2086754bc1d60ce2460832b0e9af8118a9eae1e3))
-   multiple mixers - aux settings support for first mixer - ToDo: support multiple mixers ([921be2d](https://github.com/olzzon/sisyfos-audio-controller/commit/921be2d516255e7f51123ee115f451c7d93f5d8a))
-   multiple mixers - update mixer number of mixers - ch datastructure problem ([9b3642a](https://github.com/olzzon/sisyfos-audio-controller/commit/9b3642acbab86b04b46902e4f88c30d30c662864))
-   multiple mixers, mixerconnection reference to correct mixer instead of first one ([59dee5d](https://github.com/olzzon/sisyfos-audio-controller/commit/59dee5dbef36b7e2b64c78e3b63401e5db14e066))
-   multple mixers settings - port aux etc didn´t update correctly ([d87bc77](https://github.com/olzzon/sisyfos-audio-controller/commit/d87bc77dc123f417b1f4c6e66b3b8e499892c9bf))
-   OSC protocol - type in logger.info mixerport ([b95e3c8](https://github.com/olzzon/sisyfos-audio-controller/commit/b95e3c8fb3cfab18c6d00852877f4852d03a92d4))
-   re-render issue in miniChannels mixer ([a1fb85f](https://github.com/olzzon/sisyfos-audio-controller/commit/a1fb85f55298f38f9547ee8e20c1e3c22ce3ffdf))
-   typo - CHANNEL_ACTIONS constant was left over in SettingsStorage.ts ([91905a9](https://github.com/olzzon/sisyfos-audio-controller/commit/91905a97dcae750f20d2aa5464665a35b5888dd9))

## [4.0.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.6.1...v4.0.0) (2020-10-12)

### Features

-   adding support for multiple mixers in all product specific mixerConnections ([95209b5](https://github.com/olzzon/sisyfos-audio-controller/commit/95209b541d4d881d2358873571b3d7048063b0e0))
-   mixerconnection initialize multiple mixers ([b33ea95](https://github.com/olzzon/sisyfos-audio-controller/commit/b33ea950511e526ed7a97fb7baee918a58ad7331))
-   multiple faders - channel-fader routing ([6fdd8be](https://github.com/olzzon/sisyfos-audio-controller/commit/6fdd8beca00ad5465b71a1a4c96243e9a51a5445))
-   multiple mixers - Aux working for first mixer. ([37c0ab8](https://github.com/olzzon/sisyfos-audio-controller/commit/37c0ab8eb3fbff35f191ba4c83bd7e407343391d))
-   multiple mixers - behringer midas metering support ([0f6aff4](https://github.com/olzzon/sisyfos-audio-controller/commit/0f6aff403464d87f34b874757ecf6fb84aba6fc3))
-   multiple mixers - Channel Fader routing: clear all assignments ([d62f3ea](https://github.com/olzzon/sisyfos-audio-controller/commit/d62f3eaa2805394b64e61053f7388037bc79c5af))
-   multiple mixers - channel faders assign menu - label for each mixer ([f49a953](https://github.com/olzzon/sisyfos-audio-controller/commit/f49a953e1fbf1edab1538a353076a2162b47029f))
-   multiple mixers - clean up routing options ([32a4abb](https://github.com/olzzon/sisyfos-audio-controller/commit/32a4abba5c3766b73b84a169d61ef822513366a4))
-   multiple mixers - create channel structure and timing in front end ([c1871f0](https://github.com/olzzon/sisyfos-audio-controller/commit/c1871f0a19b40ed3a537c10c1251e91b320d5a85))
-   multiple mixers - move local Ip and port to "mixers" so multiple OSC protocols can be supported ([b071cca](https://github.com/olzzon/sisyfos-audio-controller/commit/b071cca4cd2c9579d2f57e2d49814e440aa73916))
-   multiple mixers - prepare channel-fader Routing ([5f55b95](https://github.com/olzzon/sisyfos-audio-controller/commit/5f55b95e44979673dc657bc379c537dafb186596))
-   multiple mixers - settings working ([a2657dc](https://github.com/olzzon/sisyfos-audio-controller/commit/a2657dcbe331f2031c279f8351d066a4eff9487e))
-   multiple mixers - update redux actions: outputLevel and fadeActive ([975f65b](https://github.com/olzzon/sisyfos-audio-controller/commit/975f65bf94638bc846102f2305109f78d7224f8e))
-   multiple mixers support loop through all mixers in generic connection ([f29b09f](https://github.com/olzzon/sisyfos-audio-controller/commit/f29b09ffd87ad46e3b07b5c2f07b2d48840658af))
-   multiple mixers, timer fade inout support ([f59036a](https://github.com/olzzon/sisyfos-audio-controller/commit/f59036af204f4d4a2441073d09dc46433248d458))
-   multiple-mixers implementing restore full channel store ([c2e524f](https://github.com/olzzon/sisyfos-audio-controller/commit/c2e524f1a4633f4179f13f7a1857117217523426))
-   preparing multiple mixer connections in channel store. ([c1ba41d](https://github.com/olzzon/sisyfos-audio-controller/commit/c1ba41d08ccacd6609bbae03d1011c812c18e2bf))
-   preparing support for multiple mixers in settings store ([1796992](https://github.com/olzzon/sisyfos-audio-controller/commit/1796992ac283a86daf3181cc8d4ac601ec478797))
-   settings.tsx preparing multiple audio mixers support ([d2076b2](https://github.com/olzzon/sisyfos-audio-controller/commit/d2076b2379b5d80670f0293d11aa2970a78e03de))
-   support multiple mixers in Fade in-out ([b67c06d](https://github.com/olzzon/sisyfos-audio-controller/commit/b67c06da7b1f91e01326183951de2d4748a8a3b8))

### Bug Fixes

-   crash when starting with a pre 4.xx settings.json file ([35b7732](https://github.com/olzzon/sisyfos-audio-controller/commit/35b7732980dcb5fbbdcc1049431d087855f3c14f))
-   deep clone to new mixer added in settings ([dc077be](https://github.com/olzzon/sisyfos-audio-controller/commit/dc077be58350870b622957672f1018993e292bee))
-   limit VU updatespeed to 100ms for performance issues on large mixer setups ([858acf1](https://github.com/olzzon/sisyfos-audio-controller/commit/858acf1e0f72f1c74581352d9648ca886d02374a))
-   metering - possibly undefined (wasn´t discovered, as the metering previously wasn´t visible if it was undefined) ([9ee5094](https://github.com/olzzon/sisyfos-audio-controller/commit/9ee5094b27440559812bd3fe755c83551e082f78))
-   mixer online forced rerendering. Mixer Online i still only status for first mixer. (ToDO: support all mixers in GUI) ([622cc2e](https://github.com/olzzon/sisyfos-audio-controller/commit/622cc2e16c4760896ef1a003c7c928a27a8e5e1e))
-   multiple mixers - assign channels to fader only assigned first mixer ([2086754](https://github.com/olzzon/sisyfos-audio-controller/commit/2086754bc1d60ce2460832b0e9af8118a9eae1e3))
-   multiple mixers - aux settings support for first mixer - ToDo: support multiple mixers ([921be2d](https://github.com/olzzon/sisyfos-audio-controller/commit/921be2d516255e7f51123ee115f451c7d93f5d8a))
-   multiple mixers - update mixer number of mixers - ch datastructure problem ([9b3642a](https://github.com/olzzon/sisyfos-audio-controller/commit/9b3642acbab86b04b46902e4f88c30d30c662864))
-   multiple mixers, mixerconnection reference to correct mixer instead of first one ([59dee5d](https://github.com/olzzon/sisyfos-audio-controller/commit/59dee5dbef36b7e2b64c78e3b63401e5db14e066))
-   multple mixers settings - port aux etc didn´t update correctly ([d87bc77](https://github.com/olzzon/sisyfos-audio-controller/commit/d87bc77dc123f417b1f4c6e66b3b8e499892c9bf))
-   OSC protocol - type in logger.info mixerport ([b95e3c8](https://github.com/olzzon/sisyfos-audio-controller/commit/b95e3c8fb3cfab18c6d00852877f4852d03a92d4))
-   re-render issue in miniChannels mixer ([a1fb85f](https://github.com/olzzon/sisyfos-audio-controller/commit/a1fb85f55298f38f9547ee8e20c1e3c22ce3ffdf))
-   typo - CHANNEL_ACTIONS constant was left over in SettingsStorage.ts ([91905a9](https://github.com/olzzon/sisyfos-audio-controller/commit/91905a97dcae750f20d2aa5464665a35b5888dd9))

### [3.6.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.6.0...v3.6.1) (2020-08-13)

### Bug Fixes

-   OSC (Behringer - Midas) protocol use internal 0-1 level when sending level to mix parameters ([4998ae1](https://github.com/olzzon/sisyfos-audio-controller/commit/4998ae1101897a321ab325d640f7662b6eed8ff0))

## [3.6.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.5.0...v3.6.0) (2020-08-12)

### Features

-   add CHANNEL_INPUT_GAIN in mixer protocols ([729dcb5](https://github.com/olzzon/sisyfos-audio-controller/commit/729dcb5428a58fd5ece790d8fa221c39cdab2160))
-   Behringer XR protocol - remove unused variables. ([3981afc](https://github.com/olzzon/sisyfos-audio-controller/commit/3981afc21b8a751953719cbde576abfd7cd68976))
-   Chan Strip show/hide only Comp-Delay-Eq parts that are in selected mixerprotocol ([167318e](https://github.com/olzzon/sisyfos-audio-controller/commit/167318ec04680669bc97ff97b94ff8fc36aa3c65))
-   channel strip follows PFL ([3f3b867](https://github.com/olzzon/sisyfos-audio-controller/commit/3f3b8679fd14a14e4b25397f3b0cb05dd28d8d80))
-   disabled faders (from protocol) ([e02410b](https://github.com/olzzon/sisyfos-audio-controller/commit/e02410b1e190bbbbbd51732ec69d68acc5dd1d86))
-   feedback for input sel, gain and pages ([da57f6a](https://github.com/olzzon/sisyfos-audio-controller/commit/da57f6ac1b2ff27eda47cae6d6c73773139b3f47))
-   flexible UI layout, AutoMix, Capabilities (and more) ([c210c0e](https://github.com/olzzon/sisyfos-audio-controller/commit/c210c0e80cc5214f057f3657b0a185277ccd80a3))
-   input gain and selector - input gain implemented - selector GUI prepared ([1e8b550](https://github.com/olzzon/sisyfos-audio-controller/commit/1e8b55083b7366737215f6bb6de78b49e7afb0b1))
-   input selector - added CHANNEL_INPUT_SELECTOR in mixer protocol ([04e6c61](https://github.com/olzzon/sisyfos-audio-controller/commit/04e6c61505bf711c4306df835c8f6bf333fe8e60))
-   pages ([8c5b212](https://github.com/olzzon/sisyfos-audio-controller/commit/8c5b2129527ccccc030ab973ca21634fa4c326cc))
-   **Lawo Ruby:** channel to source mappings ([0fde375](https://github.com/olzzon/sisyfos-audio-controller/commit/0fde375e9737af2fd258eb15246f8a7264fe3f84))
-   input selector - implemented ([419c1be](https://github.com/olzzon/sisyfos-audio-controller/commit/419c1becd1a95e797d779b2862e1e0eff37cb0c7))
-   Inputselector buttons and Gain is only visible when added to mixerprotocol. ([7d69ef7](https://github.com/olzzon/sisyfos-audio-controller/commit/7d69ef76e465904e053b476bc47866729a6ca95f))
-   lawo ruby gain + input select ([d5b552c](https://github.com/olzzon/sisyfos-audio-controller/commit/d5b552c277a64ac2921e6a27fefa59526e385ddb))
-   Midas/Behringer X32 - mixer protocol cleanup - removed unused variables ([71509ac](https://github.com/olzzon/sisyfos-audio-controller/commit/71509ac8d962a5104857ce3495ee992a65cb05fe))

### Bug Fixes

-   align Channels selector and Delay buttons ([252face](https://github.com/olzzon/sisyfos-audio-controller/commit/252face617b584be1087900b271beb3416a29b74))
-   correct mutation type ([0de941d](https://github.com/olzzon/sisyfos-audio-controller/commit/0de941d4b043ce875e561687cee2b75544091584))
-   crash when .presetFileExtension was not present in mixerprotocol ([616c954](https://github.com/olzzon/sisyfos-audio-controller/commit/616c954fca511ca06da9fe33c45645739cb0ae43))
-   css - "Load mixer preset" was not centered ([0dac1e7](https://github.com/olzzon/sisyfos-audio-controller/commit/0dac1e77b7443491eca80c0a4d514977748d3c6a))
-   initial fixes for working Lawo Ruby + upgrade emberplus-conn ([8c556a5](https://github.com/olzzon/sisyfos-audio-controller/commit/8c556a547a963d8efdeba97f25cb93701836106c))
-   lawo ruby subscriptions ([4b3f4a6](https://github.com/olzzon/sisyfos-audio-controller/commit/4b3f4a65dcc04e5318006a97d936add0e82db505))
-   SSL - don´t update received fader level if value is identical to current value (when assigning more than 1 channel pr fader in Sisyfos) ([6ba6078](https://github.com/olzzon/sisyfos-audio-controller/commit/6ba6078366be56da66841a9554084d81b15291b9))
-   **Lawo Ruby:** misc fixes ([b1744da](https://github.com/olzzon/sisyfos-audio-controller/commit/b1744daa057a7bddb22f1bd6ea7aad4c4583f23a))
-   wrong constant for store dispath (used SOCKET instead of reducer) ([0cdb455](https://github.com/olzzon/sisyfos-audio-controller/commit/0cdb45556079c0b86a4cf6c366681b370b20f74a))
-   X32 - mixer was offline when receiving data for a channel with a higher assigned fader than total amount of faders ([0a38821](https://github.com/olzzon/sisyfos-audio-controller/commit/0a388216e2b19b6619591216444ce0d60428a7f1))

## [3.5.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.4.0...v3.5.0) (2020-06-08)

### Features

-   List mixer presets in storage prepared ([67b6435](https://github.com/olzzon/sisyfos-audio-controller/commit/67b643522ab7cec9635b7e2566ca7123115b1239))
-   load mixer preset - Load scene from X32 ([7f1eb77](https://github.com/olzzon/sisyfos-audio-controller/commit/7f1eb775bcfe00e554e1b5417ece977fd6bb26d5))
-   load mixer preset - prepared protocols with loadPresetCommand.mixerMessage ([4ffbf3c](https://github.com/olzzon/sisyfos-audio-controller/commit/4ffbf3cb7e53bbf22fc45018def9606fc2027fa1))
-   load mixer preset - update examples ([53581c3](https://github.com/olzzon/sisyfos-audio-controller/commit/53581c3f3559ec30a53191fa2996648db5a73e90))
-   load mixer preset - x32 example files added ([260a71d](https://github.com/olzzon/sisyfos-audio-controller/commit/260a71d7085b1f7bc6e75d8e49e1988c193ba821))
-   Localization - simple localization for Sisyfos ([85a3442](https://github.com/olzzon/sisyfos-audio-controller/commit/85a344214e85dac059e7b2571ec2d66e587afc6f))
-   localization add nb and sv ([7431031](https://github.com/olzzon/sisyfos-audio-controller/commit/74310318942d436bbb0aa508ed7bba741951fdb4))
-   mixer-preset-loading working Midas/Behringer X32 preset loading ([a8fe1a9](https://github.com/olzzon/sisyfos-audio-controller/commit/a8fe1a97fe842716adc403bcffd9a9c0f92dbdc0))

### Bug Fixes

-   compressor area in chan strip was scrollable in css. ([55bc40a](https://github.com/olzzon/sisyfos-audio-controller/commit/55bc40af3f8e597217a035f64c923cdad15cbd42))
-   missing declaration in protocol ([74524c4](https://github.com/olzzon/sisyfos-audio-controller/commit/74524c4b241eebd9385d7f5be3bb3dc5332f1fec))
-   mixer-preset compare both sides as uppercase ([0617fec](https://github.com/olzzon/sisyfos-audio-controller/commit/0617fec84567bca0e7d71e72dfcd89fb568e7af3))
-   mixer-preset-list check files as uppercase ([ac97d70](https://github.com/olzzon/sisyfos-audio-controller/commit/ac97d70647b54bc6eeac06af83ee9a3fe2126f65))

## [3.4.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.3.0...v3.4.0) (2020-06-01)

### Features

-   **casparcg:** adds CasparCG monitoring support for NEXT/PST ([d072336](https://github.com/olzzon/sisyfos-audio-controller/commit/d0723367275b31cc54599068b4eb70e00a6e0a75))

### Bug Fixes

-   metering should come from the first assigned channel (until multi channel metering is available) ([2c01de9](https://github.com/olzzon/sisyfos-audio-controller/commit/2c01de9a7fbd70cbd6bc57a0d9d170b1efccfe92))
-   Midas - Behringer X32 - emit all meter values in one blob ([e5fd8a9](https://github.com/olzzon/sisyfos-audio-controller/commit/e5fd8a97b5e0b623f1c8bf7ae2a1465fe7069538))
-   midas - ensure a number when creating new array ([f63003a](https://github.com/olzzon/sisyfos-audio-controller/commit/f63003a78b062a0d437db44ad8d520b5fae91d5d))
-   midas - wrong logic in checking for unavailble faders ([eb3a178](https://github.com/olzzon/sisyfos-audio-controller/commit/eb3a17850192b44c80133490b2ea755fbb90cb1a))
-   midas - x32 metering was pr channel not pr assignedFader ([47b54d2](https://github.com/olzzon/sisyfos-audio-controller/commit/47b54d20ada009d2094f543a6f6b1e9715bffe6d))
-   midas optimize - do not assigned meters for more than number of faders (no matter of assignment) ([711d240](https://github.com/olzzon/sisyfos-audio-controller/commit/711d24070bce22b2c3436ed1c679420545279650))
-   Reduction meter showed reverse value (max reduction when none, and min when max) ([a1aa3eb](https://github.com/olzzon/sisyfos-audio-controller/commit/a1aa3ebbee84759afaac0e1a7553f5f7debf59b7))
-   rename Gain red. to "reducition" for fint size/space on Windows machine. ([2601cf7](https://github.com/olzzon/sisyfos-audio-controller/commit/2601cf75a66fdfa3d74f0a26766aa5d31cf6f4a8))
-   smaller top margin on Reduction meter ([ebf3cc3](https://github.com/olzzon/sisyfos-audio-controller/commit/ebf3cc37a89a473b6b729d849c5040d190361ca1))

## [3.3.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.2.0...v3.3.0) (2020-05-11)

### Features

-   Studer 2-way control - mono - stereo - 51 fader level working ([d2a38b2](https://github.com/olzzon/sisyfos-audio-controller/commit/d2a38b27fec46596a77bf24f297bf1b1f7dfcf48))
-   Studer fader level return - level values alligned to/from Sisyfos ([68781b1](https://github.com/olzzon/sisyfos-audio-controller/commit/68781b1ef9a1346bc6fe2d6d931b85dd42daa52a))
-   Vista - 2 way protocol - initial fader level support for mono channels ([d856688](https://github.com/olzzon/sisyfos-audio-controller/commit/d85668819bfbcf48101b2dcd64ec5121ae4076b2))
-   Vista - 2way MUTE support ([f01291b](https://github.com/olzzon/sisyfos-audio-controller/commit/f01291b451fcce6a7eac8f13de44918ddda89180))
-   Vista - Aux level 2-way ([ab835d6](https://github.com/olzzon/sisyfos-audio-controller/commit/ab835d6d68a39bdcb57953bf735ea627f6c54443))
-   vista - get initial mute state ([3f5306e](https://github.com/olzzon/sisyfos-audio-controller/commit/3f5306e74462fc37899acb26ed53b2ceb9524e92))
-   Vista - receive mixers fader level for mono channels ([f73a981](https://github.com/olzzon/sisyfos-audio-controller/commit/f73a9818429516bf70077eec27a7c565ce4723d5))
-   vista - subscribe to Aux sends when connecting ([d62dd6d](https://github.com/olzzon/sisyfos-audio-controller/commit/d62dd6da118c5c9cfb2f5751f8b3dd0d9338f24a))
-   vista preparing 2-way sopport ([6b6ec5a](https://github.com/olzzon/sisyfos-audio-controller/commit/6b6ec5aec7d2fe32ab1994ff78ab65991b1a741f))

### Bug Fixes

-   emit current settings to client and not the stored one. ([a4a1074](https://github.com/olzzon/sisyfos-audio-controller/commit/a4a1074c08f89dc30af2fefe9faa41808ba8bb46))
-   update all channels in channelReducers->SET_COMPLETE_CH_STATE ([9b3aea7](https://github.com/olzzon/sisyfos-audio-controller/commit/9b3aea760d374320a73cc2efd5a8780bb7d2c00c))

## [3.2.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.1.0...v3.2.0) (2020-05-07)

### Features

-   skaahoj - monitor panel mixer ([5390723](https://github.com/olzzon/sisyfos-audio-controller/commit/53907231e71ad27fa1bb30d3c271ea240a252083))
-   Skaarhoj - abstract remote controllers for other support that HUI ([ee6384e](https://github.com/olzzon/sisyfos-audio-controller/commit/ee6384ef383b8766d8bddb06acbd7a8ea435e236))
-   Skaarhoj - further refatoring to prepare support ([999aafb](https://github.com/olzzon/sisyfos-audio-controller/commit/999aafbe94c3add38661613c4aceb50168dcb7de))
-   skaarhoj - mapping used for assigning to faders. hwc[#1](https://github.com/olzzon/sisyfos-audio-controller/issues/1) <> fader 1 etc ([6821c22](https://github.com/olzzon/sisyfos-audio-controller/commit/6821c2257cb29f8ee3075355076a54cb556a04ad))
-   skaarhoj - set display values on initial connection ([2534b89](https://github.com/olzzon/sisyfos-audio-controller/commit/2534b89d1eade478eb5094b02c370f7406b53587))
-   skaarhoj init server and load at server startup ([6123142](https://github.com/olzzon/sisyfos-audio-controller/commit/61231420e03cd78f51a845a8c65e176d655e61cd))
-   skaarhoj monitor mix% control on hwc[#81](https://github.com/olzzon/sisyfos-audio-controller/issues/81)-89 91 101 ([24817b6](https://github.com/olzzon/sisyfos-audio-controller/commit/24817b66577d40becd072f62a2694b2b1656ef2c)), closes [hwc#81-89](https://github.com/olzzon/hwc/issues/81-89)
-   skaarhoj panel level support on rotary ([93ad7fe](https://github.com/olzzon/sisyfos-audio-controller/commit/93ad7fe3435a555f36a99545dbdec8535c76d72e))

### Bug Fixes

-   adding files for last commit ([331d61a](https://github.com/olzzon/sisyfos-audio-controller/commit/331d61abb49853650e09d16c2eb893537e14981b))
-   Mixer Online did not turn red when connection was lost - fixed on OSC protocols and on Vista mixer ([52c429d](https://github.com/olzzon/sisyfos-audio-controller/commit/52c429d79574f5c467711389d971a1ca1e5fd2cd))
-   only allow 9 aux sends pr monitor output - update readme ([316501c](https://github.com/olzzon/sisyfos-audio-controller/commit/316501c3fa742085a66bed86c454c11023ad9bff))
-   skaarhoj - handling error when lost connection to client ([2393d5f](https://github.com/olzzon/sisyfos-audio-controller/commit/2393d5f3bd0f061fc04b4e76e9bcdeaa97713005))
-   skaarhoj rotary enc handle fast rotary ([e554b8a](https://github.com/olzzon/sisyfos-audio-controller/commit/e554b8aeb73aafab017537fa2368cd053936d115))

## [3.1.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v3.0.0...v3.1.0) (2020-04-27)

### Features

-   husky and lint-stages setup ([ac99595](https://github.com/olzzon/sisyfos-audio-controller/commit/ac995955b0216d50e58327acc7629b2118c49851))
-   Vista - support for NEXT-CUE and MUTE on Mono, Stereo and 5.1 channels ([9da7cdf](https://github.com/olzzon/sisyfos-audio-controller/commit/9da7cdfc0c0fa95bcd3e347753cff911b669eaa8))
-   Vista Next-Aux send level and Mute for the mono channels ([7757ff2](https://github.com/olzzon/sisyfos-audio-controller/commit/7757ff2d63445c8c7ca017ad4ff760292a21b6b1))

### Bug Fixes

-   Studer Vista - better logarithmic support ([d2fa070](https://github.com/olzzon/sisyfos-audio-controller/commit/d2fa070131518316dfbe1a77d5717e184406bb83))

## [3.0.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.13.0...v3.0.0) (2020-04-24)

## [2.13.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.12.0...v2.13.0) (2020-04-24)

### Features

-   Behringer X32 gain reduction meter ([c0e3469](https://github.com/olzzon/sisyfos-audio-controller/commit/c0e3469a48965542487b0e10e3561c603aabe268))
-   Behringer XR & Midas MR series Gain reduction. (rest of ch strip to be implemented) ([c81a7f4](https://github.com/olzzon/sisyfos-audio-controller/commit/c81a7f417188a082cd6d56f841baf7c707a1ceaa))
-   Behringer XR-Midas MR support mute-eq,comp,aux ([9df30ba](https://github.com/olzzon/sisyfos-audio-controller/commit/9df30bacd3c22050d13ba8352fe26fbc33c19a41))
-   Gain reduction meter & preparing Behringer XR protocol ([17510ab](https://github.com/olzzon/sisyfos-audio-controller/commit/17510abb784eda1cef9b1d328559b07ad0413ef6))
-   Vista 1-5-9 support fader level from Sisyfos on mono, st, and 5.1 channels ([5cf60b4](https://github.com/olzzon/sisyfos-audio-controller/commit/5cf60b4dd3282a4ad88a3feabbb358780fc29fff))

### Bug Fixes

\*

-   check if fader exists before requesting from mixer ([8c06344](https://github.com/olzzon/sisyfos-audio-controller/commit/8c06344a57285e215ae282aa872bf40c9963eb30))
-   reduction meter middler and upper rendering ([589d936](https://github.com/olzzon/sisyfos-audio-controller/commit/589d9365aa143c6fe348fd840647f288bda4ad36))
-   update Next Aux level in OSC protocol (behringer, Midas etc.) ([38a6ec7](https://github.com/olzzon/sisyfos-audio-controller/commit/38a6ec7ccff31953413ec273908832f263758d16))
-   update Next aux when changing fader level while it´s on ([2480904](https://github.com/olzzon/sisyfos-audio-controller/commit/248090484177d70e665aa42ff26335d9b372ed0a))
-   when receiving aux level, only set it of aux is assigned in sisyfos (to be able to only control the ones that the use should control and not all) ([afcc4cd](https://github.com/olzzon/sisyfos-audio-controller/commit/afcc4cdf6267e05371c27556385fa75a1b31ff85))

## [2.12.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.11.0...v2.12.0) (2020-04-02)

### Features

-   Studer - handle up to 95 channels on OnAir 3000. Prepare Vista handling ([9c50bba](https://github.com/olzzon/sisyfos-audio-controller/commit/9c50bbab7876624130c74d15cfc0233b14c36936))
-   Studer Vista ([baa248e](https://github.com/olzzon/sisyfos-audio-controller/commit/baa248e58deb532b0f62a182692512cb47713c85))
-   Vista 1-5-9 Encoding Mono channels including level (using BER) ([ca05cb3](https://github.com/olzzon/sisyfos-audio-controller/commit/ca05cb317686399aa6e7ca9b26461c4d59824f30))
-   vista support for mono, stereo and 51 channels ([33633e7](https://github.com/olzzon/sisyfos-audio-controller/commit/33633e7bd89ee9cab38bb75c937220a1425ad943))

### Bug Fixes

-   **CasparCG:** Fixes VU meters for CasparCG ([1899d1f](https://github.com/olzzon/sisyfos-audio-controller/commit/1899d1f6ba0beb8b68012122e176b9d023d1c892))
-   **CasparCG:** Typo fix in ccg route source ([fb0c0f8](https://github.com/olzzon/sisyfos-audio-controller/commit/fb0c0f84cfa7a104e3c50d2af71ea8171a10b962))
-   chan strip refered to channeltype when label was empty ([b996d63](https://github.com/olzzon/sisyfos-audio-controller/commit/b996d632debd657f3871bf482093eba3748ee07e))
-   double import of sockerServer in CasparCGConnection.ts forgot to remove in merge ([cbc2ebe](https://github.com/olzzon/sisyfos-audio-controller/commit/cbc2ebe2c8bf104c0ff16238b8cd40128e508841))
-   faders should not overlap buttons ([d976aa3](https://github.com/olzzon/sisyfos-audio-controller/commit/d976aa324e6033c32b0d123a1d1bdf54c000137b))
-   prevent scrolling of parent when in an iframe ([bb48c54](https://github.com/olzzon/sisyfos-audio-controller/commit/bb48c54d8bb2d5b8489b8e894188eb705610f7e3))
-   Studer update faders with log scale ([a6e1b24](https://github.com/olzzon/sisyfos-audio-controller/commit/a6e1b241ae99ef080ff7898bd6a06aaaccee11f5))
-   update yarn to support BER in Vista mixer connection ([722dc5d](https://github.com/olzzon/sisyfos-audio-controller/commit/722dc5d3c062cf6c40e700e0fb1c8fe70d85fab3))
-   when dragging a fader mouseUp could trigger other buttons. ([145423e](https://github.com/olzzon/sisyfos-audio-controller/commit/145423e9a02e7ea6942b829eff1c18f6f4164f31))

## [2.11.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.10.1...v2.11.0) (2020-03-25)

### Features

-   Studer OnAir support ([02acbbe](https://github.com/olzzon/sisyfos-audio-controller/commit/02acbbe7343aab2edfb069816e25a060fe51fc95))
-   Studer support - basic level for OnAir3000 ([b7ca75f](https://github.com/olzzon/sisyfos-audio-controller/commit/b7ca75f9cb57ef0f5dd42ce8be8401a381e0d59a))
-   **CasparCG:** adds route producer as source ([7d8aaf2](https://github.com/olzzon/sisyfos-audio-controller/commit/7d8aaf29a992847855e2a3f18262414d796277b0))
-   **Server:** Adds logline on server address on startup ([fe87c65](https://github.com/olzzon/sisyfos-audio-controller/commit/fe87c653fe7e26df5a01038bf44be7710b121076))

### Bug Fixes

-   comment out unused in studer protocol ([0219964](https://github.com/olzzon/sisyfos-audio-controller/commit/02199645a6ca2a4bbb33724febed68760fbea10c))
-   **CasparCG:** Compatibility between Decklink and Route sources ([4b3c63d](https://github.com/olzzon/sisyfos-audio-controller/commit/4b3c63d3e694f279fe8c6baef56691c21c0d0bbe))
-   **CasparCG:** Compatible with CCG Server 2.1.11.NRK route producer ([a39edcb](https://github.com/olzzon/sisyfos-audio-controller/commit/a39edcb914ec46a653a5758cb0802701f4b777f3))
-   changed logger.info to logger.error in casparCGConnection ([ec1fc67](https://github.com/olzzon/sisyfos-audio-controller/commit/ec1fc670e4a87349577ae52bd94dc5bae7ae621a))

### [2.10.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.10.0...v2.10.1) (2020-03-24)

### Bug Fixes

-   changed logger.info to logger.error in casparCGConnection ([5541b94](https://github.com/olzzon/sisyfos-audio-controller/commit/5541b9442ccf3d918be4b2ae5c5e977556ba1ea7))
-   Client indicate when server is offline ([5ec04a7](https://github.com/olzzon/sisyfos-audio-controller/commit/5ec04a7bdfd0fe70209505a55257a27cdd47130e))
-   rename "Offtube mode" to "Eq-Comp-Aux in chstrip" ([1b10cb4](https://github.com/olzzon/sisyfos-audio-controller/commit/1b10cb4953dad6f30602ab876aad8229c638db00))
-   show CasparCG source select no matter whether Offtube Mode is selected ([696dfed](https://github.com/olzzon/sisyfos-audio-controller/commit/696dfed45f2a9e280a35d168a54c8cc899213bf7))

## [2.10.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.9.5...v2.10.0) (2020-03-19)

### Features

-   change emberplus to other repo ([e50b9b7](https://github.com/olzzon/sisyfos-audio-controller/commit/e50b9b7ff0cf967bb451836a31790bb5a3feba9d))
-   ember - make dedicated sendOutLevelMessage instead of a generic one where you have to do a getElementByPath each time ([4034bf5](https://github.com/olzzon/sisyfos-audio-controller/commit/4034bf59f5c06f665ac34ea5376831fb6c883142))
-   Ember - use timeout-hack for better Lawo support ([2b508f2](https://github.com/olzzon/sisyfos-audio-controller/commit/2b508f21b5d958341bda4910b82cdf3804d81f03))
-   Ember connection set up differently ([bc6c6bd](https://github.com/olzzon/sisyfos-audio-controller/commit/bc6c6bd4682a14989c6852928f3869d28ba2451b))
-   Ember Lawo - use master branch on https://github.com/dufourgilles/node-emberplus.git ([54eb20a](https://github.com/olzzon/sisyfos-audio-controller/commit/54eb20a99af4c3baee958f151dc74cdd73b93cc4))
-   FADE_DISPATCH_RESOLUTION constant are moved to protocol to enable fever commands on slow protocols ([18fd425](https://github.com/olzzon/sisyfos-audio-controller/commit/18fd42539789a23a0f4613c6868e73b36fa01a20))
-   lawo-mc - add files for last commit ([e29831f](https://github.com/olzzon/sisyfos-audio-controller/commit/e29831fc05e0c9b5cd8639c460244e1e15a4c091))
-   lawo-mc - create LawoMC protocol. (not configures yet) ([7d963a5](https://github.com/olzzon/sisyfos-audio-controller/commit/7d963a52918203df44a01f63e7d62302005bcd79))
-   Lawo-MC fader level added to protocol. ([ad26a6b](https://github.com/olzzon/sisyfos-audio-controller/commit/ad26a6bff9e27bf5e93657f4d55e6c1de416b8d4))
-   LawoRuby - initial protocol ([d96533d](https://github.com/olzzon/sisyfos-audio-controller/commit/d96533d6f5c1633719b8875b223838283d9cd3c7))
-   minimonitorview - css tweaks ([db5d617](https://github.com/olzzon/sisyfos-audio-controller/commit/db5d617e751f0d3ffb7437eb0f75476cb7707bc1))
-   minimonitorview - label in monitor settings ([60b6a4c](https://github.com/olzzon/sisyfos-audio-controller/commit/60b6a4cf08652764132b59c4d3ae4c622f06a1a9))
-   monitorview - settings in monitor setup, stored server side ([8837fce](https://github.com/olzzon/sisyfos-audio-controller/commit/8837fceeeb29fc007a3740d252a1de33126a77d6))

### Bug Fixes

-   casparCGMaster protocol should not be able to be undefined (a template is always loaded) ([477549e](https://github.com/olzzon/sisyfos-audio-controller/commit/477549e88b0e7886dd905103df08ebde263b59c3))
-   internal levels are always 0-1 conversion to protocol level must take place in the protocols mixerconnection ([88dd14f](https://github.com/olzzon/sisyfos-audio-controller/commit/88dd14f392f407a229e0fa4163f64b36076b9d79))

### [2.9.5](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.9.4...v2.9.5) (2020-02-16)

### Bug Fixes

-   add preventDefault in onthouchEnd on vo, mute and auto buttons too ([245352a](https://github.com/olzzon/sisyfos-audio-controller/commit/245352a11e1c1b35a7b8d37711ce66c9e82ae838))

### [2.9.4](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.9.3...v2.9.4) (2020-02-15)

### Bug Fixes

-   always clear fade timer before setting a new one ([028d666](https://github.com/olzzon/sisyfos-audio-controller/commit/028d66620b81c090d2b12f1c0ffb19bdb0e45f67))
-   avoid crash of Sisyfos when selecting Lawo and Studer premilary protocols ([d130205](https://github.com/olzzon/sisyfos-audio-controller/commit/d13020572f0f83d0b3d7869d6121eaaed9a82b87))

### [2.9.3](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.9.2...v2.9.3) (2020-02-14)

### Bug Fixes

-   handling of touch on pgm-vo-mute-auto buttons without the need for /?multitouch=1 ([d58fd1b](https://github.com/olzzon/sisyfos-audio-controller/commit/d58fd1b5bebb51659dd1b29057540ca4b2cdb3e9))

### [2.9.2](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.9.1...v2.9.2) (2020-02-14)

### Bug Fixes

-   prevent floating point loop on fader level by setting step to 0.01 ([263d016](https://github.com/olzzon/sisyfos-audio-controller/commit/263d0162e4163cd4b866afe88d50601df23ef8c1))

### [2.9.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.9.0...v2.9.1) (2020-02-14)

### Bug Fixes

-   color of fader-handle dependent on pgm-vo-mute state ([5796eec](https://github.com/olzzon/sisyfos-audio-controller/commit/5796eeca8209a2f171e8a1cfa4ff9a33d3bdd0b2))
-   don´t toggle both on touch & click if multitouch is off ([1b46a47](https://github.com/olzzon/sisyfos-audio-controller/commit/1b46a47218eaa7f879ebe9c2c0e65bacc7effbbe))
-   Fader level was reversed (1-0 instead of 0-1) ([4932128](https://github.com/olzzon/sisyfos-audio-controller/commit/4932128a2ed394a3105eba71e9d12a2f5d79c088))
-   update fader handle color on state shift ([e149456](https://github.com/olzzon/sisyfos-audio-controller/commit/e14945687690a1b309a1f557d0221e6ce370b597))

## [2.9.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.8.0...v2.9.0) (2020-02-12)

### Features

-   multitouch - add css file. set animate to false for better multiclient multitouch support ([5ed9596](https://github.com/olzzon/sisyfos-audio-controller/commit/5ed95962a4434986c47f1b5b3c32291ed11904cc))
-   multitouch - added styling, moved ChanStrip params back to single touch (using react-slider) ([313089e](https://github.com/olzzon/sisyfos-audio-controller/commit/313089e4a02fe6c80962b3c8892368d34ec7ebcf))
-   multitouch - move to NoUISlider to support multitouch. ToDo CSS ([b59d230](https://github.com/olzzon/sisyfos-audio-controller/commit/b59d230d887ae100b8bd3d3d0882571171dbdefe))
-   multitouch - supporteded on pgm, vo, mute and auto buttons. ([7921d9b](https://github.com/olzzon/sisyfos-audio-controller/commit/7921d9b227177c36b0e143d759d714b8076731a5))

## [2.8.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.7.1...v2.8.0) (2020-02-11)

### Features

-   implement Sofie iFrame support ([a96215a](https://github.com/olzzon/sisyfos-audio-controller/commit/a96215a9675de754296f07d3b0bb06378e2fc6e3))
-   Sisyfos inside iFrame. Use window.top !== window.self to chech if it´s running inside something ([76ceca9](https://github.com/olzzon/sisyfos-audio-controller/commit/76ceca9a193ae2025b649bef83a669879eac952e))
-   Sisyfos running in iFrame. Use frameElement instead of checking parent. ([bcc3633](https://github.com/olzzon/sisyfos-audio-controller/commit/bcc3633e016b6b9ea7afaaf702500b92ae4b0ea6))

### [2.7.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.7.0...v2.7.1) (2020-02-07)

## [2.7.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.6.0...v2.7.0) (2020-02-05)

### Features

-   Channelstrip Delay Time generic implementation ([0a5a88c](https://github.com/olzzon/sisyfos-audio-controller/commit/0a5a88ccc3dd3ebbb413d364b084153d7b4cdaf8))
-   chanStrip delaybuttons to fineadjust delay value ([7ee1418](https://github.com/olzzon/sisyfos-audio-controller/commit/7ee1418aa5782999daee8f8dcf95880d436a7de7))
-   chanStrip slide in-out fdrom left ([983cefb](https://github.com/olzzon/sisyfos-audio-controller/commit/983cefb1fd2f3a0906c2d7ab737864ec9900e057))
-   disable label transfer to Midas so Sofie can set userlabels in Sisyfos without interfering with the mixer labels ([0e139eb](https://github.com/olzzon/sisyfos-audio-controller/commit/0e139ebba17c651f5ef7bccd6b7d8e7b84dfc347))
-   Midas receive delayTime state ([de94606](https://github.com/olzzon/sisyfos-audio-controller/commit/de94606eb90d26b74da8160b5a9a3bb2fc5a3a1d))
-   Midas/X32 MUTE button support ([e922d5f](https://github.com/olzzon/sisyfos-audio-controller/commit/e922d5f36c385f81536091649a28ed5f4fab5633))
-   offtube mode, make channelstrip area persistent. ([aebb505](https://github.com/olzzon/sisyfos-audio-controller/commit/aebb505457d7ad58bf510157fd8230b4b341077f))
-   wider chanstrip for support of more aux sends ([f6872db](https://github.com/olzzon/sisyfos-audio-controller/commit/f6872dbcd5eeb5196a41f311fdb7b54b7cfee4b7))

### Bug Fixes

-   chan strip - GUI compressor - delay header was 3 lines ([de6a733](https://github.com/olzzon/sisyfos-audio-controller/commit/de6a73317ef9eec8c140f3a61f09b34dd7dcc105))
-   loading storage with more channels than faders. (e.g. a fader controlling a 5.1 setup) ([93e10ec](https://github.com/olzzon/sisyfos-audio-controller/commit/93e10ec36cc98f3592b6fb10674ab2e8ee64544d))
-   Midas Delay param is between 0 and 1 not ms time ([e535722](https://github.com/olzzon/sisyfos-audio-controller/commit/e53572212d2e80de350e87c375d74fa2b9b61c70))
-   midas protocol missing DELAY_TIME ([12ac11c](https://github.com/olzzon/sisyfos-audio-controller/commit/12ac11c916096b7e7df3726f3319c04642aab018))
-   Type - Midas - fromMixer didn´t have the correct params ([87540f3](https://github.com/olzzon/sisyfos-audio-controller/commit/87540f3515305ad5c2f84349aa8f2df17cecbe2c))

## [2.6.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.5.0...v2.6.0) (2020-01-30)

### Features

-   QL1 receive fader state working ([d434dd3](https://github.com/olzzon/sisyfos-audio-controller/commit/d434dd32ed89a05ef351f5ac5a2ae0ed7bcf5f8c))
-   QlCl - added mute support FROM Sisyfos ([8793170](https://github.com/olzzon/sisyfos-audio-controller/commit/8793170bba09cec80376531d5b13525fe7f39383))
-   yamaha QL - gain out command moved to protocol instead of hardwired in qlclconnection.ts ([e96f902](https://github.com/olzzon/sisyfos-audio-controller/commit/e96f9026dafb14df48caa2ce1deb8d825d23d14a))
-   Yamaha QL - use Winston logging instead of console.log ([d856e26](https://github.com/olzzon/sisyfos-audio-controller/commit/d856e26432e5ca9289e7fab448ef0d0cb3be9499))
-   yamaha QL1 - get MUTE state (on-off) from mixer ([ce021e9](https://github.com/olzzon/sisyfos-audio-controller/commit/ce021e9e3b5dce95e1eaba6ab2a50fb071705932))
-   yamaha qlcl - inital req of fader levels. - split buffers - 2 byte channel message ([f462841](https://github.com/olzzon/sisyfos-audio-controller/commit/f4628411784c9fb47d3c7349db8d43afe436c65a))

## [2.5.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.4.0...v2.5.0) (2020-01-29)

### Features

-   CasparCGconnection.ts winston logger support ([4e0a7f0](https://github.com/olzzon/sisyfos-audio-controller/commit/4e0a7f055c3645eead11e567e28cc1c1e30f0858))
-   CCG channelsettings emit action for selecting new channel inputs. ([6f807cd](https://github.com/olzzon/sisyfos-audio-controller/commit/6f807cdda018513fd20418e55e587a4e844140e1))
-   CCG v2 show- PFL in settings replaces CUE NEXT ([9a24def](https://github.com/olzzon/sisyfos-audio-controller/commit/9a24defa5060853656ac46e54d992945bd32d9d8))
-   ccg-v2 - move config files to storage folder. ([53bd70e](https://github.com/olzzon/sisyfos-audio-controller/commit/53bd70e06d76d292cf84c94ff78165cbad25e055))
-   check geometry file for undefined ([b15fbb1](https://github.com/olzzon/sisyfos-audio-controller/commit/b15fbb15f2e02cea8a9ff5896b56ea43db16e151))
-   disable settings in browser by adding localhost:1176/?settings=0 ([f2dc03f](https://github.com/olzzon/sisyfos-audio-controller/commit/f2dc03f77ece5d2522ce54a4f7bb0370153fff8b))
-   load CasparCG settings from Storage menu ([c4e55e6](https://github.com/olzzon/sisyfos-audio-controller/commit/c4e55e6744d33a927b57f2c0e197f2dbe9c7f858))
-   move CasparCG input settings into channelstrip on left side ([7d20317](https://github.com/olzzon/sisyfos-audio-controller/commit/7d20317614a5bb508e29ebf8cd5ab8287f32803b))
-   only show Load CasparCG in Storage menu if there are any .ccg files ([6cda7c0](https://github.com/olzzon/sisyfos-audio-controller/commit/6cda7c0c8c51dda597542c586f6860e0daa92bf7))
-   Preparing CCG - /inject command so it´s possible pass a command directly from Sofie to Audiomixer. ([cb53eb5](https://github.com/olzzon/sisyfos-audio-controller/commit/cb53eb57ac2a322779b3bdecd95be040ea8e1b1e))
-   remove close button in CCG input settings window ([d61dab7](https://github.com/olzzon/sisyfos-audio-controller/commit/d61dab73f52a522e6edd60106f8f714c0db2d50b))
-   remove filehandling from mixerprotocol, include default example ([7918b05](https://github.com/olzzon/sisyfos-audio-controller/commit/7918b0573dd500c858f5e598fb50e373976f4d8e))
-   rename Storage menu to "STORAGE" ([ee917a2](https://github.com/olzzon/sisyfos-audio-controller/commit/ee917a2f9e50a62dba862aa00b609a480df95d7e))
-   set new CasparCG config from Storage Menu is working. ([7eab0b9](https://github.com/olzzon/sisyfos-audio-controller/commit/7eab0b90cc218636a41ffa2c7598661076cebc48))
-   set seperate loglevel for console with loggerConsoleLevel='verbose' updated in Readme.md ([beba900](https://github.com/olzzon/sisyfos-audio-controller/commit/beba90053efcf5c6efe8144ba07f1e7e1e66c17c))

### Bug Fixes

-   GUI crash for reference to fader label, on fader thats not defined. ([9bc4df7](https://github.com/olzzon/sisyfos-audio-controller/commit/9bc4df7f6f4c2753cb0c3933245a1aec9025ba21))
-   zero indicator on faders was off after new design ([78f48b5](https://github.com/olzzon/sisyfos-audio-controller/commit/78f48b5942a47a4393e490d6fadd0fa1fb558471))

## [2.4.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.3.3...v2.4.0) (2020-01-23)

### Features

-   added Low-mid to get 4-band eq instead of 3-band eq ([59542a8](https://github.com/olzzon/sisyfos-audio-controller/commit/59542a83c1ca889696efe29fb4bc0d958567e77b))
-   chan strip zero indicators on eq, comp and monitor mix ([b9ec40e](https://github.com/olzzon/sisyfos-audio-controller/commit/b9ec40e16a2d6ff4c23fd457ff5a6ec4a9f73b87))
-   channel name in header of monitor mix minus ([99c0207](https://github.com/olzzon/sisyfos-audio-controller/commit/99c020743b641209423b924f042c6619c170321e))
-   get eq & comp state from Midas/Behringer X32 - both inital and realtime ([86bd216](https://github.com/olzzon/sisyfos-audio-controller/commit/86bd216d3e2cf4c15e241cdee6445e191f872d7a))
-   individual runtime args for setting log level of kibana and of local log file. ([e978093](https://github.com/olzzon/sisyfos-audio-controller/commit/e978093cae71699393493426b28d5aac450741ae))
-   Midas/Behringer OSC get inital Aux state from mixer ([7bb0741](https://github.com/olzzon/sisyfos-audio-controller/commit/7bb0741c2833274081d6f110d2b56876bcf5c33b))
-   move ch strip to left side ([89756b9](https://github.com/olzzon/sisyfos-audio-controller/commit/89756b9f39d9ec6715a8eac284690d977fa9e31a))

### Bug Fixes

-   Ardour ping mixewr command didn´t have osc data type ([b84e965](https://github.com/olzzon/sisyfos-audio-controller/commit/b84e965abf679d512eb7333543555485ec84123c))
-   channel-body css didn´t set heigth ([653def0](https://github.com/olzzon/sisyfos-audio-controller/commit/653def0d90f25210a61830aa0ef5f7b517bf0b2f))
-   delay initial state commands to avoid overload of OSC commands to Midas ([443325f](https://github.com/olzzon/sisyfos-audio-controller/commit/443325fc2179b6053271c92548ad64270b61f044))
-   Recived Midas Ratio has value from 0 to 11 and not 0 to 1 ([40afcc5](https://github.com/olzzon/sisyfos-audio-controller/commit/40afcc55d826c0f731f4c64e1f5698b167f0b4aa))
-   typo - dispatch obj with level: instead of label: ([e84abaa](https://github.com/olzzon/sisyfos-audio-controller/commit/e84abaa71671e8d77f0b47a7d6a459fa682717ab))
-   typo - don´t revert dispatch label from level: to label: ([974bec2](https://github.com/olzzon/sisyfos-audio-controller/commit/974bec262d84179a2c3893f979e2ebcdb9f1b715))
-   use .loMid value when updating loMid ([9c61686](https://github.com/olzzon/sisyfos-audio-controller/commit/9c61686a00385076a5764ff20249db50007e3a6d))

### [2.3.3](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.3.2...v2.3.3) (2020-01-15)

### Bug Fixes

-   rename Label Monitor Mix to: "{FaderName} Monitor Mix Minus" ([d99a67b](https://github.com/olzzon/sisyfos-audio-controller/commit/d99a67b8499f3d21c14047a5ff612b684287ad0e))
-   update Auxlevel on mixer on changes ([08b832e](https://github.com/olzzon/sisyfos-audio-controller/commit/08b832eba9ac81c1a74e2de9b354103d05247b52))

### [2.3.2](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.3.1...v2.3.2) (2020-01-04)

### [2.3.1](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.3.0...v2.3.1) (2020-01-01)

### Bug Fixes

-   CI build errors ([d98475f](https://github.com/olzzon/sisyfos-audio-controller/commit/d98475f6b07381504c626f24394b4dbdacffd668))
-   create storage folder if not exists when trying to store settings for the first time ([41dcb09](https://github.com/olzzon/sisyfos-audio-controller/commit/41dcb09236e3768daa19fe64ce70499e769a0e1e))
-   do not use winston logger in contants files as they´re also used on client side ([fb2d847](https://github.com/olzzon/sisyfos-audio-controller/commit/fb2d84756d7330dfdf799f1269793d012ed0a195))
-   remove settings and default.shot from storage folder ([1c63eb2](https://github.com/olzzon/sisyfos-audio-controller/commit/1c63eb21933ce7414a405393b4c0564c80aace6f))
-   remove settings.json from server folder ([3229936](https://github.com/olzzon/sisyfos-audio-controller/commit/3229936a48c39765103204235a40935d92cb07e1))

## [2.3.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.2.0...v2.3.0) (2019-12-21)

### Features

-   Ignore Automation implemented. A "MANUAL" button added in GUI so a fader can ignore commands from Automation ([1399711](https://github.com/olzzon/sisyfos-audio-controller/commit/1399711d9b1558702c5c305dc45b09fe82b2ea48))

### Bug Fixes

-   assign aux to fader use auxIndex instead of channel ([a9e3232](https://github.com/olzzon/sisyfos-audio-controller/commit/a9e3232b6a3fdeed9a3729aa7b09a1628931010d))
-   avoid clearing meters when setting full state of faders ([cce69f5](https://github.com/olzzon/sisyfos-audio-controller/commit/cce69f5c6da2b8b946f76f49b1f60ec9dbe0a501))
-   double code in AutomationConnection (had double check for X_MIX, Fade_to_black and visible) ([ff8af54](https://github.com/olzzon/sisyfos-audio-controller/commit/ff8af54c81bc4cff3ad8a8c04364e2d76a01ce52))
-   OscMixerConnection - compare whole command length ([876b367](https://github.com/olzzon/sisyfos-audio-controller/commit/876b3679ae772d6f3ebc2ddff608220c48beeeee))
-   Update GUI when state of muteOn and voOn is changed ([52bf3da](https://github.com/olzzon/sisyfos-audio-controller/commit/52bf3da1aa2ad2aa63ec2b03cc7fc6a4a0c97642))

## [2.2.0](https://github.com/olzzon/sisyfos-audio-controller/compare/v2.1.0...v2.2.0) (2019-12-18)

### Features

-   mixer online - will restart server. ([fea6b24](https://github.com/olzzon/sisyfos-audio-controller/commit/fea6b24f897ee4a9e0e101fc45b5d1b92ed4227d))

### Bug Fixes

-   move storage to "storage" folder, to avoid docker conflicts ([7323ed9](https://github.com/olzzon/sisyfos-audio-controller/commit/7323ed9675b57dbff528a54dad93271099bda14d))

## 2.1.0 (2019-12-18)

### Features

-   add channel settings UI ([8351cb0](https://github.com/olzzon/sisyfos-audio-controller/commit/8351cb05ffebf6aa2aa491023e3a5d2bd9b11287))
-   added protocol latency in settings. So setting "fadeActive" to false waits until last response from protocol. ([6d949ed](https://github.com/olzzon/sisyfos-audio-controller/commit/6d949edb988f741d63e91c0a34241c3eb8ab4cee))
-   Ardour adding meter support ([1864e3e](https://github.com/olzzon/sisyfos-audio-controller/commit/1864e3e88da2cfaa4db2d0c8e7332baef05591be))
-   Ardour meter support meter not meters ([9802ff5](https://github.com/olzzon/sisyfos-audio-controller/commit/9802ff5314b872fe6e5539ecdd78fe6fc9096128))
-   Ardour support - added channel name from mixer ([d767318](https://github.com/olzzon/sisyfos-audio-controller/commit/d76731868de78220070f70348cffc065083856dc))
-   Ardour support meter calimbration (loosely set) ([eb01418](https://github.com/olzzon/sisyfos-audio-controller/commit/eb014183fdf8bc3ab3bd66bf390fbf4959e66dcc))
-   CasparCG support as audio mixer ([#35](https://github.com/olzzon/sisyfos-audio-controller/issues/35)) ([d47cf5b](https://github.com/olzzon/sisyfos-audio-controller/commit/d47cf5bb018d6f7cab8b6d6b806a84d1c60511a5))
-   change VU meter rendering to canvas-based ([ee829d7](https://github.com/olzzon/sisyfos-audio-controller/commit/ee829d7960a0849826c2e90b459fcd760836b5a0))
-   Channel labels - protocol now support setting labels on mixer ([751b812](https://github.com/olzzon/sisyfos-audio-controller/commit/751b812d407d622b4fbd4d38f07ad167e3e2daac))
-   ChannelType added to IChannel in channelsReducer so each channel can reference to a channel type ([995b99e](https://github.com/olzzon/sisyfos-audio-controller/commit/995b99e26da34a20a5bf1663a504f14554cc2e51))
-   ChannelTypes - Channel color and label injected from mixerprotocol ([9552320](https://github.com/olzzon/sisyfos-audio-controller/commit/9552320e068008184cfb029fa8f5e226ebfa7ed3))
-   channelTypes - Ember+ level and gain implemented ([5f2752f](https://github.com/olzzon/sisyfos-audio-controller/commit/5f2752fe0f7aa0eda7ce7f98fe32a32f0bc63dc4))
-   ChannelTypes - mixerProtocol actions is changed from string to Array<string> ([5448e7a](https://github.com/olzzon/sisyfos-audio-controller/commit/5448e7ab273c0ad5f5b11e5f6326c77058e3fb7d))
-   ChannelTypes - preparing settings for numberOfChannelTypes ([ef1a9ba](https://github.com/olzzon/sisyfos-audio-controller/commit/ef1a9baa9f6e98255ab95fec560b70b0dd1c230d))
-   channeltypes- OscMixerConnection send level to the different channelTypes ([fd6d9ef](https://github.com/olzzon/sisyfos-audio-controller/commit/fd6d9ef7f62e40aa9bdd383dad56d4efe3479c41))
-   ChannelTypes: Changed numberOfChannels to numberOfChannelsInType (current ussage is [0]) ([114538d](https://github.com/olzzon/sisyfos-audio-controller/commit/114538d4800b47150e86078dbf8d2e74767d6850))
-   DMXIS - set label from Automation to DMXIS ([ac4038f](https://github.com/olzzon/sisyfos-audio-controller/commit/ac4038f8c831f59eb2fd58f3a730b5d9ccdb8fef))
-   Ember - trying to figure out invokeFunction ([0210ed1](https://github.com/olzzon/sisyfos-audio-controller/commit/0210ed1052c988418e0ce6eeeb35caf6b19c96d6))
-   Ember - trying to figure out setValue (right now it only resets the value) ([1e27c53](https://github.com/olzzon/sisyfos-audio-controller/commit/1e27c53b2a3f637230079d9156c632791226cee6))
-   Ember Protocol - Subscribe label changes ([5b83282](https://github.com/olzzon/sisyfos-audio-controller/commit/5b83282f9d4ae7a30e68f5474ce52d1fedf3bde3))
-   Ember Studer support - Added Vista 1 - Vista 5 - Vista 9 ([d602daa](https://github.com/olzzon/sisyfos-audio-controller/commit/d602daac47c9ff01f656de47cff8986fa1cdc1d2))
-   fader -> channel routing. implementing faders reducer in channel component ([85a1705](https://github.com/olzzon/sisyfos-audio-controller/commit/85a1705bb6f0179ca49120305c06c194edfd8b33))
-   Fader-Channel routing - initial datastructure for abstration of fader - channel ([93af7b1](https://github.com/olzzon/sisyfos-audio-controller/commit/93af7b14404b4d4ee812c4572f7bb89d16969d97))
-   Hui Remote - change of fader from Sisyfos to HUI working. ([c6f07a9](https://github.com/olzzon/sisyfos-audio-controller/commit/c6f07a92425f93cd3347e8f242309c5e820d4210))
-   Hui remote - Remote solo button toggles Sisyfos PFL on/off ([2587ff8](https://github.com/olzzon/sisyfos-audio-controller/commit/2587ff80263e4e842142b790171c61c5638e5d91))
-   hui remote - Select button togles sisyfos PGM on/off ([3ad29b5](https://github.com/olzzon/sisyfos-audio-controller/commit/3ad29b59024a7bf243d50f22837578663e817712))
-   HUI remote - Status of SELECT and SOLO button led updates when button is pressed ([bd40f81](https://github.com/olzzon/sisyfos-audio-controller/commit/bd40f812a0c7ba41b78a98e8e5f965bfac99018a))
-   hui remote - update hui if mixer faders are changed by mixer ([8bb116a](https://github.com/olzzon/sisyfos-audio-controller/commit/8bb116a9a28d0e080e8b7fb1869066f571b9c1e8))
-   HUI-remote - Button led reflects Sisyfos state ([df620b9](https://github.com/olzzon/sisyfos-audio-controller/commit/df620b93e36f136a6332f2efb7c7b80238d2a853))
-   implement aux configuration in Storage load/save ([7e01f2a](https://github.com/olzzon/sisyfos-audio-controller/commit/7e01f2a153a1d2e7e76db9c00f3c067718a62928))
-   Implemented "zero" indicator on Faders ([6ee7029](https://github.com/olzzon/sisyfos-audio-controller/commit/6ee702921f55484f021dcd7330b6caff46f70b10))
-   Initial support for Ardour ([4512985](https://github.com/olzzon/sisyfos-audio-controller/commit/4512985b01af5b8be70fc5a344e668a2ed0b83dd))
-   Lawo R3LAYVRX4 - NOT WORKING YET ([ffccf79](https://github.com/olzzon/sisyfos-audio-controller/commit/ffccf792c37d3d0604205787c3898e2f08abd0ce))
-   Let an automation system ping sisyfos, to verify connectivity status. ([b3a1a46](https://github.com/olzzon/sisyfos-audio-controller/commit/b3a1a4665076958aacc6004c2d35b648d66a1784))
-   Midi Mixer Protocol - settings select Midi input and output port, when a MIDI mixer protocol is selected ([3dd2567](https://github.com/olzzon/sisyfos-audio-controller/commit/3dd2567660e2254bb6ad9a7dddd9dcdc1dd2c194))
-   MidiMixerConnection - using type from protocol ([96576f4](https://github.com/olzzon/sisyfos-audio-controller/commit/96576f4a18dfb1c054e48778be1a06d87839659d))
-   MixerProtocol prepared ChannelType based structure. ([bd05bb5](https://github.com/olzzon/sisyfos-audio-controller/commit/bd05bb5492e10e834a3e2e6560dbae2e6a735fe4))
-   New ChannelType - channelType and channelIndexType implemented in channelReducer and snapShot state ([4082795](https://github.com/olzzon/sisyfos-audio-controller/commit/4082795b834ab71cd0fac940e0b4e5b495840531))
-   new ChannelTypes - settings number of each channeltypes ([b733529](https://github.com/olzzon/sisyfos-audio-controller/commit/b73352959b48bcaed5337b68f2b8fa88261d22e7))
-   Protocol for DMXIS lightcontrol ([0c9cb1f](https://github.com/olzzon/sisyfos-audio-controller/commit/0c9cb1f41ec029535c501a82e5cb3d967852482e))
-   Reaper Master Protocol DCA support ([f301dcd](https://github.com/olzzon/sisyfos-audio-controller/commit/f301dcd05828b82b4f805744dde13f9c1e72a4ad))
-   remote midi connetion - prefare PFL ([ffbde02](https://github.com/olzzon/sisyfos-audio-controller/commit/ffbde02ca822cbca644fc4096333a7a5ed8b8ab3))
-   Remote midi controÃller - update mixer when recieving level change from remote ([ccf95b3](https://github.com/olzzon/sisyfos-audio-controller/commit/ccf95b3b490988e6eff8f600286ac92b85f08ab4))
-   Remote Midi Control - working on datastructure ([b15542f](https://github.com/olzzon/sisyfos-audio-controller/commit/b15542f7ae08b1422fd22576acc8ba78958a2127))
-   Remote midi controller - change generic midi remote contrioller to a dedicated HUI controller ([73e4372](https://github.com/olzzon/sisyfos-audio-controller/commit/73e4372a1bdb0de9204aee41edd0c053df3f61ec))
-   Remote Midi Controller - connect to selected midiports from settings ([1eb4500](https://github.com/olzzon/sisyfos-audio-controller/commit/1eb45001f43579060341120bee29740da48c5423))
-   Remote midi controller - Convert Midi controller levels to audio mixer levels ([ddde5fc](https://github.com/olzzon/sisyfos-audio-controller/commit/ddde5fcd109583caa7b255a8fd6cabd600295945))
-   Remote Midi controller Adding support for play, stop, pitch bend types in remote protocol. instead of just ctrl-change ([f043c97](https://github.com/olzzon/sisyfos-audio-controller/commit/f043c974a1d4cfc6387d926cfbf7a5b4fe847eac))
-   Remote MidiControl - Added Faderlevel ([20a9548](https://github.com/olzzon/sisyfos-audio-controller/commit/20a954834eb05c6f1f401500cae7af805f095f10))
-   Remote MidiController - mixerConnection to be used for updating mixer status ([8f404a5](https://github.com/olzzon/sisyfos-audio-controller/commit/8f404a50f6821d41faeead94e5774ab3bab9d3fa))
-   Remote MidiController - preparing value conversion from mixer min-max to remote min-max ([e4764b9](https://github.com/olzzon/sisyfos-audio-controller/commit/e4764b97a252d5990849a1dc2f6b7b1a13028cb0))
-   Remote midicontroller - Recieve messages working ([d60ad72](https://github.com/olzzon/sisyfos-audio-controller/commit/d60ad72cc2d71354ad1712afbc9a82309d53477c))
-   Remote Midicontroller - Settings added pull down menus for selecting midiports in and out for controller ([6e754cd](https://github.com/olzzon/sisyfos-audio-controller/commit/6e754cd93332413873f43593f739594bfb54789a))
-   remote-hui fader from hui to sisyfos working ([97e6faa](https://github.com/olzzon/sisyfos-audio-controller/commit/97e6faa18d001c588cb7b35f899a3affb2f90794))
-   RemoteFader support - preparing support ([5ed8364](https://github.com/olzzon/sisyfos-audio-controller/commit/5ed83643e250f544cbf8c5323a746d0516ea6b31))
-   Set channel label on mixer from Sisyfos and from Automation ([35fbc34](https://github.com/olzzon/sisyfos-audio-controller/commit/35fbc3485c521d92796bcfe5016b7c3081ad0eae))
-   Studer Vista - initial support ([ea054e3](https://github.com/olzzon/sisyfos-audio-controller/commit/ea054e3c05225b50deb5cb841082de7b168e83ff))
-   Studer Vista Label support ([fbaf105](https://github.com/olzzon/sisyfos-audio-controller/commit/fbaf10514a9ac2f7d72293a83f7ad578566c54cf))
-   support restarting source producer to change source properties ([ad9c560](https://github.com/olzzon/sisyfos-audio-controller/commit/ad9c560eb3fe848c5031caa079a8914ef2ca23a9))
-   Yamaha QL1 midi support - basic funtionality working ([e7460e2](https://github.com/olzzon/sisyfos-audio-controller/commit/e7460e274a921d67ba0c449b53b931aa8873f2dc))
-   Yamaha QL1 support - created protocol (not functioning yet) ([497db09](https://github.com/olzzon/sisyfos-audio-controller/commit/497db09ed654cb661ade12899a25887305ba22a6))
-   **casparcg:** support VU meters on CCG mixer ([f6a5c4d](https://github.com/olzzon/sisyfos-audio-controller/commit/f6a5c4d59a92d5604715a343dc73cdfbb5228a53))

### Bug Fixes

-   /state/full should include showFader status ([c0be854](https://github.com/olzzon/sisyfos-audio-controller/commit/c0be854eafbdb6529f895fa214a8aba339d70e75))
-   as new react-slider module has a z-index of 1, settings pages are changed to a z-index of 2 ([af5a46c](https://github.com/olzzon/sisyfos-audio-controller/commit/af5a46c5c83a03b9ece3d11880b9a50e8fe9a5aa))
-   Automation PST command must update NextAux ([f635362](https://github.com/olzzon/sisyfos-audio-controller/commit/f63536225983f1f8c88550c9c7cb637aebf66e23))
-   Automationprotocol - return address data structure is to.address not to.ip ([75ceb9a](https://github.com/olzzon/sisyfos-audio-controller/commit/75ceb9aacdeda699d72108b7a9109ee5b5a24371))
-   CasparCG protocol min and zero values are used in channelTypes, so they are adjusted accoringly ([be6a5eb](https://github.com/olzzon/sisyfos-audio-controller/commit/be6a5eb814dad27f130ee9caf1d80378e0f669b5))
-   channel - fader abstractions was not correct ([5145b43](https://github.com/olzzon/sisyfos-audio-controller/commit/5145b43d69bd16ad86ab78977d21b0d1ad97b457))
-   Channel had faderChannel as reference instead of ch ([ea877dd](https://github.com/olzzon/sisyfos-audio-controller/commit/ea877dd495bf8c1f9e7b9b0fb9fd5db04fcb146b))
-   checkOscCommand - returned always true ([d502820](https://github.com/olzzon/sisyfos-audio-controller/commit/d50282082340bd53ca82386f8115c8f97038a332))
-   ClassNames in Sttings was there by accident ([c6d29b6](https://github.com/olzzon/sisyfos-audio-controller/commit/c6d29b6c01a77cded8507b232ab78c29842c51f4))
-   Clear protocolDelay timer when aborting old fade ([7801638](https://github.com/olzzon/sisyfos-audio-controller/commit/78016382f7430d723c59128f17dde6257e4562cb))
-   Colors for active faders was missing after converting to react-slider based faders ([15e34f3](https://github.com/olzzon/sisyfos-audio-controller/commit/15e34f3202e6356b5489261f96747a9363b6105a))
-   don´t send faderLeel to mixer, as itÂ reference to multiple channels now. ([a2a1240](https://github.com/olzzon/sisyfos-audio-controller/commit/a2a124037099c83a1b88acf0afff8d6aa8b09a48))
-   Electron nodeIntegration: false - added preload.js - prepare for moving hw related stuff to server side ([2ec903d](https://github.com/olzzon/sisyfos-audio-controller/commit/2ec903d56c133c963a412b8683b1641fd8d99eae))
-   Fade I/O - use channelType min and zero for setting target gain ([6a935c6](https://github.com/olzzon/sisyfos-audio-controller/commit/6a935c6e58344bbe0c473bcb451d1bf7bcf32a65))
-   fadeToBlack - only send commands for channels that are open ([48ed2ae](https://github.com/olzzon/sisyfos-audio-controller/commit/48ed2aef0792fe506fad401ccc8b8f531df4aa88))
-   ipaddress of return message is not to.id but to.address ([b5f3871](https://github.com/olzzon/sisyfos-audio-controller/commit/b5f387167cfb7ea8c61b34b7575ca77d8e4b1f04))
-   Meter align with "zero" ([48f662a](https://github.com/olzzon/sisyfos-audio-controller/commit/48f662a80f7f474c5f27ae82c2e595d356985ae0))
-   Midi - addListener should have channel number and not controlchange number ([aec6ea8](https://github.com/olzzon/sisyfos-audio-controller/commit/aec6ea8b8f030cd2310449e982c23ac1302f4668))
-   Midi HUI remote controller, update new structure fader instead of channel ([c4c9c3b](https://github.com/olzzon/sisyfos-audio-controller/commit/c4c9c3be98915d7a6c2f05afa8e8cfb472445cd5))
-   Midi protocol - update faders when multiple faders are changed ([a8c6da8](https://github.com/olzzon/sisyfos-audio-controller/commit/a8c6da8b121f405ca76633f8facf68f77da7e886))
-   More fader steps in Yamaha QlCl protocol (before it only had 10 steps from 0 to 1) ([a9d81a8](https://github.com/olzzon/sisyfos-audio-controller/commit/a9d81a8ac1ce7b9d20d674bd4da1786236fb9bca))
-   new channelType - emberMixerConnection, subscription used ch instead og channelTypeIndex ([0d630bb](https://github.com/olzzon/sisyfos-audio-controller/commit/0d630bb9bd70b5ef2a27f1a8e1d58469fc1d8a1e))
-   new forked osc.js dependcy, to allow use without rebuilding ([bf8797b](https://github.com/olzzon/sisyfos-audio-controller/commit/bf8797bafdfa6193154b290eb4aeaf17e25cd9fb))
-   numberOfChannels pr. type instead of totalNumberOfChannels ([139b4c1](https://github.com/olzzon/sisyfos-audio-controller/commit/139b4c1a296cea71b3e0565b6c9c80af661f5f2a))
-   only channels of first channelttype was set after reload ([f50296e](https://github.com/olzzon/sisyfos-audio-controller/commit/f50296e57773a8020d63699ee0fad24f8aa27ef8))
-   OSC command had wrong fader Index ([bef73e4](https://github.com/olzzon/sisyfos-audio-controller/commit/bef73e4af204b3cfa86919e13a0300e4bf8766be))
-   OSC protocol - All faders follows when changed on mixer ([b5d9515](https://github.com/olzzon/sisyfos-audio-controller/commit/b5d9515601d55bc963f672360fda6381704a6642))
-   Package.json --asar does not take any arguments ([dcfa901](https://github.com/olzzon/sisyfos-audio-controller/commit/dcfa9011b8926766e6e96f950a101795447bb62b))
-   pass auxIndex to aux level reducer ([a41b987](https://github.com/olzzon/sisyfos-audio-controller/commit/a41b9878e87a1c044548aea049c880be3cdda819))
-   PFL should not mute channel ([3c66960](https://github.com/olzzon/sisyfos-audio-controller/commit/3c669601c848230bd086afcdbe36c1746c297779))
-   pgm off didn´t get a prober fadetime ([1cbf98b](https://github.com/olzzon/sisyfos-audio-controller/commit/1cbf98b4b5cd9b8f77011b11248cf6112c10891f))
-   problem with CCG interface incorrectly understanding decklink device ID ([8889acd](https://github.com/olzzon/sisyfos-audio-controller/commit/8889acd6493f2bd0a37933168ba3ab8a72a74564))
-   QlClMixerConnection bug re huiRemoteConnection ([892bc27](https://github.com/olzzon/sisyfos-audio-controller/commit/892bc27a97956b35def27bb008e250e67df8db94))
-   QlClMixerConnection called hui with wrong argument ([8fbdd1b](https://github.com/olzzon/sisyfos-audio-controller/commit/8fbdd1b3635c8d0f40debb4c2dbd2b73c834fa88))
-   Reaper protocol. Wrong handling of feedback from mixer ([51bd2fb](https://github.com/olzzon/sisyfos-audio-controller/commit/51bd2fb638715670066a17275b17ca3e424cadc7))
-   send state commands back to right ip and expose full state ([3a6f257](https://github.com/olzzon/sisyfos-audio-controller/commit/3a6f257de1de1557e802e2572c4c4bbd64e48b3e))
-   setting menu, added cancel button to reload without saving ([931ddbe](https://github.com/olzzon/sisyfos-audio-controller/commit/931ddbefbe89d42bb3226f2ad913917f9aa77d55))
-   settings - Protocol specific options displayed when protocol is changed (e.g. midi ports when a MIDI based protocol is selected) ([25167d2](https://github.com/olzzon/sisyfos-audio-controller/commit/25167d2bf0cd8a65477eeec2d937e62e5d4c8202))
-   settings and routing menus position: fixed instead of absolute ([591877e](https://github.com/olzzon/sisyfos-audio-controller/commit/591877e73338e36be2c4c957dd0a79b13a2040f3))
-   showMessageBoxSync parsed a null to an optional argument. Now removed ([3f4561f](https://github.com/olzzon/sisyfos-audio-controller/commit/3f4561febd6c1157d0980d3e177445296798e3c1))
-   slider scroll - check for touchscreen ([7331216](https://github.com/olzzon/sisyfos-audio-controller/commit/73312166258c3afd8b4249cc11957bb1968a302b))
-   SSL adjust fader all way to zero ([894a406](https://github.com/olzzon/sisyfos-audio-controller/commit/894a4065894c6b49136294d5b9d999f38b3474f6))
-   SSL check for negative value before converting to Uint8Array ([54edfa3](https://github.com/olzzon/sisyfos-audio-controller/commit/54edfa33c1f6e2697aad15993c073c1bd3bc7192))
-   SSL protocol did not receive initial state from desk. ([9009d46](https://github.com/olzzon/sisyfos-audio-controller/commit/9009d46314c4da6acbe96308b2d3a2e81815a50d))
-   StuderVistaEmber file added ([bc4dcb3](https://github.com/olzzon/sisyfos-audio-controller/commit/bc4dcb39aa863577dbc7db05cf4d45aac33335af))
-   toggleShowChannelStrip toggle between channels ([22abc5f](https://github.com/olzzon/sisyfos-audio-controller/commit/22abc5faaa51cac5adc6be378ab05f3b8c61d607))
-   typeof declarationas ([d627950](https://github.com/olzzon/sisyfos-audio-controller/commit/d62795067bd29d7af98602291ff035569e19eda0))
-   undo emptMiserMessage() as it didnt work inside object ([5da0bea](https://github.com/olzzon/sisyfos-audio-controller/commit/5da0bea9433e78e0f909f37ae5bb4b6296d1832f))
-   update HUI remote fader, when level are changed from the mixer ([b762d5f](https://github.com/olzzon/sisyfos-audio-controller/commit/b762d5f6c9c3e85409be17fd0b580d76322a6b06))
-   upload preload.js file after it was moved ([b87c859](https://github.com/olzzon/sisyfos-audio-controller/commit/b87c859525ee22c7215857e829786dd10b2d6d47))
-   Webpack build - removed Babili and css mini extract plugins ([8ebd664](https://github.com/olzzon/sisyfos-audio-controller/commit/8ebd6649503c6626129c7c362545e06080fe64b3))
-   when receiving fader update from mixer, responded level should be faderlevel not outgain ([0fd1bd5](https://github.com/olzzon/sisyfos-audio-controller/commit/0fd1bd53b0291ab7546c1cb228d52c5f9d339783))
-   z-index was added to settings.css (as module react-slider has a z-index=1) ([b666157](https://github.com/olzzon/sisyfos-audio-controller/commit/b666157b68479dba46a74dcf9cd8de2082fb1d9c))
-   **casparCG:** ensure that the filePath is a string ([248f863](https://github.com/olzzon/sisyfos-audio-controller/commit/248f86374a2b4aafef5cd41f7dc3291f00b3322e))
-   **casparcg:** resolve an issue with PFL ([caf4946](https://github.com/olzzon/sisyfos-audio-controller/commit/caf494634876fc51ce895a377f2d8a735b3c3641))
-   added file for last commit ([6197f2b](https://github.com/olzzon/sisyfos-audio-controller/commit/6197f2b35113ae9b8886f1a27ff04a2e1131fcee))
-   added midiReceiveType variable ([abc1c2a](https://github.com/olzzon/sisyfos-audio-controller/commit/abc1c2a0ec00fa0476ac744f877a063614d2ff28))
-   adding .ts files for last commit ([85cb336](https://github.com/olzzon/sisyfos-audio-controller/commit/85cb33641578aae5a8f3d5c523b4816ba2df2ee4))
-   App -> passed an unused argument to MidiRemoteConnection ([386d496](https://github.com/olzzon/sisyfos-audio-controller/commit/386d4967c42cf8146c3bea1b267050192f6a2e16))
-   AutomationConnection, OSC server could only receive local connections. IP changed to 0.0.0.0 ([ceb4d2f](https://github.com/olzzon/sisyfos-audio-controller/commit/ceb4d2f523f1173941d1172c6a847ab49a7e0031))
-   Background on the whole mixer should be black ([e3e1583](https://github.com/olzzon/sisyfos-audio-controller/commit/e3e1583577e7cfbd9e7a4c16ac73e3961b212706))
-   behringer and midas vu-meter import was removed ([d557479](https://github.com/olzzon/sisyfos-audio-controller/commit/d55747927f75e1c687d8be8634629a2b7471a68d))
-   bouldn´ build app. Babel didn´t have preset-env installed ([58c573b](https://github.com/olzzon/sisyfos-audio-controller/commit/58c573b224d96f6c4b18451d63fbd6bba20768f5))
-   changed value var to any as it can be a string or a number ([cb975a9](https://github.com/olzzon/sisyfos-audio-controller/commit/cb975a9dbbbe6d7328076a45b0b456bf179effe5))
-   check for placement of {channel} in OSC commands ([67bab5b](https://github.com/olzzon/sisyfos-audio-controller/commit/67bab5b63316c4e93ed810a6665dadd2befd8a19))
-   checkOSC command, if {channel} was last parameter in command it returned false ([c959bf0](https://github.com/olzzon/sisyfos-audio-controller/commit/c959bf0d3337357bab0f14b5e6dedde593529e79))
-   CI added environment in test ([11ce0ee](https://github.com/olzzon/sisyfos-audio-controller/commit/11ce0ee8680600164ad08856c6b2ce9560263f23))
-   CI comment out whole test ([f3eb9f2](https://github.com/olzzon/sisyfos-audio-controller/commit/f3eb9f26a84ae0da465cfc12e6c5b48c29c47391))
-   CI only test build ([7905a6b](https://github.com/olzzon/sisyfos-audio-controller/commit/7905a6bccd13bd72b3ccb53621484a8472a56371))
-   CI only test build ([0c178b5](https://github.com/olzzon/sisyfos-audio-controller/commit/0c178b5fe5f91da24a420d92dd34b02416cbf8a5))
-   defaultChannelReducerState pushed to undefined array. ([f829191](https://github.com/olzzon/sisyfos-audio-controller/commit/f8291913aae5f156f2608632d5096654279a1419))
-   enable/disable HuiRemoteController in settings ([39e0824](https://github.com/olzzon/sisyfos-audio-controller/commit/39e08249152790a1ba4b1635acdf9775c36db29a))
-   Fade to excact target val (and not nearby) ([feafa5e](https://github.com/olzzon/sisyfos-audio-controller/commit/feafa5eacba96008f755199f1f719c187ed70882))
-   fadeOut didn´t end if fader was exactly === min ([2868a62](https://github.com/olzzon/sisyfos-audio-controller/commit/2868a629f7df645e0953440b81353cb0b9e8f7ca))
-   Fadi In/out when "master" mode didn´t turn down when PGM was on. ([2313f0d](https://github.com/olzzon/sisyfos-audio-controller/commit/2313f0d12bd9ca5628ce4567afab41a684babd33))
-   forgot to add new files in new location on last commit. ([b6e24ab](https://github.com/olzzon/sisyfos-audio-controller/commit/b6e24abf4a873023cd1ff03ea1270cefc7c529e4))
-   GrpFader.css - grpFader-pst-button.on show inactive color and off show active ([f8b3dc9](https://github.com/olzzon/sisyfos-audio-controller/commit/f8b3dc9a3e5bd8a9f66747c0654094fc090fc9a1))
-   GrpFader.tsx should not be a PurComponent when using shouldCompenentUpdate ([77ca0e3](https://github.com/olzzon/sisyfos-audio-controller/commit/77ca0e3ed9afa44e5692dbc380bfa566ecba30ce))
-   HUI remote - change test order of midi message so it checks for fader change before test for button ([38a71f7](https://github.com/olzzon/sisyfos-audio-controller/commit/38a71f7ea357b0355eae79c06434bf607a4f39b8))
-   HUI remote - only update HUI if connected ([ed855c0](https://github.com/olzzon/sisyfos-audio-controller/commit/ed855c0510885a2bf47b76177377bd8c2feea4f8))
-   Index offset when calling snap from automation ([28906d2](https://github.com/olzzon/sisyfos-audio-controller/commit/28906d273ce143b9a48f200401ded7d375f2b472))
-   Individual fadetime, use fadeTime var instead of default value in Fades ([dbf1f9b](https://github.com/olzzon/sisyfos-audio-controller/commit/dbf1f9bd81b00cd2e819dc7047288a1693f8fc09))
-   linux and win builds, no icon ([512b361](https://github.com/olzzon/sisyfos-audio-controller/commit/512b361e2894ce2193170086a5014eb9f57b126c))
-   Meters didn´t work on behringer and midas after renaming. ([b090182](https://github.com/olzzon/sisyfos-audio-controller/commit/b0901829b08f59d3466cceddfe75d85419c3e6e5))
-   missing /ch/1/visible ([f16674a](https://github.com/olzzon/sisyfos-audio-controller/commit/f16674ac4245313a1fb0d577f31ef3ac7e810ec8))
-   MixerConnection - Fade dispatch resolution didn´t iterate ([4cf207f](https://github.com/olzzon/sisyfos-audio-controller/commit/4cf207f70d7f108e82829620eebfcc6bd57dfcbc))
-   moved channelTypes to IMixerProtocolGeneric as it´s need when initialising the App for total number of channels ([33400f3](https://github.com/olzzon/sisyfos-audio-controller/commit/33400f36899e95ab9d5f96dbc43f49269f2be369))
-   offset between channel and array ([8e0fe91](https://github.com/olzzon/sisyfos-audio-controller/commit/8e0fe91e2b0d2f10713795ba0ea98743651717e8))
-   Only rerender when new state in store. Bug: snapOn is an array and forces a re-render everytime the redux runs it´s reducer ([98e48a1](https://github.com/olzzon/sisyfos-audio-controller/commit/98e48a164eadb878127a8b1e1574ddae416125b9))
-   PFL pass complete OSC command for turning on and of PFL ([acb3108](https://github.com/olzzon/sisyfos-audio-controller/commit/acb3108c89ca713ff55d92b8bca33d0f716f80e8))
-   Protocol cleanup - removed references to deleted protocols ([d01d3ca](https://github.com/olzzon/sisyfos-audio-controller/commit/d01d3ca792b5a6cf5f88c8a2ea7f1141fa2d941f))
-   Protocol cleanup, removed protocols deleted in import ([9afeded](https://github.com/olzzon/sisyfos-audio-controller/commit/9afeded2e30a03326d2b73c96a8344a09887c8d2))
-   re-render grp fader ([738895c](https://github.com/olzzon/sisyfos-audio-controller/commit/738895c6077dbe821126a947d427316348e9b411))
-   refered to props store instead of windows store ([f022d79](https://github.com/olzzon/sisyfos-audio-controller/commit/f022d79cac9b9e3b7a0c1406ae424328335f2c0a))
-   removed double background-color assignment in Channel.css ([9213f50](https://github.com/olzzon/sisyfos-audio-controller/commit/9213f50a9527e4dd9097f53311e3b9ce5b65c2e3))
-   Rerender when clicking on a snap button. props state is now each elements value and not the object of the element ([fbe8dcd](https://github.com/olzzon/sisyfos-audio-controller/commit/fbe8dcd837b81523e74093443aec4c955b9173c3))
-   SET_OUTPUT_LEVEL didn´t have a return so VU was set. ([0d14869](https://github.com/olzzon/sisyfos-audio-controller/commit/0d14869bd7ffea5541c2abc09ed0548714fd22e6))
-   slow crossfade when take 32channels. dispatchTrigger added, so store only updates every 5 times the OSC fader is updated. ([f70061d](https://github.com/olzzon/sisyfos-audio-controller/commit/f70061dc8052675121abefe3f6c2ee0f60dce7ef))
-   small type fixes ([d6d673f](https://github.com/olzzon/sisyfos-audio-controller/commit/d6d673ff208ee9a5ef2a428c1a1da16623bc3c58))
-   toggling a snap on a channel didn´t update the gui. its now checked in shouldComponentUpdate ([face0e3](https://github.com/olzzon/sisyfos-audio-controller/commit/face0e3288f1028031041112d242191b4ebbaa4c))
-   turned on channel instead of GrpFader ([56868af](https://github.com/olzzon/sisyfos-audio-controller/commit/56868af2840a6e7c19cf95c7fedc6104f4ddced8))
-   type - assigned true to pflOn instead of comparing in if ( = instead of === ) ([83e0cba](https://github.com/olzzon/sisyfos-audio-controller/commit/83e0cbac1e4c950777e28468a579b8ea8a77485f))
-   type used = instead of === ([c350927](https://github.com/olzzon/sisyfos-audio-controller/commit/c35092755abbde9ea6e586ca67b42bca9860417e))
-   TYPO ([e2f761a](https://github.com/olzzon/sisyfos-audio-controller/commit/e2f761a9db7e9b1bb1224f6ab5e41db949987133))
-   Update gain level in redux store so a change of volume while fading doesn´t jump back to gain from before last fade start ([68ae069](https://github.com/olzzon/sisyfos-audio-controller/commit/68ae0698bfd9c817286dfd158f4be8d5ecf4f87a))
-   Update webpack.build for ts with babel. ([70e2437](https://github.com/olzzon/sisyfos-audio-controller/commit/70e2437d870f699e03e79191119de4e4e6314a3c))
-   When an channelsetting is on and new protocol are selected that haven´t implementee channelsettings, the settings wouldn´t go away after reload. ([82373dd](https://github.com/olzzon/sisyfos-audio-controller/commit/82373dd0600e2fc21438f59af4b5461264dd048e))
-   When running as "master" volume did not lower when pgm on. ([069b4b0](https://github.com/olzzon/sisyfos-audio-controller/commit/069b4b0ab7cf81ffb73618b2a1bdd26830b28057))
-   window size on open, element types in Settings ([cdb2430](https://github.com/olzzon/sisyfos-audio-controller/commit/cdb2430b018db720f829c8c702dcdb5e1c07cbb6))
-   yarn build - did not build as || was used instead of && ([48930e8](https://github.com/olzzon/sisyfos-audio-controller/commit/48930e8d64bea302d8bdf40413faed675c3bbeb6))
