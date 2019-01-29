import React from "react";
import PropTypes from "prop-types";

class Table extends React.Component {
  constructor() {
    super();
    this.state = { hoverColumn: undefined };
  }
  setHoverColumn = e => {
    this.setState({ hoverColumn: e.target.getAttribute("index") });
  };
  clearHoverColumn = () => {
    this.setState({ hoverColumn: undefined });
  };
  render() {
    return (
      <table
        className={this.props.className}
        onMouseOver={this.setHoverColumn}
        onMouseLeave={this.clearHoverColumn}
      >
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            hoverColumn: this.state.hoverColumn,
          })
        )}
      </table>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Table;
