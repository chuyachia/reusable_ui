import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className, style }) => (
  <button className={className} onClick={onClick} style={style}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  hollow: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;
