export const combineCallBacks = (...fns) => (...args) =>
  fns.forEach(fn => fn && fn(...args));

export const combineClassNames = (...strings) => strings.join(" ");
