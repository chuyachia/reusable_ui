import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ children, className, ...rest }) => (
  <thead className={className}>
    {React.Children.map(children, child => {
      return React.cloneElement(child, {
        ...rest,
      });
    })}
  </thead>
);

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TableHead;
