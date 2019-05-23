import React from "react";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import DropDownList from "./DropDownList";
import ThemeContext from "../../ThemeContext";

const DropDownListContext = React.createContext();

const StyledDropDownList = styled(DropDownList)`
  position: absolute;
  ${props => (props.rightSideAlign ? "right:0px" : "left:0px")};
  z-index: 10;
  padding: 0;
  margin: 0;
  border-width: ${props => useTheme(props, "borderWidth")};
  border-style: solid;
  border-color: ${props => useTheme(props, "silver")};
  background-color: ${props => useTheme(props, "white")};
  transform: ${props => (props.open ? "scaleY(1)" : "scaleY(0)")};
  opacity: ${props => (props.open ? "1" : "0")};
  transform-origin: top;
  transition: ${props =>
    props.open ? "transform 0.3s" : "transform 0.3s,opacity 0.3s"};
  box-shadow: ${props => useTheme(props, "baseShadow")};
  max-height: 200px;
  overflow-y: auto;
`;

export { DropDownListContext };
const DropDownListWContext = React.forwardRef((props, ref) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <DropDownListContext.Consumer>
        {open => {
          let newProps = { ...props, show: open };
          return <StyledDropDownList {...newProps} ref={ref} theme={theme} />;
        }}
      </DropDownListContext.Consumer>
    )}
  </ThemeContext.Consumer>
));

DropDownListWContext.displayName = "DropDownListWContext";

export default DropDownListWContext;
