import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const Input = ({
  resetButton,
  onReset,
  onKeyDown,
  value,
  controlled,
  inline,
  ...props
}) => {
  var inputProps = {
    onKeyDown,
    onChange: () => null,
  };
  if (controlled) inputProps.value = value;

  return (
    <div {...props}>
      <input {...inputProps} />
      {resetButton && <Button onClick={onReset}>X</Button>}
    </div>
  );
};

Input.propTypes = {
  controlled: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  resetButton: PropTypes.bool,
  value: PropTypes.string,
  inline: PropTypes.bool,
};

export default Input;
