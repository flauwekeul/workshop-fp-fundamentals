// ⛔️ No need to make changes in this file

export const parseInt = (value) => Number.parseInt(value, 10);

export const randomInt = (min = 0, max = min + 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
