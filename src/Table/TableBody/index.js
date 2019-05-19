import React from "react";
import styled from "@emotion/styled";
import ThemeContext from "../../ThemeContext";

import TableBody from "./TableBody";
import { TableCellContext } from "../TableCell";
const StyledTableBody = styled(TableBody)``;
const StyledTableBodyWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <TableCellContext.Provider value="body">
        <StyledTableBody {...props} theme={theme} />
      </TableCellContext.Provider>
    )}
  </ThemeContext.Consumer>
);
export default StyledTableBodyWContext;
