# Wallaby.js quick links

- [Wallaby.js website](http://wallabyjs.com)
- [Download wallaby.js](http://wallabyjs.com/#download)
- [Getting started with wallaby.js](#getting-started)
- [Sample calculator project](https://github.com/wallabyjs/public/tree/master/sample/jetbrains)
- [Wallaby.js configuration file](#configuration-file-format)

# Wallaby.js philosophy

Wallaby.js design is based on few simple principles:

- in most of cases **tests should run automatically** on the code changes, only the change **affected tests** should run;
- test and code coverage results should be **displayed in the code editor in realtime**, where and when the code change happens;
- **continuous testing should be software development technique agnostic**; whether you are doing classic TDD/BDD, or tests after, or using some mixed approach or something else - as long as you have tests, running them should be fast and easy.

There are other apps and tools to test your application in different browsers, test it across multiple devices and on different platforms, run your tests in your CI build. Wallaby.js **main focus is to help you writing your code and tests faster**, without unnecessary context switching.

# Supported code editors

- WebStorm 9.0.3
- PhpStorm 8.0.2
- IntelliJ IDEA Ultimate 14.0.2
- RubyMine 7.0.2
- PyCharm 4.0.4

# Supported testing frameworks

Our plan is to support latest versions of popular testing frameworks as they are released. **If the version of the framework that you are using is not listed, you can still try to run wallaby.js with the closest supported version of the framework supported, it may just work**.

- jasmine@1.3.1
- jasmine@2.1.3 (default value)
- mocha@2.0.1 (with any expectation framework of your choice)
- qunit@1.16.0
- [suggest another framework/version](https://github.com/wallabyjs/public/issues/new?title=Support%20...&labels=new%20testing%20framework%2Fversion)


# Getting started

*with wallaby.js in WebStorm, IntelliJ IDEA Ultimate, PhpStorm, RubyMine, PyCharm Professional*

After you have downloaded wallaby.js plugin zip file, you can install the plugin by opening Settings - Plugins, clicking "Install plugin from disk" button and selecting the downloaded file. From now on, you will be able to automatically update the plugin right from your IDE.


![plugin](https://cloud.githubusercontent.com/assets/979966/5896520/819ac25e-a582-11e4-8217-e98d3bf2af56.png)

### Configuration file

After the plugin is installed, you can start by creating wallaby configuration file. The configuration file is just a [simple JSON file](#configuration-file-format) in your project root with just a couple of mandatory settings. It's recommended to prefix or suffix it with "wallaby", for example "wallaby.json".

Simple configuration file should include "files", "tests" and "testFramework" properties.

```json
{
  "files": [
    "src/*.js",
  ],

  "tests": [
    "test/*Spec.js"
  ],

  "testFramework": "jasmine@2.1.3"
}
```

"Files" property should list your source files, "tests" property should list your test files. Any test helpers or other test related files, that are not the files with actual tests/specs, should be listed under the files property. Glob patterns can also be used, just make sure your files are in the order that you would like them to be loaded into the (internally generated) test page.

Finally the "testFramework" property defines the name and the version of the testing framework you will be (or are) using to write your tests. Please note, that you don't need to have it locally installed - wallaby.js is shipped with the versions of the frameworks it supports. The supported testing frameworks [are listed here](#supported-testing-frameworks).

The configuration file example above assumes that your source files are in the "src" folder, that you are using Jasmine and your tests are in the "test" folder and have their names ending with "Spec".

You can read more about the configuration file format and other settings in [the corresponding section](#configuration-file-format).

### Run configuration

Continue with creating a new wallaby.js **Run Configuration**. Select **Edit configurations** from the drop-down menu at the top-right corner of the navigation bar, or from the **Run** menu.

In the configuration you can specify:

- a name for the newly created configuration,
- a path to your wallaby.js [configuration file](#configuration-file-format).


![rc](https://cloud.githubusercontent.com/assets/979966/5896460/a710f81a-a581-11e4-8f7f-015b60b55e9f.png)


Once you have created and saved the configuration, you can start it. First time you run it, wallaby.js may take a minute or two to install all the dependencies it needs, such as node.js and PhantomJs. It only does this once and then uses the saved dependencies. The dependencies are updated automatically when required.

Once you have started the run configuration, in the bottom right corner of the screen you'll see wallaby status indicator. It's job is pretty simple: when it displays a spinner - your tests are running, when it's red - you have some failing tests, when it's green - all of your tests are passing.

### Tool window

When wallaby.js starts, it also displays a tool window. While writing code, you may not need the window to be opened, so you can collapse it. You ca expand it any time by clicking wallaby.js status indicator (or using standard way to open a run configuration tool window).


![status](https://cloud.githubusercontent.com/assets/979966/5896676/24b4b934-a585-11e4-96e1-41db627cf850.png)


In the tool window you can see the "Failing Tests" tab and the "Wallaby Console" tab.

"Failing Tests" tab displays all tests that are currently failing along with the error stacks and registered console.log calls. Some bits of the displayed information are hyperlinks that you can use with your mouse or keyboard to navigate to different places, for example to the exact error line, or a failing test, or a place where something is logged to console.

"Wallaby Console" tab displays some additional information about test execution progress. The tab can also be useful for troubleshooting wallaby.js issues.

### Code coverage

Once wallaby.js is running, you can see the code coverage in the source files that it tracks (specified in the configuration file). The coverage is live, so you can start changing your code and the coverage will automatically be updated, just as you type.

As you can see, there are various colored squares displayed for each line fo your source code.


![coverage](https://cloud.githubusercontent.com/assets/979966/5896430/228025e4-a581-11e4-9bb2-eb3fd47c842b.png)


- Gray square means that the source line is not covered by any of your tests.
- Green square means that the source line is covered by at least one of your tests.
- Yellow square means that the source line is only partially covered by some of your tests.
- Red square means that the source line is the source of an error or failed expectation, or is in the stack of an error.
- Pink square means that the source line is on the execution path of a failing test.

Clicking a square against a source code line will display a window with the information about the tests covering the line, including any error messages and console.log messages.


![window](https://cloud.githubusercontent.com/assets/979966/5896734/3b720036-a586-11e4-9a14-31f6fbdec3e8.png)


Short error messages, expectation failures and console.log messages are also displayed inline, right where and when they happen. It's very convenient, as allows you to avoid context switching and allows to fix the issues in place, as you write your code.

### Context actions

Another way to access some source code line/context actions is to use the light bulb quick actions or just pressing "Alt + Enter" on any line. The actions that you can use include:


![context](https://cloud.githubusercontent.com/assets/979966/5896429/2277c6b0-a581-11e4-9e68-35545d823116.png)


- **Show line test(s) action**: works similar to clicking a source code line square and displays the line related test data.
- **Show line uncovered regions**: the action is useful for "yellow" lines to display what is exactly not covered in the line. Not covered expressions will be highlighted in red.
- **Show file uncovered regions**: the action is similar to the previous one, it displays uncovered regions for the whole file. The red highlights for both actions can be removed by pressing "Esc" (or you can just start changing the file code and they will disappear).
- **Run scope test(s)**: the action is pretty simple (yet so much wanted by so many people), it just runs a single test (if invoked from within the test) or all related tests (if invoked within some source code covered by the tests).
- **Run file test(s)**: the action runs all tests within the test file it is invoked in, or all tests in all the test files that cover the source file that the action is invoked within.
- **Show last run screen shot**: the action just does what it says. After every test run, wallaby.js captures a screen shot of the generated test runner page, so if you have some tests that are displaying anything - the action could be useful for you. Very powerful combo is using the action in conjunction with the **Run scope test(s)** - you run a specific test, then see the screen shot for the test. Please note that you may often have some "tear down" code, that clears the DOM before or after each test - wallaby.js is smart enough to capture the screenshot before the tear down code.

All of the described actions can also be mapped to any keyboard shortcuts you like to make you even more productive. You can do it in Settings - Keymap (search for wallaby in the keymap settings).


![keymap](https://cloud.githubusercontent.com/assets/979966/5896431/22893332-a581-11e4-8ee7-477ef3e6269c.png)


The recommended workflow is just to keep wallaby.js up and running as you edit your code. It should pick up existing file changes, file deletion, adding new files and tests (as long as they are listed in files patterns in the configuration file). Wallaby.js does its best to track the dependencies between your files and tests, but occasionally you may need to restart it, if your changes are not picked up. You can stop/start wallaby.js any time by stopping/starting the active run configuration.

# Under the hood

Wallaby.js consists of two major parts: code editor integration and a local background server. Code editor part is written in the language used by the editor itself, the server part is written in JavaScript and is using node.js.

Whenever a tracked source file changes, code editor sends the diff to the server. The local server has a cache of all the source files, it applies the diff and runs the affected tests.

Wallaby.js server tracks dependencies between your files and tests using a mix of common sense and some dark magic. On a serious note, it's a combination of runtime analysis powered by the code instrumentation and lots of tricky heuristics.

We are planning to cover more details in a series of blog posts, in a meantime feel free to ask your questions [via email](mailto:wallabyjs@gmail.com).

# Troubleshooting

Wallaby.js issues are registered [using this repository](https://github.com/wallabyjs/public/issues/). Whenever something goes wrong, please report an issue and we will address it as soon as we can.

Unless it's not something obvious and easily reproducible, please make sure to do whatever you can from the checklist:

- clear the local server file cache: currently you can force it to be cleared by just stopping your wallaby run configuration, changing wallaby configuration file (even just adding a space to it) and running wallaby run configuration again: if the issue doesn't disappear, keep going through the checklist;
- review and attach idea.log: the location is available from the "Help - Show Log" menu of your code editor;
- review and attach wallaby.js log: you can record it while reproducing the issue, by setting the "debug" property to "true" in your wallaby configuration file and copying the log text from the "Wallaby Console" tab of the running wallaby.js tool window.

```json
{
  "debug": true
}
```

# Configuration file format

Wallaby.js configuration file is a simple JSON file with a root object containing the properties listed below.

### Files and tests

**```files```** array property specifies an array of source files or file name patterns. The files will be loaded in the test sandbox in the specified order. So if one script loading depends on the other script, the second one should be specified before the first one in the files list. If you have a configuration file for Karma runner or runner HTML page - you can use the order of files from there.

Files may be of any type, not just JavaScript files. While JavaScript files and CSS files are by default included in the internally generated test runner page, other files may be loaded by tests when required (for example HTML files/fragments can be loaded with [jQuery.load](http://api.jquery.com/load/) or any other way you may be using).

**```tests```** array property specifies an array of test files or test file name patterns. Please note that only actual test files should be specified in the tests list (the files with specs/modules and tests); any test helpers or testing frameworks extensions should be specified in the "files" list (normally at the end of the list).

Both files and tests paths are specified relatively to the location of the wallaby.js configuration file.

For example, the configuration sample below makes wallaby.js to track all ```.js``` files in the ```src``` folder, and also a CSS and HTML file. The sample also includes all test files from the ```test``` folder that name ends with ```Spec```.

```json
{
  "files": [
    "style/calculator.css",
    "html/calculator.html",
    "src/*.js",
  ],

  "tests": [
    "test/*Spec.js"
  ],
}
```

Files and tests are basically the only mandatory configuration properties, the rest is optional (please note that jasmine v2 is used by default as a testing framework).

Both **```files```** and **```tests```** properties support [glob patterns](https://github.com/isaacs/minimatch), so you can use wildcards to avoid specifying each and every file.

Both **```files```** and **```tests```** property element can either be a string representing file name/name pattern or an object defining additional properties.

### File object

**```pattern```** string property represents the file name or pattern.

**```ignore```** boolean property (default value: **false**) is used to completely exclude the file from being processed by wallaby.js. The setting may be useful to adjust some broader patterns.

**```instrument```** boolean property (default value: **true**) determines whether the file is instrumented. Setting the property to **false** disables the file code coverage reporting and prevents the file changes to trigger automatic test execution. The setting should normally be set to **false** for libraries/utils/other rarely changing files. Using the setting makes wallaby.js to run your code faster, as it doesn't have to perform unnecessary work.

**```load```** boolean property (default value: **true**) determines whether the file is loaded to the sandbox HTML (via script tag in case of JavaScript files). Setting the property to **false** is useful if you are using some alternative script loading mechanism, such as RequireJs.

For example, the configuration sample below makes wallaby.js to track all ```.js``` files in the ```src``` folder and all its subfolders recursively, except those files that names ends with ```.generated```, include but avoid instrumenting  libraries in ```libs``` folder, include but avoid instrumenting test helpers (such as testing frameworks configuration scripts, custom matcher, etc.). The sample also includes all test files from the ```test``` folder that name ends with ```Spec```.

```json
{
  "files": [
    "src/**/*.js",
    { "pattern": "src/**/*.generated.js", "ignore": true },
    { "pattern": "libs/*.js", "instrument": false },
    { "pattern": "test/helpers/*.js", "instrument": false },
  ],

  "tests": [
    "test/*Spec.js"
  ]
}
```

### Delays setting

**```delays```** object property specifies how much time (in milliseconds) wallaby.js should wait before proceeding to the next stage of the automated test run workflow. It's recommended to skip setting the property and leave it up to wallaby.js to decide what timeouts to use, until you actually encounter a case where you think tuning the delays may help. The property is an object with up to 2 properties, each representing a delay before a certain stage. Depending on how frequently you'd like to run your tests or how powerful your system is, tuning the delays may help to optimize wallaby.js and your system performance.

**```edit```** numeric delay property is a number of milliseconds to wait after last code edit and before letting wallaby.js know about the code change.

**```run```** numeric delay property is a number of milliseconds to wait before letting wallaby.js to automatically run your tests as a result of your code changes.

### Workers setting

**```workers```** object property specifies the degree of parallelism used to run your tests. It's recommended to skip setting the property and leave it up to wallaby.js to decide how many processes to use based on your system capacity, until you actually encounter a case where you think tuning the workers count may help.

**```initial```** numeric property specifies the number of parallel processes to run your tests when your start/restart wallaby.js.
**```regular```** numeric property specifies the number of parallel processes to run your tests every time when your code changes.

For example, the configuration sample below makes wallaby.js to wait a half of a second after editing a source file and before registering the code change, and to wait 150 milliseconds before running affected tests after the code change was registered. The configuration also makes wallaby.js to run all tests in 6 separate workers initially, then use up to 2 workers to run tests on your code changes.

```json
{
  "files": [
    "style/calculator.css",
    "html/calculator.html",
    { "pattern": "src/libs/*.js", "instrument": false },
    "src/*.js",
  ],

  "tests": [
    "test/*Spec.js"
  ],

  "delays": {
    "edit": 500,
    "run": 150
  },

  "workers": {
    "initial": 6,
    "regular": 2
  }
}
```

### Testing framework setting

**```testFramework```** string property specifies the name and the version of the testing framework that you are using for your tests. It uses following format: "name@version". Please note that because in order to properly support a testing framework, wallaby.js has to integrate with it and extend it, you can not use an arbitrary version of any framework with wallaby.js and may only use those that are supported. Currently supported frameworks/versions are [listed here](#supported-testing-frameworks).

### Debug setting

**```debug```** boolean property, when is set to **true**, produces a detailed wallaby.js log. It can be used to investigate any possible issues and can be supplied when [reporting bugs](https://github.com/wallabyjs/public/issues).

### Full config file sample

The full configuration with custom delays and workers settings (optional), for mocha v2.0.1, may look like:
```json
{
  "files": [
    "style/calculator.css",
    "html/calculator.html",
    { "pattern": "src/libs/*.js", "instrument": false },
    "src/*.js",
  ],

  "tests": [
    "test/*Spec.js"
  ],

  "delays": {
    "edit": 100,
    "run": 0
  },

  "workers": {
    "initial": 6,
    "regular": 3
  },

  "testFramework": "mocha@2.0.1",

  "debug": false
}
```
