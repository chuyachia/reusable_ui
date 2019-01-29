import React from "react";
import styled from "@emotion/styled";

import TableBody from "./TableBody";
import { TableCellContext } from "../TableCell";
const StyledTableBody = styled(TableBody)``;
const StyledTableBodyWContext = props => (
  <TableCellContext.Provider value="body">
    <StyledTableBody {...props} />
  </TableCellContext.Provider>
);
export default StyledTableBodyWContext;
