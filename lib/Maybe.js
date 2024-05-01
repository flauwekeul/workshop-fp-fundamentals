import { identity, not } from './functions.js';

const isNothing = (x) => x === null || x === undefined;

const isJust = not(isNothing);

const of = identity;

const map = (fn) => (x) => (isNothing(x) ? x : fn(x));

const ap = (fn) => (x) => (isNothing(fn) ? x : map(fn)(x));

const chain = map;

const fold = (whenNothing) => (whenJust) => (x) => (isNothing(x) ? whenNothing() : whenJust(x));

export const Maybe = {
  isNothing,
  isJust,
  of,
  map,
  ap,
  chain,
  fold,
};
