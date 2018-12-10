import React from "react";
import PropTypes from "prop-types";

const DropDownItem = props => <li {...props} />;

DropDownItem.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node
};

export default DropDownItem;
