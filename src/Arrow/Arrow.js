import React from "react";
import PropTypes from "prop-types";
const Arrow = props => <i {...props} />;
Arrow.propTypes = {
  className: PropTypes.string,
};
export default Arrow;
