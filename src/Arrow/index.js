import styled from "@emotion/styled";

import useTheme from "../useTheme";
import Arrow from "./Arrow";

const StyledArrow = styled(Arrow)`
  border-style: solid;
  border-color: ${props => {
    if (props.variant) {
      return useTheme(props, props.variant);
    }
    if (props.disabled) {
      return useTheme(props, "grey");
    }
    return useTheme(props, "baseTextColor");
  }};
  display: inline-block;
  padding: ${props => {
    var size = props.size === undefined ? "3px" : props.size;
    return size;
  }};
  border-width: ${props => {
    var size = props.size === undefined ? "3px" : props.size;
    return "0 " + size + " " + size + " 0";
  }};
  ${props => {
    switch (props.direction) {
      case "right":
        return "transform: rotate(-45deg)";
      case "left":
        return "transform: rotate(135deg)";
      case "up":
        return "transform: translateY(25%) rotate(-135deg)";
      case "down":
        return "transform: translateY(-25%) rotate(45deg)";
    }
  }};
  transition: transform 0.3s;
`;

export default StyledArrow;
