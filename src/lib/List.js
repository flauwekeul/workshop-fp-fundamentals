import { identity } from './functions.js';

const of = (x) => [x];

const map = (f) => (xs) => xs.map(f);

const ap = (fns) => (xs) => fns.flatMap((f) => xs.map(f));

const chain = (f) => (xs) => xs.flatMap(f);

const range = (start) => (end) => Array.from({ length: end - start }, (_, i) => i + start);

const fold = (f) => (seed) => (xs) => xs.reduce(f, seed);

const traverse = (Ap) => (fn) => fold((f, a) => Ap.ap(Ap.map((b) => (bs) => bs.concat(b))(fn(a)))(f))(Ap.of([]));

const sequence = (Ap) => traverse(Ap)(identity);

export const List = {
  of,
  map,
  ap,
  chain,
  range,
  fold,
  traverse,
  sequence,
};
