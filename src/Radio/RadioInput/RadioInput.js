import React from "react";
import PropTypes from "prop-types";

const RadioInput = ({ label, value, className, name }) => (
  <label className={className}>
    {label}&nbsp;
    <input type="radio" name={name} value={value} />
    <span />
  </label>
);

RadioInput.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default RadioInput;
