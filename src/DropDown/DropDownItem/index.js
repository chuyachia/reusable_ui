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
  color: ${props => useTheme(props, "baseTextColor")};
  line-height: ${props => useTheme(props, "baseLineHeight")};
  &:hover {
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
    font-weight: ${props => useTheme(props, "fontSemibold")};
  }
`;
