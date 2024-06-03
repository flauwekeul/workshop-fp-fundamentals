/**
 * 🧑‍💻 Create a function `compose` that takes one or more functions and composes them.
 *    It should return a function that takes a value and applies it to the composed functions.
 *
 * It should work like this:
 *
 * ```js
 * const increment = (x) => x + 1;
 * const double = (x) => x * 2;
 * const quarter = (x) => x / 4;
 *
 * const incrementDoubleQuarter = compose(quarter, double, increment);
 * incrementDoubleQuarter(3); // 2
 * ```
 *
 * Or:
 *
 * ```js
 * compose(quarter, double, increment)(3); // 2
 * ```
 *
 * 💡 HINT: start with the function signature. What arguments does it accept?
 *    Does it return a function and if so, what arguments does that accept?
 *
 * 🥈 BONUS: try implementing it with an Array method.
 * 🥇 SUPER BONUS: try implementing it using recursion.
 */

export const compose = null;

// Test your solution with Quokka:

const increment = (x) => x + 1;
const double = (x) => x * 2;
const quarter = (x) => x / 4;

// Composing without compose:
const result1 = quarter(double(increment(3)));
console.log(result1); // 2

const incrementDoubleQuarter = compose(quarter, double, increment);
const result2 = incrementDoubleQuarter(3);
console.log(result2); // 2

const result3 = compose(quarter, double, increment)(3);
console.log(result3); // 2
