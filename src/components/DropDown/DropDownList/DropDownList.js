import React from "react";
import PropTypes from "prop-types";

const DropDownList = ({ show, ...props }) => (show ? <ul {...props} /> : null);

DropDownList.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DropDownList.defaultProps = {
  show: true
};

export default DropDownList;
