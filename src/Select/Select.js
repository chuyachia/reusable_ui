import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Input from "../Input/Input";
import Tag from "../Tag";
import Arrow from "../Arrow";
import { DropDownList } from "../DropDown";
import { DropDownItem } from "../DropDown";

const Select = ({
  suggestion,
  multiple,
  selected,
  controlled,
  open,
  className,
  onDelete,
  onInput,
  onSelect,
  variant,
  children,
  options,
}) => {
  const [stateOpen, setStateOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const deleteLastSelection = e => {
    var key = e.keyCode || e.charCode;
    if ((key == 8 || key == 46) && textInput.length == 0) {
      e.preventDefault();
      onDelete();
    }
  };
  const deleteSelection = e => {
    onDelete(e.target.getAttribute("value"));
  };
  const selectOption = e => {
    setTextInput("");
    onSelect({
      value: e.target.getAttribute("value"),
      label: e.target.getAttribute("label"),
    });
    if (onInput) {
      onInput("");
    }
  };
  const isopen = controlled ? open : stateOpen;
  const suggestionInput = suggestion ? (
    <Input
      controlled
      value={textInput}
      onFocus={() => setStateOpen(true)}
      onChange={e => {
        onInput(e.target.value);
        setTextInput(e.target.value);
      }}
      onKeyDown={deleteLastSelection}
      className="select-input"
    />
  ) : (
    <div className="select-input" />
  );

  const arrowButton = isopen ? (
    <Button onClick={() => setStateOpen(!stateOpen)}>
      <Arrow direction="up" />
    </Button>
  ) : (
    <Button onClick={() => setStateOpen(!stateOpen)}>
      <Arrow direction="down" />
    </Button>
  );
  return (
    <div className={className}>
      <div className="select-display">
        {multiple ? (
          <React.Fragment>
            {selected.length > 0 ? (
              selected.map(s => (
                <Tag
                  variant={variant}
                  key={s.value}
                  value={s.value}
                  onClick={deleteSelection}
                >
                  {s.label}
                </Tag>
              ))
            ) : (
              <span>&nbsp;</span>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {selected && selected.label ? (
              <span>{selected.label}</span>
            ) : (
              <span>&nbsp;</span>
            )}
          </React.Fragment>
        )}
        {suggestionInput}
        {arrowButton}
      </div>
      <DropDownList
        variant={variant}
        open={isopen}
        onClick={selectOption}
        onClickParent={() => setStateOpen(!stateOpen)}
      >
        {options.map(s => (
          <DropDownItem key={s.value} {...s}>
            {s.label}
          </DropDownItem>
        ))}
      </DropDownList>
    </div>
  );
};

Select.propTypes = {
  onInput: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  ]),
  variant: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  controlled: PropTypes.bool,
  multiple: PropTypes.bool,
  suggestion: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.array,
};

export default Select;
