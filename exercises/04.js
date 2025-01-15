import { flow, pipe } from 'ramda';

/**
 * You're going to experiment with pipe and flow in three different scenarios:
 * - transforming a value in-place (in the global scope)
 * - transforming a value that's passed to a callback
 * - transforming a value in a function body
 *
 * 👉 The focus of this exercise is to compare the readability of pipe and flow.
 *
 * pipe and flow are called like so:
 *
 * ```js
 * pipe(fn1, fn2, fn3)(someValue);
 *
 * flow(someValue, [fn1, fn2, fn3]);
 *
 * // "manual" equivalent:
 * fn3(fn2(fn1(someValue)));
 * ```
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

const pipeResult = null;
const flowResult = null;

// Try it with Quokka:

console.log(pipeResult); // 2
console.log(flowResult); // 2

// 👆👆👆 Only change code ABOVE 👆👆👆

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

const pipeCallbackResult = callWith3();
const flowCallbackResult = callWith3();

// Try it with Quokka:

console.log(pipeCallbackResult); // 2
console.log(flowCallbackResult); // 2

// 👆👆👆 Only change code ABOVE 👆👆👆

function callWith3(callback = () => null) {
  return callback(3);
}

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

const pipeFn = (three) => null;
const flowFn = (three) => null;

// Try it with Quokka:

console.log(pipeFn(3)); // 2
console.log(flowFn(3)); // 2

// Tests:

if (import.meta.vitest) {
  describe('transforming in-place', () => {
    test('transforms 3 into 2', () => {
      expect(pipeResult).toBe(2);
      expect(flowResult).toBe(2);
    });
  });

  describe('transforming with a callback', () => {
    test('transforms 3 into 2', () => {
      expect(pipeCallbackResult).toBe(2);
      expect(flowCallbackResult).toBe(2);
    });
  });

  describe('transforming in a function', () => {
    test('transforms 3 into 2', () => {
      expect(pipeFn(3)).toBe(2);
      expect(flowFn(3)).toBe(2);
    });
  });
}
