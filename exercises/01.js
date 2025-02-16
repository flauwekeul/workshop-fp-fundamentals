/**
 * 🧑‍💻 Create a function `add` that can be called like so:
 *
 * ```js
 * const addThreeTo = add(3)
 * addThreeTo(4) // 7
 * ```
 *
 * Or:
 *
 * ```js
 * add(3)(4) // 7
 * ```
 */

const add = null;

// Try it with Quokka:

const addThreeTo = add(3);
const result1 = addThreeTo(4);
console.log(result1); // 7

const result2 = add(3)(4);
console.log(result2); // 7

// Tests:

if (import.meta.vitest) {
  describe('add', () => {
    test('returns the sum of two numbers', () => {
      expect(add(3)(4)).toBe(7);
    });
  });
}
