import React from "react";
import styled from "@emotion/styled";

import useTheme from "../useTheme";
import Input from "./Input";
import { ButtonContext } from "../Button";
import ThemeContext from "../ThemeContext";

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
    }
    if (props.variant === "focus") {
      return useTheme(props, "primary");
    }
    return useTheme(props, "silver");
  }};
  border-radius: ${props => useTheme(props, "baseRadius")};
  box-shadow: ${props => useTheme(props, "baseShadow")};
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
  <ThemeContext.Consumer>
    {({ theme }) => (
      <ButtonContext.Provider value="input">
        <StyledInput {...props} theme={theme} />
      </ButtonContext.Provider>
    )}
  </ThemeContext.Consumer>
);
export default StyledInputWContext;
