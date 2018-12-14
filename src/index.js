import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import {
  Button,
  Input,
  DropDownItem,
  DropDownList,
  Select
} from "./components";

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/theme.scss');
const showClick = () => {
  console.log("click");
};
const showChange = () => {
  console.log("change");
};
const showSelection = e => {
  console.log(e.target.getAttribute("value"));
};
const keyDown = e => {
  var key = event.keyCode || event.charCode;
  if (key == 8 || key == 46) {
    console.log("delete");
  }
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
    <Select open={true} value="A">
      <DropDownList onClick={showSelection}>
        <DropDownItem value="a">A</DropDownItem>
        <DropDownItem value="b">B</DropDownItem>
      </DropDownList>
    </Select>
    <Select open={false}>
      <DropDownList onClick={showSelection}>
        <DropDownItem value="a">A</DropDownItem>
        <DropDownItem value="b">B</DropDownItem>
      </DropDownList>
    </Select>
    <Select open={false} multiple value={["A", "B"]} onKeyDown={keyDown} onInput={showChange}>
      <DropDownList onClick={showSelection}>
        <DropDownItem value="a">A</DropDownItem>
        <DropDownItem value="b">B</DropDownItem>
      </DropDownList>
    </Select>
    <Select open={true} variant="secondary" multiple value={["A", "B"]} onKeyDown={keyDown} onInput={showChange}>
      <DropDownList onClick={showSelection}>
        <DropDownItem value="a">A</DropDownItem>
        <DropDownItem value="b">B</DropDownItem>
      </DropDownList>
    </Select>
  </ThemeProvider>,
  document.getElementById("root")
);
