import { identity } from './functions.js';

const of = (x) => [x];

const from = Array.from;

const map = (fn) => (xs) => xs.map(fn);

const ap = (fns) => (xs) => fns.flatMap((fn) => xs.map(fn));

const chain = (fn) => (xs) => xs.flatMap(fn);

const range = (start) => (end) => from({ length: end - start }, (_, i) => i + start);

const fold = (fn) => (seed) => (xs) => xs.reduce(fn, seed);

const traverse = (Ap) => (fn) => fold((fn, a) => Ap.ap(Ap.map((b) => (bs) => bs.concat(b))(fn(a)))(fn))(Ap.of([]));

const sequence = (Ap) => traverse(Ap)(identity);

export const List = {
  of,
  from,
  map,
  ap,
  chain,
  range,
  fold,
  traverse,
  sequence,
};
