import React from "react";
import PropTypes from "prop-types";

const RadioCheckGroup = ({
  children,
  variant,
  className,
  direction,
  onChange,
  selected,
}) => {
  var childrenProps = { variant, direction, groupSelection: selected };

  const selectByClick = e => {
    onChange(e.target.value);
  };

  const selectByEnter = e => {
    if (e.keyCode === 13) {
      onChange(e.target.getAttribute("value"));
    }
  };

  return (
    <div className={className} onChange={selectByClick} onKeyDown={selectByEnter}>
      {children &&
        React.Children.map(children, child =>
          React.cloneElement(child, { ...childrenProps })
        )}
    </div>
  );
};

RadioCheckGroup.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  direction: PropTypes.string,
  className: PropTypes.string,
  controlled: PropTypes.bool,
  childrenType: PropTypes.oneOf(["checkbox", "radio"]),
  selected: function(props, propName) {
    if (props["childrenType"] === "checkbox" && !Array.isArray(props[propName]))
      return new Error(
        "Selected should be an array if childrenType is checkbox"
      );
    if (
      props["childrenType"] === "radio" &&
      !(
        typeof props[propName] === "string" || props[propName] instanceof String
      )
    )
      return new Error("Selected should be a string if childrenType is radio");
  },
};

export default RadioCheckGroup;
