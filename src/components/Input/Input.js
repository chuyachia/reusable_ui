import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const Input = ({ resetButton, onReset, onChange, ...props }) => (
  <div {...props}>
    <input onChange={onChange}/>
    {resetButton && (
      <Button isResetButton={true} onClick={onReset}>
        X
      </Button>
    )}
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  resetButton: PropTypes.bool,
  value: PropTypes.string
};

export default Input;
