import React from "react";
import styled from "@emotion/styled";

import Select from "./Select";
import { ButtonContext } from "../Button";

const StyledSelect =  styled(Select)`
  display:inline-block;
  cursor:pointer;
  & div {
    padding: ${props => props.theme.basePadding};
    font-family: ${props => props.theme.fontSans};
    font-size: ${props => props.theme.baseFontSize};
    font-weight: ${props => props.theme.fontNormal};
    color: ${props => props.theme.baseTextColor};
    line-height: ${props => props.theme.baseLineHeight};
    border-width: ${props => props.theme.borderWidth};
    border-style: solid;
    border-color: ${props => props.theme.primary};
    border-radius: ${props => props.theme.baseRadius};
  }
`;

export default props => (
    <ButtonContext.Provider value="select">
      <StyledSelect {...props} />
    </ButtonContext.Provider>
  );
  