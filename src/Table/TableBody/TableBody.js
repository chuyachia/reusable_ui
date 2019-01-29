import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ children, className, ...rest }) => (
  <tbody className={className}>
    {React.Children.map(children, child => {
      return React.cloneElement(child, {
        ...rest,
      });
    })}
  </tbody>
);

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TableBody;
