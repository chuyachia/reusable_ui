/*global require */

const defaultTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss');

export default ({ theme }, prop) => {
  if (prop in theme) {
    return theme[prop];
  }
  return defaultTheme[prop];
};
