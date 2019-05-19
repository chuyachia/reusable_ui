import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import useTheme from "../../useTheme";
import Table from "./Table";
import ThemeContext from "../../ThemeContext";
const TableContext = React.createContext();
const StyledTable = styled(Table)`
  display: table;
  border-collapse: collapse;
  font-family: ${props => useTheme(props, "fontSans")};
  color: ${props => useTheme(props, "baseTextColor")};
`;
export { TableContext };
const StyledTableWContext = props => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <TableContext.Provider
        value={{ variant: props.variant, highlight: props.highlight }}
      >
        <StyledTable {...props} theme={theme} />
      </TableContext.Provider>
    )}
  </ThemeContext.Consumer>
);
StyledTableWContext.propTypes = {
  variant: PropTypes.string,
  highlight: PropTypes.string,
};
export default StyledTableWContext;
