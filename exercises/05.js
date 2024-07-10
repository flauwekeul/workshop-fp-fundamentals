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
 * 💡 Hint: start with the function signature. What arguments does it accept?
 *    Does it return a function and if so, what arguments does that accept?
 *
 * 🥈 BONUS: try implementing it with an Array method.
 * 🥇 SUPER BONUS: try implementing it using recursion.
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const pipe = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

const increment = (x) => x + 1;
const double = (x) => x * 2;
const quarter = (x) => x / 4;

// Test your solution with Quokka:

const result2 = pipe(increment, double, quarter)(3);
console.log(result2); // 2

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
 * 💡 Hint: you could implement flow using pipe (or vice versa).
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const flow = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

// Test your solution with Quokka:

const result3 = flow(3, [increment, double, quarter]);
console.log(result3); // 2
