// Make these functions pure

// 👇👇👇 Only change code BELOW 👇👇👇

// Will be called like this: `updateProp({ a: 1 }, 'a', 2)`
const updateProp = (object, propName, value) => {
  object[propName] = value;
  return object;
};

// Will be called like this: `logInfo(log)`
//                                    ^^^ notice the argument here
const logInfo = () => {
  log('Just a harmless message.');
};

// The solution to this one might be unexpected
// Will be called like this: `now()`
const now = () => new Date().toLocaleTimeString();

// 👆👆👆 Only change code ABOVE 👆👆👆

// eslint-disable-next-line no-unused-vars
function log(message) {
  global.launchNuclearMissiles();
  console.log(message);
}

export const updatePropSolution = updateProp;

export const logInfoSolution = logInfo;

export const nowSolution = now;
