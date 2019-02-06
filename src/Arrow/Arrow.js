import React from "react";
import PropTypes from "prop-types";
const Arrow = ({ className }) => <i className={className} />;
Arrow.propTypes = {
  className: PropTypes.string,
};
export default Arrow;
