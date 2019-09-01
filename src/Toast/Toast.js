/* global document */

import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ message, variant, className, open, onClose }) => {
  if (document !== undefined) {
    useEffect(() => {
      document.onkeydown = e => {
        if (e.keyCode === 27) {
          onClose();
        }
      };

      return function cleanup() {
        document.onkeydown = null;
      };
    });
  }

  return (
    open && (
      <div variant={variant} className={className}>
        <span>{message}</span>
        <span onClick={onClose} style={{ cursor: "pointer", float: "right" }}>
          X
        </span>
      </div>
    )
  );
};

Toast.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
};

export default Toast;
