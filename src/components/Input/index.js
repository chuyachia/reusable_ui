import React from "react";
import styled from "@emotion/styled";

import Input from "./Input";
import { ButtonContext } from "../Button";

const StyledInput = styled(Input)`
  display: inline-block;
  white-space: nowrap;
  color: ${props => props.theme.baseTextColor};
  font-weight: ${props => props.theme.fontNormal};
  line-height: ${props => props.theme.baseLineHeight};
  & input {
    padding: ${props => props.theme.basePadding};
    font-family: ${props => props.theme.fontSans};
    font-size: ${props => props.theme.baseFontSize};
    line-height: ${props => props.theme.baseLineHeight};
    border-width: ${props => props.theme.borderWidth};
    border-style: solid;
    border-color: ${props => props.theme.primary};
    border-radius: ${props => props.theme.baseRadius};
    outline: 0;
    &:focus {
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;
export default props => (
  <ButtonContext.Provider value="input">
    <StyledInput {...props} />
  </ButtonContext.Provider>
);
