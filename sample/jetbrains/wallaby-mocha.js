module.exports = function () {
  return {
    "files": [
      "style/calculator.css",
      {"pattern": "lib/jquery.js", "instrument": false},
      "src/*.js",
      "test/lib/chai.js",
      "test/helper/template.js"
    ],
    "tests": [
      "test/*MochaSpec.js"
    ],
    "testFramework": "mocha",
    "env": {
      "kind": "chrome"
    }
  };
};
