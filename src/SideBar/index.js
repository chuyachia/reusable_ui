import React from "react";
import styled from "@emotion/styled";
import useTheme from "../useTheme";
import SideBar from "./SideBar";
import ThemeContext from "../ThemeContext";

const StyledSideBar = styled(SideBar)`
  height: 100%;
  & > .sidebar-element {
    padding: ${props => useTheme(props, "basePadding")};
    line-height: ${props => useTheme(props, "largeLineHeight")};
    border-bottom: 1px solid ${props => useTheme(props, "silver")};
  }
`;

const StyledSideBarWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => <StyledSideBar {...props} theme={theme} />}
  </ThemeContext.Consumer>
);

export default StyledSideBarWContext;
