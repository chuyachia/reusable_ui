import React from "react";
import styled from "@emotion/styled";

import Select from "./Select";
import { ButtonContext } from "../Button";
import { DropDownListContext } from "../DropDown/DropDownList";

const StyledSelect = styled(Select)`
  min-width: ${props => props.theme.inputMinWidth};
  position: relative;
  display: inline-block;
  & div {
    display:inline-block;
  }
  & > div {
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
    display:block;
  }
  & input {
    padding: ${props => props.theme.smallPadding};
    font-family: ${props => props.theme.fontSans};
    font-size: ${props => props.theme.baseFontSize};
    font-weight: ${props => props.theme.fontNormal};
    outline:0;
    line-height: ${props => props.theme.baseLineHeight};
    border:none; 
    width:${props => props.theme.inputMinWidth};
  }
`;

export default props => (
  <ButtonContext.Provider value="select">
    <DropDownListContext.Provider value={props.open}>
      <StyledSelect {...props} />
    </DropDownListContext.Provider>
  </ButtonContext.Provider>
);
