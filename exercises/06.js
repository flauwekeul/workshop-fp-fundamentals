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
 * 💡 Hint: it's fine to use Array's `map` in the function body.
 *
 * 💡 Hint: make sure you don't use any unnecessary wrapper functions:
 *    Instead of this: `fnA((x) => fnB(x))`, do this: `fnA(fnB)`
 *    If you do, the next step in this exercise doesn't make sense 🙈
 */

export const map = null;

// Try it with Quokka:

const array = [1, 2, 3];
const double = (x) => x * 2;

const doubleAll = map(double);
const result1 = doubleAll(array);
console.log(result1);

/**
 * 🧑‍💻 Use your `map` function on an array of string numbers and the global js `parseInt` function.
 *    The goal is to parse each string into a number.
 *
 * ❓ Why doesn't it work when passing `parseInt` directly?
 *
 * 💡 Hint: you may want to look up the documentation of `parseInt`:
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 */

const numberStrings = ['1', '2', '3'];

// Replace the null below with a call to `map` passing `parseInt` and `numberStrings`:
const result2 = null;
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
 * 💡 Hint: Make it more readable by using `pipe` and/or `flow` and/or extracting
 *    functionality to new functions. Experiment until you've found a good balance
 *    between indirection and readability.
 */

export const parseAndDoubleAll = null;

const result4 = parseAndDoubleAll(numberStrings);
console.log(result4);

// Tests:

if (import.meta.vitest) {
  describe('map', () => {
    test('accepts a function and array and applies the function to each item in the array', () => {
      const double = vi.fn((x) => x * 2);

      const result = map(double)([1, 2, 3]);

      expect(result).toEqual([2, 4, 6]);
      expect(double).toBeCalledTimes(3);
    });
  });

  describe('unary', () => {
    test('takes a function and a value and calls the function with the value', () => {
      const fn = vi.fn((a, b) => [a, b]);

      const result = unary(fn)(1);

      expect(result).toEqual([1, undefined]);
      expect(fn).toBeCalledWith(1);
    });
  });

  describe('parseAndDoubleAll', () => {
    test('parses an array of strings to an array of numbers and doubles each number', () => {
      const result = parseAndDoubleAll(['1', '2', '3']);

      expect(result).toEqual([2, 4, 6]);
    });
  });
}
