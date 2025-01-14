/**
 * 🧑‍💻 Create a function called `flip` that takes a function as an argument and
 *    returns a new function that takes the same arguments as the original function,
 *    but the first two arguments are flipped (or swapped).
 *
 * ```js
 * const subtract = (a, b) => a - b;
 * const flippedSubtract = flip(subtract);
 *
 * subtract(3, 4); // -1
 * flippedSubtract(3, 4); // 1
 * ```
 *
 * It only flips the first two arguments:
 *
 * ```js
 * Array.of(1, 2, 3); // [1, 2, 3]
 * flip(Array.of)(1, 2, 3); // [2, 1, 3]
 *
 * 💡 Hint: start with the function signature. What arguments does it accept?
 *    Does it return a function and if so, what arguments does that accept?
 *
 * 💡 Hint: to get the tests to pass, make the function work when called with
 *    1 argument, 2 arguments and more than 2 arguments.
 */

const flip = null;

// Try it with Quokka:

const subtract = (a, b) => a - b;
const flippedSubtract = flip(subtract);

const result1 = subtract(3, 4);
const result2 = flippedSubtract(3, 4);
console.log(result1); // -1
console.log(result2); // 1

Array.of(1, 2, 3); // [1, 2, 3]
const result3 = flip(Array.of)(1, 2, 3);
console.log(result3); // [2, 1, 3]

// Tests:

if (import.meta.vitest) {
  describe('flip', () => {
    test('flips the first two arguments of a function', () => {
      const subtract = (a, b) => a - b;
      const flippedSubtract = flip(subtract);

      expect(subtract(3, 4)).toBe(-1);
      expect(flippedSubtract(3, 4)).toBe(1);
    });

    test('only flips the first two arguments', () => {
      expect(Array.of(1, 2, 3)).toEqual([1, 2, 3]);
      expect(flip(Array.of)(1, 2, 3)).toEqual([2, 1, 3]);
    });

    test('also works with less than two arguments', () => {
      const negate = (a) => -a;
      const flippedNegate = flip(negate);

      expect(negate(3)).toBe(-3);
      expect(flippedNegate(3)).toBe(-3);
    });
  });
}
