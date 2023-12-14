/**
 * Make this function pure.
 *
 * Will be called like this: `updateProp({ a: 1 }, 'a', 2)`
 *
 * @param {Record<string, unknown>} object
 * @param {string} propName
 * @param {unknown} value
 * @returns Record<string, unknown>
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const updateProp = (object, propName, value) => {
  object[propName] = value;
  return object;
};

// 👆👆👆 Only change code ABOVE 👆👆👆

/**
 * Make this function pure.
 *
 * Will be called like this: `logInfo(log)`
 *                                    ^^^ notice the argument here
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const logInfo = () => {
  log('Just a harmless message.');
};

// 👆👆👆 Only change code ABOVE 👆👆👆

// eslint-disable-next-line no-unused-vars
function log(message) {
  global.launchNuclearMissiles();
  console.log(message);
}

/**
 * Make this function pure.
 *
 * The solution to this one might be unexpected.
 * Will be called like this: `now()`
 */

// 👇👇👇 Only change code BELOW 👇👇👇

export const now = () => new Date().toLocaleTimeString();

// 👆👆👆 Only change code ABOVE 👆👆👆
