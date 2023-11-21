// Simplify the bodies of these functions as much as possible (in this case: less code is better), without changing their behavior.

// 👇👇👇 Only change code BELOW 👇👇👇

const addOneToAll = (numbers = []) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const oneAdded = add1(currentNumber);
    result.push(oneAdded);
  }
  return result;
};

const getServerStuff = (callback) => fetchJSON((json) => callback(json));

// 👆👆👆 Only change code ABOVE 👆👆👆

export function add1(x) {
  return x + 1;
}

export function fetchJSON(callback) {
  const json = {};
  callback(json);
}

export const addOneToAllSolution = addOneToAll;

export const getServerStuffSolution = getServerStuff;
