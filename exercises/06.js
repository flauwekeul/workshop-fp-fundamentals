/**
 * 🧑‍💻 Create a curried version of Array's `map`:
 *
 * ```js
 * const array = [1, 2, 3];
 * const double = (x) => x * 2;
 *
 * const doubleAll = map(double);
 * doubleAll(array); // [2, 4, 6]
 * ```
 *
 * 💡 HINT: it's fine to use Array's `map` in the function body.
 */

export const map = null;

// Test your solution with Quokka:

const array = [1, 2, 3];
const double = (x) => x * 2;

const doubleAll = map(double);
const result1 = doubleAll(array);
console.log(result1);

/**
 * Use your `map` function on an array of string numbers and the global js `parseInt` function.
 * The goal is to parse each string into a number.
 *
 * ❓ Why doesn't it work when passing `parseInt` directly?
 *
 * 💡 HINT: you may want to look up the documentation of `parseInt`.
 */

const numberStrings = ['1', '2', '3'];

// Replace the null below with a call to map passing `parseInt` and `numberStrings`:
const result2 = map(parseInt)(numberStrings);
console.log(result2);

/**
 * 🧑‍💻 Parse the array of string numbers by wrapping `parseInt` in a function called `unary`.
 *    Implement that function `unary`.
 */

export const unary = null;

const result3 = map(unary(parseInt))(numberStrings);
console.log(result3);

/**
 * 🧑‍💻 Now also double each number (using the `double` function above).
 *    Compose `map`, `unary`, `parseInt` and `double`.
 *
 * 💡 HINT: Make it more readable by using `pipe` and `flow` and/or extracting
 *    functionality to new functions. Experiment until you've found a good balance
 *    between indirection and readability.
 */

export const parseAndDoubleAll = null;

const result4 = parseAndDoubleAll(numberStrings);
console.log(result4);
