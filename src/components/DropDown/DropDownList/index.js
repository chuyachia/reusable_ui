import React from "react";
import styled from "@emotion/styled";

import DropDownList from "./DropDownList";

const DropDownListContext = React.createContext();

const StyledDropDownList = styled(DropDownList)`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 0;
  margin: 0;
  border-width: ${props => props.theme.borderWidth};
  border-style: solid;
  border-color: ${props => props.theme.lightGrey};
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.white};
`;

export { DropDownListContext };
export default props => (
  <DropDownListContext.Consumer>
    {open => {
      let newProps = { ...props,show: open };
      return <StyledDropDownList {...newProps} />;
    }}
  </DropDownListContext.Consumer>
);
