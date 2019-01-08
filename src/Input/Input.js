import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const Input = ({
  resetButton,
  onReset,
  onChange,
  onFocus,
  onKeyDown,
  value,
  controlled,
  ...props
}) => (
  <div {...props}>
    <input
      value={controlled && value}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
    />
    {resetButton && <Button onClick={onReset}>X</Button>}
  </div>
);

Input.propTypes = {
  controlled: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  resetButton: PropTypes.bool,
  value: PropTypes.string,
};

export default Input;
