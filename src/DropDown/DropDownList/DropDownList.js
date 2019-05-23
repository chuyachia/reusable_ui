import React, { useState } from "react";
import PropTypes from "prop-types";

import { combineCallBacks, combineClassNames } from "../../util";

const DropDownList = React.forwardRef(
  ({ children, variant, onClick, controlled, style, className }, ref) => {
    const [activeItem, setActiveItem] = useState(0);
    return (
      <ul onClick={onClick} ref={ref} style={style} className={className}>
        {children &&
          React.Children.map(
            children,
            (child, index) =>
              child &&
              React.cloneElement(child, {
                className: combineClassNames(
                  !controlled && index === activeItem && "active",
                  child.props.className
                ),
                variant: variant,
                onMouseOver: combineCallBacks(child.props.onMouseOver, () =>
                  setActiveItem(index)
                ),
              })
          )}
      </ul>
    );
  }
);

DropDownList.displayName = "DropDownList";

DropDownList.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
  controlled: PropTypes.bool,
  activeItem: PropTypes.number,
  setActiveItem: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default DropDownList;
