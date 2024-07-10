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

export const flip = null;

// Test your solution with Quokka:

const subtract = (a, b) => a - b;
const flippedSubtract = flip(subtract);

const result1 = subtract(3, 4);
const result2 = flippedSubtract(3, 4);
console.log(result1); // -1
console.log(result2); // 1

Array.of(1, 2, 3); // [1, 2, 3]
const result3 = flip(Array.of)(1, 2, 3);
console.log(result3); // [2, 1, 3]
