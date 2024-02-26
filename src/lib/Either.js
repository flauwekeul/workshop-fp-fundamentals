import { Maybe } from './Maybe.js';

const fromMaybe = (f) => (x) => (Maybe.isNothing(x) ? Left(f()) : Right(x));

const Left = (x) => ({
  isLeft: true,
  isRight: false,
  map: () => Left(x),
  ap: () => Left(x),
  chain: () => Left(x),
  fold: (f) => () => f(x),
});

const Right = (x) => ({
  isLeft: false,
  isRight: true,
  map: (f) => Right(f(x)),
  ap: (either) => either.map(x),
  chain: (f) => f(x),
  fold: () => (f) => f(x),
});

export const Either = {
  of: Right,
  left: Left,
  right: Right,
  fromMaybe,
  map: (f) => (either) => either.map(f),
  ap: (either) => (either2) => either.ap(either2),
  chain: (f) => (either) => either.chain(f),
  fold: (f) => (g) => (either) => either.fold(f)(g),
};
