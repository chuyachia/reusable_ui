import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import useTheme from "../useTheme";
import Toast from "./Toast";

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

export default StyledToast;
