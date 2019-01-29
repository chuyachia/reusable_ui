import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import Table from "./Table";
const TableContext = React.createContext();
const StyledTable = styled(Table)`
  border-collapse: collapse;
  font-family: ${props => useTheme(props, "fontSans")};
`;
export { TableContext };
const StyledTableWContext = props => (
  <TableContext.Provider
    value={{ variant: props.variant, highlight: props.highlight }}
  >
    <StyledTable {...props} />
  </TableContext.Provider>
);
StyledTableWContext.propTypes = {
  variant: PropTypes.string,
  highlight: PropTypes.string,
};
export default StyledTableWContext;
