/**
 * 🧑‍💻 Create a function `pipe` that takes one or more functions and composes them left to right.
 *    It should return a function that takes a value and applies it to the composed functions.
 *
 * It should work like this:
 *
 * ```js
 * const increment = (x) => x + 1;
 * const double = (x) => x * 2;
 * const quarter = (x) => x / 4;
 *
 * const incrementDoubleQuarter = pipe(increment, double, quarter);
 * incrementDoubleQuarter(3); // 2
 * ```
 *
 * Or:
 *
 * ```js
 * pipe(increment, double, quarter)(3); // 2
 * ```
 *
 * 🥇 BONUS: try implementing it with an Array method.
 */

export const pipe = null;

// Test your solution with Quokka:

const increment = (x) => x + 1;
const double = (x) => x * 2;
const quarter = (x) => x / 4;

// Composing without pipe:
const result1 = quarter(double(increment(3)));
console.log(result1); // 2

const incrementDoubleQuarter = pipe(increment, double, quarter);
const result2 = incrementDoubleQuarter(3);
console.log(result2); // 2

const result3 = pipe(increment, double, quarter)(3);
console.log(result3); // 2

/**
 * 🧑‍💻 Create a function `flow` that takes a value and an array of one or more functions.
 *    It returns the result of applying the value to the composed functions (left to right).
 *
 * It should work like this:
 *
 * ```js
 * const increment = (x) => x + 1;
 * const double = (x) => x * 2;
 * const quarter = (x) => x / 4;
 *
 * ```js
 * flow(3, [increment, double, quarter]); // 2
 * ```
 *
 * 💡 HINT: you could implement flow using pipe (or vice versa)
 */

export const flow = null;

// Test your solution with Quokka:

const result4 = flow(3, [increment, double, quarter]);
console.log(result4); // 2
