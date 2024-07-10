import { flow, pipe } from 'ramda';

/**
 * You're going to experiment with pipe and flow in three different scenarios:
 * - transforming a value in-place
 * - transforming a value that's passed to a callback
 * - transforming a value using a function
 *
 * 👉 The focus of this exercise is to compare the readability of pipe and flow.
 */

/**
 * 🧑‍💻 Compose the functions increment, double and quarter (in that order) to "transform"
 *    the value 3 to the value 2. Use pipe and flow. Which one produces the most
 *    readable code?
 *
 * 💡 Hint: pipeResult should get the value 2 by using the pipe function,
 *    flowResult should get the value 2 by using the flow function.
 */

const increment = (x) => x + 1;
const double = (x) => x * 2;
const quarter = (x) => x / 4;

// Composing "manually":
const result1 = quarter(double(increment(3)));
console.log(result1); // 2

// 👇👇👇 Only change code BELOW 👇👇👇

export const pipeResult = null;
export const flowResult = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

// Test your solution with Quokka:

console.log(pipeResult); // 2
console.log(flowResult); // 2

/**
 * 🧑‍💻 Same idea as the previous exercise, but now the input value 3 is supplied by a
 *    callback. Which version now produces the most readable code?
 *
 * ```js
 * callWith3(three => {
 *   // compose increment, double and quarter
 * });
 * ```
 *
 * 💡 Hint: as with the previous exercise, the exported variables below should all get the
 *    value 2 by using the pipe and flow functions.
 *
 * 💡 Hint: try to use as few lambdas as possible.
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const pipeCallbackResult = callWith3();
export const flowCallbackResult = callWith3();

// 👆👆👆 Only change code ABOVE 👆👆👆

function callWith3(callback = () => null) {
  return callback(3);
}

// Test your solution with Quokka:

console.log(pipeCallbackResult); // 2
console.log(flowCallbackResult); // 2

/**
 * 🧑‍💻 Now write a function that will be called with 3 and uses pipe in its body.
 *    Duplicate this function, but use flow in its body. Which one is more readable?
 *
 * ```js
 * pipeFn(3); // 2
 * flowFn(3); // 2
 * ```
 *
 * 💡 Hint: as with the previous exercise, the exported variables below should all get the
 *    value 2 by using the pipe and flow functions.
 *
 * 💡 Hint: try to use as few lambdas as possible.
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const pipeFn = (three) => null;
export const flowFn = (three) => null;

// 👆👆👆 Only change code ABOVE 👆👆👆

// Test your solution with Quokka:

console.log(pipeFn(3)); // 2
console.log(flowFn(3)); // 2
