const left = (x) => ({ _tag: 'Left', left: x });

const right = (x) => ({ _tag: 'Right', right: x });

const isLeft = (either) => either._tag === 'Left';

const isRight = (either) => either._tag === 'Right';

const fromNullable = (fallback) => (x) => (x === null || x === undefined ? left(fallback) : right(x));

const tryCatch = (fn, onThrow) => {
  try {
    return right(fn());
  } catch (error) {
    return left(onThrow(error));
  }
};

const map = (fn) => (either) => (isRight(either) ? right(fn(either.right)) : either);

const ap = (either) => (either2) => (isRight(either) ? either2.map(either.right) : either);

const chain = (fn) => (either) => (isRight(either) ? fn(either.right) : either);

const fold = (fn) => (g) => (either) => (isRight(either) ? fn(either.right) : g(either.left));

const value = (either) => (isRight(either) ? either.right : either.left);

export const Either = {
  of: right,
  left,
  right,
  isLeft,
  isRight,
  fromNullable,
  tryCatch,
  map,
  ap,
  chain,
  fold,
  value,
};
