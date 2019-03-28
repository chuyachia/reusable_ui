import React from "react";
import PropTypes from "prop-types";

import { combineCallBacks, combineClassNames } from "../util";

class InputValidator extends React.Component {
  constructor() {
    super();
    this.state = {
      valid: true,
      focus: false,
      inputValue: "",
    };
  }
  validate = () => {
    var validateResult = this.props.validator(this.state.inputValue);
    this.setState({ valid: validateResult });
  };
  render() {
    return (
      <div className={this.props.className}>
        {React.cloneElement(this.props.children, {
          onChange: combineCallBacks(this.props.children.props.onChange, e =>
            this.setState({ inputValue: e.target.value }, this.validate)
          ),
          onFocus: combineCallBacks(this.props.children.props.onFocus, e =>
            this.setState(
              { inputValue: e.target.value, focus: true },
              this.validate
            )
          ),
          onBlur: combineCallBacks(this.props.children.props.onBlur, e =>
            this.setState({ focus: false })
          ),
          inline: false,
          variant: this.state.valid
            ? this.state.focus
              ? "focus"
              : ""
            : "warning",
        })}
        {this.state.valid ? (
          this.state.focus && <span>{this.props.helpText}</span>
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
