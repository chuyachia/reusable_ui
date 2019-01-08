import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  hollow: PropTypes.bool,
};

export default Button;