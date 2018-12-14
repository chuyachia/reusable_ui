import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Input from "../Input/Input";
import Tag from "../Tag";

const Select = ({
  onClick,
  onInput,
  onKeyDown,
  value,
  open,
  variant,
  children,
  multiple,
  ...rest
}) => {
  return (
    <div {...rest}>
      {multiple ? (
        <div onClick={onClick}>
          {value.map(v => (
            <Tag variant={variant} key={v}>{v}</Tag>
          ))}
          {open ? <Button>&#9650;</Button> : <Button>&#9660;</Button>}
        </div>
      ) : (
        <div onClick={onClick}>
          {value ? <span>{value}</span> : <span>&nbsp;</span>}
          {open ? <Button>&#9650;</Button> : <Button>&#9660;</Button>}
        </div>
      )}
      {open && React.Children.map(children, child =>
        React.cloneElement(child, { variant: variant })
      )}
    </div>
  );
};

Select.propTypes = {
  onClick: PropTypes.func,
  onInput: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  open: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node
};

export default Select;
