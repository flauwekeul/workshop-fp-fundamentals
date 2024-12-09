import { pipe } from 'ramda';

/**
 * 🧑‍💻 Implement `Either` by creating 3 functions:
 *    * `fromNullable`
 *    * `map`
 *
 * 💡 Hint: curry the functions.
 */

// These are the constructors for `Left` and `Right`:

const left = (x) => ({ _tag: 'Left', left: x });

const right = (x) => ({ _tag: 'Right', right: x });

const isLeft = (x) => x._tag === 'Left';

const isRight = (x) => x._tag === 'Right';

// 👇👇👇 Only change code BELOW 👇👇👇

// Takes a fallback value and a "nullable" (a value that may be null/undefined) and returns an `Either` (a `Left` or a `Right`)
const fromNullable = null;

// Like Maybe, only applies the function to the value if it's a `Right`
const map = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

export const Either = {
  left,
  right,
  isLeft,
  isRight,
  fromNullable,
  map,
};

// Test your solution with Quokka:

const createEither = Either.fromNullable('fallback');

console.log(createEither(1)); // { _tag: 'Right', right: 1 }
console.log(createEither(null)); // { _tag: 'Left', left: 'fallback' }

const addOne = pipe(
  Either.fromNullable(0),
  Either.map((x) => x + 1),
);

console.log(addOne(1)); // { _tag: 'Right', right: 2 }
console.log(addOne(undefined)); // { _tag: 'Left', left: 0 }

/**
 * 🧑‍💻 Implement a function called `fold` with which you can "extract" the value of the Either.
 *    It takes a function for the `Left` case and a function for the `Right` case and finally an `Either`.
 *
 * ❓ Fully currying this function arguably isn't needed, why?
 */

Either.fold = null;

const timesTwo = pipe(
  Either.fromNullable('nullable'),
  Either.map((x) => x * 2),
  Either.fold(
    (x) => `Error: ${x}`,
    (x) => `Value is ${x}`,
  ),
);

console.log(timesTwo(1)); // 'Value is 2'
console.log(timesTwo(undefined)); // 'Error: nullable'

/**
 * 🧑‍💻 Implement a function called `tryCatch` that takes a function that may throw an error
 *    and a function that transforms that error into a `Left` and returns an `Either`.
 *
 * ❓ Does it make sense to curry this function?
 */

Either.tryCatch = null;

// Test your solution with Quokka:

const noProblemo = Either.tryCatch(
  (x) => x + 1,
  () => 'Never called',
);
console.log(noProblemo(1)); // { _tag: 'Right', right: 2 }

const oops = Either.tryCatch(
  () => {
    throw new Error('Oops');
  },
  (error) => `${error.message}!!!`,
);
console.log(oops(1)); // { _tag: 'Left', left: 'Oops!!!' }
