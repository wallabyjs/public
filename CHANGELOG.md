<a name="Core 1.0.264, IntelliJ 1.0.68, VS 1.0.23, Atom 1.0.28, VS Code 1.0.19, Sublime 1.0.20"></a>
# Core 1.0.264, IntelliJ 1.0.68, Visual Studio 2013-2015 1.0.23, Atom 1.0.28, Visual Studio Code 1.0.19, Sublime Text 1.0.20 (2016-07-21)

## Changes and Bug Fixes

- [Wallaby.js App](http://dm.gl/2016/07/19/wallaby-app/).
- [AVA support](http://dm.gl/2016/04/26/wallaby-sublime-electron-ava/#ava-support).
- Experimental Tape support.
- TypeScript 1.9, 2.0, 2.1 support.
- Allowed comments in `tsconfig.json`.
- Improved `files` pattern normalisation (increases startup performance).
- Improved `setup`/`teardown` functions serializations (now supports arrow functions and ES6 class methods).
- Experimental support for `ng-cli`.
- Added [`slowTestThreshold` setting](https://wallabyjs.com/docs/config/overview.html#slow-tests).
- Added [`lowCoverageThreshold` setting](https://wallabyjs.com/docs/config/overview.html#low-code-coverage-level).
- Node.js 6.x [compatibility issue fixes](https://github.com/nodejs/node/pull/5522).
- Jest 11, 12, 13 support (plus npm 2 support for Jest projects).
- Babel [source maps fixes](https://github.com/wallabyjs/public/issues/570).
- Angular 2 async tests instrumentation fixes.
- Electron test runner stability and performance updates [#597](https://github.com/wallabyjs/public/issues/597).
- Error stack mapping for Electron runner for System.js.
- Improved instrumentation performance by moving to the latest `acorn` version.
- Fixed Jasmine spies tracking [#621](https://github.com/wallabyjs/public/issues/621).
- Passing environment variables in extended core [#622](https://github.com/wallabyjs/public/issues/622).
- Support `testFramework.path` setting for node `mocha`.
- Better chai support in PhantomJs2 [#547](https://github.com/wallabyjs/public/issues/549).
- Fixed `chai` + `chai-as-promised` stack reporting scenarios [#684](https://github.com/wallabyjs/public/issues/684#issuecomment-232491528).
- Added `setFileOrder` method to the [postprocessor API](https://wallabyjs.com/docs/config/postprocessor.html).
- Fixed the case when suite name conflicts with a test name [#547](https://github.com/wallabyjs/public/issues/547).
- Added different case `PATH` variable check [#555](https://github.com/wallabyjs/public/issues/555).
- Extended core (affects Atom, VS Code, Sublime Text, Wallaby App) performance improvements for medium-large projects.
- Fixed escaping for test/suite names [#595](https://github.com/wallabyjs/public/issues/595).
- Fixed `for-in` statements instrumentation.
- Extended core clients are now connecting to the core via WebSocket (improves performance).
- Added `.jsx` extension to supported by default node extensions.
- Optimised the initial file scan for IntelliJ platform (significantly increases the startup performance if `files` patterns affect large folders).
- [Inline messages](http://wallabyjs.com/assets/img/vsc.gif) VS Code.
- `Show last screenshot` feature for VS Code.
- Configurable icon colors for VS Code.
- Fixed Atom sending full file as changed on opening it.
- Fixed Atom hiding inline messages before any changes.
- Toggling uncovered region visibility in Atom on indicator click [#617](https://github.com/wallabyjs/public/issues/617).
- Allowed to mute license notification group from the popup for IntelliJ platform.
- Allowed to use a setting for `localhost` in Sublime Text [#584](https://github.com/wallabyjs/public/issues/584).
- Updated VS extension dependencies.
- Added external (core) navigation request support to VS extension.

<a name="Core 1.0.211, IntelliJ 1.0.55, VS 1.0.21, Atom 1.0.22, VS Code 1.0.11, Sublime 1.0.18"></a>
# Core 1.0.211, IntelliJ 1.0.55, Visual Studio 2013-2015 1.0.21, Atom 1.0.22, Visual Studio Code 1.0.11, Sublime Text 1.0.18 (2016-04-05)

## Changes and Bug Fixes

- Support for testing in the latest Chromium/V8 environment via [Electron test runner](http://wallabyjs.com/docs/integration/electron.html).
- Support for `tsconfig.json` file, allows not to have a `compilers` section for TypeScript at all.
- Included `Function.prototype.bind` polyfill for PhantomJs in wallaby core.
- Added [`maxConsoleMessagesPerTest` config setting](http://wallabyjs.com/docs/config/overview.html#maximum-console-messages-logged-per-test).
- `.babelrc` changes now automatically invalidate wallaby cache.
- `.babelrc` is now only used when no other babel options are passed to avoid any plugin duplications.
- Jest 0.9 and 0.10 support.
- Jasmine 2.4.1 support.
- Fixed a few Webpack 2 support issues [#502](https://github.com/wallabyjs/public/issues/502), [#519](https://github.com/wallabyjs/public/issues/519).
- Improved hanging test (and generally long running test) reporting [#141](https://github.com/wallabyjs/public/issues/141).
- Fixed `for-of` and `for-in` instrumentation so that the loops are reported and `const` is supported in the left node.
- Changed default TS compiler to include `.tsx` files.
- Updated embedded TS compiler version to 1.8.2.
- Added `iit` and `ddescribe` support in Jasmine 1.3.
- ES6 module [support for wallaby config](https://github.com/wallabyjs/public/issues/530).
- Improved corrupted cache check and the error message about it.
- Improved code instrumentation to include more string literals that should stay at the top of a function (`use babel`, `ngInject`, etc.).
- Correctly capturing globals in node runner [#522](https://github.com/wallabyjs/public/issues/522), [#526](https://github.com/wallabyjs/public/issues/526).
- Fixed babel compiler alias related settings issue [#477](https://github.com/wallabyjs/public/issues/477).
- Extended the list of binary file extensions for extended core [#521](https://github.com/wallabyjs/public/issues/521).
- Fixed the issue with missing indicators in IntelliJ plugin [#493](https://github.com/wallabyjs/public/issues/493).
- Fixed fast-typing caused indicators/messages update issues in IntelliJ plugin.
- Allowed specifying anny node version for running wallaby.js core in [IntelliJ plugin](http://wallabyjs.com/docs/intro/install.html#nodejs) + the related fixed IDE version upgrade issue [#545](https://github.com/wallabyjs/public/issues/545).
- Added failing tests indicator for presentation and distraction free modes in IntelliJ plugin [#106](https://github.com/wallabyjs/public/issues/106).
- Updated core node version in VS extension.
- Fixed license activation issue in VS extension (`/username/.wallaby` doesn't exist) [#296](https://github.com/wallabyjs/public/issues/296).
- Improved diff feature in Atom to consider broader word boundaries (such as object literals).
- Fixed editor and change tracking issue in Atom [#30](https://github.com/wallabyjs/atom-wallaby/issues/30).
- Fixed wallaby editor gutter management issue in Atom [#18](https://github.com/wallabyjs/atom-wallaby/issues/18).
- Implemented new wallaby indicator for VS Code (includes test stats).
- Fixed performance issues with a lot of `console.log` output in VS Code [#500](https://github.com/wallabyjs/public/issues/500).
- Fixed node version setting issue in VS Code.
- Optimized result rendering in Sublime Text [#460](https://github.com/wallabyjs/public/issues/460).
- Improved editor gutter sharing with other plugins in Sublime Text [#454](https://github.com/wallabyjs/public/issues/454), [#436](https://github.com/wallabyjs/public/issues/439).
- Fixed dependency unpacking issue in Linux Fedora for Sublime Text [#450](https://github.com/wallabyjs/public/issues/450).
- Fixed multiple cursor shortcut compatibility issue in Sublime Text [#444](https://github.com/wallabyjs/public/issues/444).
- Support for node version selection for Sublime Text [#439](https://github.com/wallabyjs/public/issues/439).

<a name="Core 1.0.170, IntelliJ 1.0.46, VS 1.0.20, Atom 1.0.19, VS Code 1.0.9, Sublime 1.0.11"></a>
# Core 1.0.170, IntelliJ 1.0.46, Visual Studio 2013-2015 1.0.20, Atom 1.0.19, Visual Studio Code 1.0.9, Sublime Text 1.0.11 (2016-02-02)

## Changes and Bug Fixes

- Simplified configuration for Babel, TypeScript, CoffeeScript (local module lookup, ``.babelrc` support).
- Improved changed test detection algorithm.
- Added a [setting to fail tests](http://wallabyjs.com/docs/config/overview.html#report-console-error-as-test-run-error) if there were any `console.error` calls.
- SystemJS support improvements (better instrumentation to avoid interfering with its module type guessing algorithm).
- Error stack from PhantomJs `Parse Error`.
- Added a warning about glob patterns in project path.
- Added jasmine 2 support in jest [#431](https://github.com/wallabyjs/public/issues/431).
- Improved chai (error stacks) support.
- Improved jasmine (pending tests) support.
- Improved qunit (error reporting) support.
- Improved symlinks resolution [#416](https://github.com/wallabyjs/public/issues/416).
- Fixed babel compiler for plugins that require `filename` to be passed in [#440](https://github.com/wallabyjs/public/issues/440).
- Added `.es6` as a supported JavaScript file type extension.
- Added HTML sandbox page title [#413](https://github.com/wallabyjs/public/issues/413).
- Added binary file types support in extended core [#414](https://github.com/wallabyjs/public/issues/414).
- Added [diff feature in Atom](https://twitter.com/wallabyjs/status/692233780610859009).
- Fixed file renaming/moving issue with coverage indicators in Atom.
- Added HTTP proxy support for VS Code extension [#426](https://github.com/wallabyjs/public/issues/426).
- Fixed file opening/closing handling logic issue with coverage indicators for VS Code.
- [Sublime Text integration](http://wallabyjs.com/docs/intro/get-started-sublime.html).

<a name="Core 1.0.152, IntelliJ 1.0.46, VS 1.0.20, Atom 1.0.17, VS Code 1.0.3"></a>
# Core 1.0.152, IntelliJ 1.0.46, Visual Studio 2013-2015 1.0.20, Atom 1.0.17, Visual Studio Code 1.0.3 (2015-12-11)

## Changes and Bug Fixes

- Added [Visual Studio Code support](http://wallabyjs.com/docs/intro/get-started-vscode.html).
- Switched to use node processes (for both core and node test) in extended core.
- Fixed Jasmine `xit` test reporting and added 'pending' status support.
- Added Jest 0.6, 0.7, 0.8.1 support.
- Improved XHR interception in tracer.
- Fixed node modules resolution priority [#319](https://github.com/wallabyjs/public/issues/319).
- Improved (and fixed timeouts) file system scanning in extended core.
- Enabled WebSocket exposed API in extended core.
- Fixed test name formatting issue in Visual Studio.
- Fixed console logging issue in Atom.
- Added shortcut hints in VS Code wallaby command palette.

<a name="Core 1.0.142, IntelliJ 1.0.46, VS 1.0.17, Atom 1.0.16"></a>
# Core 1.0.142, IntelliJ 1.0.46, Visual Studio 2013-2015 1.0.17, Atom 1.0.16 (2015-11-12)

## Changes and Bug Fixes

- Added [Babel 6 support](http://wallabyjs.com/docs/integration/es-next.html#babel-6).
- Added [Webpack 2 (beta) support](https://github.com/jeffling/wallaby-webpack).
- Added [Jasmine for node.js support](http://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks).
- Added support for a custom testing framework version path for browser.
- Added support for [SystemJs `scriptLoad`](http://wallabyjs.com/docs/integration/systemjs.html), so JSPM, Angular 2, Aurelia, etc. can now display inline error messages correctly.
- Fixed forced 'use strict' support in node.js [#302](https://github.com/wallabyjs/public/issues/302).
- Implemented reference comments based file ordering support for TypeScript [#161](https://github.com/wallabyjs/public/issues/161).
- Moved internal node.js version used by core to v4.4.2 [#331](https://github.com/wallabyjs/public/issues/331).
- Implemented better path normalization for System.js/Require.js/JSPM support.
- Implemented safe delete for instrumented files for file delele operations (for TypeScript + Webpack/Browserify scenarious).
- Implemented full glob/minimatch support in IntelliJ platform [#69](https://github.com/wallabyjs/public/issues/69).
- Fixed test comparer transitivity issue in IntelliJ platform.
- Added a limit on a number displayed tests in Atom (+ Show All button).
- Fixed selection range persisitng issue in Atom [#21](https://github.com/wallabyjs/atom-wallaby/issues/21).
- Fixed extended core test start link generation issue.

<a name="Core 1.0.130, IntelliJ 1.0.38, VS 1.0.17, Atom 1.0.12"></a>
# Core 1.0.130, IntelliJ 1.0.38, Visual Studio 2013-2015 1.0.17, Atom 1.0.12 (2015-10-14)

## Changes and Bug Fixes

- Added a few new rules for automatic test runs.
- Jasmine 2.3.4 support [#292](https://github.com/wallabyjs/public/issues/292).
- Support for single expression arrow function coverage in ES6.
- Improved reporting for PhantomJs parse errors [#13](https://github.com/wallabyjs/atom-wallaby/issues/13).
- Updated Jest 0.5.x support.
- Implemented correct test run cancelling when postprocessor is used.
- Fixed shoe/socksjs issue with WS transport switching [#66](https://github.com/wallabyjs/public/issues/66).
- `require.ensure` support and correct module caching in Webpack integration.
- Improved Webpack/Browserify integration error reports.
- Added 'busy' notification (core + across all editors) to better reflect the core state (whether it's doing something  or not).
- Fixed test name equality issue [#290](https://github.com/wallabyjs/public/issues/290).
- Fixed folder opeation tracking issues in IntelliJ platform.
- Fixed mass file operation tracking issues in IntelliJ platform.
- Added support for duplicated file paths in Visual Studio [#283](https://github.com/wallabyjs/public/issues/283).
- Improved inline messages performance and stability in Atom.
- Implemented hiding obsolete inline messages (errors/log messages) when editing a line of code in Atom.
- Fixed package name in Atom loader (was causing automatic updates failures).
- Fixed broken scenario of accessing uninitialized plugin in Atom [#16](https://github.com/wallabyjs/atom-wallaby/issues/16).
- Fixed change/patch duplication in extended core file system [#11](https://github.com/wallabyjs/atom-wallaby/issues/11).

<a name="Core 1.0.115, IntelliJ 1.0.32, VS 1.0.16, Atom 1.0.8"></a>
# Core 1.0.115, IntelliJ 1.0.32, Visual Studio 2013-2015 1.0.16, Atom 1.0.8 (2015-09-24)

## Changes and Bug Fixes

- [AngularJs 2 support](https://github.com/wallabyjs/wallaby-typescript-angular-seed).
- Webpack + TypeScript support [#271](https://github.com/wallabyjs/public/issues/271).
- Added [`teardown` function support](wallabyjs.com/docs/config/bootstrap.html#teardown-function) for node.js environment.
- Improved core algorithms for determining what tests to run on changes, implemented loading sequences capturing.
- Implemented [customizable TypeScript compiler version](http://wallabyjs.com/docs/integration/typescript.html#typescript-compiler-version).
- Made built-in compilers to stay even if adding custom ones [#261](https://github.com/wallabyjs/public/issues/261).
- Improved logging from global scope (before any tests were executed).
- Added [session id and worker id](http://wallabyjs.com/docs/config/bootstrap.html) to node.js wallaby bootstrap/teardown parameter.
- Fixed node module resolution by full path issue [#259](https://github.com/wallabyjs/public/issues/259).
- Fixed webpack integration `entryPatterns` issues [#252](https://github.com/wallabyjs/public/issues/252).
- Fixed postprocessor dependent files deleting issues [#260](https://github.com/wallabyjs/public/issues/260).
- Improved postprocessor log reporting.
- Correct reporting for errors in test hooks [#253](https://github.com/wallabyjs/public/issues/253).
- Output window colors fix in Visual Studio [#270](https://github.com/wallabyjs/public/issues/270).
- Fixed Unexpected.js ANSI output line breaks issue [#262](https://github.com/wallabyjs/public/issues/262).
- Added existing and new plugin version to IntelliJ update notification [#268](https://github.com/wallabyjs/public/issues/268).
- Increased dependency downloading timeout in Visual Studio.
- Fixed node.js + TypeScript [stack mapping on Windows](https://twitter.com/jonasbjering/status/644804941979254784).
- Fixed a few file path changing related issues in Atom (file renaming, moving, etc.).
- Fixed wallaby config tree selection in Atom.
- Fixed duplicated uncovered region markers in Atom.
- Implemented extended core graceful exit on Windows.
- Implemented lazy file ordering to improve core performance.

<a name="Core 1.0.98, IntelliJ 1.0.27, VS 1.0.15, Atom 1.0.3"></a>
# Core 1.0.98, IntelliJ 1.0.27, Visual Studio 2013-2015 1.0.15, Atom 1.0.3 (2015-09-07)

## Changes and Bug Fixes

- [Atom editor support](http://wallabyjs.com/docs/intro/get-started-atom.html).
- Implemented more reliable mechanism of re-running failed tests in affected test files on source file changes [#247](https://github.com/wallabyjs/public/issues/247).
- Unexpected.js support in IntelliJ platfrom [#237](https://github.com/wallabyjs/public/issues/237).
- CoffeeScript 1.10 support.
- CoffeeScript loop results return mapping fix [#240](https://github.com/wallabyjs/public/issues/240).
- Fixed Atom tree view file operations issues in wallaby [#246](https://github.com/wallabyjs/public/issues/246).
- Fixed the issue of loading files referenced directly twice in Visual Studio [#229](https://github.com/wallabyjs/public/issues/229).
- Fixed TypeScript compiler issue being deactivated initially if there're not .ts files and not activated later when there're some being added.
- Extended core introduction and main core refactoring to support it.
- Setting correct cwd in extended core.
- Passing local bin on Mac OSX (if not passed) in extended core.
- Issuing test stats in case in no file change was detected in extended core.
- Fixed file deleting logic in extended core to update test stats.
- Reporting bug fixes in extended core report builder.

<a name="Core 1.0.86, IntelliJ 1.0.26, VS 1.0.14"></a>
# Core 1.0.86, IntelliJ 1.0.26, Visual Studio 2013-2015 1.0.14 (2015-08-18)

## Changes and Bug Fixes

- Reporting full error stack to the 'Failing Tests' if there's no user code stack in case of global/async errors.
- Improved PhantomJs 2 support.
- Implemented `clearMemoryCache` opt-in support (for [cases when JS files are loaded into the sandbox not by wallaby.js](https://github.com/wallabyjs/public/issues/234#issuecomment-131015111), such as Polymer/Web Components).
- Removed excessive console logging for the case when not tests were executed.
- Fixed multiple markers issue in IntelliJ platform [#218](https://github.com/wallabyjs/public/issues/218).
- Updated install instructions in the JAR file.
- Implement support for files that are not under solution/project in Visual Studio.
- Fixed open/change/close without saving scenario in Visual Studio.
- Fixed the issue when clicking on a coverage indicator in Visual Studio 2015 in a TypeScript project did not show a peek preview for the test.

<a name="Core 1.0.84"></a>
# Core 1.0.84 (2015-08-04)

## Changes and Bug Fixes

- Literate CoffeeScript support [#220](https://github.com/wallabyjs/public/issues/220).
- Improved sinon.js support [#194](https://github.com/wallabyjs/public/issues/194).
- Fixed `$$` in file name issue [#219](https://github.com/wallabyjs/public/issues/219).
- Added global teardown support for node.js tests (internal for now).

<a name="Core 1.0.82, IntelliJ 1.0.25, VS 1.0.12"></a>
# Core 1.0.82, IntelliJ 1.0.25, Visual Studio 2013-2015 1.0.12 (2015-07-21)

## Changes and Bug Fixes

- Jest 0.5.x support [#180](https://github.com/wallabyjs/public/issues/180).
- TypeScript 1.5.3 support.
- Require.js Text plugin support (and generally XHR loaded files support) [#183](https://github.com/wallabyjs/public/issues/183).
- Added [`env.report404AsError` setting](http://wallabyjs.com/docs/config/runner.html) to report requested missing resources as errors.
- Updated several project dependencies to their newer versions.
- Implemented `urlArgs` support for require.js configurations.
- Changed debug output to use `stdout` instead of `stderr`.
- Implemented editor commands for smart actions, so now it's possible to map shortcuts to all wallaby.js actions.
- Added default shortcuts for the "context menu" commands in Visual Studio.
- Implemented Wallaby Console activation on errors from core in Visual Studio, added scrolling Failing Tests view to top when new results received.
- Fixed error reporting issue in QUnit (message spaces and stack).
- Fixed the case of wallaby.js not reporting errors reported by mocha in multiple `done(err)` calls. [#199](https://github.com/wallabyjs/public/issues/199).
- Fixed few special cases for CoffeeScript compiler generated source maps.
- Fixed console.log message range mapping for CoffeeScript. [#203](https://github.com/wallabyjs/public/issues/203).
- Fixed TypeScript tests stopping after the initial run [#182](https://github.com/wallabyjs/public/issues/182).

<a name="Core 1.0.73, IntelliJ 1.0.24, VS 1.0.11"></a>
# Core 1.0.73, IntelliJ 1.0.24, Visual Studio 2013-2015 1.0.11 (2015-07-07)

## Changes and Bug Fixes

- Compilers infrastructure improvements (including performance).
- Improved diagnostics for the case when a test times out.
- Fixed TypeScript compiler issue for AMD [#173](https://github.com/wallabyjs/public/issues/173).
- Changed TypeScript compiler replacement logic to trigger in all cases except CommonJs modules.
- Made compiled files to inherit `load` property from original ones in TypeScript compiler.
- For the case when compiler produces some files, excluded original files from the tests list available from wallaby parameter.
- Added re-try logic for the core update process in Visual Studio [#169](https://github.com/wallabyjs/public/issues/169).
- Fixed wallaby.js initialization error in Visual Studio [#164](https://github.com/wallabyjs/public/issues/164).
- Implemented icons color change on failing tests in Visual Studio.
- Fixed wallaby.js hanging in case of an error in middleware function in Visual Studio.

<a name="Core 1.0.69, IntelliJ 1.0.21, VS 1.0.9"></a>
# Core 1.0.69, IntelliJ 1.0.21, Visual Studio 2013-2015 1.0.9 (2015-06-23)

## Changes and Bug Fixes

- Allowed specifying the test framework name (in `testFramework` property) without a version to use the latest supported version of the framework.
- Assertion data diff viewer support to IntelliJ platform [#163](https://github.com/wallabyjs/public/issues/163).
- Added "Run project tests" action to IntelliJ platform.
- Added a warning to the Wallaby Console when it can't determine what tests to run as a result of some code changes.
- Fixed babel plugins adding logic [#157](https://github.com/wallabyjs/public/issues/157).
- Fixed TypeScript `.d.ts` files handling in wallaby.js.
- Replaced the internal websocket connection address from `localhost` to `127.0.0.1` to address the case of running wallaby.js without internet connection [#102](https://github.com/wallabyjs/public/issues/102).
- IntelliJ platform 142 support (IDEA 15, etc.).
- Implemented "Restart Wallaby.js" command in Visual Studio.
- Implemented support (in editor) of move/rename/include operations for opened files in Visual Studio.
- Visual Studio 2015 support.
- Visual Studio 2013 Update 5 RC support.
- Performance tuning for Visual Studio.

<a name="Core 1.0.64, IntelliJ 1.0.19, VS 1.0.7"></a>
# Core 1.0.64, IntelliJ 1.0.19, Visual Studio 2013 1.0.7 (2015-06-17)

## Changes and Bug Fixes

- PhantomJs page viewport size setting support [#150](https://github.com/wallabyjs/public/issues/150).
- Implemented Solution Items support for wallaby configuration files in Visuall Studio (wallaby.js config file may now be a solution item) [#153](https://github.com/wallabyjs/public/issues/153).
- Performance tuning for IntelliJ platform.

<a name="Core 1.0.62, VS 1.0.6"></a>
# Core 1.0.62, Visual Studio 2013 1.0.6 (2015-06-09)

## Changes and Bug Fixes

- Improved test sandbox cleanup.
- Implemented require.main.require support in node.js environment (added wallaby cache paths to main modules paths) [#147](https://github.com/wallabyjs/public/issues/147).
- Fixed startup issue (missing error handling) [#140](https://github.com/wallabyjs/public/issues/140).
- Fixed Jest integration issue with not correct cancelling of previously scheduled tests [#142](https://github.com/wallabyjs/public/issues/142).
- Fixed Jest integration performance issue [#148](https://github.com/wallabyjs/public/issues/148).
- Fixed wallaby.js Xamarin (and other extensions) compatibility issues [#138](https://github.com/wallabyjs/public/issues/138).
- Fixed wallaby.js restart issue with invalid config in Visual Studio [#143](https://github.com/wallabyjs/public/issues/143).

<a name="Core 1.0.55, IntelliJ 1.0.18, VS 1.0.4"></a>
# Core 1.0.55, IntelliJ 1.0.18, Visual Studio 2013 1.0.4 (2015-06-01)

## Changes and Bug Fixes

- PhantomJs 2 support [#137](https://github.com/wallabyjs/public/issues/137).
- Made "Jump to Failing Test" action available for any context (not just coverable line) and has made context actions icon color be reflect the latest test results.
- Fixed wallaby.js ReSharper 9.1.1 compatibility issues [#134](https://github.com/wallabyjs/public/issues/134).
- Improved the IntelliJ plugin installation uer experience [#129](https://github.com/wallabyjs/public/issues/129).
- Fixed timing issue on Windows when node process is requested while still connecting to it.
- Signalling live event even if the file cache is invalid but up-to-date (fixes occasional issues when starting to wallaby.js with invalid JavaScript code).

<a name="Core 1.0.52, IntelliJ 1.0.16, VS 1.0.1"></a>
# Core 1.0.52, IntelliJ 1.0.16, Visual Studio 2013 1.0.1 (2015-05-25)

## Changes and Bug Fixes

- Fixed a few Facebook Jest integration issues [#112](https://github.com/wallabyjs/public/issues/112), [#115](https://github.com/wallabyjs/public/issues/115), [#118](https://github.com/wallabyjs/public/issues/118), [#121](https://github.com/wallabyjs/public/issues/121).
- Implemented ES6 assignment property support [#122](https://github.com/wallabyjs/public/issues/122).
- Allowed to reference node modules by relative path from `bootstrap` function for node.js tests [#123](https://github.com/wallabyjs/public/issues/123).
- Added [PhantomJs params passing support](https://github.com/wallabyjs/wallaby-external-script/blob/master/wallaby.js#L15).
- Extended trial session time.

<a name="Core 1.0.45, VS 1.0.0"></a>
# Core 1.0.45, Visual Studio 2013 1.0.0 (2015-05-18)

## Changes and Bug Fixes

- [Visual Studio preview support](http://dm.gl/2015/05/18/wallaby-for-visual-studio/).
- Added projectCacheDir to bootstrap argument [#107](https://github.com/wallabyjs/public/issues/107).
- Fixed PhantomJs page reloading caused memory leak [#108](https://github.com/wallabyjs/public/issues/108).
- Fixed NODE_PATH overriding issue in Jest initializer [#110](https://github.com/wallabyjs/public/issues/110).

<a name="Core 1.0.42, IntelliJ 1.0.14"></a>
# Core 1.0.42, IntelliJ 1.0.14 (2015-05-15)

## Changes and Bug Fixes

- Implemented Facebook Jest support [#44](https://github.com/wallabyjs/public/issues/44).
- Improved initial file scanning performance.
- Added possible infinite loop in test warning.
- Added wallaby core version to the Wallaby Console output.
- Fixed affected tests run when a source file is deleted [#103](https://github.com/wallabyjs/public/issues/103).
- Patched Jasmine spy to create an error with correct stack [#104](https://github.com/wallabyjs/public/issues/104).

<a name="Core 1.0.39, IntelliJ 1.0.12"></a>
# Core 1.0.39, IntelliJ 1.0.12 (2015-05-08)

## Changes and Bug Fixes

- Upgraded TypeScript compiler to 1.5 beta.
- Added licensing mechanism.
- Removed checking it function arguments from Jasmine integration [#96](https://github.com/wallabyjs/public/issues/96).
- Avoid stopping running session for errors with no stack, added chai specific default node setting [#92](https://github.com/wallabyjs/public/issues/92).
- Added a queue of file change commands to avoid sending the file change operations from the core is live.

<a name="Core 1.0.36, IntelliJ 1.0.9"></a>
# Core 1.0.36, IntelliJ 1.0.9 (2015-04-28)

## Changes and Bug Fixes

- Implemented a way to [negate file path](https://github.com/wallabyjs/public#file-object) (inverts ignore property) [#62](https://github.com/wallabyjs/public/issues/62).
- Implemented a way for [overriding defaults for files and tests list pattern objects](https://github.com/wallabyjs/public#file-object) [#71](https://github.com/wallabyjs/public/issues/71).
- Fixed JSX whitespaces instrumentation [#88](https://github.com/wallabyjs/public/issues/88).
- Added passing test number reporting and number of executed affected tests [#86](https://github.com/wallabyjs/public/issues/86).
- Implemented TypeScript internal modules support via switching to built-in TypeScript postprocessor as opposed to just using the compiler.
- Improved file change management to avoid saving it in IDE on every change [#82](https://github.com/wallabyjs/public/issues/82).
- Fixed incorrect instrumentation of ES6 super-call with spread operator [#83](https://github.com/wallabyjs/public/issues/83).

<a name="Core 1.0.28"></a>
# Core 1.0.28 (2015-04-21)

## Changes and Bug Fixes

- Implemented changing coffee files extension to js (for node.js environment) in CoffeeScript builtin compiler be default.
- Implemented console.log invocation for cases when console.log is replaced with a different implementation, for example a sinon spy which results may be used in tests).
- Implemented correct stack mapping for preprocessor renamed files.
- Fixed an issue with screenshot taking and test cleanup code [#73](https://github.com/wallabyjs/public/issues/73).
- Added a trailing path separator to local project dir property.
- Fixed empty variable declaration instrumenting case when the same variable is declared more than once.
- Fixed ES6 default function parameter instrumenting case.
- Fixed an issue with wallaby.js cache breaking for non JavaScript files [#66](https://github.com/wallabyjs/public/issues/66).

<a name="Core 1.0.22"></a>
# Core 1.0.22 (2015-04-14)

## Changes and Bug Fixes

- Implemented [compilers extension point](https://github.com/wallabyjs/public#compilers-setting).
- Implemented built-in TypeScript, CoffeeScript and Babel compilers [#49](https://github.com/wallabyjs/public/issues/49), [#60](https://github.com/wallabyjs/public/issues/60), [#61](https://github.com/wallabyjs/public/issues/61).
- Added support for Mocha 2.2.4, QUnit 1.18.0
- Fixed an issue with running tests with the same name in Jasmine [#64](https://github.com/wallabyjs/public/issues/64).
- Fixed an issue with running tests with the same name in QUnit [#65](https://github.com/wallabyjs/public/issues/65).

<a name="Core 1.0.18"></a>
# Core 1.0.18 (2015-04-04)

## Changes and Bug Fixes

- Implemented JSX spread attribute support.

<a name="Core 1.0.17"></a>
# Core 1.0.17 (2015-04-01)

## Changes and Bug Fixes

- Implemented SystemJS support.
- Fixed failed pasring for files with shebang [#58](https://github.com/wallabyjs/public/issues/58).
- Exposed `projectCacheDir` property from wallaby config argument.

<a name="Core 1.0.13"></a>
# Core 1.0.13 (2015-03-30)

## Changes and Bug Fixes

- Added config.middleware extension point to allow configuring wallaby hosted web server.
- Fixed ES6 module imports instrumentation [#55](https://github.com/wallabyjs/public/issues/55).
- Implemented rest element support in escodegen fork.

<a name="Core 1.0.11"></a>
# Core 1.0.11 (2015-03-27)

## Bug Fixes

- Fixed require.js app files caching issues on Windows (changing app files was not trigerring tests because files were cached in phantomjs until wallaby.js restart).

<a name="Core 1.0.9, IntelliJ 1.0.5"></a>
# Core 1.0.9, IntelliJ 1.0.5 (2015-03-26)

## Changes and Bug Fixes

- Various core changes to support postprocessors, enabling to support module bundlers, such as webpack and browserify ([#27](https://github.com/wallabyjs/public/issues/27), [#9](https://github.com/wallabyjs/public/issues/9))
- Fixed an issue when creating one files while wallaby is running sends multiple requests to the server
- Fixed WebStorm file renaming issue ([#43](https://github.com/wallabyjs/public/issues/43))

<a name="IntelliJ 1.0.4"></a>
# IntelliJ 1.0.4 (2015-03-19)

## Bug Fixes

- Fixed WebStorm 10 EAP compatibility issues, including but not limited to ([#42](https://github.com/wallabyjs/public/issues/42))

<a name="Core 1.0.7"></a>
# Core 1.0.7 (2015-03-11)

## Bug Fixes

- Added warnings displayed when tests list contains files from files lists or no tests found ([#35](https://github.com/wallabyjs/public/issues/35))
- Allowed to use local node modules from bootstrap function ([#40](https://github.com/wallabyjs/public/issues/40))
- Fixed buffers caching for binary files, such as images ([#31](https://github.com/wallabyjs/public/issues/31))
