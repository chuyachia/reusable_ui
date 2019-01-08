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
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      assets: path.resolve(__dirname, "assets"),
    },
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom",
    },
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
