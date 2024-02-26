import { constant } from './functions.js';

const of = constant;

const map = (f) => (io) => () => f(io());

const ap = (f) => (io) => () => f()(io());

const chain = (f) => (io) => f(io());

export const IO = {
  of,
  map,
  ap,
  chain,
};
