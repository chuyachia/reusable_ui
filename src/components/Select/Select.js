import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Input from "../Input/Input";
import Tag from "../Tag";

class Select extends React.Component {
  state = { open: false, textinput: "" };
  openClose = () => {
    this.setState({ open: this.state.open ? false : true });
  };
  open = () => {
    this.setState({ open: true });
  };
  setTextInput = e => {
    this.props.onInput(e.target.value);
    this.setState({ textinput: e.target.value });
  };
  deleteLastSelection = e => {
    var key = e.keyCode || e.charCode;
    if ((key == 8 || key == 46) && this.state.textinput.length == 0) {
      e.preventDefault();
      this.props.onDelete();
    }
  };
  deleteSelection = e => {
    this.props.onDelete(e.target.getAttribute("value"));
  };
  selectOption = e => {
    this.setState({ textinput: "" });
    this.props.onSelect({
      value: e.target.getAttribute("value"),
      label: e.target.getAttribute("label")
    });
    if (this.props.onInput) {
      this.props.onInput("");
    }
  };
  render() {
    const {
      selected,
      variant,
      children,
      multiple,
      suggestion,
      className,
      open,
      controlled
    } = this.props;
    var isopen = controlled ? open : this.state.open;
    return (
      <div className={className}>
        {multiple ? (
          <div>
            {selected.length > 0 ? (
              selected.map(s => (
                <Tag
                  variant={variant}
                  key={s.value}
                  value={s.value}
                  onClick={this.deleteSelection}
                >
                  {s.label}
                </Tag>
              ))
            ) : (
              <span>&nbsp;</span>
            )}
            {suggestion && (
              <Input
                controlled
                value={this.state.textinput}
                onFocus={this.open}
                onChange={this.setTextInput}
                onKeyDown={this.deleteLastSelection}
              />
            )}
            {isopen ? (
              <Button onClick={this.openClose}>&#9650;</Button>
            ) : (
              <Button onClick={this.openClose}>&#9660;</Button>
            )}
          </div>
        ) : (
          <div>
            {selected && selected.label ? (
              <span>{selected.label}</span>
            ) : (
              <span>&nbsp;</span>
            )}
            {suggestion && (
              <Input
                controlled
                value={this.state.textinput}
                onFocus={this.open}
                onChange={this.setTextInput}
                onKeyDown={this.deleteLastSelection}
              />
            )}
            {isopen ? (
              <Button onClick={this.openClose}>&#9650;</Button>
            ) : (
              <Button onClick={this.openClose}>&#9660;</Button>
            )}
          </div>
        )}
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            variant: variant,
            open: isopen,
            onClick: this.selectOption,
            onClickParent: this.openClose
          })
        )}
      </div>
    );
  }
}

Select.propTypes = {
  onInput: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
    )
  ]),
  variant: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  controlled: PropTypes.bool,
  multiple: PropTypes.bool,
  suggestion: PropTypes.bool
};

export default Select;
