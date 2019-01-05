import styled from "@emotion/styled";

import Tag from "./Tag";

export default styled(Tag)`
  cursor:pointer;
  color: ${props => props.theme.baseTextColor};
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
  line-height: ${props => props.theme.smallLineHeight};
  padding: ${props => props.theme.smallPadding};
  border-radius: ${props => props.theme.baseRadius};
  border-width: ${props => props.theme.borderWidth};
  border-style: solid;
  border-color: ${props => {
    switch (props.variant) {
      case "secondary":
        return props.theme.secondary;
      case "warning":
        return props.theme.warning;
      default:
        return props.theme.primary;
    }
  }};
  display: inline-block;
  margin-right:${props => props.theme.smallMargin};
`;
