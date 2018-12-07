import React from "react";
import PropTypes from "prop-types";

const Input = props => <input {...props} />;

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Input;
