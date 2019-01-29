import React from "react";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import TableCell from "./TableCell";
import { TableContext } from "../Table";
const TableCellContext = React.createContext();
const StyledTableCell = styled(TableCell)`
  line-height: ${props => useTheme(props, "baseLineHeight")};
  padding: ${props => useTheme(props, "basePadding")};
  border-color: ${props => useTheme(props, "lightGrey")};
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
