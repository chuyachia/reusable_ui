import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const Toast = ({ message, variant, className, open, onClose }) => {
  return (
    open && (
      <div variant={variant} className={className}>
        <span>{message}</span>
        <Button variant={variant} onClick={onClose}>
          X
        </Button>
      </div>
    )
  );
};

Toast.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
};

export default Toast;
