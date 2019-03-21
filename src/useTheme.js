/*global require */

const defaultTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./defaultTheme.scss');

export default ({ theme }, prop) => {
  if (Reflect.has(theme, prop)) {
    return theme[prop];
  }
  return defaultTheme[prop];
};
