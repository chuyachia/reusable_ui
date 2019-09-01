import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({
  label,
  value,
  className,
  name,
  selected,
  groupSelection,
  onChange = () => null,
  // React complain when props.checked is set without onChange function but onChange can actually be on the parent wrapper
}) => {
  var props = { name, value, onChange };
  if (selected || groupSelection === value) {
    props.checked = true;
  } else if (groupSelection !== undefined) {
    props.checked = false;
  }
  return (
    <label className={className} value={value} tabIndex={0}>
      {label}&nbsp;
      <input type="radio" {...props} />
      <span />
    </label>
  );
};

RadioButton.propTypes = {
  /** Label of the radio button intended for humans*/
  label: PropTypes.string,
  /** Classname to apply extra css */
  className: PropTypes.string,
  /** Name prop of radio button input so that only one can be selected at a time*/
  name: PropTypes.string,
  /** Value of the radio button intended for machines*/
  value: PropTypes.string,
  /** Wether the radio button is selected*/
  selected: PropTypes.bool,
  /** Value of the selected radio button in the group.
   *
   * Passed from RadioCheckGroup parent*/
  groupSelection: PropTypes.string,
  /** (event)=> null
   *
   * Function to call when the radio button changed.
   *
   * Passed from the parent if inside a RadioCheckGroup*/
  onChange: PropTypes.func,
};

export default RadioButton;
