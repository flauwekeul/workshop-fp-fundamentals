import { identity, not } from './functions.js';

const isNothing = (x) => x === null || x === undefined;

const isJust = not(isNothing);

const of = identity;

const map = (f) => (x) => (isNothing(x) ? null : f(x));

const ap = (f) => (x) => (isNothing(f) ? null : map(f)(x));

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
