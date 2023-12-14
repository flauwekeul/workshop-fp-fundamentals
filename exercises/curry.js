/**
 * Partially apply `describePerson()` so that the functions below work as expected.
 * Keep the order of arguments, else the tests will fail.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} occupation
 * @param {string[]} hobbies
 * @returns string
 */

export const describePerson = (name, age, occupation, hobbies = []) =>
  `${name} is ${age} years old and works as a ${occupation}. ${name} enjoys ${hobbies.join(', ')}.`;

// 👇👇👇 Only change code BELOW 👇👇👇

export const describeRupert = null;

export const describe23YearOldWebDeveloper = null;

export const describe31YearOldBettyWhoLikesToKnit = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

/**
 * Implement a curried version of `describePerson()` above.
 *
 * @example
 * ```js
 * const name = 'Hank';
 * const age = 56;
 * const occupation = 'plumber';
 * const hobbies = ['fishing', 'pole dancing'];
 * curriedDescribePerson(name)(age)(occupation)(hobbies)
 * ```
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const curriedDescribePerson = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

/**
 * Curry `multiply()` and `map()` so that `multiplyAllBy()` below works.
 * You may need to change the order of some arguments.
 *
 * You may only change `multiply()` and `map()`, NOT `multiplyAllBy()`!
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * // Note that `multiplyAllBy()` takes a number and returns a function that takes an array
 * const multiplyAllBy2 = multiplyAllBy(2);
 * multiplyAllBy2(array); // [2, 4, 6]
 *
 * const multiplyAllBy10 = multiplyAllBy(10);
 * multiplyAllBy10(array); // [10, 20, 30]
 * ```
 */

// 👇👇👇 Only change code BELOW 👇👇👇

const multiply = (a, b) => a * b;
const map = (array, fn) => array.map(fn);

// 👆👆👆 Only change code ABOVE 👆👆👆

export const multiplyAllBy = (numbers) => map(multiply(numbers));
