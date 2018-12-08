import React from "react";
import PropTypes from "prop-types";

const Button = ({css,...props}) => <button {...props} />;

Button.propTypes = {
  className:PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
