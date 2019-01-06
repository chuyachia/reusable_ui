import React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ children, variant, className, direction }) => (
  <div className={className}>
    {children &&
      React.Children.map(children, child =>
        React.cloneElement(child, { variant: variant, direction: direction })
      )}
  </div>
);

RadioGroup.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  direction: PropTypes.string,
  className: PropTypes.string,
};

export default RadioGroup;
