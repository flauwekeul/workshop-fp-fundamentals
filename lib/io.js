import { identity } from './functions.js';

const of = identity;

const map = (fn) => (io) => () => fn(io());

const ap = (fn) => (io) => () => fn()(io());

const chain = (fn) => (io) => fn(io());

export const IO = {
  of,
  map,
  ap,
  chain,
};
