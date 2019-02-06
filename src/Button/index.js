import React from "react";
import styled from "@emotion/styled";

import useTheme from "../useTheme";
import Button from "./Button";

const ButtonContext = React.createContext("default");
const StyledButton = styled(Button)`
  cursor: pointer;
  background-color: ${props => {
    if (props.hollow || props.minimal) {
      return useTheme(props, "white");
    } else if (props.context === "input" || props.context === "select") {
      return "transparent";
    } else {
      switch (props.variant) {
        case "secondary":
          return useTheme(props, "secondary");
        case "warning":
          return useTheme(props, "warning");
        default:
          return useTheme(props, "primary");
      }
    }
  }};
  color: ${props => {
    if (props.context === "input" || props.context === "select") {
      return useTheme(props, "baseTextColor");
    }
    switch (props.variant) {
      case "secondary":
        return props.hollow
          ? useTheme(props, "secondary")
          : useTheme(props, "secondaryContrastText");
      case "warning":
        return props.hollow
          ? useTheme(props, "warning")
          : useTheme(props, "warningContrastText");
      default:
        return props.hollow
          ? useTheme(props, "primary")
          : useTheme(props, "primaryContrastText");
    }
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
  outline: 0;
  border-width: ${props => {
    if (props.minimal) {
      return 0;
    } else {
      return useTheme(props, "borderWidth");
    }
  }};
  border-style: solid;
  border-color: ${props => {
    switch (props.variant) {
      case "secondary":
        return useTheme(props, "secondary");
      case "warning":
        return useTheme(props, "warning");
      default:
        return useTheme(props, "primary");
    }
  }};
  border-radius: ${props => useTheme(props, "baseRadius")};
  &:hover {
    ${props => {
      if (props.minimal) {
        return "background-color:" + useTheme(props, "white");
      } else if (props.hollow) {
        switch (props.variant) {
          case "secondary":
            return "background-color:" + useTheme(props, "secondaryLight");
          case "warning":
            return "background-color:" + useTheme(props, "warningLight");
          default:
            return "background-color:" + useTheme(props, "primaryLight");
        }
      } else if (props.context === "input" || props.context === "select") {
        return "font-weight:" + useTheme(props, "fontBold");
      } else {
        switch (props.variant) {
          case "secondary":
            return "background-color:" + useTheme(props, "secondaryDark");
          case "warning":
            return "background-color:" + useTheme(props, "warningDark");
          default:
            return "background-color:" + useTheme(props, "primaryDark");
        }
      }
    }};
  }

  ${props => {
    if (props.context !== "default") {
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
    {context => <StyledButton {...props} context={context} />}
  </ButtonContext.Consumer>
);
export default StyledButtonWContext;
