import { Maybe } from './Maybe.js';

const fromMaybe = (fn) => (x) => (Maybe.isNothing(x) ? Left(fn()) : Right(x));

const Left = (x) => ({
  isLeft: true,
  isRight: false,
  map: () => Left(x),
  ap: () => Left(x),
  chain: () => Left(x),
  fold: (fn) => () => fn(x),
});

const Right = (x) => ({
  isLeft: false,
  isRight: true,
  map: (fn) => Right(fn(x)),
  ap: (either) => either.map(x),
  chain: (fn) => fn(x),
  fold: () => (fn) => fn(x),
});

export const Either = {
  of: Right,
  left: Left,
  right: Right,
  fromMaybe,
  map: (fn) => (either) => either.map(fn),
  ap: (either) => (either2) => either.ap(either2),
  chain: (fn) => (either) => either.chain(fn),
  fold: (fn) => (g) => (either) => either.fold(fn)(g),
};
