export const identity = (x) => x;

export const constant = (x) => () => x;

export const not = (x) => !x;

export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

export const flip = (f) => (x) => (y) => f(y)(x);
