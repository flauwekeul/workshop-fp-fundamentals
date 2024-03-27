export const identity = (x) => x;

export const constant = (x) => () => x;

export const not = (x) => !x;

export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, fn) => fn(v), x);

export const flip = (fn) => (x) => (y) => fn(y)(x);
