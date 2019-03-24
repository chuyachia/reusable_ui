import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import DropDownItem from "./DropDownItem";

export default styled(DropDownItem)`
  list-style: none;
  cursor: pointer;
  padding: ${props => useTheme(props, "basePadding")};
  font-family: ${props => useTheme(props, "fontSans")};
  font-size: ${props => useTheme(props, "baseFontSize")};
  font-weight: ${props => useTheme(props, "fontNormal")};
  color: ${props => {
    if (props.disabled) {
      return useTheme(props, "silver");
    }
    return useTheme(props, "baseTextColor");
  }};
  line-height: ${props => useTheme(props, "baseLineHeight")};
  &:hover,
  &.active {
    background-color: ${props => {
      if (props.variant) {
        return useTheme(props, props.variant + "Light");
      }
      return useTheme(props, "primaryLight");
    }};
  }
`;
