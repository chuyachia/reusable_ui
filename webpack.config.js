/*global require module __dirname */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  devtool: argv.mode === "development" ? "cheap-source-map" : "",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: "pre",
        options: {
          fix: true,
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(["dist"])],
});
