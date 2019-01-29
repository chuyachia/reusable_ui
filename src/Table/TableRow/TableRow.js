import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ children, className, hoverColumn }) => {
  return (
    <tr className={className}>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          index: i,
          isHoverColumn: i == hoverColumn,
        });
      })}
    </tr>
  );
};

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hoverColumn: PropTypes.string,
};

export default TableRow;
