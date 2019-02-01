import React from "react";
import PropTypes from "prop-types";

const DropDownList = ({
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
  return (
    <ul onClick={onClickCombinded} {...props}>
      {children &&
        React.Children.map(children, child =>
          React.cloneElement(child, { variant: variant })
        )}
    </ul>
  );
};

DropDownList.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
  onClickParent: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default DropDownList;
