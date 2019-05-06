import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default InputGroup;
