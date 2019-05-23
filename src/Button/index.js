import React from "react";
import styled from "@emotion/styled";

import useTheme from "../useTheme";
import Button from "./Button";
import ThemeContext from "../ThemeContext";

const ButtonContext = React.createContext("default");
const StyledButton = styled(Button)`
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${props => {
    if (props.disabled) {
      return useTheme(props, "silver");
    }
    if (props.context === "input" || props.context === "select") {
      return "transparent";
    }
    if (props.hollow || props.minimal) {
      return useTheme(props, "white");
    }
    if (props.variant) {
      return useTheme(props, props.variant);
    }
    return useTheme(props, "primary");
  }};
  color: ${props => {
    if (props.context === "input" || props.context === "select") {
      return useTheme(props, "silver");
    }
    if (props.disabled) {
      return useTheme(props, "grey");
    }
    if (props.variant) {
      return props.hollow || props.disabled
        ? useTheme(props, props.variant)
        : useTheme(props, props.variant + "ContrastText");
    }
    return props.hollow
      ? useTheme(props, "primary")
      : useTheme(props, "primaryContrastText");
  }};
  font-family: ${props => useTheme(props, "fontSans")};
  padding: ${props => {
    if (props.context === "input" || props.context === "select") {
      return 0;
    } else if (props.small) {
      return useTheme(props, "smallPadding");
    } else {
      return useTheme(props, "basePadding");
    }
  }};
  font-size: ${props => useTheme(props, "baseFontSize")};
  font-weight: ${props => useTheme(props, "fontSemibold")};
  line-height: ${props => {
    if (props.small) {
      return useTheme(props, "smallLineHeight");
    } else {
      return useTheme(props, "baseLineHeight");
    }
  }};
  border-width: ${props => {
    return useTheme(props, "borderWidth");
  }};
  border-style: solid;
  border-color: ${props => {
    if (props.disabled) {
      return useTheme(props, "silver");
    }
    if (props.variant) {
      return useTheme(props, props.variant);
    }
    return useTheme(props, "primary");
  }};
  border-radius: ${props => useTheme(props, "baseRadius")};
  ${props => {
    if (
      props.minimal ||
      props.context === "select" ||
      props.context === "input"
    ) {
      return "box-shadow: 0px;";
    } else {
      return "box-shadow:" + useTheme(props, "baseShadow") + ";";
    }
  }}}
  &:hover {
    background-color: ${props => {
      if (
        props.minimal ||
        props.context === "select" ||
        props.context === "input"
      ) {
        return useTheme(props, "white");
      }
      if (props.disabled) {
        return useTheme(props, "silver");
      }
      if (props.variant) {
        return props.hollow
          ? useTheme(props, props.variant + "Light")
          : useTheme(props, props.variant + "Dark");
      }
      return props.hollow
        ? useTheme(props, "primaryLight")
        : useTheme(props, "primaryDark");
    }};
    ${props => {
      if (props.context === "input" || props.context === "select") {
        return "color:" + useTheme(props, "baseTextColor");
      }
    }};
  }
  &:active {
    box-shadow: 0px 0px 0px;
  }
  ${props => {
    if (props.context === "input" || props.context === "select") {
      return "border:0;";
    }
  }};
  ${props => {
    if (props.context == "select") {
      return "float:right;";
    }
  }};
`;
export { ButtonContext };
const StyledButtonWContext = props => (
  <ButtonContext.Consumer>
    {context => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledButton {...props} context={context} theme={theme} />
        )}
      </ThemeContext.Consumer>
    )}
  </ButtonContext.Consumer>
);

export default StyledButtonWContext;
