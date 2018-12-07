import React from "react";
import PropTypes from "prop-types";

const Button = props => <button {...props} />;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
