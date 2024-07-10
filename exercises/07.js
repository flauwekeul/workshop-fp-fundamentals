/**
 * You're going to sort an array of objects by each object's `value` property
 * in ascending order:
 *
 * ```js
 * // Input:
 * const numbers = [
 *   { value: 8 },
 *   { value: 10 },
 *   { value: 3 },
 *   { value: 1 },
 *   { value: -5 },
 * ];
 *
 * // Desired output:
 * [
 *   { value: -5 },
 *   { value: 1 },
 *   { value: 3 },
 *   { value: 8 },
 *   { value: 10 },
 * ];
 * ```
 *
 * Instead of writing a single function that does this,
 * you're going to use 3 (partially) curried functions and compose them together.
 *
 * ```js
 * const sortByAscendingValue = sort(ascend(prop('value')));
 * sortByAscendingValue(numbers); // returns the sorted array of numbers
 * ```
 *
 * The uncurried functions are defined below (prefixed with an underscore).
 *
 * 🧑‍💻 Create a curried version of `sort`, `ascend` and `prop`.
 *
 * 💡 Hint: You may need to change the order of arguments.
 *
 * 💡 Hint: Array's `toSorted` accepts a binary function (with signature `(a, b) => number`).
 *    Either don't fully curry all functions or make a function that uncurries a curried function.
 */

const _sort = (array, comparatorFn) => array.toSorted(comparatorFn);

const _ascend = (fn, a, b) => fn(a) - fn(b);

const _prop = (obj, keyName) => obj[keyName];

// Composing these uncurried functions is quite verbose:
const _sortByAscendingValue = (array) => _sort(array, (a, b) => _ascend((obj) => _prop(obj, 'value'), a, b));

// 👇👇👇 Only change code BELOW 👇👇👇

// Curry this: (array, comparatorFn) => array.toSorted(comparatorFn)
const sort = null;

// Curry this: (fn, a, b) => fn(a) - fn(b)
const ascend = null;

// Curry this: (obj, keyName) => obj[keyName]
const prop = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

export const sortByAscendingValue = sort(ascend(prop('value')));

// Test your solution with Quokka:

const list = [{ value: 8 }, { value: 10 }, { value: 3 }, { value: 1 }, { value: -5 }];

const result1 = _sortByAscendingValue(list);
console.log(result1);

const result2 = sortByAscendingValue(list);
console.log(result2);
