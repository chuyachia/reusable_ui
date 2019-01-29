import React from "react";
import styled from "@emotion/styled";

import TableHead from "./TableHead";
import { TableCellContext } from "../TableCell";
const StyledTableHead = styled(TableHead)``;
const StyledTableHeadWContext = props => (
  <TableCellContext.Provider value="head">
    <StyledTableHead {...props} />
  </TableCellContext.Provider>
);
export default StyledTableHeadWContext;
