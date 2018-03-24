module.exports = function () {
  return {
    "files": [
      "style/calculator.css",
      {"pattern": "lib/jquery.js", "instrument": false},
      "src/*.js",
      "test/helper/template.js"
    ],
    "tests": [
      "test/*JasmineSpec.js"
    ],
    "testFramework": "jasmine@1.3.1",
    "env": {
      "kind": "chrome"
    }
  };
};
