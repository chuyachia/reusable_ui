import React from "react";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import TableCell from "./TableCell";
import { TableContext } from "../Table";
const TableCellContext = React.createContext();
const StyledTableCell = styled(TableCell)`
  position: relative;
  line-height: ${props => useTheme(props, "baseLineHeight")};
  padding: ${props => useTheme(props, "basePadding")};
  border-bottom-color: ${props => {
    if (props.variant) {
      return useTheme(props, props.variant);
    }
    return useTheme(props, "primary");
  }};
  border-bottom-style: solid;
  border-width: ${props => (props.context === "head" ? "medium" : "thin")};
  ${props => {
    if (props.highlight === "column" && props.isHoverColumn) {
      switch (props.variant) {
        case "secondary":
          return "background-color :" + useTheme(props, "secondaryLight");
        case "warning":
          return "background-color :" + useTheme(props, "warningLight");
        default:
          return "background-color :" + useTheme(props, "primaryLight");
      }
    }
  }};
  &:hover {
    ${props => {
      if (props.highlight === "cell") {
        switch (props.variant) {
          case "secondary":
            return "background-color :" + useTheme(props, "secondaryLight");
          case "warning":
            return "background-color :" + useTheme(props, "warningLight");
          default:
            return "background-color :" + useTheme(props, "primaryLight");
        }
      }
    }}
  }
  &:not(:last-child):after {
    content: "";
    height: 1em;
    border: 1px solid
      ${props =>
        props.context === "head" ? "transparent" : useTheme(props, "silver")};
    position: absolute;
    top: 25%;
    right: 0;
  }
`;
export { TableCellContext };
const StyledTableCellWContext = props => (
  <TableContext.Consumer>
    {({ variant, highlight }) => (
      <TableCellContext.Consumer>
        {context => (
          <StyledTableCell
            variant={variant}
            {...props}
            highlight={highlight}
            context={context}
          />
        )}
      </TableCellContext.Consumer>
    )}
  </TableContext.Consumer>
);
export default StyledTableCellWContext;
