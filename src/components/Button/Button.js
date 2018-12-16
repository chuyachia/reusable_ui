import React from "react";
import PropTypes from "prop-types";

const Button = props => <button {...props} />;

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  hollow: PropTypes.bool
};

export default Button;
