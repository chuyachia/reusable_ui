/*global require */

const defaultTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./default-theme.scss');

export default ({ theme }, name) => {
  if (Reflect.has(theme, name)) {
    return theme[name];
  }
  return defaultTheme[name];
};
