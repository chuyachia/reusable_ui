import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import { Button } from "./components";

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/theme.scss');
const showClick = () => {
  console.log("click");
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Button onClick={showClick}>Click me</Button>
  </ThemeProvider>,
  document.getElementById("root")
);
