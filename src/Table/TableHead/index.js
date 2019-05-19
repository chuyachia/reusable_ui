import React from "react";
import styled from "@emotion/styled";

import TableHead from "./TableHead";
import { TableCellContext } from "../TableCell";
import ThemeContext from "../../ThemeContext";
const StyledTableHead = styled(TableHead)``;
const StyledTableHeadWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <TableCellContext.Provider value="head">
        <StyledTableHead {...props} theme={theme} />
      </TableCellContext.Provider>
    )}
  </ThemeContext.Consumer>
);
export default StyledTableHeadWContext;
