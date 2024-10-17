import { pipe } from 'ramda';

/**
 * 🧑‍💻 Implement `Maybe`. It has 3 functions namespaced in an object called `Maybe`:
 *    - `isNothing`: returns a boolean indicating if the passed value is `null` or `undefined`.
 *    - `of`: returns the passed value as-is.
 *    - `map`: applies a function to a value unless it is `null` or `undefined`.
 *
 * 💡 Hint: curry the 3 functions.
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

maybeScream('hello'); // "HELLO!!!"
maybeScream(null); // null
maybeScream(undefined); // undefined
