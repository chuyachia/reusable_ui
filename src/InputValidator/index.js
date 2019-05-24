import React from "react";
import styled from "@emotion/styled";

import InputValidator from "./InputValidator";
import useTheme from "../useTheme";
import ThemeContext from "../ThemeContext";

const StyledInputValidator = styled(InputValidator)`
  display: ${props => {
    return props.children.props.inline ? "inline-block" : "block";
  }};
  font-family: ${props => useTheme(props, "contentFont")};
  font-size: ${props => useTheme(props, "footnoteFontSize")};
  vertical-align: top;
  & span {
    color: ${props => useTheme(props, "primary")};
  }
  & .warning {
    color: ${props => useTheme(props, "warning")};
  }
`;

const StyledInputValidatorWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => <StyledInputValidator {...props} theme={theme} />}
  </ThemeContext.Consumer>
);

export default StyledInputValidatorWContext;
