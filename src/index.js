import React from 'react';
import ReactDOM from "react-dom";

import { Button } from "./components";

const showClick = () => {
  console.log("click");
};
ReactDOM.render(
  <Button onClick={showClick}>Click me</Button>,
  document.getElementById("root")
);
