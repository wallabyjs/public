<a name="Core 1.0.36, IntelliJ 1.0.9"></a>
# Core 1.0.36, IntelliJ 1.0.9 (2015-04-28)

## Changes and Bug Fixes

- Implemented a way to [negate file path](https://github.com/wallabyjs/public#file-object) (inverts ignore property) [#62](https://github.com/wallabyjs/public/issues/62).
- Implemented a way for [overriding defaults for files and tests list pattern objects]() https://github.com/wallabyjs/public#file-object [#71](https://github.com/wallabyjs/public/issues/71).
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
