import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import Select from "./Select";
import { ButtonContext } from "../Button";
import { DropDownListContext } from "../DropDown/DropDownList";
import useTheme from "../useTheme";
import ThemeContext from "../ThemeContext";

const StyledSelect = styled(Select)`
  min-width: ${props => useTheme(props, "inputMinWidth")};
  position: relative;
  display: ${props => (props.inline ? "inline-block" : "block")};
  box-shadow: ${props => useTheme(props, "baseShadow")};
  & div {
    display: inline-block;
  }
  & > div {
    padding: ${props => useTheme(props, "basePadding")};
    font-family: ${props => useTheme(props, "contentFont")};
    font-size: ${props => useTheme(props, "baseFontSize")};
    font-weight: ${props => useTheme(props, "fontNormal")};
    color: ${props => useTheme(props, "baseTextColor")};
    line-height: ${props => useTheme(props, "baseLineHeight")};
    border-width: ${props => useTheme(props, "borderWidth")};
    border-style: solid;
    border-color: ${props => useTheme(props, "silver")};
    border-radius: ${props => useTheme(props, "baseRadius")};
    display: block;
  }
  & input {
    padding: ${props => useTheme(props, "smallPadding")};
    font-family: ${props => useTheme(props, "contentFont")};
    font-size: ${props => useTheme(props, "baseFontSize")};
    font-weight: ${props => useTheme(props, "fontNormal")};
    outline: 0;
    line-height: ${props => useTheme(props, "baseLineHeight")};
    border: none;
    width: ${props => useTheme(props, "inputMinWidth")};
  }
`;

const StyledSelectWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <ButtonContext.Provider value="select">
        <DropDownListContext.Provider value={props.open}>
          <StyledSelect {...props} theme={theme} />
        </DropDownListContext.Provider>
      </ButtonContext.Provider>
    )}
  </ThemeContext.Consumer>
);
StyledSelectWContext.propTypes = {
  open: PropTypes.bool,
};
export default StyledSelectWContext;
