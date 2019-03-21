import React, { useState } from "react";
import PropTypes from "prop-types";

const SideBar = ({ children, className }) => {
  return (
    <div className={className}>
      {React.Children.map(children, child => (
        <div className="sidebar-element">{child}</div>
      ))}
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SideBar;
