import React, { useRef } from "react";
import PropTypes from "prop-types";

import Input from "../Input/Input";
import Tag from "../Tag";
import Arrow from "../Arrow";
import { DropDownList } from "../DropDown";
import { DropDownItem } from "../DropDown";

const Select = ({
  suggestion,
  multiple,
  selected,
  className,
  onDelete,
  onInput,
  onSelect,
  variant,
  options,
  keepOpen,
}) => {
  const [stateOpen, setStateOpen] = React.useState(false);
  // Not use named import {useState} so that we can mock useState in test to spy on state change
  const [inputFocused, setInputFocused] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");
  const [activeItem, setActiveItem] = React.useState(0);
  const dropDownRef = useRef(null);
  const isSelected = option =>
    selected.findIndex(
      s => s.value === option.value && s.label === option.label
    ) >= 0;
  const inputKeyDown = e => {
    var key = e.keyCode || e.charCode;
    if ((key == 8 || key == 46) && textInput.length == 0) {
      e.preventDefault();
      onDelete();
    }
  };
  const deleteSelection = e => {
    const option = {
      value: e.target.getAttribute("value"),
      label: e.target.getAttribute("label"),
    };
    onDelete(option);
  };
  const selectOption = option => {
    if (multiple && isSelected(option)) {
      onDelete(option);
    } else {
      onSelect(option);
    }
    if (onInput) {
      onInput("");
    }
    setTextInput("");
  };
  const handleItemClick = e => {
    e.stopPropagation();
    if (e.target.nodeName === "LI") {
      const option = {
        value: e.target.getAttribute("value"),
        label: e.target.getAttribute("label"),
      };
      selectOption(option);
    }
    if (!keepOpen) {
      setStateOpen(false);
    }
  };
  const keyDownOpenDropDown = e => {
    if (e.keyCode === 13) {
      if (stateOpen) {
        const option = options[activeItem];
        selectOption(option);
        if (!keepOpen) {
          setStateOpen(false);
        }
      }
    } else if (e.keyCode === 40) {
      if (stateOpen) {
        keyDownChangeActive(e);
      } else {
        setStateOpen(true);
      }
    } else if (e.keyCode === 38 && stateOpen) {
      keyDownChangeActive(e);
    }
  };

  const keyDownChangeActive = e => {
    if (e.keyCode === 40 && activeItem < options.length - 1) {
      setActiveItem(activeItem + 1);
      dropDownRef.current.scrollBy(0, 40);
    } else if (e.keyCode === 38 && activeItem > 0) {
      setActiveItem(activeItem - 1);
      dropDownRef.current.scrollBy(0, -40);
    }
  };
  const suggestionInput = suggestion ? (
    <Input
      controlled={true}
      value={textInput}
      onClick={e => setInputFocused(true)}
      onChange={e => {
        onInput(e.target.value);
        setTextInput(e.target.value);
        setActiveItem(0);
        setStateOpen(true);
      }}
      onKeyDown={inputKeyDown}
      className="select-input"
    />
  ) : (
    <div className="select-input" />
  );

  const arrowButton = stateOpen ? (
    <Arrow
      direction="up"
      style={{ cursor: "pointer" }}
      onClick={e => {
        e.stopPropagation();
        setStateOpen(false);
      }}
    />
  ) : (
    <Arrow
      direction="down"
      style={{ cursor: "pointer" }}
      onClick={e => {
        e.stopPropagation();
        setStateOpen(true);
      }}
    />
  );

  return (
    <div
      className={className}
      tabIndex={0}
      onKeyDown={keyDownOpenDropDown}
      onClick={e => {
        setStateOpen(true);
      }}
      onBlur={e => {
        if (!inputFocused) {
          setStateOpen(false);
        }
        setInputFocused(false);
      }}
    >
      <div className="select-display">
        {multiple ? (
          <React.Fragment>
            {selected.length > 0 ? (
              selected.map(s => (
                <Tag
                  variant={variant}
                  key={s.value}
                  value={s.value}
                  label={s.label}
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
        <span style={{ float: "right" }}>{arrowButton}</span>
      </div>
      <DropDownList
        variant={variant}
        open={stateOpen}
        ref={dropDownRef}
        controlled={true}
      >
        {options.map((s, i) => (
          <DropDownItem
            key={s.value}
            {...s}
            disabled={multiple && selected && isSelected(s)}
            onClick={handleItemClick}
            className={i === activeItem && "active"}
            onMouseOver={() => setActiveItem(i)}
          >
            {s.label}
          </DropDownItem>
        ))}
        {options.length === 0 && (
          <DropDownItem disabled={true}>No result found</DropDownItem>
        )}
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
  children: PropTypes.node,
  multiple: PropTypes.bool,
  suggestion: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.array,
  keepOpen: PropTypes.bool,
};

export default Select;
