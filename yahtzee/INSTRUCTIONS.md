# Instructions

Look for the number icons (1️⃣, 2️⃣, etc) in comments in the code. Each number corresponds to an item in the list below. Follow the steps to finish the game.

## 1️⃣ Initial render 🎨

These 3 render functions are all called with `initialState`.

❓ If you need to use either `pipe` or `flow` to call them, which one would you use?
❓ These render functions return nothing, what happens when you compose them with `pipe` or `flow`? (try it out!)

🧑‍💻 Write a function called `tap` to fix this problem, it's used like this: `tap(renderTableHeader)`. You can also import [ramda's `tap`](https://ramdajs.com/docs/#tap).
🧑‍💻 Compose the 3 render functions using either `pipe` or `flow`; use `tap` so that each render function is passed `initialState`. Don't change the render functions themselves.

## 2️⃣ Roll dice 🎲

Initially forget FP for a moment, **get it working first**.

Create `nextState` from `initialState` by updating its `dice` and `throwsLeft` properties (don't mutate `initialState`, make a new object):
🧑‍💻 To update `dice`:
  * For each die: when `hold === true`, keep the die as-is, else set its `value` to a random number between 1 and 6.
  * Sort all dice by `value` ascending (low to high).
🧑‍💻 To update `throwsLeft`: decrement by 1.

❓ Click the "Roll dice" button a couple of times. Do you get random dice values from low to high each time? Does "Throws left" count down to 0?
