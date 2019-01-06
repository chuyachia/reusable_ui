import React from "react";
import PropTypes from "prop-types";

const Tag = props => <div {...props} />;

Tag.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default Tag;
