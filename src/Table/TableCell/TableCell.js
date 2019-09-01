import React from "react";
import PropTypes from "prop-types";

const TableCell = ({ children, className, context, align, index }) => {
  align = align ? align : isNaN(Number(children)) ? "left" : "right";
  if (context === "head") {
    return (
      <th className={className} style={{ textAlign: align }} index={index} tabIndex={0}>
        {children}
      </th>
    );
  } else {
    return (
      <td className={className} style={{ textAlign: align }} index={index} tabIndex={0}>
        {children}
      </td>
    );
  }
};

TableCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  context: PropTypes.string,
  align: PropTypes.oneOf(["left", "right"]),
};
export default TableCell;
