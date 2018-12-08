import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import { Button, Input } from "./components";

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/theme.scss');
const showClick = () => {
  console.log("click");
};
const showChange = () => {
  console.log("change");
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Button onClick={showClick}>Click me</Button>
    <Button variant='secondary' onClick={showClick}>Click me</Button>
    <Button hollow={true} onClick={showClick}>Click me</Button>
    <Button variant='secondary' hollow={true} onClick={showClick}>Click me</Button>
    <Button variant='warning' onClick={showClick}>Click me</Button>
    <Button variant='warning' hollow={true} onClick={showClick}>Click me</Button>
    <Input onChange={showChange}/>
  </ThemeProvider>,
  document.getElementById("root")
);
