import styled from "@emotion/styled";

import DropDownItem from "./DropDownItem";

export default styled(DropDownItem)`
  list-style: none;
  cursor: pointer;
  padding: ${props => props.theme.basePadding};
  font-family: ${props => props.theme.fontSans};
  font-size: ${props => props.theme.baseFontSize};
  font-weight: ${props => props.theme.fontNormal};
  color: ${props => props.theme.baseTextColor};
  line-height: ${props => props.theme.baseLineHeight};
  &:hover {
    background-color: ${props => {
      switch (props.variant) {
        case "secondary":
          return props.theme.secondaryLight;
        case "warning":
          return props.theme.warningLight;
        default:
          return props.theme.primaryLight;
      }
    }};
    font-weight: ${props => props.theme.fontSemibold};
  }
`;
