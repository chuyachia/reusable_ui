import React from "react";
import styled from "@emotion/styled";

import Tag from "./Tag";
import useTheme from "../useTheme";
import ThemeContext from "../ThemeContext";

const StyledTag = styled(Tag)`
  cursor: pointer;
  color: ${props => useTheme(props, "baseTextColor")};
  background-color: ${props => {
    switch (props.variant) {
      case "secondary":
        return useTheme(props, "secondaryLight");
      case "warning":
        return useTheme(props, "warningLight");
      default:
        return useTheme(props, "primaryLight");
    }
  }};
  line-height: ${props => useTheme(props, "smallLineHeight")};
  padding: ${props => useTheme(props, "smallPadding")};
  border-radius: ${props => useTheme(props, "baseRadius")};
  border-width: ${props => useTheme(props, "borderWidth")};
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
  display: inline-block;
  margin-right: ${props => useTheme(props, "smallMargin")};
`;

const StyledTagWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => <StyledTag {...props} theme={theme} />}
  </ThemeContext.Consumer>
);

export default StyledTagWContext;
