/* global process */
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

const format = process.env.BUILD_FORMAT;
const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: {
    file: {
      es: pkg.module,
      cjs: pkg.main,
    }[format],
    format: format,
  },
  external: ["react", "react-dom", "prop-types"],
  plugins: [
    resolve({
      preserveSymlinks: true,
    }),
    postcss(),
    babel(),
    terser(),
    commonjs(),
    filesize(),
  ],
};
