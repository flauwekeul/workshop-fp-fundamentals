/**
 * Simplify the body of this function as much as possible (in this case: less code is better), without changing its behavior.
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const addOneToAll = (numbers = []) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const oneAdded = add1(currentNumber);

    result.push(oneAdded);
  }

  return result;
};

// 👆👆👆 Only change code ABOVE 👆👆👆

export function add1(n) {
  return n + 1;
}

/**
 * Simplify the body of this function as much as possible (in this case: less code is better), without changing its behavior.
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const getServerStuff = (callback) => fetchJSON((json) => callback(json));

// 👆👆👆 Only change code ABOVE 👆👆👆

export function fetchJSON(callback) {
  const json = {};
  callback(json);
}
