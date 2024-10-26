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

export const getServerStuff = (callback) => fetchJSON((json) => callback(json));

// Test your solution with Quokka:

getServerStuff((json) => {
  console.log(json); // { data: true }
});

// 👆👆👆 Only change code ABOVE 👆👆👆

export function fetchJSON(callback) {
  const json = { data: true };
  callback(json);
}
