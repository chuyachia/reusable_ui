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
  padding: ${props => props.theme.basePadding};
  font-family: ${props => props.theme.fontSans};
  font-size: ${props => props.theme.baseFontSize};
  border-width: ${props => props.theme.borderWidth};
  border-style: solid;
  border-color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.baseRadius};
  & input {
    border-width: 0px;
    padding: 0px;
    line-height: inherit;
    outline: 0;
    font-weight: ${props => props.theme.fontNormal};
    font-size: ${props => props.theme.baseFontSize};
    font-family: ${props => props.theme.fontSans};
  }
`;
export default props => (
  <ButtonContext.Provider value="input">
    <StyledInput {...props} />
  </ButtonContext.Provider>
);
