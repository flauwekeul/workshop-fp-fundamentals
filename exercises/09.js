import { pipe } from 'ramda';

/**
 * 🧑‍💻 Implement `Maybe` by creating 3 functions: `isNothing`, `of` and `map`.
 *
 * 💡 Hint: a value is considered "nothing" if it's `null` or `undefined`.
 *
 * 💡 Hint: curry the functions.
 */

const isNothing = null;

const of = null;

const map = null;

export const Maybe = {
  isNothing,
  of,
  map,
};

// Test your solution with Quokka:

const upperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!!!`;

const maybeScream = pipe(Maybe.of, Maybe.map(upperCase), Maybe.map(exclaim));

const result1 = maybeScream('hello'); // "HELLO!!!"
console.log(result1);

const result2 = maybeScream(null); // null
console.log(result2);

const result3 = maybeScream(undefined); // undefined
console.log(result3);
