import React from "react";
import styled from "@emotion/styled";

import useTheme from "../useTheme";
import Toast from "./Toast";
import ThemeContext from "../ThemeContext";

const StyledToast = styled(Toast)`
  background-color: ${props => {
    if (props.variant) {
      return useTheme(props, props.variant);
    }
    return useTheme(props, "primary");
  }};
  color: ${props => {
    if (props.variant) {
      return useTheme(props, props.variant + "ContrastText");
    }
    return useTheme(props, "primaryContrastText");
  }};
  border-style: solid;
  border-width: ${props => useTheme(props, "borderWidth")};
  border-radius: ${props => useTheme(props, "baseRadius")};
  border-color: ${props => {
    if (props.variant) {
      return useTheme(props, props.variant + "Dark");
    }
    return useTheme(props, "primaryDark");
  }};
  font-family: ${props => useTheme(props, "fontSans")};
  font-weight: ${props => useTheme(props, "fontSemibold")};
  line-height: ${props => useTheme(props, "baseLineHeight")};
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: ${props => useTheme(props, "boxShadow")};
  & > span {
    padding: ${props => useTheme(props, "basePadding")};
  }
`;

const StyledToastWContext = props => (
  <ThemeContext.Consumer>
    {props2 => {
      return <StyledToast {...props} {...props2} />;
    }}
  </ThemeContext.Consumer>
);

export default StyledToastWContext;
