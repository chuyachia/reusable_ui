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
  deleteSelection = e => {
    var key = e.keyCode || e.charCode;
    if ((key == 8 || key == 46) && this.state.textinput.length == 0) {
      e.preventDefault();
      this.props.onDelete();
    }
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
      label,
      variant,
      children,
      multiple,
      suggestion,
      className
    } = this.props;
    return (
      <div className={className}>
        {multiple ? (
          <div>
            {label.length > 0 ? (
              label.map(v => (
                <Tag variant={variant} key={v}>
                  {v}
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
                onKeyDown={this.deleteSelection}
              />
            )}
            {this.state.open ? (
              <Button onClick={this.openClose}>&#9650;</Button>
            ) : (
              <Button onClick={this.openClose}>&#9660;</Button>
            )}
          </div>
        ) : (
          <div>
            {label ? <span>{label}</span> : <span>&nbsp;</span>}
            {suggestion && (
              <Input
                controlled
                value={this.state.textinput}
                onFocus={this.open}
                onChange={this.setTextInput}
                onKeyDown={this.deleteSelection}
              />
            )}
            {this.state.open ? (
              <Button onClick={this.openClose}>&#9650;</Button>
            ) : (
              <Button onClick={this.openClose}>&#9660;</Button>
            )}
          </div>
        )}
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            variant: variant,
            open: this.state.open,
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
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  variant: PropTypes.string,
  children: PropTypes.node
};

export default Select;
