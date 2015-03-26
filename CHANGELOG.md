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
