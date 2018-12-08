import styled from "@emotion/styled";

import Button from "./Button";

export default styled(Button)`
  cursor: pointer;
  background-color: ${props => {
    if (props.hollow) {
      return props.theme.white;
    } else {
      switch (props.variant) {
        case "secondary":
          return props.theme.secondary;
        case "warning":
          return props.theme.warning;
        default:
          return props.theme.primary;
      }
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case "secondary":
        return props.hollow
          ? props.theme.secondary
          : props.theme.secondaryContrastText;
      case "warning":
        return props.hollow
          ? props.theme.warning
          : props.theme.warningContrastText;
      default:
        return props.hollow
          ? props.theme.primary
          : props.theme.primaryContrastText;
    }
  }};
  font-family: ${props => props.theme.fontSans};
  padding: ${props => props.theme.basePadding};
  font-size: ${props => props.theme.baseFontSize};
  font-weight: ${props => props.theme.fontSemibold};
  line-height: ${props => props.theme.buttonLineHeight};
  outline: 0;
  border-width: ${props => (props.hollow ? props.theme.borderWidth : 0)};
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
  border-radius: ${props => props.theme.baseRadius};
  &:hover {
    ${props => {
      if (props.hollow) {
        switch (props.variant) {
          case "secondary":
            return "border-color:" + props.theme.secondaryDark;
          case "warning":
            return "border-color:" + props.theme.warningDark;
          default:
            return "border-color:" + props.theme.primaryDark;
        }
      } else {
        switch (props.variant) {
          case "secondary":
            return "background-color:" + props.theme.secondaryDark;
          case "warning":
            return "background-color:" + props.theme.warningDark;
          default:
            return "background-color:" + props.theme.primaryDark;
        }
      }
    }};
  }
`;
