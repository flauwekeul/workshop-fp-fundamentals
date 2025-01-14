/**
 * 🧑‍💻 Simplify the body of `getServerStuff` as much as possible (in this case: less code is better),
 *    without changing its behavior.
 *
 * It's used like so:
 *
 * ```js
 * getServerStuff((json) => {
 *   console.log(json); // { data: true }
 * });
 * ```
 *
 * 💡 Hint: instead of passing a lambda that calls a function,
 *    you can often replace the lambda with the function its calling.
 */

// 👇👇👇 Only change code BELOW 👇👇👇

const getServerStuff = (callback) => fetchJSON((json) => callback(json));

// Try it with Quokka:

getServerStuff((json) => {
  console.log(json); // { data: true }
});

// 👆👆👆 Only change code ABOVE 👆👆👆

function fetchJSON(callback) {
  const json = { data: true };
  callback(json);
}

// Tests:

if (import.meta.vitest) {
  describe('getServerStuff', () => {
    test('calls the callback', () => {
      const callback = vi.fn();
      getServerStuff(callback);

      expect(callback).toBeCalledWith({ data: true });
    });
  });
}
