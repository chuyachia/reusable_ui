/* global module */
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
  ],
  env: { test: { presets: ["@babel/preset-env", "@babel/preset-react"] } },
};
