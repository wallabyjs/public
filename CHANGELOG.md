<a name="Core 1.0.81, IntelliJ 1.0.25, VS 1.0.12"></a>
# Core 1.0.81, IntelliJ 1.0.25, Visual Studio 2013-2015 1.0.12 (2015-07-21)

## Changes and Bug Fixes

- Jest 0.5.x support [#180](https://github.com/wallabyjs/public/issues/180).
- Require.js Text plugin support (and generally XHR loaded files support) [#183](https://github.com/wallabyjs/public/issues/183).
- Added [`env.report404AsError` setting](http://wallabyjs.com/docs/config/runner.html) to report requested missing resources as errors.
- Updated several project dependencies to their newer versions.
- Implemented `urlArgs` support for require.js configurations.
- Changed debug output to use `stdout` instead of `stderr`.
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
