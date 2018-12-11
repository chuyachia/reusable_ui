import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const Select = ({ onClick, value, open, children, ...rest }) => {
  return (
    <div {...rest}>
      <div onClick={onClick}>
        {value ? <span>{value}</span> : <span>&nbsp;</span>}
        {open ? <Button>&#9650;</Button> : <Button>&#9660;</Button>}
      </div>
      {open && children}
    </div>
  );
};

Select.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node
};

export default Select;
