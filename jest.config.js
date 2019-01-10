const path = require("path");
module.exports = {
  setupTestFrameworkScriptFile: path.resolve(
    __dirname,
    "config/jest/setupEnzyme.js"
  ),
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  rootDir: path.resolve(__dirname, "src"),
  moduleNameMapper: {
    "^.+\\.scss$": "<rootDir>/__mocks__/styleMock.js",
  },
};
