import React from "react";
import PropTypes from "prop-types";

const DropDownList = React.forwardRef(
  ({ children, variant, onClick, show, ...props }, ref) => {
    return (
      <ul onClick={onClick} ref={ref} {...props}>
        {children &&
          React.Children.map(
            children,
            child => child && React.cloneElement(child, { variant: variant })
          )}
      </ul>
    );
  }
);

DropDownList.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
  show: PropTypes.bool,
};

export default DropDownList;
