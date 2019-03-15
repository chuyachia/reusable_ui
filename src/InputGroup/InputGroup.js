import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default InputGroup;
