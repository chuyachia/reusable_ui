import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
  label,
  value,
  className,
  onChange = () => null,
  // React complain when props.checked is set without onChange function but onChange can actually be on the parent wrapper
  selected,
  groupSelection,
}) => {
  var props = { value, onChange };
  if (selected || (groupSelection && groupSelection.indexOf(value) >= 0))
    props.checked = true;
  return (
    <label className={className}>
      {label}&nbsp;
      <input type="checkbox" {...props} />
      <span />
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  selected: PropTypes.bool,
  groupSelection: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default Checkbox;
