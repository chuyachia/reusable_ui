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
  handleClick = args => {
    if (this.props.children.props.onClick)
      this.props.children.props.onClick.apply(this.props.children, args);
    const [e, ...rest] = args;
    this.setState({ inputValue: e.target.value }, this.validate);
  };
  handleChange = args => {
    if (this.props.children.props.onChange)
      this.props.children.props.onChange.apply(this.props.children, args);
    const [e, ...rest] = args;
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
          onChange: (...args) => this.handleChange(args),
          onClick: (...args) => this.handleClick(args),
          inline: false,
          variant: this.state.valid
            ? this.props.children.props.variant
            : "warning",
        })}
        {this.state.valid ? (
          <span>{this.props.helpText}</span>
        ) : (
          <span className="warning">{this.props.warningText}</span>
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
