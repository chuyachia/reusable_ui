/* global document require*/
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import App from "./App";

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/theme.scss');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
