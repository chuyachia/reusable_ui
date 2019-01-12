import React from "react";
import PropTypes from "prop-types";
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const DropDownItem = props => <li {...props} />;

DropDownItem.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default DropDownItem;
