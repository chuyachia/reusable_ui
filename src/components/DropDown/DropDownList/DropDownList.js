import React from "react";
import PropTypes from "prop-types";

const DropDownList = ({
  open,
  children,
  variant,
  onClick,
  onClickParent,
  ...props
}) => {
  const onClickCombinded = e => {
    if (onClickParent) {
      onClickParent();
    }
    onClick(e);
  };
  return open ? (
    <ul onClick={onClickCombinded} {...props}>
      {children &&
        React.Children.map(children, child =>
          React.cloneElement(child, { variant: variant })
        )}
    </ul>
  ) : null;
};

DropDownList.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClickParent: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string
};

export default DropDownList;
