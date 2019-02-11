import React, { useState } from "react";
import PropTypes from "prop-types";

const Table = ({ children, ...props }) => {
  const [hoverColumn, setHoverColumn] = useState(undefined);
  return (
    <table
      {...props}
      onMouseOver={e => setHoverColumn(e.target.getAttribute("index"))}
      onMouseLeave={() => setHoverColumn(undefined)}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          hoverColumn: hoverColumn,
        })
      )}
    </table>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Table;
