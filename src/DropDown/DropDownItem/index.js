import React from "react";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import DropDownItem from "./DropDownItem";
import ThemeContext from "../../ThemeContext";

const StyledDropDownItem = styled(DropDownItem)`
  list-style: none;
  cursor: pointer;
  padding: ${props => useTheme(props, "basePadding")};
  font-family: ${props => useTheme(props, "contentFont")};
  font-size: ${props => useTheme(props, "baseFontSize")};
  font-weight: ${props => useTheme(props, "fontNormal")};
  color: ${props => {
    if (props.disabled) {
      return useTheme(props, "silver");
    }
    return useTheme(props, "baseTextColor");
  }};
  line-height: ${props => useTheme(props, "baseLineHeight")};
  &.active {
    background-color: ${props => {
      if (props.variant) {
        return useTheme(props, props.variant + "Light");
      }
      return useTheme(props, "primaryLight");
    }};
  }
  & > * {
    display: inline-block;
    width: 100%;
  }
`;

const StyledDropDownItemWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => <StyledDropDownItem {...props} theme={theme} />}
  </ThemeContext.Consumer>
);

export default StyledDropDownItemWContext;
