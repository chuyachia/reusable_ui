import React from "react";
import PropTypes from "prop-types";

const DropDownList = ({ show, children, variant, ...props }) => {
  return show ? (
    <ul {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { variant: variant })
      )}
    </ul>
  ) : null;
};

DropDownList.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default DropDownList;
