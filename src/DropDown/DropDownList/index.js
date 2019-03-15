import React from "react";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import DropDownList from "./DropDownList";

const DropDownListContext = React.createContext();

const StyledDropDownList = styled(DropDownList)`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 0;
  margin: 0;
  border-width: ${props => useTheme(props, "borderWidth")};
  border-style: solid;
  border-color: ${props => useTheme(props, "primary")};
  background-color: ${props => useTheme(props, "white")};
  transform: ${props => (props.open ? "scaleY(1)" : "scaleY(0)")};
  opacity: ${props => (props.open ? "1" : "0")};
  transform-origin: top;
  transition: ${props =>
    props.open ? "transform 0.3s" : "transform 0.3s,opacity 0.3s"};
`;

export { DropDownListContext };
const DropDownListWContext = props => (
  <DropDownListContext.Consumer>
    {open => {
      let newProps = { ...props, show: open };
      return <StyledDropDownList {...newProps} />;
    }}
  </DropDownListContext.Consumer>
);
export default DropDownListWContext;
