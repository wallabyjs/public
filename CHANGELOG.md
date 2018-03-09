Please note that while the changelog is updated every few months, we release new versions of wallaby.js a few times a week (sometimes few times a day). You may [follow us on twitter](https://twitter.com/wallabyjs) to get notified whenever we release some notable features.

<a name="Core 1.0.566, Wallaby App 1.0.36, IntelliJ 1.0.108, VS 1.0.33, Atom 1.0.39, VS Code 1.0.78, Sublime 1.0.39"></a>
# Core 1.0.566, Wallaby App 1.0.36, IntelliJ 1.0.108, Visual Studio 2013, 2015, 2017 1.0.33, Atom 1.0.39, Visual Studio Code 1.0.78, Sublime Text 1.0.39 (2018-03-09)

## Changes and Bug Fixes

- Webpack 4 support.
- Babel 7.0.0-beta.40 support.
- [@std/esm](https://github.com/standard-things/esm) support.
- JSX fragments support.
- Time and auto-log within a [single live comment](https://twitter.com/wallabyjs/status/955716471195287553).
- Added `Update snapshot` actions/commands.
- Added `Open Wallaby App` command.
- VS Code v1.19, v1.20 support.
- Atom v1.23, v1.24 support.
- Sublime Text v3157 support.
- Jest v22.1, v22.2, v22.3, v22.4 support.
- Jasmine v2.8, v2.9, v3.0, v3.1 support.
- Ava v1.0.0-beta.3 support.
- Automatically adding Jest snapshots to `files`.
- `binary` flag support in JetBrains IDEs.
- Hi-dpi icons support in JetBrains IDEs [#1443](https://github.com/wallabyjs/public/issues/1443).
- Allowing any number whitespaces between an expression and a live comment attached to it.
- Added `hints.allowIgnoringCoverageInTests` setting.
- Various instrumentation related performance optimizations.
- Using babel version from package.json `dependencies`/`devDependencies` by default.
- Performance optimization for cases with many promises (like lots of file reads/writes).
- Support [custom inspection functions](https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects).
- `.mjs` file extension support.
- Support `SourceMapGenerator` instance passed as a source map to a preprocessor.
- Automatically mapping Jest `<rootDir>` to local folder for local files.
- Using special token to display empty strings inline.
- Improved Files and Tests trees hover styles in Wallaby App.
- `JSXText` support [#1448](https://github.com/wallabyjs/public/issues/1448).
- Chrome launcher `--deterministic-fetch` is on by default [#1514](https://github.com/wallabyjs/public/issues/1514).
- Improved range of the line mapping algorithm.
- Fixed test start links [#1547](https://github.com/wallabyjs/public/issues/1547).
- Fixed line marker click events to display tests for a correct line in Atom.
- Fixed symlink resolution [#1425](https://github.com/wallabyjs/public/issues/1425).
- `react-native/jest/assetFileTransformer` patch [#1436](https://github.com/wallabyjs/public/issues/1436#issuecomment-358214325).
- Fixed Jest verbose error loggig issue [#1513](https://github.com/wallabyjs/public/issues/1513).
- Fixed Jest `rootDir` path resolution [#1517](https://github.com/wallabyjs/public/issues/1517#issuecomment-366550870).
- File navigation should consider view column of an already opened file in VS Code [#1540](https://github.com/wallabyjs/public/issues/1540).
- Added `suppressExpirationNotifications` setting for VS Code.
- Using markdown by default for hover messages in VS Code.
- Update snapshot command links in hover messages and output in VS Code.
- Avoid patching `process.exit` for newer versions of VS Code.
- Automatically start Wallaby if config selection is requested from a start command.
- Fixed unavailable `localStorage` scenario in Wallaby App.
- Fixing the order of resolved node modules not only for local node modules, but also for `NODE_PATH` [#1442](https://github.com/wallabyjs/public/issues/1442).
- Bundle file should be included before all files it contains [#1404](https://github.com/wallabyjs/public/issues/1404).
- Synchronized access to a shared collection in JetBrains IDEs.
- Fixed missing theme colors issue in JetBrains IDEs.
- Storing TS compilation line map to support a scenario when Webpack changes TS file without user changes (ES6 exports/imports) [#1414](https://github.com/wallabyjs/public/issues/1414).
- Fixed line uncovered range mapping issue [#1530](https://github.com/wallabyjs/public/issues/1530).
- Moved TS visitor creation to a later  execution stage [#1532](https://github.com/wallabyjs/public/issues/1532).
- Fixed QUnit issue with not running tests with tariling spaces in their names.

<a name="Core 1.0.519, Wallaby App 1.0.34, IntelliJ 1.0.99, VS 1.0.33, Atom 1.0.37, VS Code 1.0.67, Sublime 1.0.37"></a>
# Core 1.0.519, Wallaby App 1.0.34, IntelliJ 1.0.99, Visual Studio 2013, 2015, 2017 1.0.33, Atom 1.0.37, Visual Studio Code 1.0.67, Sublime Text 1.0.37 (2017-11-22)

## Changes and Bug Fixes

- [Headless Chrome runner (official, will be making it default for browser environment soon)](https://wallabyjs.com/docs/integration/chrome.html).
- ES modules (without transpilation) support for browser environment (Chrome) ([sample repo](https://github.com/wallabyjs/wallaby)).
- [Compact diff view](https://twitter.com/wallabyjs/status/917631895873007616).
- [Side-by-side diff for VS Code](https://twitter.com/wallabyjs/status/917634773874442246).
- [Quokka.js for Atom](https://medium.com/@artem.govorov/quokka-live-javascript-scratchpad-for-atom-editor-a4edd27b7d91).
- [Quokka.js Pro](https://medium.com/@artem.govorov/introducing-quokka-js-pro-edition-de0a7919b404).
- Chrome 62 support.
- Typescript v2.5 support.
- Babel 7 beta support.
- IntelliJ platform 2017.3 support.
- VS Code v1.15, v1.16, v1.17, v1.18 support.
- Atom v1.20, v1.21, v1.22 support.
- Jest v21.0, v21.1, v21.2 support.
- Mocha 4 support.
- QUnit 2.4 support.
- Improved initial file scan performance in the extended core.
- Added symlinks support in extended core.
- Added TypeScript compilation via Babel support.
- `Jump to error` command now jumps to a failing test if the error source is not found.
- TypeScript compiler option `noResolve: false` support.
- TypeScript compiler now does a full file lookup (not only in listed files) if the `useStandardDefaults` option is set.
- TypeScript custom transformers support [#1251](https://github.com/wallabyjs/public/issues/1261).
- Updated bundled TypeScript version to 2.5.
- Fixed test run scheduling issue when a new session could be started in a worker before the previous one had been stopped/cleaned up the worker. This addresses a whole class of issue related to sudden hanging during incrementl test runs.
- Stubbing `process.exit` for node test runner (to prevent the scenario of hanging test runner for an unknown reason).
- Unhandled promise rejections are thrown as errors now to allow testing framework to handle them.
- Force setting `BABEL_ENV` to `test` if it is set to `"undefined"` string.
- Automatically loading babel `regeneratorRuntime` [1289](https://github.com/wallabyjs/public/issues/1289#issuecomment-329019968).
- System.js API change support.
- Relative node module resolution for TypeScript, Babel (and presets), Electron.
- Added custom test framework path support for Jasmine in node.
- Made `docBlockComment` a persistent property (if TS cached files are not processed, doc blocks are not re-attached).
- Trimming spaces in `env.params` [#1312](https://github.com/wallabyjs/public/issues/1312).
- Removing ANSI codes from all error messages, if expected/actual values don't contain any ANSI codes.
- Multi-project workspaces support in VS Code.
- Excluding node_modules folders from the wallaby config file search in VS Code.
- Added `wallaby.showUpdateNotifications` setting in VS Code.
- Updated bundled node to 8.5 for IntelliJ platform and VS.
- Fixed single test file change handling in VS.
- Displaying currently selected config file in the config selection selector [#1396](https://github.com/wallabyjs/public/issues/1396).
- Fixed a few issues with `allowJs` TypeScript option.
- Fixed Jest manual mocks issue [#1306](https://github.com/wallabyjs/public/issues/1306#issuecomment-330044415).
- Fixed Wallaby App test name collision issue.
- Added `fileScanTimeout` setting.
- Fixed exponentiation operator precedence in code generator.
- Fixed code coverage ignore comment issue [#1275](https://github.com/wallabyjs/public/issues/1275).
- Fixed sinon spy messages (removed ANSI).
- Improved promises logging, fixed issue with Promise.prototype logging.
- Added Quibble support.
- Fixed pre-run dependency tracking issue [#1296](https://github.com/wallabyjs/public/issues/1296).
- Fixed Jest module resolution issue [#1292](https://github.com/wallabyjs/public/issues/1292).
- Fixed Jest result reporting issue [#1293](https://github.com/wallabyjs/public/issues/1293).
- Fixed tests view un-focusing issue in Atom.

<a name="Core 1.0.466, Wallaby App 1.0.29, IntelliJ 1.0.92, VS 1.0.32, Atom 1.0.35, VS Code 1.0.56, Sublime 1.0.37"></a>
# Core 1.0.466, Wallaby App 1.0.29, IntelliJ 1.0.92, Visual Studio 2013, 2015, 2017 1.0.32, Atom 1.0.35, Visual Studio Code 1.0.56, Sublime Text 1.0.37 (2017-08-10)

## Changes and Bug Fixes

- [Headless Chrome runner (experimental)](https://wallabyjs.com/docs/integration/chrome.html).
- Mixed (none/some/all) script content compiler support, [enables Vue.js support](https://twitter.com/wallabyjs/status/887196471929430017).
- Advanced logging [support for Promises and Observables](https://twitter.com/wallabyjs/status/890110946173210625).
- Display [test execution time](https://twitter.com/wallabyjs/status/875290980609474560).
- [Quokka.js for IntelliJ platform (IDEA, WebStorm, etc.)](https://medium.com/@artem.govorov/quokka-live-javascript-scratchpad-for-jetbrains-ides-free-developer-tool-569590ab7a05).
- [Realtime updates](https://twitter.com/wallabyjs/status/887929932235497472) for object diffs in Wallaby App.
- Typescript v2.4 support.
- CoffeeScript 1.12 and 2.0 beta3 initial support.
- Dynamic `import` support in parser/generator.
- IntelliJ platform 2017.2/build 172.xx support.
- VS Code v1.13, v1.14 support.
- Atom v1.18, v1.19 support.
- Jest v20 support, including improved snapshot workflow and better defaults for the runner.
- Support for loading `jest.config.js` by default (if the file exists).
- AVA v0.20 support, including AVA's [raw assertion values diff display](https://github.com/avajs/ava/pull/1432).
- Jasmine v2.6.1, v2.6.3 support.
- Support live comments for [return statements](https://github.com/wallabyjs/quokka/issues/45).
- Support for [custom JavaScript file extensions](https://github.com/wallabyjs/public/issues/1120).
- Added the `reportUnhandledPromises` (`true` by default) to report all unhandled promise rejections as global errors.
- Added the [`useStandardDefaults` setting for TypeScript compiler](https://wallabyjs.com/docs/integration/typescript.html#typescript-compiler-settings).
- Added support for constructor names, Maps, Sets, Iterators support in wallaby logger, fixed [#1208](https://github.com/wallabyjs/public/issues/1208).
- System.js `import` support in tracer [#1164](https://github.com/wallabyjs/public/issues/1164).
- Significantly improved TypeScript compilation performance for file adding/changing scenario.
- `fetch` support in tracer.
- Added Collapse/Collapse All support for tests and file tree views in Wallaby App.
- Improved instrumentation for variable declarations with function, arrow function or class expression assigned to prevent breaking JavaScript engine function name inference.
- Improved "reusable" test libraries support (tests in files other than test files) [#1165](https://github.com/wallabyjs/public/issues/1165).
- Improved babel compilation (`react.createElement` case and running babel traversal in isolation for wallaby plugin).
- Improved global errors reporting (to avoid assigning global errors to unrelated tests).
- Improved hanging Jest tests reporting.
- Support for `babel-preset-jest` patching to support scenario of TS -> babel preprocessor.
- Fixed async error reporting duplication for mocha.
- Fixed PhantomJs 2 integration memory leak.
- Performance improvement for the case of changing files with tests that are not test files.
- Fixed Jest integration timing issue [#1155](https://github.com/wallabyjs/public/issues/1155).
- Fixed AVA integration rejected promise reporting issue [#1254](https://github.com/wallabyjs/public/issues/1254).
- Fixed Jest mocks plus TypeScript issue [#1224](https://github.com/wallabyjs/public/issues/1224).
- Force setting `process.env.PWD` to be `process.cwd()` [#1250](https://github.com/wallabyjs/public/issues/1250#issuecomment-319237954).
- Preserving block comments for Jest (both for Babel and TypeScript compilers) [#1216](https://github.com/wallabyjs/public/issues/1216).
- Fixed TypeScript compiler endless recursion for the `orderFilesByReferences` setting file ordering (cases like `a->b->c->a`).
- Improved `ts-jest` integration support.
- Patching instanbul's test-exclude dependency to avoid `babel-instanbul` instrumentation (if the plugin is present in babel config).
- Disabled instrumentation completely for hinted scopes (unless it is a middle of an expression).
- Reporting node worker starting errors (like bad flags) to the console (were only reported with `debug` flag set).
- Fixed Jest snapshots updates as a result of forced test re-runs from some supported editors.
- Fixed inconsistent Jest snapshot recording issue [#1154](https://github.com/wallabyjs/public/issues/1154).
- Fixed concurrent core updates in VS Code and Atom.
- Fixed IntelliJ platform test results notification for the case when the number of tests has changed.
- Fixed IntelliJ platform progress indicator update for re-queued test runs.
- Fixed inline messages display priority (errors vs logs) in VS Code [#1198](https://github.com/wallabyjs/public/issues/1198).
- Fixed links shifting in VS Code wallaby output.
- Fixed error reporting issue caused by an excessive stack cleaning.
- Increased wallaby possible config files list length limit in VS Code.
- Reporting test file specific global errors in Wallaby App.


<a name="Core 1.0.415, IntelliJ 1.0.86, VS 1.0.31, Atom 1.0.33, VS Code 1.0.50, Sublime 1.0.36"></a>
# Core 1.0.415, IntelliJ 1.0.86, Visual Studio 2013, 2015, 2017 1.0.31, Atom 1.0.33, Visual Studio Code 1.0.50, Sublime Text 1.0.36 (2017-04-26)

## Changes and Bug Fixes

- [Live Comments for logging](https://medium.com/@artem.govorov/live-code-comments-the-fastest-way-to-inspect-javascript-object-values-with-wallaby-js-894b9c806450).
- [Live Comments for benchmarking](https://medium.com/@artem.govorov/using-live-code-comments-to-quickly-measure-code-performance-with-wallaby-js-and-quokka-js-7931a896133).
- [Quokka.js](https://medium.com/@artem.govorov/introducing-quokka-the-live-scratchpad-for-javascript-free-developer-tool-a0eb15bb4f54).
- [Advanced support for Jest snapshot testing](https://medium.com/@artem.govorov/jest-snapshot-testing-on-steroids-with-wallaby-js-a53008f619f0).
- [Improved value logging](https://twitter.com/wallabyjs/status/844032526012227584).
- [JetBrains Rider support](https://twitter.com/wallabyjs/status/824164222657589250).
- [Advanced context for console logging](https://twitter.com/wallabyjs/status/829923244308205568).
- [Scroll lock support](https://twitter.com/wallabyjs/status/825968233140277249) for the Wallaby Tests view in VS Code.
- Typescript v2.2, v2.3 support.
- VS Code v1.10, v1.11, v1.12 support.
- Atom v1.16, v1.17 support.
- Visual Studio 2017 support.
- Sublime Text v3129 support.
- Jest v19 support, performance improvements.
- AVA v0.18, v0.19 support, performance improvements.
- Improved Webpack support, performance improvements (dynamic bundles).
- Wallaby App advanced context reporting support, Jest snapshots support, color theme fixes.
- Using locally installed mocha (in project) by default for node.
- Angular CLI and create-react-app generated projects better support and examples.
- ES6 `new.target` support in code generator [#1098](https://github.com/wallabyjs/public/issues/1098).
- ES6 spread/rest property support wallaby parser.
- Electron runner [window resizing support](https://github.com/wallabyjs/public/issues/965#issuecomment-274323608).
- Improved Jest runner behaviour for the scenario when multiple versions of Jest are installed.
- Improved multi-line error messages handling (not just the first line).
- Improved test name detection for babel: sequence expressions like `(0, it(...))`.
- Automatically configuring Jest from `package.json` by default.
- Improved wallaby core/dependencies update mechanism.
- Increased the default `stackTraceLimit` for V8 environments.
- Added [`glob` setting](https://github.com/wallabyjs/public/issues/1113#issuecomment-293942774) for advanced patterns.
- Added [custom JavaScript file extensions support](https://github.com/wallabyjs/public/issues/1120).
- AVA snapshot testing support [#996](https://github.com/wallabyjs/public/issues/996).
- Fixed mocha tags/grep support [#1041](https://github.com/wallabyjs/public/issues/1041).
- Notification about `editor.glyphMargin` setting for VS Code [#1070](https://github.com/wallabyjs/public/issues/1070).
- Fixed ES6 syntax in `setup` function [#1029](https://github.com/wallabyjs/public/issues/1029).
- Fixed babel source mapping for JSX [#977](https://github.com/wallabyjs/public/issues/977).
- Improved babel configuration defaults.
- Allowed TS compiler to lookup not only matching files, but all files [#1050](https://github.com/wallabyjs/public/issues/1050).
- Improved wallaby app service start error reporting.
- Avoid overriding jasmine's internal spec IDs in order not to conflict with other test reporters.
- Fixed module resolution issue in Jest runner [#973](https://github.com/wallabyjs/public/issues/973).
- Fixed `testPathDirs` overriding in Jest runner [#983](https://github.com/wallabyjs/public/issues/983).
- Fixed array logging.
- Fixed test runner instance reuse in Jest runner [#1072](https://github.com/wallabyjs/public/issues/1072).
- Avoid changing console.log if the code region [is hinted](https://wallabyjs.com/docs/config/coverage.html).
- Fixed hanging async test run in Tape runner [#995](https://github.com/wallabyjs/public/issues/995).
- Fixed AVA context reuse scenario [#1012](https://github.com/wallabyjs/public/issues/1012), [#1034](https://github.com/wallabyjs/public/issues/1034).
- Fixed rendering inline messages in VS Code [#1003](https://github.com/wallabyjs/public/issues/1003), [#1004](https://github.com/wallabyjs/public/issues/1004).
- Fixed rendering test report in VS Code [#1023](https://github.com/wallabyjs/public/issues/1023).
- Fixed test running status reporting in IntelliJ [#1096](https://github.com/wallabyjs/public/issues/1096).
- Fixed test results reporting in Atom [#58](https://github.com/wallabyjs/atom-wallaby/issues/58).
- Made core parametrisation logic more predictable for the case when `workers.regular` > `workers.initial` + it's a full test run.

<a name="Core 1.0.359, IntelliJ 1.0.79, VS 1.0.29, Atom 1.0.31, VS Code 1.0.39, Sublime 1.0.30"></a>
# Core 1.0.359, IntelliJ 1.0.79, Visual Studio 2013, 2015, 2017 1.0.29, Atom 1.0.31, Visual Studio Code 1.0.39, Sublime Text 1.0.30 (2017-01-24)

## Changes and Bug Fixes

- [Inline view](https://twitter.com/wallabyjs/status/822391949642461185) for values of the expression statements with identifier expressions.
- [Inline messages support](https://twitter.com/wallabyjs/status/808975647737401345) for Sublime Text.
- Code coverage hints support [#248](https://github.com/wallabyjs/public/issues/248).
- Dark theme for [Wallaby App](https://wallabyjs.com/docs/intro/get-started-wallaby-app.html).
- Displaying [assertion data diffs](https://twitter.com/wallabyjs/status/819121381002489856) by default in Wallaby App.
- Visual Studio 2017 RC [support](https://twitter.com/wallabyjs/status/822039658603298816).
- Displaying [assertion data diffs](https://twitter.com/wallabyjs/status/806670890280726529) (including [snapshot diffs](https://twitter.com/wallabyjs/status/819121381002489856)) for `jest`.
- Webpack 2 support.
- `Jest` v16, v17, v18 support, performance improvements.
- `Jasmine` v2.5.1-2 support.
- Local hosting support for [Wallaby App](https://wallabyjs.com/docs/intro/get-started-wallaby-app.html).
- Added the `runAllTestsInAffectedTestFile` setting to always run all tests in an affected test file [#939](https://github.com/wallabyjs/public/issues/939).
- Special handling for `.vue` files.
- Improved node modules lookup for node projects (by re-using certain bits from the node.js module lookup). Should eliminate the need to specify `NODE_ENV` for nested node modules or upper level node modules in most of the cases.
- Support for mixed `.js`/`.ts` codebases (with the `allowJs` TS compiler setting).
- Various improvements for source mapping for Babel/TypeScript compilers.
- Improved a stack entry context (function name is now added).
- Added support for tests in a different file [#124](https://github.com/wallabyjs/public/issues/124).
- Improved electron runner support (performance, `electron` module support).
- Improved [error reporting](https://github.com/wallabyjs/public/issues/2#issuecomment-252072695) for `tape`.
- Improved `power-assert` support for `ava`.
- Improved extended core process shutdown (if it's not responsive).
- [Better status indicator position](https://twitter.com/dunchunter/status/810665864576036864) for VS Code.
- The `module` setting is set to `commonjs` by default for TypeScript compiler.
- TypeScript compiler should always report syntactic errors.
- Fixed overriding test stats with a test error.
- NPM v2 support for `jest` integration.
- Automatically loading `babel-preset-jest` when `jest` + `babel` is used.
- Added window resizing functionality to `electron` host.
- Improved [license management for IntelliJ platform](https://wallabyjs.com/docs/intro/license.html#jetbrains-ides) (viewing/changing license details via `Help` menu).
- Setting `jest` `rootDir` to be the local project dir.
- Fixed the case when returning an object with a spread syntax (on a different line) breaks coverage [#963](https://github.com/wallabyjs/public/issues/963).
- Fixed VS Code assertion data diff display issues [#898](https://github.com/wallabyjs/public/issues/898).
- Resetting sandbox cache (browser runner serving unchanged files with corrupted cache) for corrupted cache cases.
- Fixed TypeScript + node.js issue with incorrect test files compilation.
- Fixed Visual Studio 2015 crash on startup issue because of the missing log folder [#884](https://github.com/wallabyjs/public/issues/884).
- Fixed disappearing inline messages for the Electron + System.js + Angular stack [#822](https://github.com/wallabyjs/public/issues/822).
- Fixed `it.only` and `it.skip` in mocha integration [#864](https://github.com/wallabyjs/public/issues/864).
- Fixed binary files cache corruption on cache partial invalidation [#947](https://github.com/wallabyjs/public/issues/947).
- Fixed `EADDRINUSE` error in Sublime Text [#933](https://github.com/wallabyjs/public/issues/933).
- Fixed keyboard shortcut shadowing in Sublime Text [#940](https://github.com/wallabyjs/public/issues/940).
- Fixed failing tests output grammar to only use standard token types in VS Code.
- Fixed obsolete API call in Atom integration [#940](https://github.com/wallabyjs/atom-wallaby/issues/940).

<a name="Core 1.0.299, IntelliJ 1.0.76, VS 1.0.25, Atom 1.0.28, VS Code 1.0.27, Sublime 1.0.25"></a>
# Core 1.0.299, IntelliJ 1.0.76, Visual Studio 2013-2015 1.0.25, Atom 1.0.28, Visual Studio Code 1.0.27, Sublime Text 1.0.25 (2016-09-28)

## Changes and Bug Fixes

- [Wallaby.js App Files](http://dm.gl/2016/09/06/wallaby-app-files/) and a few other [improvements](https://wallabyjs.com/docs/intro/get-started-wallaby-app.html#faq).
- Switched to PhantomJs 2.1.1 by default for browser testing for all supported platforms.
- Improved `files`/`tests` pattern matching.
- [Colorized output](https://twitter.com/wallabyjs/status/770152041209397249) for VS Code.
- [Colorized diff](https://twitter.com/wallabyjs/status/776331730387017729) for VS Code.
- Added infinite loop detection for node.js [#796](https://github.com/wallabyjs/public/issues/796).
- `Jasmine` v2.5.0 and v2.5.1 support (for node).
- `Ava` compatibility with TypeScript compiler [#711](https://github.com/wallabyjs/public/issues/711).
- `Jest` v14, v15, v15.1 support.
- Improved instrumentation/parsing performance.
- Improved configuration error reporting for `jasmine`, `ava`, `jest`.
- Wallaby App now jumps to the latest executed and/or failing test.
- Wallaby App now uses different icons for files/tests in the Files tree.
- Fixed PhantomJs 2 stop/restart slowness and high CPU on Windows.
- Fixed node.js runner memory leak.
- Fixed source maps for Babel `async/await` support.
- Fixed source maps for TypeScript `async/await` support.
- Fixed `jasmine` error stack reporting for PhantomJs 2.
- Fixed files/folders ordering in Wallaby App [#788](https://github.com/wallabyjs/public/issues/788).
- Fixed ENV variables parsing [#742](https://github.com/wallabyjs/public/issues/742).
- Fixed `ava` hooks support and the `setup` execution timing [#728](https://github.com/wallabyjs/public/issues/728), [#730](https://github.com/wallabyjs/public/issues/730), [#1](https://github.com/wallabyjs/ava-sample/issues/1).
- Fixed file saving issue before running tasks for IntelliJ platform [#773](https://github.com/wallabyjs/public/issues/773).
- Fixed core update notification for VS Code.
- Fixed [output throttling issue](https://github.com/Microsoft/vscode/pull/12057) for VS Code.
- Fixed [missing gutter icons](https://github.com/Microsoft/vscode/issues/12111) issue for VS Code.
- Fixed config relative path issue in Sublime Text [#706](https://github.com/wallabyjs/public/issues/706).
- Fixed wallaby panel display issue [#748](https://github.com/wallabyjs/public/issues/748).

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
