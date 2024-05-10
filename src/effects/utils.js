/* eslint-disable functional/no-expression-statements */

export const tap = (fn) => (x) => {
  fn(x);
  return x;
};
