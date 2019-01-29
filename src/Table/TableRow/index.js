import React from "react";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import TableRow from "./TableRow";
import { TableContext } from "../Table";
const StyledTableRow = styled(TableRow)`
	&:hover {
		${props => {
      if (props.highlight === "row") {
        switch (props.variant) {
          case "secondary":
            return "background-color :" + useTheme(props, "secondaryLight");
          case "warning":
            return "background-color :" + useTheme(props, "warningLight");
          default:
            return "background-color :" + useTheme(props, "primaryLight");
        }
      }
    }}`;
const StyledTableRowWContext = props => (
  <TableContext.Consumer>
    {({ variant, highlight }) => (
      <StyledTableRow variant={variant} {...props} highlight={highlight} />
    )}
  </TableContext.Consumer>
);
export default StyledTableRowWContext;
