Please note that while the changelog is updated every few months, we release new versions of wallaby.js a few times a week (sometimes a few times a day). You may [follow us on twitter](https://twitter.com/wallabyjs) to get notified whenever we release notable features. You may also refer to the [Wallaby What's New page](https://wallabyjs.com/whatsnew/) and [Quokka What's New Page](https://quokkajs.com/whatsnew/) for more recent notable features.

<a name="# Core 1.0.1437, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.269, Wallaby VS 1.0.66, Wallaby VS Code 1.0.362, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.389, Quokka VS Code 1.0.547, Quokka Sublime 1.0.158 (2023-07-01)"></a>
# Core 1.0.1437, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.269, Wallaby VS 1.0.66, Wallaby VS Code 1.0.362, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.389, Quokka VS Code 1.0.547, Quokka Sublime 1.0.158 (2023-07-01)

* Added support for custom input/output in Angular build options ([#3238](https://github.com/wallabyjs/public/issues/3238)).
* Added support for breaking changes in Angular v16.1.0+
* Added support for Wallaby processing `testing-library` output when loaded via ESM.
* Updated Wallaby/Quokka VS Code Value Explorer hover behavior to reduce redundant information that is displayed in child nodes ([#3237](https://github.com/wallabyjs/public/issues/3237)).
* Bug fix for Wallaby for VS Code where test explorer actions would not work after a global error ([#3209](https://github.com/wallabyjs/public/issues/3209)).
* Bug fix for Quokka using TypeScript with ESM compiler options when using node 20+ ([#878](https://github.com/wallabyjs/quokka/issues/878)).
* Bug fix for Wallaby when using Ava test runner on Windows with ESM imports ([#3231](https://github.com/wallabyjs/public/issues/3231)).
* Bug fix for Wallaby when using Ava to always run in serial mode to stop tests within a single file from running in parallel, which can cause issues with Wallaby.
* Bug fix for Wallaby for latest version of JetBrains editors where diff view was no longer working.
* Bug fix for Wallaby where startup file scan can report READY before finishing the scan, which can cause tests to be reexecuted after the initial run.
* Bug fix for Wallaby when changing filename case in VS Code when the on-disk filename is not reported correctly ([#3224](https://github.com/wallabyjs/public/issues/3224)).
* Bug fix for Quokka for VS Code where output inspector bug line navigation fails for logged values at column 0.
* Bug fix for Wallaby where hover values were not being properly cleared.
* Bug fix for Wallaby/Quokka auto log sometimes not selecting a value to log.

<a name="# Core 1.0.1427, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.268, Wallaby VS 1.0.66, Wallaby VS Code 1.0.355, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.388, Quokka VS Code 1.0.542, Quokka Sublime 1.0.158 (2023-06-01)"></a>
# Core 1.0.1427, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.268, Wallaby VS 1.0.66, Wallaby VS Code 1.0.355, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.388, Quokka VS Code 1.0.542, Quokka Sublime 1.0.158 (2023-06-01)

* Added support for Windows Subsystem for Linux with GUI.
* Added support for Wallaby Vitest projects using Node.js 20+.
* Added support for Quokka when using ES Modules in Node.js 20+.
* Added support for Wallaby and Quokka when logging BitInt values.
* Added support for the latest version of NX (v16+).
* Added support for Angular CLI 16+.
* Added support for the latest version of Jasmine with Node.js.
* Added support for Vitest 0.31.0+.
* Added support for Quokka for resolving pnp dependencies when using ES Modules.
* Updated Wallaby default coverage ignore hints to include `/c8 ignore/` comment.
* Added copy to clipboard functionality for actual and expected code in output inspector error output via codelens ([#3201](https://github.com/wallabyjs/public/issues/3201)).
* Updated Wallaby with WSL to automatically detect local and use local Chrome instance when it is available.
* Bug fix for Jest with global setup handlers, where Wallaby was not handling when incorrect arguments are passed to the setup handler ([#3212](https://github.com/wallabyjs/public/issues/3212)).
* Bug fix for vitest when using `isolate: false` where multiple threads may be scheduled on the same worker thread at the same time.
* Bug fix for Wallaby with Angular version 15+ compatibility issue where polyfills may be an array.
* Bug fix for Wallaby with Vitest not completing when async tasks are still running at the end of the test run.
* Bug fix for Wallaby with Jest when using `ts-node` not correctly loading jest configuration ([#3221](https://github.com/wallabyjs/public/issues/3221)).

<a name="# Core 1.0.1407, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.267, Wallaby VS 1.0.66, Wallaby VS Code 1.0.352, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.379, Quokka VS Code 1.0.533, Quokka Sublime 1.0.158 (2023-05-01)
"></a>
# Core 1.0.1407, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.267, Wallaby VS 1.0.66, Wallaby VS Code 1.0.352, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.379, Quokka VS Code 1.0.533, Quokka Sublime 1.0.158 (2023-05-01)

* Added support for use of yarn workspaces for Angular CLI projects.
* Added support for latest version of Vitest (v0.30.0+) with the introduction of workspace configuration.
* Improved text selection behavior for live value display to work when entire line is selected and selection spans multiple lines.
* Bug fix for latest version of VS Code where gutter indicators no longer appear correctly when breakpoints are set in the gutter.
* Bug fix for issue with class declaration superclass instrumentation where superclass is not a simple identifier ([#3196](https://github.com/wallabyjs/public/issues/3196)).
* Bug fix for Wallaby warning about old dependency patch that is now optional ([#3197](https://github.com/wallabyjs/public/issues/3197)).
* Bug fix for JetBrains editors where Show/Copy Value action was available when it should not have been.

<a name="# Core 1.0.1403, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.263, Wallaby VS 1.0.66, Wallaby VS Code 1.0.351, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.373, Quokka VS Code 1.0.529, Quokka Sublime 1.0.158 (2023-04-01)"></a>
# Core 1.0.1403, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.263, Wallaby VS 1.0.66, Wallaby VS Code 1.0.351, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.373, Quokka VS Code 1.0.529, Quokka Sublime 1.0.158 (2023-04-01)

* Added support for new `captureConsoleLog` setting to control console log capture; defaults to true. ([#3189](https://github.com/wallabyjs/public/issues/3189)).
* Enhanced Vitest integration to use custom hooks if registered in configuration (`config.deps.registerNodeLoader` setting).
* Bug fix for debug icons not appearing in JetBrains new UI ([#3172](https://github.com/wallabyjs/public/issues/3172)).
* Bug fix for latest version of JetBrains editors with UI update now being dispatched from non-UI thread ([#3191](https://github.com/wallabyjs/public/issues/3191)).
* Bug fix for vitest that caused the same file to be processed by Wallaby multiple times when changing an imported dependency.
* Bug fix for latest version of Vitest to accommodate changed mock hoisting behavior.

<a name="Core 1.0.1398, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.261, Wallaby VS 1.0.66, Wallaby VS Code 1.0.351, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.373, Quokka VS Code 1.0.529, Quokka Sublime 1.0.158"></a>
# Core 1.0.1398, Wallaby App 1.0.86, Wallaby IntelliJ 1.0.261, Wallaby VS 1.0.66, Wallaby VS Code 1.0.351, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.373, Quokka VS Code 1.0.529, Quokka Sublime 1.0.158 (2023-03-23)

* New for Quokka - [`vite-node` runtime](https://quokkajs.com/whatsnew/).
* New for Wallaby - [Pause Command to pause real-time test execution and hide all related editor artifacts](https://wallabyjs.com/whatsnew/pause.html).
* New for Wallaby/Quokka for VS Code - new `syncSettings` configuration option to not synchronize Wallaby settings between VS Code instances. 
* New for Wallaby - `runAllTestsWhenNoAffectedTests` setting to run all tests when a change occurs that doesn't impact test/code files; defaults to `true` for `jest` and `webpack` projects.
* VS Code v1.70, v1.71, v1.72, v1.73, v1.74, v1.75, v1.76 support.
* JetBrains Editors 2022.3.x support.
* Added support to Wallaby for the latest version of Angular 14 with jest.
* Added support to Quokka for `.mts` and `.cts` file extensions for JetBrains editors ([#804](https://github.com/wallabyjs/quokka/issues/804)).
* Added support to Wallaby for vitest configurations with nested project folders ([#3034](https://github.com/wallabyjs/public/issues/3034)).
* Added support to Wallaby/Quokka for breaking changes to latest version of node's ESM hooks API.
* Added support to Wallaby for latest version of NX workspaces ([#3038](https://github.com/wallabyjs/public/issues/3038)).
* Added support to Wallaby for overriding `files` and `tests` configuration for vitest projects ([#3054](https://github.com/wallabyjs/public/issues/3054)).
* Added support to Wallaby for the latest version of vitest (v0.23.0).fatal: invalid date format: 2023-04-01T-08:30:00
* Added support to Wallaby for latest version of Babel to fix scenario where Time Travel Debugger would not work properly ([#3079](https://github.com/wallabyjs/public/issues/3079)).
* Added support to Wallaby for Webpack custom `moduleArgument` and `exportsArgument` parameters ([#3076](https://github.com/wallabyjs/public/issues/3076)).
* Added support to Wallaby for Angular CLI `@angular-builders/custom-webpack:karma` builder.
* Added support to Wallaby for the latest version of `@testing-library` ([#3051](https://github.com/wallabyjs/public/issues/3051)).
* Added support to Wallaby for the latest version of jest (v29).
* Added support to Wallaby for the latest version of Angular CLI v15.x ([#3115](https://github.com/wallabyjs/public/issues/3115), [#3112](https://github.com/wallabyjs/public/issues/3112), [#3111](https://github.com/wallabyjs/public/issues/3111))
* Added support to Wallaby/Quokka for files being imported via URL ([#3123](https://github.com/wallabyjs/public/issues/3123)).
* Added support to Wallaby Wallaby for the latest version of NX workspaces ([#3121](https://github.com/wallabyjs/public/issues/3121))
* Added support to Wallaby for the latest version of `vitest` ([#3123](https://github.com/wallabyjs/public/issues/3123), [#3122](https://github.com/wallabyjs/public/issues/3122)).
* Added support to Wallaby for the latest version of Mocha.
* Added support to Wallaby for `vitest` with Yarn PNP ([#3142](https://github.com/wallabyjs/public/issues/3142)).
* Added support to Wallaby to latest version of `@angular-builders/jest@v15.x` (buildConfiguration method is now async) ([#3144](https://github.com/wallabyjs/public/issues/3144)).
* Added support to Wallaby for latest version of `vitest` (breaking changes) ([#3146](https://github.com/wallabyjs/public/issues/3146)).
* Added support to Wallaby/Quokka for the latest version of JetBrains editors ([#857](https://github.com/wallabyjs/quokka/issues/857)).
* Added support to Wallaby for vitest projects that use `@testing-library`.
* Added support to Wallaby/Quokka to provide first class support for `.pnpm` projects by automatically adding `.pnpm` node_modules to process.env.NODE_PATH ([#3142](https://github.com/wallabyjs/public/issues/3142))
* Added support to Wallaby for the latest `sass-loader` package (used by Angular CLI projects). ([#3156](https://github.com/wallabyjs/public/issues/3156)).
* Added support to Wallaby/Quokka for [`import assertions`](https://github.com/tc39/proposal-import-assertions) ([#862](https://github.com/wallabyjs/quokka/issues/862)).
* Added support to Wallaby for node built-in `assert` dependency ([#3170](https://github.com/wallabyjs/public/issues/3170)).
* Added support to Quokka for path aliases when using SvelteKit ([#864](https://github.com/wallabyjs/quokka/issues/864)).
* Added support to Wallaby for the latest version of NX workspaces.
* Added support to Wallaby for the latest version of Angular CLI.
* Added support to Wallaby/Quokka for [static blocks](https://github.com/estree/estree/blob/master/es2022.md#staticblock).
* Added support to Wallaby the latest version of chrome due to breaking change in remoting interface ([#3183](https://github.com/wallabyjs/public/issues/3183)).
* Added support to Wallaby for the latest version of `ts-jest`.
* Added support to Wallaby/Quokka for the TypeScript version (v5.x).
* Improved Wallaby file system scanning to decrease start up times for large projects and mono-repos ([#3024](https://github.com/wallabyjs/public/issues/3024)).
* Improved Wallaby configuration file validation to ensure that backslashes are not used in file patterns ([#3057](https://github.com/wallabyjs/public/issues/3057)).
* Improved Quokka module resolution with TypeScript ESM; now when import fails will try explicit `.ts` file extension.
* Updated Wallaby/Quokka for VS Code to use VS Code node version when a system node version cannot be detected.
* Updated Wallaby to prepend the node runtime location to PATH variable when spawning node processes ([#3047](https://github.com/wallabyjs/public/issues/3047)).
* Updated Quokka to not attempt to find the closest `package.json` file to the Quokka file when using `workspaces`.
* Updated Quokka to always set `isolatedModules` to `true` when using TypeScript unless `process.env.TS_NODE_TRANSPILE_ONLY` is explicitly set to `false`.
* Updated Wallaby's Webpack integration to always invalidate the cache for virtual setup files.
* Updated Wallaby's `jest` integration to ignore experimental `concurrent` flag; this flag is not yet supported by Wallaby ([#3126](https://github.com/wallabyjs/public/issues/3126)).
* Updated Quokka to not use `stdEsm` library for yarn workspaces ([#848](https://github.com/wallabyjs/quokka/issues/848)).
* Updated Quokka to use native ESM for `.mjs` files.
* Updated Wallaby/Quokka VS Code logo to align with VS Code style guide ([#3153](https://github.com/wallabyjs/public/issues/3153)).
* Updated Wallaby/Quokka to automatically add project's `node_modules/.bin` folder to default PATH.
* Bug fix for Wallaby when loading ESM version of Ava ([#3026](https://github.com/wallabyjs/public/issues/3026)).
* Bug fix for Wallaby where potential race condition could lead to jest cache files not being correctly processed ([#3060](https://github.com/wallabyjs/public/issues/3060)).
* Bug fix for Wallaby where the latest version of vitest where not all tests would run ([#3033](https://github.com/wallabyjs/public/issues/3033)).
* Bug fix for Wallaby for vitest projects using `vite-plugin-solid` which does not support file imports with querystring suffix ([#3030](https://github.com/wallabyjs/public/issues/3030)).
* Bug fix for Quokka with `tsconfig-paths` where Quokka would not resolve paths correctly ([#807](https://github.com/wallabyjs/quokka/issues/807)).
* Bug fix for Wallaby for latest version of JetBrains editors for IndexOutOfBounds exception ([#3046](https://github.com/wallabyjs/public/issues/3046)).
* Bug fix for Wallaby for VS Code where configuration docs link in Output window would not open correctly ([#3053](https://github.com/wallabyjs/public/issues/3053)).
* Bug fix for Wallaby using vitest where test locations are incorrectly reported when using `beforeEach` hooks ([#3052](https://github.com/wallabyjs/public/issues/3052)).
* Bug fix for Wallaby/Quokka where coverage hints would sometimes be ignored and could lead to runtime errors ([#126](https://github.com/wallabyjs/quokka/issues/126)).
* Bug fix for Quokka where overridden compilerOptions were not applied at runtime.
* Bug fix for Quokka when `os.homedir()` is sometimes missing trailing slash ([#815](https://github.com/wallabyjs/quokka/issues/815)).
* Bug fix for Wallaby where latest version of `ts-jest` no longer emitting source maps ([#3083](https://github.com/wallabyjs/public/issues/3083)).
* Bug fix for Wallaby when processing variable declarations for statements with ignore code coverage hints (would set undefined values to `1`).
* Bug fix for Wallaby with incorrect coverage calculations for Babel files (update to ignore generated helper functions) ([#3011](https://github.com/wallabyjs/public/issues/3011)).
* Bug fix for Wallaby where Wallaby would not start in WSL remote containers that used Chrome as a test runner ([#3093](https://github.com/wallabyjs/public/issues/3093)).
* Bug fix for Wallaby for breaking change in latest version of node for Ava testing framework ([#2982](https://github.com/wallabyjs/public/issues/2982)).
* Bug fix for Wallaby for breaking change in Ava framework for node `v18.6.0`+ ([#3104](https://github.com/wallabyjs/public/issues/3104)).
* Bug fix for Quokka when using VS Code node version to not pass `--harmony-top-level-await` parameter ([#835](https://github.com/wallabyjs/quokka/issues/835)).
* Bug fix for Wallaby with the latest version of JetBrains editors causing text editor document to have a different number of lines than when the associated document changed event occurred ([#3124](https://github.com/wallabyjs/public/issues/3124)).
* Bug fix for Wallaby with the fix breaking change in the latest version of JetBrains editor causing Output Inspector to error when opening ([#3125](https://github.com/wallabyjs/public/issues/3125)).
* Bug fix for Wallaby/Quokka - fix bug where Live Values related messages would not be correctly cleared ([#847](https://github.com/wallabyjs/quokka/issues/847)).
* Bug fix for Wallaby where latest version of Angular CLI was not using `options.main` when it was set ([#3117](https://github.com/wallabyjs/public/issues/3117), [#3116](https://github.com/wallabyjs/public/issues/3116)).
* Bug fix for Wallaby where latest version of Angular CLI would fail because Angular analytics collector was not being correctly ignored ([#3115](https://github.com/wallabyjs/public/issues/3115)).
* Bug fix for Quokka when using TypeScript paths when running in ES modules context ([#794](https://github.com/wallabyjs/quokka/issues/794)).
* Bug fix for Wallaby to patch `vite-plugin-html` to fix bug calling `consola.wrapConsole()` that results in Wallaby failing ([#3140](https://github.com/wallabyjs/public/issues/3140)).
* Bug fix for Quokka where ESM hooks cache breaker mechanism could result in the same module being loaded twice ([#855](https://github.com/wallabyjs/quokka/issues/855)).
* Bug fix for Wallaby where jest test file is explicitly provided in Wallaby configuration but does not match jest configuration test file patterns ([#3149](https://github.com/wallabyjs/public/issues/3149)).
* Bug fix for Wallaby where bug in `vite-plugin-vue-type-imports` is causing Wallaby to fail ([#3151](https://github.com/wallabyjs/public/issues/3151)).
* Bug fix for Wallaby with jest with mono-repo projects that share a common rootDir; incorrect project configuration was selected. 
* Bug fix for Wallaby where vitest global errors may not be reported correctly ([#3165](https://github.com/wallabyjs/public/issues/3165)).
* Bug fix for Wallaby with latest version of Angular CLI 15 that would fail to instrument files ([#3182](https://github.com/wallabyjs/public/issues/3182)).
* Bug fix for Wallaby with jest where could sometimes receive an error `Cannot read property '0' of undefined` when multiple project configurations compile the same shared source file differently ([#2758](https://github.com/wallabyjs/public/issues/2758)).
* Bug fix for Wallaby where recursive call would occur due to `consola` nuxt library overriding/redirecting console.* and process.std channels ([#3140](https://github.com/wallabyjs/public/issues/3140)).

<a name="Core 1.0.1296, Wallaby App 1.0.85, Wallaby IntelliJ 1.0.250, Wallaby VS 1.0.66, Wallaby VS Code 1.0.343, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.351, Quokka VS Code 1.0.486, Quokka Sublime 1.0.157"></a>
# Core 1.0.1296, Wallaby App 1.0.85, Wallaby IntelliJ 1.0.250, Wallaby VS 1.0.66, Wallaby VS Code 1.0.343, Wallaby Sublime 1.0.68, Quokka IntelliJ 1.0.351, Quokka VS Code 1.0.486, Quokka Sublime 1.0.157 (2022-06-30)

* New for Wallaby - [Vitest Testing Framework support](https://wallabyjs.com/whatsnew/vitest-integration.html).
* New for Wallaby - [Smart Start](https://wallabyjs.com/whatsnew/smart-start.html).
* New for Quokka - [Codeclip feature to share an online recording of your code execution](https://quokkajs.com/whatsnew/codeclip.html).
* New for Wallaby/Quokka - [HTML output highlighted for logged values using your editor theme and colors](https://wallabyjs.com/whatsnew/html-highlighting.html).
* New for Wallaby/Quokka - [Resolve getters during logging](https://wallabyjs.com/whatsnew/resolve-getters.html).
* New for Wallaby/Quokka - [Show Line Value(s) / Timing(s)](https://wallabyjs.com/whatsnew/show-line-values.html).
* New for Wallaby - [Configurable Log Limits](https://wallabyjs.com/docs/config/overview.html#log-limits) ([#2108](https://github.com/wallabyjs/public/issues/2108)).
* New for Wallaby - VS Code setting to control the click-through behavior of Test Explorer failing tests, `wallaby.testExplorerFeature.showErrorLocation` ([#2993](https://github.com/wallabyjs/public/issues/2993)).
* VS Code v1.65, v1.66, v1.67, v1.68, v1.69 support.
* Drop support for Atom editors, now [end-of-life / deprecated](https://github.blog/2022-06-08-sunsetting-atom/).
* JetBrains Editors 2022.2.x support ([#2956](https://github.com/wallabyjs/public/issues/2956)).
* Added support to Wallaby for the latest versions of Webpack.
* Added support to Wallaby for the latest version of Angular CLI (v14) ([#2951](https://github.com/wallabyjs/public/issues/2951)).
* Added support to Quokka for `node:*` imports when using `stdEsm`.
* Added support to Wallaby/Quokka for logging promises in `console.log`.
* Added support to Wallaby for the latest version of swc jest-transformer.
* Added support to Wallaby for Jest v28.
* Added support to Wallaby for Ava projects using ESM.
* Added support to Wallaby/Quokka for node 18.x ([3780](https://github.com/wallabyjs/quokka/issues/780)).
* Added support to Wallaby for the latest version of `react-app-rewired` ([#2991](https://github.com/wallabyjs/public/issues/2991)).
* Added support to Wallaby for override which automatic configuration providers will be used ([#2992](https://github.com/wallabyjs/public/issues/2992)).
* Added support to Wallaby/Quokka for latest version of Sublime Text 4.
* Added support to Wallaby for breaking changes to Angular CLI v14.x.
* Added support to Quokka for the latest version of `ts-node` v10.8.x ([#789](https://github.com/wallabyjs/quokka/issues/789)).
* Added support to Wallaby for the latest version of Chrome (breaking change on Linux environments).
* Added support to Quokka for TypeScript ESM to resolve workspace modules.
* Added support to Quokka TypeScript paths when using ESM ([#794](https://github.com/wallabyjs/quokka/issues/794)).
* Improved Wallaby/Quokka support for VS Code remote development; now automatically synchronizes license information on startup ([#2937](https://github.com/wallabyjs/public/issues/2937)).
* Improved Wallaby support for yarn 3 workspaces ([#2979](https://github.com/wallabyjs/public/issues/2979)).
* Improved Wallaby/Quokka debugging for transpiled files.
* Improved Wallaby test selection to sort filtered tests at the top of test selection ([#2985](https://github.com/wallabyjs/public/issues/2985)).
* Improved Wallaby/Quokka - performance when mapping transformed files to original source code.
* Improved Wallaby for JetBrains Run Configuration to automatically set WSL to "Yes" when node path contains the WSL file/folder marker ([#2882](https://github.com/wallabyjs/public/issues/2882)).
* Updated Wallaby/Quokka to load comment hints directly from source files instead of transformed files; means support for transpilers that do not emit comments (e.g. esbuild, some vite plugins).
* Updated Wallaby to set `autoDetect: true` if `files` and `tests` sections are not explicitly set (and not using `override` option).
* Updated Wallaby/Quokka to automatically resolve getters when using Value Explorer auto expand mode.
* Updated Wallaby Webpack 5 integration to use memory cache if it is not explicitly configured ([#2954](https://github.com/wallabyjs/public/issues/2954)).
* Updated Quokka automatically use native ESM if `package.json` has `"type": "module"` and configuration does not explicitly use `stdEsm`.
* Updated Wallaby/Quokka to never display Live Values (i.e. `undefined`) for `console.log` return values.
* Updated Quokka to not use `--experimental-top-level-await` from node version 18.0.0 ([#780](https://github.com/wallabyjs/quokka/issues/780)).
* Updated Quokka to include Quokka window icon for JetBrains editors ([#569](https://github.com/wallabyjs/quokka/issues/569)).
* Updated Quokka to set TypeScript `compilerOption.target` to `ES6` if not set in TypeScript configuration file ([#788](https://github.com/wallabyjs/quokka/issues/788)).
* Updated Wallaby to make hyperlinks clickable in Wallaby App console log messages.
* Updated Quokka for JetBrains editors to show filenames instead of Quokka #1, Quokka #2, etc. ([#551](https://github.com/wallabyjs/quokka/issues/551)).
* Updated Wallaby to show filename above file preview screen content viewer in Wallaby App ([#3002](https://github.com/wallabyjs/public/issues/3002)).
* Bug fix for Wallaby with jest cache where file would not be processed when added/removed from project.
* Bug fix for Quokka with TypeScript, was not working when `tsconfig.json` uses `emitDeclarationOnly` ([#755](https://github.com/wallabyjs/quokka/issues/755)).
* Bug fix for Wallaby where error message from Testing Library would be truncated ([#2961](https://github.com/wallabyjs/public/issues/2961)).
* Bug fix for Wallaby where updating jest inline snapshots would update the wrong part of the file ([#2963](https://github.com/wallabyjs/public/issues/2963)).
* Bug fix for Wallaby where VS Code Test Explorer UI would not find tests ([#2962](https://github.com/wallabyjs/public/issues/2962)).
* Bug fix for Wallaby/Quokka where random cache-breaker comment would cause re-execution of unchanged files.
* Bug fix for Wallaby's Output Inspector not showing values when using `node` earlier than v11.0.0 ([#2967](https://github.com/wallabyjs/public/issues/2967)).
* Bug fix for Quokka using TypeScript where `typeRoots` were not correctly processed ([#772](https://github.com/wallabyjs/quokka/issues/772)).
* Bug fix for Wallaby/Quokka where active line log in Test/Code Stories would not display in VS Code if was no longer the active editor ([#436](https://github.com/wallabyjs/quokka/issues/436)).
* Bug fix for Wallaby where focus on a test is lost when a syntax error is encountered ([#2987](https://github.com/wallabyjs/public/issues/2987)).
* Bug fix for Wallaby where Live Comments and Identifier Expressions would be ignored after debugger selection, or after stopping/starting the debugger.
* Bug fix for Wallaby where jest global error handled was being removed resulting in unhandled exceptions ([#2968](https://github.com/wallabyjs/public/issues/2968), [#2988](https://github.com/wallabyjs/public/issues/2988)).
* Bug fix for Quokka when using ESM where Quokka file would sometimes not be re-executed.
* Bug fix for Wallaby where caret (^) character in file paths would cause browser-based tests to fail ([#3001](https://github.com/wallabyjs/public/issues/3001)).
* Bug fix for Wallaby where Wallaby App `Update Snapshot` was not working ([#3004](https://github.com/wallabyjs/public/issues/3004)).
* Bug fix for Wallaby where line number would not be reported correctly for error source ([#3011](https://github.com/wallabyjs/public/issues/3011)).
* Bug fix for Quokka where missing imports in ESM modules would not be reported properly.
* Bug fix for Wallaby for various minor Webpack integration issues.
* Bug fix for Wallaby using Vitest/Vitesse where importing files would file if they were renamed by Wallaby's rollup plugin ([#3020](https://github.com/wallabyjs/public/issues/3020)).
* Bug fix for Wallaby not starting properly for some projects ([#3014](https://github.com/wallabyjs/public/issues/3014)).

<a name="Core 1.0.1237, Wallaby App 1.0.82, IntelliJ 1.0.233, VS 1.0.65, Atom 1.0.63, VS Code 1.0.327, Sublime 1.0.66"></a>
# Core 1.0.1237, Wallaby App 1.0.82, IntelliJ 1.0.233, VS 1.0.65, Atom 1.0.63, VS Code 1.0.327, Sublime 1.0.66 (2022-03-07)

* New for Wallaby - [Output Inspector for JetBrains editors](https://wallabyjs.com/whatsnew/jb-output-inspector.html).
* New for Wallaby - [VS Code Run On Save Indicators](https://wallabyjs.com/whatsnew/vscode-run-on-save.html); markers for previous test run now appear with only a border (instead of disappearing) [#2816](https://github.com/wallabyjs/public/issues/2816).
* New for Wallaby - [Time Travel Debugger now displays console logs, live comments and identifier expressions](https://wallabyjs.com/whatsnew/logs-in-debugger.html).
* New for Wallaby `Start on closest project in mono-repo` command for Wallaby for VS Code [#2914](https://github.com/wallabyjs/public/issues/2914).
* New for Wallaby - [VS Code Open Diff Setting](https://wallabyjs.com/whatsnew/vscode-open-diff-setting.html) to control where diff view is opened.
* New for Quokka - [JavaScript and TypeScript Time Machine for VS Code](https://quokkajs.com/whatsnew/time-machine.html).
* New for Quokka - [Code Stories for VS Code](https://quokkajs.com/whatsnew/code-stories.html).
* VS Code v1.61, v1.62, v1.63, v1.64 support.
* Atom v1.59 support.
* JetBrains Editors 2022.1.x support ([#2830](https://github.com/wallabyjs/public/issues/2830), [#2862](https://github.com/wallabyjs/public/issues/2862) [#2924](https://github.com/wallabyjs/public/issues/2924), [#2938](https://github.com/wallabyjs/public/issues/2938)).
* Added support to Wallaby/Quokka for private class members and computed class properties.
* Added support to Wallaby/Quokka for Node.js' new experimental hooks API (changed in recent version) ([#2887](https://github.com/wallabyjs/public/issues/2887), [#709](https://github.com/wallabyjs/quokka/issues/709)).
* Added support to Wallaby for lazy scripts in Angular projects.
* Added support to Wallaby external styles support for Angular CLI 13+.
* Added support to Wallaby for `esbuild` use with `pnp`.
* Added support to Wallaby for forks of Open Source projects.
* Added support to Wallaby for Angular CLI v13.1 ([#2864](https://github.com/wallabyjs/public/issues/2864), [#2913](https://github.com/wallabyjs/public/issues/2913), [#2864](https://github.com/wallabyjs/public/issues/2864), [#2877](https://github.com/wallabyjs/public/issues/2877)).
* Added support to Wallaby for the latest version of NX workspaces ([#2842](https://github.com/wallabyjs/public/issues/2842), [#2839](https://github.com/wallabyjs/public/issues/2839), [#2912](https://github.com/wallabyjs/public/issues/2912), [#2913](https://github.com/wallabyjs/public/issues/2913), [#2934](https://github.com/wallabyjs/public/issues/2934)).
* Added support to Wallaby for `@angular-builders/custom-webpack:karma`.
* Added support to Wallaby for `jest` expect `toStrictEqual` to show as a diff [#2837](https://github.com/wallabyjs/public/issues/2837).
* Added support to Wallaby for Jest v27.3.0+ [#2892](https://github.com/wallabyjs/public/issues/2892).
* Added support to Wallaby for Jasmine v4+.
* Added support to Wallaby for Mocha v9.1.2.
* Added support to Wallaby for the built-in Babel compiler to use async transformers ([#2821](https://github.com/wallabyjs/public/issues/2821), [#697](https://github.com/wallabyjs/quokka/issues/697)).
* Added support to Wallaby for "env.runner.env" settings for automatic configuration (so that Jest configuration code code can access configured env variables) [#2825](https://github.com/wallabyjs/public/issues/2825).
* Added support to Wallaby for Ava using ES Modules [#2905](https://github.com/wallabyjs/public/issues/2905).
* Added support to Wallaby for the latest version of Chrome [#468](https://github.com/ArtemGovorov/wallaby/issues/468).
* Added support to Wallaby for custom experimental loaders [#2818](https://github.com/wallabyjs/public/issues/2818).
* Added support to Wallaby for setup/teardown functions to be able to use `async` keyword in function definition [#2812](https://github.com/wallabyjs/public/issues/2812).
* Added support to Wallaby for configuration to return a promise [#2808](https://github.com/wallabyjs/public/issues/2808).
* Added support to Wallaby for `@testing-library/react-native` debug() function to print to Wallaby output.
* Added support to Quokka to support Babel when using ES Modules.
* Added support to Quokka when using `stdEsm` to work with `node:*` require format.
* Improved Wallaby/Quokka VS Code Output Channel (using new API) [microsoft/vscode/#132183](https://github.com/microsoft/vscode/issues/132183).
* Improved Wallaby/Quokka source map processing to optimize performance and improve accuracy [#752](https://github.com/wallabyjs/quokka/issues/752).
* Improved Wallaby for VS Code large diffs performance.
* Improved Wallaby shutdown of Chrome processes.
* Improved Wallaby source mapping support for swc [#2902](https://github.com/wallabyjs/public/issues/2902).
* Improved Wallaby integration with `ts-jest`; Wallaby now reuses Jest's cached version of the file content if it has been previously transformed [#2940](https://github.com/wallabyjs/public/issues/2940).
* Improved Wallaby error message reporting for failure to process webpack `__moduleBundler.require`; now reports the filename for the moduleId that could not be loaded.
* Improved Wallaby's integration with Jest's internal cache to reduce the number of files stored with Jest and to optimize performance ([#2841](https://github.com/wallabyjs/public/issues/2841), [#2858](https://github.com/wallabyjs/public/issues/2858), [#2879](https://github.com/wallabyjs/public/issues/2879), [#2888](https://github.com/wallabyjs/public/issues/2888)).
* Updated Wallaby/Quokka file system watcher to provide native support for Apple M1 processors.
* Updated Wallaby's Jest integration to only use react-scripts if `react-script` is used in `test` script ([#2880](https://github.com/wallabyjs/public/issues/2880), [#2893](https://github.com/wallabyjs/public/issues/2893)).
* Updated Wallaby to use latest versions of `chrome-launcher` and `chrome-remote-interface` packages.
* Updated Wallaby to ignore file watch for Jest projects with `cache` and `coverage` folders nested beneath project source folder [#2866](https://github.com/wallabyjs/public/issues/2866).
* Updated Wallaby's `tearDown` function to run when `worker.restart` is set to true, previously it would not execute [#2828](https://github.com/wallabyjs/public/issues/2828).
* Updated Quokka for VS Code so that is is enabled by default for untrusted workspaces; will prompt to confirm code is allowed to run [#734](https://github.com/wallabyjs/quokka/issues/734).
* Updated Quokka for Atom's to use tree sitter grammers (when available) when creating new Quokka files [#680](https://github.com/wallabyjs/quokka/issues/680).
* Updated Quokka `node-fetch` Install Package to use the `@cjs` version when not running with ES Modules.
* Updated Quokka to call `tsconfig-paths` with compiler options if they are set correctly with required settings ([#710](https://github.com/wallabyjs/quokka/issues/710), [#727](https://github.com/wallabyjs/quokka/issues/727)).
* Updated Quokka to allow resolving relative paths for plugins from the Quokka global folder.
* Updated Quokka to resolve `.quokka`, `tsconfig.json` and `jsconfig.json` settings up to project root for mono repos based on Quokka file path [#700](https://github.com/wallabyjs/quokka/issues/700).
* Updated Quokka for VS Code to explicitly resolve internal packages so that it does not incorrectly use packages resolved by other extensions that are loaded before Quokka [#744](https://github.com/wallabyjs/quokka/issues/744).
* Various improvements to Wallaby error reporting (includes [#2806](https://github.com/wallabyjs/public/issues/2806)).
* Bug fix for Wallaby/Quokka where latest version of VS Code caused extensions to crash [#2798](https://github.com/wallabyjs/public/issues/2798).
* Bug fix for Wallaby/Quokka where Chrome profile viewer does not load.
* Bug fix for Wallaby/Quokka stack trace mapping not working when spaces exist in the path when using ES Modules [#2827](https://github.com/wallabyjs/public/issues/2827).
* Bug fix for Wallaby/Quokka where `escodegen` incorrectly omits parentheses from an argument of an await expression that results in a runtime error [#2866](https://github.com/wallabyjs/public/issues/2866).
* Bug fix for Wallaby/Quokka inline value logging incorrectly showing non-enumerable symbols [#2873](https://github.com/wallabyjs/public/issues/2873).
* Bug fix for Wallaby with Jest circus not reporting long running test names.
* Bug fix for Wallaby where Jest transformers would sometimes be called twice when using ESM.
* Bug fix for Wallaby with Jest circus runner inline error reporting being unnecessarily verbose [#2857](https://github.com/wallabyjs/public/issues/2857).
* Bug fix for Wallaby using Jasmine 3.5+ where `resolveTo` and `rejectWith` was not working [#2856](https://github.com/wallabyjs/public/issues/2856).
* Bug fix for Wallaby Time Travel Debugger call stack not always displaying correctly after stepping forward/back.
* Bug fix for Wallaby Time Travel Debugger incorrectly reporting iterator values for `for in` and `for of`.
* Bug fix for Wallaby where incorrect code coverage aggregated totals were reported in Wallaby App after starting the Time Travel Debugger.
* Bug fix for Wallaby Time Travel Debugger sometimes reporting `Cannot read property 'find' of undefined` [#2838](https://github.com/wallabyjs/public/issues/2838).
* Bug fix for Wallaby using mocha with ES Modules where stack trace for errors was not correctly reported ([#2805](https://github.com/wallabyjs/public/issues/2805), [#2827](https://github.com/wallabyjs/public/issues/2827)).
* Bug fix for Wallaby `teardown` function only running once for `node` environments [#2829](https://github.com/wallabyjs/public/issues/2829).
* Bug fix for Wallaby with Jest where `ts-jest` not correctly calculating depedency changes when `isolatedModules` is `false`. 
* Bug fix for Wallaby with Jest when Jest reporter package exists multiple times within node_modules [#2863](https://github.com/wallabyjs/public/issues/2863).
* Bug fix for Quokka for IntelliJ not correctly displaying Output window contents when long running Quokka output was unchanged [#739](https://github.com/wallabyjs/quokka/issues/739).
* Bug fix for Quokka when started on a file outside of a project when using TypeScript.
* Bug fix for Quokka expired licenses not working for Sublime Text [#750](https://github.com/wallabyjs/quokka/issues/750).

<a name="Core 1.0.1235, Wallaby App 1.0.78, IntelliJ 1.0.224, VS 1.0.64, Atom 1.0.63, VS Code 1.0.311, Sublime 1.0.66"></a>
# Core 1.0.1143, Wallaby App 1.0.78, IntelliJ 1.0.224, VS 1.0.64, Atom 1.0.63, VS Code 1.0.311, Sublime 1.0.66 (2021-09-10)
* [New Wallaby VS Code Interactive Tutorial.](https://wallabyjs.com/docs/intro/get-started-vscode.html)
* New Wallaby for Visual Studio 2022. [#2772](https://github.com/wallabyjs/public/issues/2772)
* [New Jump to Line Test command.](https://wallabyjs.com/whatsnew/jump-to-line-tests-command.html)
* [New Quokka "How does it work?" docs page.](https://quokkajs.com/docs/how-does-it-work.html)
* [Added Integration with VS Code's NEW built-in Test Explorer.](https://wallabyjs.com/whatsnew/vscode-test-explorer.html)
* [Improved Error Detail Hover for VS Code.](https://wallabyjs.com/whatsnew/improved-error-output.html)
* [Added support for Jest v27.](https://wallabyjs.com/whatsnew/jest-v27-support.html)
* [Added support for Jest Circus Runner.](https://wallabyjs.com/whatsnew/jest-circus-support.html)
* [Added support for Angular v12.](https://wallabyjs.com/whatsnew/angular-v12-support.html)
* [Added support for Mocha v9.](https://wallabyjs.com/whatsnew/mocha-v9-support.html) ([#2726](https://github.com/wallabyjs/public/issues/2726), [#2729](https://github.com/wallabyjs/public/issues/2729))
* Added support for Webpack v5.50+.
* [Added support for Quokka to use Yarn 2 workspaces.](https://quokkajs.com/whatsnew/yarn2-support.html)
* [Added support for Quokka in mono-repos.](https://quokkajs.com/whatsnew/support-for-monorepos.html)
* [Improved Output Highlighting for Quokka in VS Code.](https://quokkajs.com/whatsnew/output-highlighting.html)
* [New Reset Wallaby Cache command](https://wallabyjs.com/docs/intro/troubleshooting.html#try-resetting-your-testing-framework-cache) for VS Code and JetBrains editors.
* [New Wallaby `hideFromErrorStackTrace` setting.](https://wallabyjs.com/docs/config/files.html#hidefromerrorstacktrace)
* New `wallaby.dimmedTextOpacity` setting for VS Code to control the opacity of dimmed text in Output Inspector and Test Story viewer.
* [New `maxTraceSteps` setting for Wallaby Time Travel Debugger.](https://wallabyjs.com/docs/config/overview.html#maximum-trace-steps)
* New `Wallaby.js: Open Sample Project` command for VS Code
* Updated built-in TypeScript version that Wallaby and Quokka ship with to `4.4.2`.
* Improved Wallaby and Quokka websites to allow zooming on images and animations GIFs. [#2699](https://github.com/wallabyjs/public/issues/2699)
* Updated Wallaby App to detect hyperlinks in logs so that they can be launched. [#2728](https://github.com/wallabyjs/public/issues/2728)
* Added Live Value support for `yield` statements in both Wallaby and Quokka. [#2782](https://github.com/wallabyjs/public/issues/2782)
* Added Live Value support for iterator generators. [#674](https://github.com/wallabyjs/quokka/issues/674)
* Updated Wallaby's `jest` integration to support Windows use of `subst` for remapping projects to separate drive. [#2790](https://github.com/wallabyjs/public/issues/2790)
* Added support for `ava` v4. [#2780](https://github.com/wallabyjs/public/issues/2780)
* Improved Time Travel Debugger value logging. [#2767](https://github.com/wallabyjs/public/issues/2767)
* Added suppport for Sublime Text 4. [#2710](https://github.com/wallabyjs/public/issues/2710)
* VS Code v1.56, v1.57, v1.58, v1.59, v1.60 support.
* Atom v1.57, v1.58 support.
* JetBrains Editors 2021.2.x support.
* Added support for @nrwl/jest in `nx workspaces` v12.
* Added support for `jest` `matchInlineSnapshot` when not using editor auto-save feature. [#2761](https://github.com/wallabyjs/public/issues/2761)
* Downgraded `fs-extra` dependency to support node 8.x. [#2763](https://github.com/wallabyjs/public/issues/2763)
* Significant improvements to how Wallaby integrates with `jest`'s caching mechanism; auto-recovery of corrupt `jest` cache and more aggressive cache-breaking. [#2758](https://github.com/wallabyjs/public/issues/2758)
* Updated Jest v27 to use `jest-circus` runner by default (was previously using `jest-jasmine` if not explicitly configured).
* Improved Time Travel Debugger edit-and-continue heuristics to better survive changes where number of steps have changed.
* Improved Time Traveller Debugger start frame heuristics to better align with user expected experience. [#2767](https://github.com/wallabyjs/public/issues/2767)
* Added support for `jest` async transformers.
* Updated `ts-jest` integration to always set `sourceMap` to `true`.
* Added `DefinePlugin` to webpack configuration to align with Webpack in development mode. [#2735](https://github.com/wallabyjs/public/issues/2735)
* Update Quokka to report system-level runtime errors to Quokka console (previously would report empty console).
* Added `customElements` property for Quokka JSDOM window properties that are exposed as global properties.
* Enhanced Wallaby core update mechanism to be signed and validated as part of the update process.
* Various improvements to how Wallaby integrates with Jest transformers. ([#2724](https://github.com/wallabyjs/public/issues/2724), [#2751](https://github.com/wallabyjs/public/issues/2751))
* Improved Wallaby error reporting stack mapping; could sometimes incorrectly remove parts of a stack trace.
* Added support for styles-related webpack rules for karma-based Angular 12 workspaces.
* Improved Wallaby's worker process recycling behavior (less recycles, better performance).
* Updated Wallaby automatic configuration for Jest to remove `testResultsProcessor` and `reporters` configuration to avoid updating project folder which may cause tests to be re-run.
* Updated Wallaby to not scan `.git` folder for projects using Jest with automatic configuration
* Added support for incremental TypeScript compilation for Angular CLI 12 karma-based projects
* Improved support for jest with multiple sub-projects
* Added support for using latest JavaScript language features in Quokka when using native esm. [#639](https://github.com/wallabyjs/quokka/issues/639)
* Added support for Quokka to run with TypeScript and native esm packages. [#672](https://github.com/wallabyjs/quokka/issues/672)
* Support for the latest version of angular jest-builder (v12.x).
* Support for the latest version of Chrome (v93.0.x).
* Added support for Wallaby using `customize-cra` package. [#2692](https://github.com/wallabyjs/public/issues/2692)
* Updated Quokka to restart its worker process if asynchronous code is still executing after main entry point has completed.
* Improvement Live Value Display with TypeScript files. [#625](https://github.com/wallabyjs/quokka/issues/625)
* Update Wallaby to report non-zero process.exit() calls as a global error. [#2701](https://github.com/wallabyjs/public/issues/2701)
* Added support for Output Inspector in VS Code for projects that do not use automatic configuration.
* Added support for `nx workspaces` with Angular v12.
* Bug fix for `Show Value` for Wallaby for JetBrains editors only working if a selection is made in the editor. [#2797](https://github.com/wallabyjs/public/issues/2797)
* Bug fix for Quokka where some packages would not load correctly when using Quokka's package install feature. [#2751](https://github.com/wallabyjs/public/issues/2751)
* Bug fix for zonejs imports for multi-project Angular CLI 12 workspaces with virtual default `test.ts` file. [#2721](https://github.com/wallabyjs/public/issues/2721)
* Bug fix for extra space appearing in multi-line console logs. [#648](https://github.com/wallabyjs/quokka/issues/648)
* Bug fix for stack trace mapping not working when using Quokka with nativeEsm. [#644](https://github.com/wallabyjs/quokka/issues/644)
* Bug fix for Wallaby/Quoikka crashing when using null elements in Array Expressions. [#2703](https://github.com/wallabyjs/public/issues/2703)
* Bug fix for module patch warnings which led to a runtime error instead of a warning.
* Bug fix for `runAllTestsInAffectedTestFile` setting not being used with Wallaby Debugger. [#2700](https://github.com/wallabyjs/public/issues/2700)
* Bug fix for Wallaby and Quokka not showing `console.log` if used with ternary operator. [#620](https://github.com/wallabyjs/quokka/issues/620)
* Bug fix for VS Code's problem view locations not updating correctly if removing blank lines from test/code file.
* Bug fix for `ava` snapshots no longer working in latest version. [#2788](https://github.com/wallabyjs/public/issues/2788)
* Bug fix for Wallaby when async code is executed after a test run is completed (could lead to a runtime error).
* Bug fix for Wallaby with Webpack v5 where Wallaby would try and include files that did not emit source code. [#2775](https://github.com/wallabyjs/public/issues/2775)
* Bug fix for Quokka not running on scratch files in the latest version of JetBrains editors.
* Bug fix for VS Code for Windows `Wallaby.js: Launch Coverage & Test Explorer` command not working.
* Various Wallaby Diagnostics Report improvements to help diagnose issues faster.

<a name="Core 1.0.1064, Wallaby App 1.0.77, IntelliJ 1.0.216, VS 1.0.63, Atom 1.0.63, VS Code 1.0.286, Sublime 1.0.64"></a>
# Core 1.0.1064, Wallaby App 1.0.77, IntelliJ 1.0.216, VS 1.0.63, Atom 1.0.63, VS Code 1.0.286, Sublime 1.0.64 (2021-04-20)
## Changes and Bug Fixes
* [New Wallaby Output Inspector feature](https://wallabyjs.com/docs/intro/output-inspector.html).
* New Wallaby Test Story Viewer [`hide repeated code`](https://wallabyjs.com/whatsnew/test-story-hide-repeated-code.html) feature.
* [New Quokka `Auto Log` feature](https://quokkajs.com/whatsnew/auto-log.html).
* [New Quokka for VS Code Automatic Start settings](https://quokkajs.com/docs/index.html#configuration).
* [New Quokka for VS Code Recent Files feature](https://quokkajs.com/whatsnew/vscode-recent-files.html).
* [New Quokka for JetBrains Editors Auto Start Setting](https://quokkajs.com/whatsnew/jetbrains-autostart-scratchfiles.html).
* New Wallaby VS Code Start View.
* [New Wallaby What's New page](https://wallabyjs.com/whatsnew/).
* New Quokka VS Code Start View.
* [New Quokka What's New Page](https://quokkajs.com/whatsnew/).
* New Quokka settings to allow 'Pro' users to define Show Value behavior: [`Show Value on Selection`](https://quokkajs.com/docs/configuration.html#show-value-on-selection) and [`Show All Values`](https://quokkajs.com/docs/configuration.html#show-all-selected-values).
* Added [support for `.svelte`](https://wallabyjs.com/whatsnew/svelte-file-support.html) files (showing coverage and logged values inside script blocks).
* Added first class support for [`Yarn 2`](https://wallabyjs.com/docs/integration/yarn2.html) (was previous possible with a customized node-runner).
* Changed behavior of Wallaby `Run Line Test`, `Run File Tests` and `Run Project Tests`; these commands no longer update snapshots, instead use the `Update Test Snapshots`, `Update File Snapshots` and `Update Project Snapshots` commands [#2678](https://github.com/wallabyjs/public/issues/2678).
* Improved Exclusive Test run behavior to automatically add any modified test files to the current exclusive test run; can be disabled with `addModifiedTestFileToExclusiveTestRun: false` setting [#2630](https://github.com/wallabyjs/public/issues/2630).
* Improved Wallaby/Jest integration when loading multi-project files ([#2687](https://github.com/wallabyjs/public/issues/2687), [#2689](https://github.com/wallabyjs/public/issues/2689)).
* Improved Wallaby [`setup` and `teardown` functions](https://wallabyjs.com/docs/config/bootstrap.html) to await for a returned Promise.
* Improved Quokka support for react projects; now sets `React` global with React object to better replicate browser runtime.
* Improved webpack 5 integration to deal with multi-chunk outputs ([#2651](https://github.com/wallabyjs/public/issues/2651), [#2652](https://github.com/wallabyjs/public/issues/2652), [#2674](https://github.com/wallabyjs/public/issues/2674)).
* Improved Wallaby App filter toggles (now checkboxes instead of switches).
* Updated Wallaby to read `.env` files on startup for `create-react-app` applications [#2636](https://github.com/wallabyjs/public/issues/2636#issuecomment-786195135).
* Added new Wallaby `mapConsoleMessagesStackTrace` to map stack trace within console.log messages back to original lines [#2677](https://github.com/wallabyjs/public/issues/2677#issuecomment-814560966).
* Added more Wallaby for VS Code settings to control Code Lens behavior.
* Added `Run Test` code lens for Wallaby for VS Code (off by default) [#2664](https://github.com/wallabyjs/public/issues/2664#issuecomment-805385826).
* VS Code v1.53, v1.54, v1.55 support.
* Atom v1.55, v1.56 support.
* IntelliJ 2021.1.x support.
* Added support for the latest version of Jest (v26.6.3).
* Added support for `create-react-app` with `react-app-rewired` integration.
* Added support for the latest version of webpack (v5.34.x) ([#2659](https://github.com/wallabyjs/public/issues/2659), [#2667](https://github.com/wallabyjs/public/issues/2667), [#2679](https://github.com/wallabyjs/public/issues/2679)).  
* Added support for the latest version of Angular CLI (v11.2.x).
* Added support for the latest version of NX Workspace (v12.0.x) [#2639](https://github.com/wallabyjs/public/issues/2639).
* Added support for the latest version of Jasmine (v3.7.x) [#2673](https://github.com/wallabyjs/public/issues/2673).
* Added new `logLimit` Quokka setting (defaults to 100) to limit how many values are logged for a given expression (e.g. when value is logged in a loop).
* Added new `testRunComplete` hook to allow Wallaby to perform some processing after a test run completes [#2627](https://github.com/wallabyjs/public/issues/2627#issuecomment-793396305).
* Bug Fix for Value Explorer with Wallaby `Run on Save`, previously was not working [#2670](https://github.com/wallabyjs/public/issues/2670)
* Bug Fix for Wallaby ignoring any file names containing `[...` [#2655](https://github.com/wallabyjs/public/issues/2655).
* Bug Fix for Quokka for JetBrains editors reporting a fatal error on startup [#585](https://github.com/wallabyjs/quokka/issues/585).
* Bug Fix for Quokka for JetBrains editors reporting an `Already disposed` exception [#599](https://github.com/wallabyjs/quokka/issues/599).
* Bug Fix for Wallaby and Quokka causing JetBrains editors to freeze sometimes when used together [#610](https://github.com/wallabyjs/quokka/issues/610).
* Bug Fix for Windows file system casing issues when the path of the folder opened in editor casing does not match the on-disk case.
* Bug Fix for Quokka scratch file not loading when `nativeEsm` setting is `true`.
* Bug Fix for Quokka not using customized node path when `nativeEsm` setting is `true`.
* Bug Fix for Wallaby not starting when using WSL2 with JetBrains Editors.
* Bug Fix for Quokka not correctly expanding Value Explorer when previous run finishes in less than 1 second.
* Bug Fix for Quokka Scratch files not working in latest version of JetBrains editors (v2021.1+).
* Bug Fix for Value Explorer incorrectly sorting range nodes alphabetically instead of numerically.
* Various Wallaby Diagnostics Report improvements to help diagnose issues faster.

<a name="Core 1.0.1023, Wallaby App 1.0.75, IntelliJ 1.0.210, VS 1.0.61, Atom 1.0.62, VS Code 1.0.262, Sublime 1.0.62"></a>
# Core 1.0.1023, Wallaby App 1.0.75, IntelliJ 1.0.210, VS 1.0.61, Atom 1.0.62, VS Code 1.0.262, Sublime 1.0.62 (2021-02-05)
## Changes and Bug Fixes
* [New CPU Profiler feature](https://twitter.com/wallabyjs/status/1349627313584021505) ([Wallaby](https://wallabyjs.com/docs/intro/test-profiler.html), [Quokka](https://quokkajs.com/docs/#cpu-profiler)).
* [New multiple sticky/removable values feature](https://twitter.com/wallabyjs/status/1356875072435347456).
* [New "Run to breakpoint" Time Travel Debugger feature](https://wallabyjs.com/docs/intro/time-travel-debugger.html#debug-actions).
* Significantly [improved Wallaby Jest incremental run performance](https://twitter.com/wallabyjs/status/1354338355819933696) (up to **5 times** faster now for auto-config Jest).
* Significantly improved Wallaby and Quokka show/copy/debug value selection; allows fuzzy selection; enhanced support for TypeScript and Babel, and additional syntax selection.
* Significantly improved Wallaby file watcher CPU consumption on Mac.
* VS Code v1.50, v1.51, v1.52 support.
* Atom v1.52, v1.53, v1.54 support.
* Added [Wallaby plugin](https://plugins.jetbrains.com/plugin/15742-wallaby) to JetBrains Marketplace.
* Added support for latest version of Angular CLI (v11).
* Added support for Jest v26.6.2.
* Added support for Jasmine v3.6.
* Added support for vue-jest v5.x.
* Added support for react-app-rewired.
* Added support for the latest version of Webpack 5.
* Added support for `coveragePathIgnorePatterns` in addition to existing support for `collectCoverageFrom` setting in auto-config Jest.
* Added support for `defaultIgnorePaths` setting in auto-config Jest.
* Added [negative zero reporting support](https://discord.com/channels/694023081168994355/694774723778838558/785428903493107722).
* Added new `wallaby.compactMessageOutput` setting (similar to Quokka) to not add new lines between test messages or test errors in Wallaby output.
* Added `symlinkNodeModules` setting (set to true if tested package is ES module) that makes node test runner symlink local node modules from Wallaby cache to correctly support ES modules resolution.
* Added support for projects with indirect cross-references to another project via `includePaths` in Angular CLI integration.
* Added `angular-cli/excludedProjects` setting to allow Wallaby to ignore specified projects for Angular CLI generated workspaces.
* Added `alwaysOpenLocalWallabyAppUrl` [setting in VS Code](https://discordapp.com/channels/694023081168994355/694035930541064293/767710649563742248).
* Added support for re-mapping ports in remote workspaces for Wallaby App and websockets in case they don't automatically map to the host in VS Code.
* Added support for selecting multiple files for exclusive test run from context menu [#2562](https://github.com/wallabyjs/public/issues/2562).
* Improved testing-library support.
* Improved Wallaby Jest startup time.
* Improved source mapping for transformed ranges resulting in better and more reliable display of expression evaluation results.
* Improved VS Code CodeLens behavior.
* Improved Value Explorer performance in IntelliJ based editors.
* Updated automatic configuration for Jest to log console messages the same as other testing frameworks.
* Improved Wallaby Jest startup time.
* Improved global errors handling in tracer
* Improved core download/update experience in VS Code. Updated Wallaby extension auto-update mechanism.
* Updated automatic configuration for Jest to log console messages the same as other testing frameworks.
* Various improvements and fixes in [Wallaby Open Source Licensing Model](https://wallabyjs.com/oss/).
* Improved Wallaby App test tree user experience when using test text filter [#2552](https://github.com/wallabyjs/public/issues/2552).
* Added context menu item to select a folder as automatic configuration and start Wallaby in VS Code.
* Changed TypeScript `declaration` setting from a soft default to a hard default.
* Fixed displaying coverage indicators or tracking on un-editable git files that may be displayed in VS Code diff view.
* Stopped keyboard shortcut for changing tabs from getting stuck on Debugger tab for JetBrains editors [#2565](https://github.com/wallabyjs/public/issues/2565).
* Fixed IntelliJ based editors plugin to resolve symlinks if the project path or config path is a symlinked directory [#2543](https://github.com/wallabyjs/public/issues/2543).
* Bug fix for static field name check [#2586](https://github.com/wallabyjs/public/issues/2586).
* Bug fix for calculating files with no code coverage [#2587](https://github.com/wallabyjs/public/issues/2587).
* Bug fix for incorrectly sorting object properties before displaying them in editor.
* Bug fix for `collectCoverageFrom` pattern generation when a single module file extension is specified [#2530](https://github.com/wallabyjs/public/issues/2530).
* Bug fix to make original range uncovered only if the range is not the only range on its line [#547](https://github.com/wallabyjs/quokka/issues/547).
* Bug fix for Jest global setup on first load to ensure env changes are correctly communicated to workers when they are recycled.
* Fixed manual config Jest compatibility issue (snapshots were not updated in project directory).
* Fixed `process.cwd()` for Windows when `cwd()` case returned by node.js doesn't match the on-disk directory casing.
* Fixed mocha dispose when previous test run is still running [#2564](https://github.com/wallabyjs/public/issues/2564).
* Fixed race condition in tracer caused test run to be skipped when global errors occurred and tests are loaded in `setup` function.
* Bug fix for Quokka `stdEsm` flag that was not respecting `false` value without `nativeEsm` flag.
* Bug fix in `console.info` incorrectly inspecting object instead of using tracer's API like other similar functions (warn, error, log).
* Bug fix for a warning to always display on Quokka first load for TypeScript files when tsconfig.paths is not configured.
* Bug fix for when escaped properties (space, single quote or double quote) would not be copied to clipboard properly.
* Bug fix for built-in @babel/register not being used.
* Bug fix for loading `tsconfigPaths` and merging `tsconfig.json` compiler options [#553](https://github.com/wallabyjs/quokka/issues/553).

<a name="Core 1.0.968, Wallaby App 1.0.74, IntelliJ 1.0.198, VS 1.0.58, Atom 1.0.61, VS Code 1.0.244, Sublime 1.0.61"></a>
# Core 1.0.968, Wallaby App 1.0.74, IntelliJ 1.0.198, VS 1.0.58, Atom 1.0.61, VS Code 1.0.244, Sublime 1.0.61 (2020-09-30)

## Changes and Bug Fixes
* [New Test Stories feature](https://wallabyjs.com/docs/intro/test-stories.html) for IntelliJ Editors.
* [New Open Source Licensing Model](https://wallabyjs.com/oss/).
* [New Detatch Test Story](https://wallabyjs.com/docs/intro/test-stories.html#detaching-test-story-file-from-the-debugger-and-source-code) feature for read-only snapshot of test execution path.
* [New Quokka support for native ES modules](https://quokkajs.com/docs/configuration.html#es-modules-and-top-level-await).
* [New Quokka support for top-level await](https://quokkajs.com/docs/configuration.html#es-modules-and-top-level-await).
* [New Quokka support for create-react-app projects](https://quokkajs.com/docs/configuration.html#create-react-app).
* VS Code v1.47, v1.48, v1.49 support.
* IntelliJ 2020.2.x, 2020.3.x support.
* Atom v1.49, v1.50, v1.51 support.
* Added support for latest version of NX Workspace (v10.2.x).
* Added support for latest version of Angular CLI (v10.1.3).
* Added language support for logical assignment operators (||=, &&=, ??=, |=, &=).
* Added language support for static class fields.
* Added language support for nullish coalescing [#2473](https://github.com/wallabyjs/public/issues/2473).
* Added language support for [private methods](https://github.com/tc39/proposal-private-methods).
* Added support for `@testing-library` `screen.debug()` output [#2510](https://github.com/wallabyjs/public/issues/2510).
* Added warning for when time-travel debugger cannot execute correctly because there is more than one test with the same name [#2518](https://github.com/wallabyjs/public/issues/2518).
* Added additional support for `.only` usages within Jest.
* Added patch for `alert`, `confirm`, and `prompt` browser globals if they exist and are still native methods [#2519](https://github.com/wallabyjs/public/issues/2519).
* Added Quokka built-in support for TypeScript paths/aliases.
* Added Quokka built-in support for JSDOM instead of using 3rd party package.
* Added visual indicator to show when a test is included in the current set of filtered tests.
* Added support for Webpack's `@stylable/webpack-plugin` plugin.
* Added new Wallaby `preservePaths` setting to not replace the instrumented file paths with the relative path in any messages reported by Wallaby [#2492](https://github.com/wallabyjs/public/issues/2492).
* Added emoji rendering support for Sublime Text inline comments and values.
* Added global error stack trace for browser-based tests.
* Added support for WSL2 for Intellij Editors by detecting and using project cache on WSL2 file system [#2454](https://github.com/wallabyjs/public/issues/2454).
* Added code lens options to Wallaby for VS Code to make commands more discoverable.
* Added support for using Wallaby App from VS Code Remote workspaces [#2136](https://github.com/wallabyjs/public/issues/2136).
* Added [Wallaby docs](https://wallabyjs.com/docs/intro/get-started-vscode.html#remote-containers) and [sample](https://github.com/wallabyjs/wallaby-vscode-remote-containers) for setting up Wallaby to work with VS Code containers 
* Added compact view mode for Wallaby App test details view [#2438](https://github.com/wallabyjs/public/issues/2438).
* Added new context actions to Wallaby for VS Code extension to `show assertion data diff` and `jump to error source`.
* Updated Wallaby App to load project immediately (instead of port scanning) when launched using editor commands and links.
* Updated Wallaby App to fall back to use https://wallabyjs.com/app/ when Wallaby localhost web server port (port 51245) is not available.
* Updated Wallaby App to use a random port to connect to project if all well-known ports are unavailable.
* Updated Quokka for VS Code extension to improve initial load times [#536](https://github.com/wallabyjs/quokka/issues/536).
* Updated Wallaby to ignore all dot folders for automatic configuration for Jest to improve performance [#2470](https://github.com/wallabyjs/public/issues/2470#issuecomment-653497803).
* Updated Advanced Logging to include system generated information messages (in their own color), and to indicate where a value was logged value but the line of code was never executed.
* Updated Quokka for VS Code to minimize initial load dependencies to improve load times [#536](https://github.com/wallabyjs/quokka/issues/536).
* Updated Wallaby to merge global errors across all worker processes.
* Updated Quokka to clear any intervals that were created in Quokka file before re-using node process.
* Updated test execution behavior to re-execute tests after a runtime error or global error occurs.
* Updated Wallaby's worker process reuse and recycling to allow more time for first test execution before attempting to recycle test to improve performance on project startup.
* Updated inline formatted object to be consistent with console.log.
* Updated automatic configuration for Angular CLI so that behaviour aligns with `ng test` and so that any scripts/styles with `bundleName` property is ignored.
* Updated Quokka JSDOM to correctly reset globals (e.g. previously `setTimeout` was not being reset).
* Updated Quokka JSDOM defaults to pretendToBeVisual and runScripts `dangerously`.
* Updated Wallaby and Quokka inline logging with support for a lot more expression types, and a more intuitive user experience (more than doubled the number of supported scenarios for variable and expressions).
* Updated source mapping for babel compilers to be more accurate.
* Updated Wallaby to not show commands for new features that are not supported by expired licenses.
* Updated Wallaby for VS Code update mechanism to update in the background and not require VS Code restart before Wallaby changes are available.
* Updated Wallaby for IntelliJ Editors to support updating snapshopts from the console for an entire file.
* Updated Quokka for IntelliJ to not set project path for scratch files (fixes import paths and tsconfig.json paths not working correctly in scratch files).
* Bug fix for test file selection where `.only` in commented code would limit which tests were executed [#2509](https://github.com/wallabyjs/public/issues/2509).
* Bug fix for incorrect coverage reporting when destructuring a nullable React prop [#2513](https://github.com/wallabyjs/public/issues/2513).
* Bug fix for setup and teardown not always working properly with automatic configuration for Jest because Wallaby was instrumenting imported code files [#2517](https://github.com/wallabyjs/public/issues/2517).
* Bug fix for Angular projects that used sass and stylus loaders [#2504](https://github.com/wallabyjs/public/issues/2504).
* Bug fix for Wallaby not starting in Angular 10 projects with plugins that are not compatible with test environments [#2508](https://github.com/wallabyjs/public/issues/2508).
* Bug fix for VS Code where Wallaby.js output window conflicts with Quokka resulting in output window highlighting being removed [#2505](https://github.com/wallabyjs/public/issues/2505).
* Bug fix for automatic configuration for jest that would result in empty stack trace when a global error occurred.
* Bug fix for Wallaby for VS Code where Value Explorer would allow infinitely expanding an empty file node.
* Bug fixes for various minor test stories issues.
* Bug fixes for various minor time travel debugger issues.
* Bug fix for failure to instrument code where line breaks occur between static class method names and function parameters [#2481](https://github.com/wallabyjs/public/issues/2481).
* Bug fix for a file being ignored by webpack when compilation fails.
* Bug fix for automatic configuration for Angular CLI projects when `tsconfig.json` file includes comments [#2482](https://github.com/wallabyjs/public/issues/2482)
* Bug Fix for Jest < v21 whose supported had been broken because of more recent updates.
* Bug fix for nx workspaces that resulted in nested projects not loading config properly [#2461](https://github.com/wallabyjs/public/issues/2461).
* Bug fix for VS Code in remote workspace where file:line:column links do not open correctly [#2515](https://github.com/wallabyjs/public/issues/2515).
* Bug fix bug for automatic configurating for Jest that was excluding all directories named `build` [#2452](https://github.com/wallabyjs/public/issues/2452).
* Bug fix for automatic configuration for Jest where a configuration file outside of the root directory was specified and `<rootDir>` folders were not correctly set.
* Bug fix for Wallaby for VS Code having incorrect output window hyperlink positions.
* Bug fix where Wallaby would stop working with Jest if an exception was thrown after test execution finished (i.e. because of async action) [#2149](https://github.com/wallabyjs/public/issues/2149).

<a name="Core 1.0.915, Wallaby App 1.0.72, IntelliJ 1.0.177, VS 1.0.58, Atom 1.0.59, VS Code 1.0.211, Sublime 1.0.61"></a>
# Core 1.0.915, Wallaby App 1.0.72, IntelliJ 1.0.177, VS 1.0.58, Atom 1.0.59, VS Code 1.0.211, Sublime 1.0.61 (2020-06-19)

## Changes and Bug Fixes
* [New Test Stories feature](https://wallabyjs.com/docs/intro/test-stories.html) for VS Code.
* [New Exclusive Test Runs feature](https://wallabyjs.com/docs/intro/selected-tests.html#exclusive-test-run) for VS Code and IntelliJ Editors.
* [New Test File Coverage feature](https://wallabyjs.com/docs/intro/get-started-vscode.html#test-file-coverage) for VS Code (makes working on a large test suites even easier).
* [New Problems View reporting for VS Code](https://wallabyjs.com/docs/intro/get-started-vscode.html#vs-code-problems-view).
* [New community discord server](https://wallabyjs.com/chat/) to discuss Wallaby/Quokka tips and tricks, help solve technical problems, and access our team.
* [New skipped tests and TODOs](https://twitter.com/i/status/1270626756597293056) in Wallaby console and Wallaby App.
* [New peek jest snapshots for VS Code](https://wallabyjs.com/assets/img/vsc-view-snapshots.gif).
* [New Wallaby support for native ES modules](https://wallabyjs.com/docs/integration/esm.html).
* New automatic configuration support for projects using [Angular jest-builder](https://wallabyjs.com/docs/integration/angular.html#jest) schematic.
* New automatic configuration support for projects using [NX workspaces](https://wallabyjs.com/docs/integration/nrwl.html).
* New WSL2 support for [Wallaby](https://wallabyjs.com/docs/intro/get-started-vscode.html#wsl-2) and [Quokka](https://quokkajs.com/docs/configuration.html#wsl-2).
* Quokka now installs with all dependencies necessary to run TypeScript (no longer need to install `ts-node` or `tsconfig-paths`).
* IntelliJ platform 2020.1.x support.
* VS Code v1.43, v1.44, v1.45, v1.46.
* Atom v1.45, v1.46, v1.47, v1.48 support.
* Added support for Mocha v7.2.
* Added support for Webpack v5.
* Added support for Angular v10.
* Added support for Angular v9.
* Added support for jest-preset-angular v8.x [#2327](https://github.com/wallabyjs/public/issues/2327).
* Added support for Ava v3.3.0 [#2336](https://github.com/wallabyjs/public/issues/2336).
* Added support for Jasmine v3.5 [#2358](https://github.com/wallabyjs/public/issues/2358).
* Added support for vue-jest v4.0 [#2391](https://github.com/wallabyjs/public/issues/2391).
* Added support for Jasmine's `fdescribe` keyword.
* Added support for source map URLs that contain file paths [#2434](https://github.com/wallabyjs/public/issues/2434).
* Added support for jest automatic configuration to allow overriding jest location and configuration file location [#2324](https://github.com/wallabyjs/public/issues/2324).
* Added support for using jest `toThrowErrorMatchingSnapshot()`.
* Added support to Quokka for setting absolute paths with `jsconfig.json` [#498](https://github.com/wallabyjs/quokka/issues/498).
* Added support for updating snapshots when time travel debugger is active.
* Added support for using using `mocha` with jest matchers [#2445](https://github.com/wallabyjs/public/issues/2445)
* Added support for [`jest-runner-groups`](https://www.npmjs.com/package/jest-runner-groups) [#2367](https://github.com/wallabyjs/public/issues/2367).
* Added `process.env.WALLABY_ENV` set to `true` for Wallaby node runner processes [#2435](https://github.com/wallabyjs/public/issues/2435).
* Added `updateNoMoreThanOneSnapshotPerTestFileRun` configuration option [#2397](https://github.com/wallabyjs/public/issues/2397).
* Added [dotenv-quokka-plugin](https://github.com/wallabyjs/jsdom-quokka-plugin) for Quokka to allow loading environment variables from a `.env` file.
* Updated Wallaby worker process scheduling (improved performance and reduced process recycling) [#2426](https://github.com/wallabyjs/public/issues/2426).
* Updated code coverage and source-mapping logic to better handle transpiled code that have additional ranges.
* Updated Wallaby cached files mechanism to improve wallaby startup times.
* Updated Wallaby/Quokka to automatically expand values for `Copy Value` commands.
* Updated webpack to process add/delete operations incrementally [#2359](https://github.com/wallabyjs/public/issues/2359).
* Updated clipboard operations for VS Code editors to use VS Code API to add support for VS Code Remote/Unix environments.
* Updated Wallaby App to display and update snapshots.
* Updated Quokka for Sublime Text to not render unicode character for Sublime Text 4 [#472](https://github.com/wallabyjs/quokka/issues/472).
* Updated browser global error reporting to include line number.
* Updated Quokka's execution logic to better handle process exit instead of using timers which could result in recycling worker process.
* Updated Quokka to set working directory to the current file's directory when starting on an existing file and no project is opened [#489](https://github.com/wallabyjs/quokka/issues/489).
* Updated Quokka to not re-execute if Quokka's execution results in adding/changing files in project directory [#499](https://github.com/wallabyjs/quokka/issues/499).
* Updated automatic configuration for jest to only run `globalSetup` and `globalTeardown` once, instead of once for each worker.
* Updated automatic configuration for jest `globalSetup` and `globalTeardown` to remain active between subsequent test executions.
* Updated Wallaby to report on obsolete snapshots.
* Updated Quokka for VS Code's Live Share plugin to work with unsaved files [#468](https://github.com/wallabyjs/quokka/issues/468).
* Updated Wallaby/Quokka TypeScript default compiler overrides to set `declarationMap` to `false` [#465](https://github.com/wallabyjs/quokka/issues/465).
* Updated behavior for test declaration lines to display error source indicator if part of the test is failing (previously was always fully covered indicator).
* Bug fix for Wallaby/Quokka for VS Code where console output could be laggy because of incorrect VS Code internal state handling.
* Bug fix for Wallaby/Quokka for VS Code where console output could lose syntax highlighting because of other extensions overriding output window syntax.
* Bug fix for jest automatic configuration not correctly finding files [#2329](https://github.com/wallabyjs/public/issues/2329).
* Bug fix for Wallaby not correctly updating coverage indicators when a file is modified outside the editor.
* Bug fix for Wallaby's webpack converting binary files to utf-8 text [#2375](https://github.com/wallabyjs/public/issues/2375).
* Bug fix for coverage indicators not always updating correctly when adding newline characters within a tests.
* Bug fix for two quick consecutive changes to a file in large projects that would result in full test-file re-run.
* Bug fix for not running previously scheduled single test change when a new different single test change is made.
* Bug fix for mocha test runner not supporting `skipped` and `pending` tests [#2345](https://github.com/wallabyjs/public/issues/2345).
* Bug fix for Jest automatic configuration not excluding `.cache` folder [#2347](https://github.com/wallabyjs/public/issues/2347).
* Bug fix for Wallaby's test selection logic not correctly limiting execution (e.g. if using `fit.testName()`)  [#2395](https://github.com/wallabyjs/public/issues/2395).
* Bug fix for using jest with a wallaby configuration with `setup()` overrides to `setupFilesAfterEnv` and `transformIgnorePatterns` [#2393](https://github.com/wallabyjs/public/issues/2393).
* Bug fix for Angular automatic configuration not correctly removing karma spec file imports [#2396](https://github.com/wallabyjs/public/issues/2396).
* Bug fix for Wallaby not re-executing files with global errors when other project files change [#2409](https://github.com/wallabyjs/public/issues/2409).
* Bug fix for `process.env.JEST_WORKER_ID` not being set when running from Wallaby.
* Bug fix for `updateNoMoreThanOneSnapshotPerTestFileRun` updating obsolete snapshots when snapshots are failing [#2412](https://github.com/wallabyjs/public/issues/2412)
* Bug fix for Wallaby/Quokka not correctly displaying frozen/read-only properties and symbols [#478](https://github.com/wallabyjs/quokka/issues/478).
* Bug fix for ANSI characters appearing in console output due to console highlighting in `@testing-library/react` [#2420](https://github.com/wallabyjs/public/issues/2420).
* Bug fix for Wallaby/Quokka not always running correctly on Windows machines if launched from a path that didn't match actual disk case sensitivty.
* Bug fix for legacy jest integration importing dependencies from Wallaby extension folder/parent folder [#2451](https://github.com/wallabyjs/public/issues/2451).
* Bug fix for Quokka for IntelliJ reporting java.lang.NullPointerException when user has not confirmed whether to use Pro or Community Edition ([#502](https://github.com/wallabyjs/quokka/issues/502), [#463](https://github.com/wallabyjs/quokka/issues/463)).
* Bug fix for Quokka for Sublime Text displaying warnings in Sublime Text console [#500](https://github.com/wallabyjs/quokka/issues/500).
* Bug fix for Quokka for Sublime Text displaying phantoms from previous execution [#488](https://github.com/wallabyjs/quokka/issues/488).
* Bug fix for Quokka for IntelliJ not copying unexpanded Value Explorer values to the clipboard [#482](https://github.com/wallabyjs/quokka/issues/482).
* Bug fix for automatic jest configuration excluding any `build` and `dist` folders instead of only in the project root [#2452](https://github.com/wallabyjs/public/issues/2452).
* Bug fix for Wallaby for VS Code automatic update mechanism resulting in an error `operation not permitted, rename` [2446](https://github.com/wallabyjs/public/issues/2446).
* Bug fix for automatic jest configuration not working for paths missing trailing slash [#2443](https://github.com/wallabyjs/public/issues/2443).
* Bug fix for Wallaby’s logging subsystem to ignore messages from external components such as express etc. [#2433](https://github.com/wallabyjs/public/issues/2433).

<a name="Core 1.0.833, Wallaby App 1.0.66, IntelliJ 1.0.156, VS 1.0.54, Atom 1.0.56, VS Code 1.0.172, Sublime 1.0.55"></a>
# Core 1.0.833, Wallaby App 1.0.66, IntelliJ 1.0.156, Visual Studio 2017, 2019 1.0.54, Atom 1.0.56, Visual Studio Code 1.0.172, Sublime Text 1.0.54 (2020-02-07)

## Changes and Bug Fixes
* [New Time Travel Debugger](https://wallabyjs.com/docs/intro/time-travel-debugger.html) for VS Code and IntelliJ Editors.
* [New Test Filtering feature](https://medium.com/@wallabyjs/new-test-filtering-feature-7435e2c50279) for Wallaby for all editors to only show results + coverage for the test(s) you are working on.
* [New Object Proxy Logging](https://wallabyjs.com/docs/intro/advanced-logging.html#object-proxy) to quickly see where the object properties are being accessed from and what values are returned/set.
* [New Interactive Examples for Quokka VS Code](https://quokkajs.com/docs/index.html#interactive-examples).
* New feature "Jump To Test" feature for VS Code and IntelliJ to quickly search for tests without leaving the editor.
* New feature to switch between projects in [Wallaby App](https://wallabyjs.com/docs/intro/get-started-wallaby-app.html) with the `Select project (Alt + 3)` icon.
* New feature for Wallaby VS Code to [automatically start for a folder/workspace](https://wallabyjs.com/docs/intro/get-started-vscode.html#changing-wallabys-start-mode) if it was last running when the VS Code window was closed.
* New Show/Copy Values internal mechanism (Show/Copy value can no longer result in run-time errors).
* New feature for Quokka to automatically display values on text selection ('Pro' edition).
* IntelliJ platform 2019.3.x support.
* VS Code v1.40, v1.41, v1.42.
* Atom v1.41, v1.42, v1.43, v1.44 support.
* Added support to Wallaby for projects that use Jest v25.x.
* Added support to Wallaby for projects that use Angular v9.x.
* Added support for Live Value Display to log function parameters.
* Added support for Live Value Display to log catch statement parameters.
* Added support for the Optional Chaining operator (fixes [#2309](https://github.com/wallabyjs/public/issues/2309)).
* Added support for nested OptionalMemberExpressions (fixes [#2313](https://github.com/wallabyjs/public/issues/2312)).
* Added support for [`import.meta` tc39 proposal](https://github.com/tc39/proposal-import-meta).
* Added support for [`numeric separator` tc39 proposal](https://github.com/tc39/proposal-numeric-separator).
* Added support for dynamic imports used inside inside generator functions with `yield` ([#2269](https://github.com/wallabyjs/public/issues/2269)).
* Added support for Webpack [context modules](https://webpack.js.org/guides/dependency-management/#context-module-api) (fixes [#2248](https://github.com/wallabyjs/public/issues/2248)).
* Added [config option to override Jest path and Jest config file](https://wallabyjs.com/docs/integration/jest.html#overriding-automatic-configuration) for Automatic Configuration.
* Added support for using Wallaby App in offline mode.
* Updated Wallaby for VS Code core download algorithm to cache core update between VS Code version updates.
* Updated Wallaby for VS Code default configuration mechanism to consider automatic configuration for Jest and Angular projects.
* Updated Wallaby's Angular automatic configuration to treat `sourceRoot` as optional (fixes [#2305](https://github.com/wallabyjs/public/issues/2305)).
* Updated Wallaby's Jest integration to support using TypeScript files for setup/teardown ([#2244](https://github.com/wallabyjs/public/issues/2244)).
* Updated Quokka default TypeScript compiler settings to set the `jsx` setting to `react`.
* Updated Quokka for VS Code to hide invalid commands when Quokka is not running.
* Updated Quokka extenion API to pass Quokka `filePath`.
* Updated Wallaby App to use [prefers-colors-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) for default color.
* Updated Wallaby's AVA test runner to support setting options via the [setup function's](https://wallabyjs.com/docs/config/bootstrap.html) `testFramework` property ([#2243](https://github.com/wallabyjs/public/issues/2243)).
* Updated the minimum system node version to run Wallaby and Quokka to node 8.x.
* Updated file system watcher to ignore react-native project non-JavaScript components (fixes [#2313](https://github.com/wallabyjs/public/issues/2313)).
* Improved Wallaby and Quokka source mapping for transpiled/transformed files.
* Improved line mapping for Quokka files that live outside of opened project root.
* Improved error handling for invalid configuration files (fixes [#2302](https://github.com/wallabyjs/public/issues/2302), [#2325](https://github.com/wallabyjs/public/issues/2325)).
* Improved file system monitoring and handling (reduced memory footprint and CPU consumption).
* Various updates to Wallaby and Quokka websites.
* Various minor bug fixes for Wallaby Sublime (plugin initialization race condition, line marker cleanup).
* Bug fix for Quokka VS Code that would cause a Quokka file to be executed multiple times when auto-save is enabled.
* Bug fix for IntelliJ editors to send changed file content with correct line endings (i.e. '\r\n') on Windows.
* Bug fix for TypeScript files using `<any>` keyword that resulted in incorrect line mappings for subsequent lines.
* Bug fix for Wallaby using Jest automatic configuration where Wallaby and Jest cache are misaligned after non-saved changes.
* Bug fix to clear uncovered regions if using Run on Save and code is changed but not saved.
* Bug fix to send all line markers when using Run on Save and a full test run occurs.
* Bug fix for Wallaby `jest` `testFramework` to only report `console.error` if `reportConsoleErrorAsError` is set.
* Bug fix for excessive Chrome test runner tabs being created.
* Bug fix for project paths containing accents/diacritics that were not being normalized (fixes [#2329](https://github.com/wallabyjs/public/issues/2329)).
* Bug fix for Wallaby using Jest's automatic configuration where react-scripts were incorrectly used to configure jest for react-native projects.
* Bug fix for IntelliJ editors when both Wallaby and Quokka are running at the same time where line markers would swap positions (fixes [#2314](https://github.com/wallabyjs/public/issues/2314)).
* Bug fix for Wallaby Angular automatic configuration not working when project only consists only of libraries ([#2290](https://github.com/wallabyjs/public/issues/2290)).
* Bug fix for Wallaby using Jest's automatic configuration not working properly when project is on a different drive to the Wallaby extension. ([#2307](https://github.com/wallabyjs/public/issues/2307)).
* Bug fix for Wallaby and Quokka diffs highlighting re-ordered properties ([#2237](https://github.com/wallabyjs/public/issues/2237)).
* Bug fix for Wallaby status indicator not visible in the latest version of Visual Studio 2019 ([#2240](https://github.com/wallabyjs/public/issues/2240)).
* Bug fix for Wallaby VS Code extension reporting "The 'data' argument must be of type string." ([#2247](https://github.com/wallabyjs/public/issues/2247)).
* Bug fix for `reportConsoleErrorAsError` not working when `testFramework` is set to `jest`  ([#2251](https://github.com/wallabyjs/public/issues/2251)).
* Bug fix for Wallaby causing `java.lang.NullPointerException` in the latest version of WebStorm ([#2252](https://github.com/wallabyjs/public/issues/2252)).
* Bug fix for Jest automatic configuration for monorepo not running all projects ([#2255](https://github.com/wallabyjs/public/issues/2252)].
* Bug fix for Mocha dependency using Wallaby's Mocha default dependency instead of project's `node_modules` directory ([#2258](https://github.com/wallabyjs/public/issues/2258)).
* Bug fix for Angular automatic configuration showing indicators on the wrong line when `codeCoverage` is `true` in `angular.json` ([#2265](https://github.com/wallabyjs/public/issues/2265)).

<a name="Core 1.0.766, Wallaby App 1.0.63, IntelliJ 1.0.143, VS 1.0.50, Atom 1.0.54, VS Code 1.0.146, Sublime 1.0.50"></a>
# Core 1.0.766, Wallaby App 1.0.63, IntelliJ 1.0.143, Visual Studio 2017, 2019 1.0.49, Atom 1.0.54, Visual Studio Code 1.0.146, Sublime Text 1.0.50 (2019-10-11)

## Changes and Bug Fixes
* New [Automatic Configuration](https://wallabyjs.com/docs/intro/config.html#automatic-configuration) feature for Jest v24+.
* New [Automatic Configuration](https://wallabyjs.com/docs/intro/config.html#automatic-configuration) feature for Angular CLI v8.2+ projects.
* New [Quokka Editor plugin for Sublime Text](https://medium.com/@wallabyjs/quokka-js-for-sublime-text-1572b47bf2c6).
* New [run modes for Wallaby](https://medium.com/@wallabyjs/run-tests-only-on-file-save-91415c00c179): run on any change (default) and run only on save.
* New [Copy Value command](https://medium.com/@wallabyjs/copy-value-for-wallaby-and-quokka-bbbd59bcac6) for all editors for both Wallaby and Quokka.
* New [Copy Diagnostics report](https://wallabyjs.com/docs/intro/troubleshooting.html#diagnostics-report) feature to speeds up issue creation/resolution times.
* New option for Quokka to allow [babel to process TypeScript files](https://quokkajs.com/docs/configuration.html#using-babel-to-compile-typescript).
* New [Webpack integration](https://medium.com/@wallabyjs/new-webpack-integration-b790debf2a04).
* Improved TypeScript compilation performance (up to 100x+ for larger projects).
* New shortcuts and menu options for Visual Studio extensions for [VS 2017](https://marketplace.visualstudio.com/items?itemName=vs-publisher-999439.WallabyjsforVisualStudio2017) and [VS 2019](https://marketplace.visualstudio.com/items?itemName=vs-publisher-999439.WallabyjsforVisualStudio2015).
* Major improvements to Wallaby's internal file cache mechansim to speed up start up times.
* Improved support for Nx/Nrwl including new [documentation page](https://wallabyjs.com/docs/integration/nrwl.html).
* Support for Chrome headless test runners to be able to show last screenshot ([must be enabled in config](https://wallabyjs.com/docs/config/overview.html#show-last-run-screen-shot)).
* New [maxLogEntrySize setting](https://wallabyjs.com/docs/config/overview.html#maximum-log-entry-size) to allow logging messages more than 16KB in size.
* New [throwOnBeforeUnload setting](https://github.com/wallabyjs/public/issues/2170#issuecomment-518450064).
* IntelliJ platform 2019.2.x support.
* VS Code v1.36, v1.37, v1.38, v1.39.
* Atom v1.38, v1.39, v1.40 support.
* Wallaby App updated to include Pass/fail summary data on test group headers.
* Updated chrome-launcher to support latest MacOS version (Catalina).
* New `server` parameter for Wallaby App to support use of WSL ([#2136](https://github.com/wallabyjs/public/issues/2136)).
* Support to allow Quokka to use `esm` with Babel.
* Support to allow Quokka to use `await` outside of functions ([#345](https://github.com/wallabyjs/quokka/issues/345)).
* Support for Multi-user license keys.
* Support for AVA 2.0 ([#2106](https://github.com/wallabyjs/public/issues/2106)).
* Support for Jasmine 3.4.x.
* Default testFramework for browser tests changed to use Jasmine 3.4.x.
* Default browser runner change from PhantomJS to Chrome headless.
* Deprecation of PhantomJS as runtime dependency.
* Execution time added to test report.
* Support for using await outside of functions.
* Support for Mocha 3rd Party UIs ([#2200](https://github.com/wallabyjs/public/issues/2200)).
* Support for public and private class fields ([#407](https://github.com/wallabyjs/quokka/issues/407)).
* Support for defining test names using Template literals.
* Improved network reconnect handling between Wallaby test sessions.
* Improved stack trace display for Quokka (no longer shows unmapped stack lines).
* Support for breaking changes in the latest versions of JetBrains editors ([#2223](https://github.com/wallabyjs/public/issues/2223), [#373](https://github.com/wallabyjs/quokka/issues/373), [#390](https://github.com/wallabyjs/quokka/issues/390), [#395](https://github.com/wallabyjs/quokka/issues/395), [#416](https://github.com/wallabyjs/quokka/issues/416)).
* Support for combined usage of sequence expressions converted to diffs and live comments ([#419](https://github.com/wallabyjs/quokka/issues/419)).
* Support for using symlinks inside project root directory ([#2166](https://github.com/wallabyjs/public/issues/2166)).
* Patch Mocha at runtime when used with Wallaby to fix default Mocha package behavior where tests are not reported correctly after a test failure ([#2130](https://github.com/wallabyjs/public/issues/2130#issuecomment-509184401)).
* Improved instrumentation and reporting within extended class' constructors.
* Improved test run logic to only run last affected test files when no tests are found for a file change outside of editor.
* Improved Wallaby logging (is now buffered, and can dynamically contribute to Diagnostics report).
* Improved Quokka diff messaging for incompatible object types ([#412](https://github.com/wallabyjs/quokka/issues/412), [#419](https://github.com/wallabyjs/quokka/issues/419)).
* Improved logic for Wallaby worker processes to no longer run initialization logic when no ranges or tests need to be processed.
* Improved editor notifications for Wallaby Sublime.
* Bug fix for when compilation/post-processor fails and tests would execute on previously compiled code.
* Bug fix for instrumentation reporting incorrectly when semicolons are located on subsequent lines with additional ranges ([#408](https://github.com/wallabyjs/quokka/issues/408)).
* Bug fix for Quokka running on an empty file before any code has been written.
* Bug fix for "Jest" testFramework when Wallaby extension and project are on located on different Windows drives ([#2090](https://github.com/wallabyjs/public/issues/2090)).
* Bug fix for "QUnit" testFramework when more than one test has the same name.
* Bug fix for "describe()" and "it()" not being instrumented correctly in test helper files ([#2122](https://github.com/wallabyjs/public/issues/2122), [#2200](https://github.com/wallabyjs/public/issues/2200)).
* Bug fix for processing changes to code unassociated with tests resulting in a more tests being run than necessary.
* Bug fix for Live Value messages displaying on subsequent test runs when that code is no longer executed.
* Bug fix for multiple Live Value messages for a given line sometimes displaying in an inconsistent order ([#411](https://github.com/wallabyjs/quokka/issues/411)).
* Bug fix for node 12.x to clear "console.time()" timers between execution runs ([#413](https://github.com/wallabyjs/quokka/issues/413)).
* Bug fix for non-reportable files being sent to Wallaby app resulting in Wallaby app errors ([#2219](https://github.com/wallabyjs/public/issues/2219)).
* Bug fix for Jest "update test snapshot" updating all snapshots in file instead of just one test when file is not opened in editor.
* Bug fix for VS Code output window not displaying any additional messages if logged user value contains NULL character ([#375](https://github.com/wallabyjs/quokka/issues/375)).
* Bug fix for VS Code output window not correctly highlight output when other 3rd party extensions set output window syntax.
* Bug fix for Quokka VS Code where Run on Save would run on every change.
* Bug fix for when deleted files did not correctly trigger recalculation of error messages ([#2183](https://github.com/wallabyjs/public/issues/2183)).
* Bug fix for Quokka IntelliJ not working with `nvm` ([#376](https://github.com/wallabyjs/quokka/issues/376)).

<a name="Core 1.0.689, Wallaby App 1.0.57, IntelliJ 1.0.130, VS 1.0.37, Atom 1.0.43, VS Code 1.0.127, Sublime 1.0.44"></a>
# Core 1.0.689, Wallaby App 1.0.57, IntelliJ 1.0.130, Visual Studio 2017, 2019 1.0.37, Atom 1.0.43, Visual Studio Code 1.0.127, Sublime Text 1.0.44 (2019-05-23)

## Changes and Bug Fixes
- JetBrains IDEs and Visual Studio [performance improvements and better change tracking (20%-40% execution time memory footprint improvements)](https://medium.com/@wallabyjs/new-wallaby-js-for-jetbrains-editors-496da2c30d34).
- IntelliJ platform 2019.1.x support.
- Visual Studio 2019.x support.
- VS Code v1.31, v1.32, v1.33, v1.34, v1.35-insiders support.
- Atom v1.35, v1.36, v1.37 support.
- Added support for Jest 24.x.
- Improved Jest inline snapshots support.
- Added Auto-Expand feature for Live Value Comments for Wallaby and Quokka Value Explorer.
- Added new `runSelectedTestsOnly` wallaby [configuration setting to run zero tests if none are selected](https://wallabyjs.com/docs/intro/selected-tests.html#test-file-selection).
- Added WSL support to Wallaby.js for VS Code and JetBrains IDEs.
- Improved editor line marker behavior when adding/removing lines for our products that use: VS Code, IntelliJ or Visual Studio.
- Wallaby App tests tree filtering [#724](https://github.com/wallabyjs/public/issues/724).
- Wallaby App better keyboard support [1989](https://github.com/wallabyjs/public/issues/1989).
- Wallaby App progress indicator [#1388](https://github.com/wallabyjs/public/issues/1388) [#1257](https://github.com/wallabyjs/public/issues/1257).
- Wallaby App tests tree UX improvements [#1482](https://github.com/wallabyjs/public/issues/1482) [#1575](https://github.com/wallabyjs/public/issues/1575) [#1479](https://github.com/wallabyjs/public/issues/1479).
- Various improvements to Wallaby website (updated samples and documentation); includes complete restructure [docs](https://wallabyjs.com/docs/).
- Optimized Jest integration to use Jest watchman and to use Jest cache.
- Added BigInt support [#2056](https://github.com/wallabyjs/public/issues/2056).
- Enhanced Live Value Display to log `update` in `for` statements and all conditions in `if` and `while` statements.
- Updated JavaScript parser to support ecma version 10 empty `catch` blocks [#1988](https://github.com/wallabyjs/public/issues/1988#issuecomment-460588077).
- Added support for Jest `setupFilesAfterEnv` setting.
- Improved handling of node worker processes so that they are automatically terminated when disconnected from the editor.
- Added warning for PhantomJs deprecation as default browser runner.
- Improved resolution of conflicting Jest versions within a given project.
- Fixed bug with Wallaby cache where changes to unsaved files would remain after editor was closed and opened.
- Fixed bug with global errors were not removed from unchanged files, causing errors to be reported after they were fixed.
- Fixed bug with reported number of tests not being updated when deleting a test file with passing tests.
- Update Quokka TypeScript default `jsx` setting to be `react`.
- Fixed bug where Value Explorer expansion would update Jest Snapshot tests.
- Improved instrumentation failure error reporting to display the code frame that cannot be parsed.
- Force TypeScript `noEmitOnError` setting to be `false` [#342](https://github.com/wallabyjs/quokka/issues/342).
- Fixed bug with compiling/processing Quokka files outside of project working directory.
- Fixed Jest module map matching to use `rootDir` to resolve mocks [#2026](https://github.com/wallabyjs/public/issues/20260).
- Removed `useFileNameMatchForPathMatching` setting from Quokka [#343](https://github.com/wallabyjs/quokka/issues/343).
- Fixed bug mapping object spread when on a new line for a return statement.
- Force TypeScript `composite` setting to `false` as a hard default [#2030](https://github.com/wallabyjs/public/issues/2030).
- Improved File System handling for Windows to account for editors performing partial file writes without properly flushing.
- Updated `esm` package to latest and added support for top-level `await` for Quokka JavaScript files.
- Fixed bug when adding and removing newline characters would cause indicators to be incorrectly removed.
- Improved performance and reliability of test execution when changes are made before and during an existing test run.
- Updated display of test suites and paths to remove newlines and excess white space.
- Fix quokka files not running outside of a path that is relative to project root [#354](https://github.com/wallabyjs/quokka/issues/354).
- Updated Quokka to automatically set `process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;` when processing JavaScript files in babel.
- Fixed bug where test statistics were refreshed even though a document had not changed (causing UI flickering).
- Fixed bug where Jest inline snapshots would not work properly for TypeScript [#2060](https://github.com/wallabyjs/public/issues/2060).
- Improved integration with Jasmine to handle `jasmineDone` errors [#2063](https://github.com/wallabyjs/public/issues/2063).
- Added node.js version to Wallaby console output on startup.
- Fixed bug where test re-run would fail after multiple editors when Wallaby App was open [#2070](https://github.com/wallabyjs/public/issues/2070).
- Fixed bug when updates would not be processed if they were made before an empty Quokka file had finished running.
- Various updates to Quokka website.
- Fixed Quokka-IntelliJ issue using WSL on 32-bit editor versions.
- Fixed bug where Quokka would not show multiple session output windows at the same time in IntelliJ.
- Added the ability to override Quokka-VSCode colors for coverage indicators and inline messages.
- Improved Quokka-VSCode output formatting to avoid copying invisible UTF characters.
- Added "compact" message setting for Quokka-VSCode to minimize newline characters in console output.
- Added Jest snapshot and diff viewing commands to Visual Studio.
- Wallaby App monaco update [#718](https://github.com/wallabyjs/public/issues/718).

<a name="Core 1.0.645, Wallaby App 1.0.42, IntelliJ 1.0.122, VS 1.0.35, Atom 1.0.42, VS Code 1.0.107, Sublime 1.0.44"></a>
# Core 1.0.645, Wallaby App 1.0.42, IntelliJ 1.0.122, Visual Studio 2013, 2015, 2017 1.0.35, Atom 1.0.42, Visual Studio Code 1.0.107, Sublime Text 1.0.44 (2019-01-15)

## Changes and Bug Fixes

- [Value Explorer](https://wallabyjs.com/docs/intro/value-explorer.html).
- [Live Comment to expand Value Explorer properties](https://wallabyjs.com/docs/intro/value-explorer.html#live-comment-hint-to-auto-expand).
- Improved TypeScript isolated modules support (including performance).
- Support for [preserving comments](https://wallabyjs.com/docs/config/overview.html#preserve-comments-setting) in instrumented code.
- Support async generator methods instrumentation.
- Support Symbols as property names for live logging.
- Added `Go to Source` action for value explorer.
- Jest 24 alpha support.
- Ava 1.x support.
- VS Code v1.29, v1.30, v1.31-insiders support.
- IntelliJ platform 2018.3.x support.
- Atom v1.31, v1.32, v1.33, 1.34 support.
- Added `dot` setting for config path matching with `minimatch` (Quokka is using `dot: true` setting for minimatch by default).
- Improved node shebang support [#1933](https://github.com/wallabyjs/public/issues/1933).
- Improved live logging to display primitive values for primitive type wrappers.
- Changed `reportUnhandledPromises` setting to be `false` by default in browser.
- Improved source maps support for Vue projects.
- Fixed Wallaby App multiple projects selection on Windows (made WallabyApp Service start WebSocket server on Http server error).
- Patched ts-jest to use CommonJs for TS compilation if root `tsconfig.json` is being used.
- Made live logging with comments, identifier expressions and `console.log` more consistent in terms of output limits.
- Exposed `Show line tests` command as editor context command.
- Fixed issue with new license key location lookup for version check purposes.
- Fixed modules package.json files resolution in standard (`noResolve: false`) mode for TypeScript compiler.
- Avoid replacing % placeholders if no arguments are passed, addresses [#275](https://github.com/wallabyjs/quokka/issues/275).
- Fixed symbol properties iteration issue [#1885](https://github.com/wallabyjs/public/issues/1885).
- Patching Jest haste module map to include local modules (folders with package.json) in Wallaby cache, fixes [#1964](https://github.com/wallabyjs/public/issues/1964).
- Improved Wallaby config checks - checking if all specified `files`/`tests` paths don't exist and showing a warning about it, addresses [#1874](https://github.com/wallabyjs/public/issues/1874).
- Improved CRA TypeScript support.
- Fixed Babel 7 'register' module integration (`ignore` setting format).
- Fixed Jasmine 3 `xdescribe` issue [#1880](https://github.com/wallabyjs/public/issues/1880).
- Fixed `length` property access errors handling for live logging/value explorer object traversal.
- Normalizing paths in TS compiler, fixes [#1950](https://github.com/wallabyjs/public/issues/1950).
- Ignoring console.log '%c' parameters, addresses [#1954](https://github.com/wallabyjs/public/issues/1954).
- Fixed a few TypeScript compiler compatibility issues.
- Switched to use webview API instead of `previewHtml` command in VS Code.
- Separated logging limits for live logging and value explorer.
- Added `https.proxy` setting support in VS Code.
- Added support for `sublime-color-scheme` format, addresses [#1952](https://github.com/wallabyjs/public/issues/1952).

<a name="Core 1.0.622, Wallaby App 1.0.41, IntelliJ 1.0.118, VS 1.0.34, Atom 1.0.42, VS Code 1.0.96, Sublime 1.0.43"></a>
# Core 1.0.622, Wallaby App 1.0.41, IntelliJ 1.0.118, Visual Studio 2013, 2015, 2017 1.0.34, Atom 1.0.42, Visual Studio Code 1.0.96, Sublime Text 1.0.43 (2018-10-09)

## Changes and Bug Fixes

- [Live Value Display](https://wallabyjs.com/docs/intro/advanced-logging.html#live-value-display).
- Added TypeScript [isolated modules support](https://wallabyjs.com/docs/integration/typescript.html#isolated-modules).
- Added [`ignoreCoverageForFile` setting](https://wallabyjs.com/docs/config/coverage.html#stopping-code-coverage-calculation-for-a-file) to ignore file coverage via a comment.
- Jest v23.4, v23.5, v23.6 support.
- Jest inline snapshots initial support.
- Jasmine 3 support for browser environment.
- `create-react-app` v2 generated projects support.
- ``@vue/cli` v3 generated projects support.
- VS Code v1.25, v1.26, v1.27, v1.28 support.
- IntelliJ platform 2018.2, 2018.3 EAP (branch 183) support.
- Atom v1.28, v1.29, v1.30 support.
- Improved Wallaby parser performance.
- Improved Webpack 4 integration performance.
- Improved rejected promises reporting for auto-log comments.
- Added support for `AwaitExpression` auto-log comments.
- Improved Jest for Angular projects support.
- Transient file changes support (temporary changes that are not saved but trigger file changed events in core).
- Added `testFramework.path` setting support for Jest runner.
- Adding `util.promisify.custom` property to the global setTimeout in node test environment.
- Fixed Chrome runner issue in certain Linux environments (passing `no-sandbox` by default).
- Added `process.env.CI` support for Jest to set `config.updateSnapshot = 'none'`.
- Removed ANSI encoding from global errors.
- Turning off `ts-jest` diagnostics by default.
- Improved live value logging for node Buffers.
- Support `./` as `rootDir` in Jest configs.
- Added support for `~` in node paths.
- Fixed ES Tree spec breaking change [#1846](https://github.com/wallabyjs/public/issues/1846).
- Support for Jest's `console.log` implementation to be triggered.
- Prioritize Jest from `react-scripts` over other Jest installations [#1839](https://github.com/wallabyjs/public/issues/1839).
- Fixed Jest `CommonGlobals` util file resolution issue for the scenario when Jest framework path is specified [#1790]( https://github.com/wallabyjs/public/issues/1790#issuecomment-416717159).
- Support updating coverage type (not covered to covered and the other way around) in coverage tree and opened folder details in Wallaby App [#1861](https://github.com/wallabyjs/public/issues/1861).
- Fixed IntelliJ header component access issue.
- Updated `adm-zip` to latest for VS Code.
- Added support for `editDelay` for VS Code.
- Fixed output channel grammar for VS Code.

<a name="Core 1.0.601, Wallaby App 1.0.40, IntelliJ 1.0.114, VS 1.0.33, Atom 1.0.41, VS Code 1.0.86, Sublime 1.0.42"></a>
# Core 1.0.601, Wallaby App 1.0.40, IntelliJ 1.0.114, Visual Studio 2013, 2015, 2017 1.0.33, Atom 1.0.41, Visual Studio Code 1.0.86, Sublime Text 1.0.42 (2018-06-09)

## Changes and Bug Fixes

- [Test/test file selection](https://wallabyjs.com/docs/intro/selected-tests.html), both automatic for `.only/`.fit` and with special comments.
- Jest v23.0, v23.1 support.
- Electron 2 support.
- Jasmine 3 support.
- Ava 1.0.0-beta.5.1 support.
- Sinon 4 support.
- VS Code v1.21, v1.22, v1.23, v1.24 support.
- IntelliJ platform 2018.2 EA support.
- Atom v1.25, v1.26, v1.27 support.
- Added `Update snapshot(s)` actions to Wallaby App Tests tree.
- Reporting current file code coverage in VS Code.
- Support for multiple live comments from different lines of the same statement.
- Dynamic import statement parsing fix.
- Enabled compression for large files served to browser.
- Support for `console.debug` and `console.info` logging.
- Avoid replacing `rootDir` in Jest settings folders if they are above the project cache root [#1590](https://github.com/wallabyjs/public/issues/1590).
- Patching `resolve` module to take `NODE_PATH` value into account.
- Removed node modules above instrumented root from Jest module lookup algorithm.
- Added long console text messages support for wallaby extended core.
- Jest `globalSetup` and `globalTeardown` support [#1618](https://github.com/wallabyjs/public/issues/1618).
- Better [`Symbol` output](https://github.com/wallabyjs/quokka/issues/201).
- Jasmine 2.8.0 by default for browser environment.
- Disabled `chalk` for Jest.
- Cleaning up Jest stack traces.
- Jasmine custom specFilter support.
- Support for `jest.config.json`.
- Reporting Jest console errors back to wallaby, enables support for `reportConsoleErrorAsError` for Jest [#1686](https://github.com/wallabyjs/public/issues/1686).
- Fixed Atom and VS Code plugin core update concurrency issues.
- Made `jest.config.js` to have a higher priority over `package.json` Jest config.
- Fixed missing `jest-util` resolution path [#1553](https://github.com/wallabyjs/public/issues/1553).
- Jasmine 2 regression fix [#1597](https://github.com/wallabyjs/public/issues/1597).
- In newer `jest-resolve` versions paths are correctly appended to dirs, not the other way around like in older Jest versions, so no need to remove/deduplicate paths from above [#1626](https://github.com/wallabyjs/public/issues/1626).
- Adding local node modules to the generated lookup list of (instrumented) node modules [#1620](https://github.com/wallabyjs/public/issues/1620).
- Applying `outDir` options after merging user option with `tsconfig` options to allow user to set `outDir` in user options.
- Added documentation for available wallaby settings in VS Code.
- Normalizing drive letter for a manually selected wallaby config in VS Code.
- Correctly finding project root for workspace project roots stating with the same substring in VS Code [#1624](https://github.com/wallabyjs/public/issues/1624).
- Faster file scan for the case of excluded subfolders in IntelliJ platform IDEs.
- Improved ways of connecting to wallaby core in IntelliJ platform IDEs.
- Trying to kill child node process when closing IntelliJ platform IDEs unexpectedly.
- Fixed Linux support for Sublime plugin update/install.
- Support for console.log mocking in Jest [#1692](https://github.com/wallabyjs/public/issues/1692).
- Stop enforcing strict mode.
- Disable pausing after a single test for any runner but PhantomJs, fixes [#1666](https://github.com/wallabyjs/public/issues/1666).
- Fixed chokidar to avoid globbing for the base path.
- Normalizing drive letter for project cache and config path.
- Avoid running postprocessor if an editor requests a (manual) test run.
- Correctly handling empty `NODE_PATH` [#1570](https://github.com/wallabyjs/public/issues/1570).
- Ava 0.25.0 regression fix [#1689](https://github.com/wallabyjs/public/issues/1689).
- Fixed test selection regular expression [#1604](https://github.com/wallabyjs/public/issues/1604).

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
