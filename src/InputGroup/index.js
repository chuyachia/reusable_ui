import React from "react";
import styled from "@emotion/styled";

import InputGroup from "./InputGroup";
import ThemeContext from "../ThemeContext";

const StyledInputGroup = styled(InputGroup)`
  & *:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & *:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;
const StyledInputGroupWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => <StyledInputGroup {...props} theme={theme} />}
  </ThemeContext.Consumer>
);

export default StyledInputGroupWContext;
