import styled from "@emotion/styled";
import useTheme from "../useTheme";
import SideBar from "./SideBar";

export default styled(SideBar)`
  height: 100%;
  & > .sidebar-element {
    padding: ${props => useTheme(props, "basePadding")};
    line-height: ${props => useTheme(props, "largeLineHeight")};
    border-bottom: 1px solid ${props => useTheme(props, "silver")};
  }
`;
