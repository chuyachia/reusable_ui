/*global require */

const defaultTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./defaultTheme.scss');

export default ({ theme }, prop) => {
  if (prop in theme) {
    return theme[prop];
  }
  return defaultTheme[prop];
};
