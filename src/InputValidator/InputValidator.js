import React from "react";
import PropTypes from "prop-types";

class InputValidator extends React.Component {
  constructor() {
    super();
    this.state = {
      valid: true,
      inputValue: "",
    };
  }
  handleClick = e => {
    if (this.props.children.props.onClick) this.props.children.props.onClick(e);
    this.setState({ inputValue: e.target.value }, this.validate);
  };
  handleChange = e => {
    if (this.props.children.props.onChange)
      this.props.children.props.onChange(e);
    this.setState({ inputValue: e.target.value }, this.validate);
  };
  validate = () => {
    var validateResult = this.props.validator(this.state.inputValue);
    this.setState({ valid: validateResult });
  };
  render() {
    return (
      <div className={this.props.className}>
        {React.cloneElement(this.props.children, {
          onChange: this.handleChange,
          onClick: this.handleClick,
          inline: false,
        })}
        {this.state.valid ? (
          <i>{this.props.helpText}</i>
        ) : (
          <i className="warning">{this.props.warningText}</i>
        )}
      </div>
    );
  }
}

InputValidator.propTypes = {
  children: PropTypes.node,
  validator: PropTypes.func,
  className: PropTypes.string,
  helpText: PropTypes.string,
  warningText: PropTypes.string,
};

export default InputValidator;
