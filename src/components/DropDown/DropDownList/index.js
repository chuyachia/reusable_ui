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
  border-color: ${props => useTheme(props, "lightGrey")};
  box-shadow: ${props => useTheme(props, "boxShadow")};
  background-color: ${props => useTheme(props, "white")};
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
