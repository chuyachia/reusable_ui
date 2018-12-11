import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import { Button, Input, DropDownItem, DropDownList, Select } from "./components";

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/theme.scss');
const showClick = () => {
  console.log("click");
};
const showChange = () => {
  console.log("change");
};
const showSelection = (e) => {
  console.log(e.target.getAttribute('value'));
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Button onClick={showClick}>Click me</Button>
    <Button variant="secondary" onClick={showClick}>
      Click me
    </Button>
    <Button hollow onClick={showClick}>
      Click me
    </Button>
    <Button variant="secondary" hollow onClick={showClick}>
      Click me
    </Button>
    <Button variant="warning" onClick={showClick}>
      Click me
    </Button>
    <Button variant="warning" hollow onClick={showClick}>
      Click me
    </Button>
    <Input onChange={showChange} resetButton onReset={showClick} />
    <Input onChange={showChange} />
    <Select open={true} onClick={showClick} value="A">
    <DropDownList onClick={showSelection}>
      <DropDownItem value="a">A</DropDownItem>
      <DropDownItem value="b">B</DropDownItem>
    </DropDownList>
    </Select>
    <Select open={false} onClick={showClick}>
    <DropDownList onClick={showSelection}>
      <DropDownItem value="a">A</DropDownItem>
      <DropDownItem value="b">B</DropDownItem>
    </DropDownList>
    </Select>
  </ThemeProvider>,
  document.getElementById("root")
);
