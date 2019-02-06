import React from "react";
import styled from "@emotion/styled";

import useTheme from "../useTheme";
import Input from "./Input";
import { ButtonContext } from "../Button";

const StyledInput = styled(Input)`
  display: ${props => (props.inline ? "inline-block" : "block")};
  white-space: nowrap;
  color: ${props => useTheme(props, "baseTextColor")};
  font-weight: ${props => useTheme(props, "fontNormal")};
  line-height: ${props => useTheme(props, "baseLineHeight")};
  padding: ${props => useTheme(props, "basePadding")};
  font-family: ${props => useTheme(props, "fontSans")};
  font-size: ${props => useTheme(props, "baseFontSize")};
  border-width: ${props => useTheme(props, "borderWidth")};
  border-style: solid;
  border-color: ${props => {
    if (props.variant === "warning") {
      return useTheme(props, "warning");
    } else {
      return useTheme(props, "primary");
    }
  }};
  border-radius: ${props => useTheme(props, "baseRadius")};
  & input {
    width: 100%;
    border-width: 0px;
    padding: 0px;
    line-height: inherit;
    outline: 0;
    font-weight: ${props => useTheme(props, "fontNormal")};
    font-size: ${props => useTheme(props, "baseFontSize")};
    font-family: ${props => useTheme(props, "fontSans")};
  }
`;
const StyledInputWContext = props => (
  <ButtonContext.Provider value="input">
    <StyledInput {...props} />
  </ButtonContext.Provider>
);
export default StyledInputWContext;
