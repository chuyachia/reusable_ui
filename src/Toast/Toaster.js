import React from "react";
import ReactDOM from "react-dom";

import StyledToast from "./index";

export default {
  domNode: null,
  message: "",
  variant: "",
  open: true,
  toast: null,
  onClose: function() {
    ReactDOM.unmountComponentAtNode(this.domNode);
  },
  show: function(message, variant = "primary") {
    this.open = true;
    this.message = message;
    this.variant = variant;
    if (!this.domNode) {
      this.domNode = document.createElement("div");
      document.body.appendChild(this.domNode);
    }
    ReactDOM.render(
      <StyledToast
        message={this.message}
        variant={this.variant}
        open={this.open}
        onClose={this.onClose.bind(this)}
      />,
      this.domNode
    );
  },
};
