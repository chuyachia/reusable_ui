import React from "react";
import PropTypes from "prop-types";

const Button = props => <button {...props} />;

Button.propTypes = {
  variant: PropTypes.string,
  hollow: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
