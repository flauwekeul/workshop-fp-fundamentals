export const pipe =
  (
    ...fns // eslint-disable-line functional/functional-parameters
  ) =>
  (initialValue) =>
    fns.reduce((value, fn) => fn(value), initialValue);

// eslint-disable-next-line functional/functional-parameters
export const flow = (value, fns) => pipe(...fns)(value);

export const prop = (key) => (obj) => obj[key];
