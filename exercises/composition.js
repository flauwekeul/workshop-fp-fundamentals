/**
 * Implement the pipe utility function that accepts any number of functions and returns a function that accepts a single value.
 *
 * Tip: use the built-in Array reduce() function.
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const pipe = null;

// 👆👆👆 Only change code ABOVE 👆👆👆

const compute = pipe(add(1), double, subtract(3));

export const shouldBe19 = compute(10);

function add(a) {
  return (b) => a + b;
}

function double(a) {
  return a * 2;
}

function subtract(a) {
  return (b) => a - b;
}
