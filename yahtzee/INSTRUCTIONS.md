# Instructions

Look for the number icons (1️⃣, 2️⃣, etc) in comments in the code. Each number corresponds to an item in the list below. Follow the steps to get to a working Yahtzee game.

Lines that start with "❓" are questions and don't require you to write code. Optionally write your answer in this file.

Lines that start with "🧑‍💻" mean you have to write some code. Take your time to read the instructions and hints (indicated by "💡") and don't hesitate to ask the trainer any questions.

Lines that start with "👀" have a link that shows how the previous 🧑‍💻 code challenge could be implemented.

## Step 1️⃣

Compose the 3 render functions in a functional style.

1. ❓ These render functions return nothing, what happens when you compose them with `pipe` or `flow`? (try it out!)

2. 🧑‍💻 Write a function called `tap` to fix this problem, it's used like this: `tap(renderTableHeader)`.

    💡 Hint: if you can't get `tap` to work, you can also import ramda's [`tap`](https://ramdajs.com/docs/#tap).

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/MYewdgzgLgBFCGAHGBeGAKAZmAlKgfBgB54qEDeAUDDTNuiQNzW0BOAplAK6tgxHMAvoyA).

3. 🧑‍💻 Compose the 3 render functions using either `pipe` or `flow`; use `tap` so that each render function is passed `initialState`. Don't change the render functions themselves.

    💡 Hint: since you're "piping" (or "flowing") a value through functions, both `pipe` and `flow` will do the job. However, one arguably has better readability that the other.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/GYGw9g7gFAlgdjALjAhiAyoliCmAaAAgG0sAHKAJxzgBMcKAVFAIxBwAkcU6KBKQspWo8AwgFcKVOIgAKIFAE96AORQBbHPwKCpPBgAsKkAM4AZHMES8AurwDcQA).

## Step 2️⃣

1. 🧑‍💻 Update the `dice` property in `state` so that each die gets a random `value`. Assign the updated state to `nextState`. *Get it working first*, don't make the code too "pretty", you'll make it more FP-like in the coming steps.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/MYewdgzgLgBGCmAPKBlKBDK8YF4YG8AoGEmAOguk3gBpjSATAS2HgC4YqsznWyBbdAAcAFCICUuAHwwR+GADd0AGwCu7GAFlMACzIAzZSBAAnEdqh6T6MAxD8JMAFQwAbJIDUMAIw0YOkGUGDn0VCGwAX3FxQgiAbkIgA).

2. ❓ Creating `nextState` as above causes a side-effect. Can you identify it?

3. 🧑‍💻 Move the creation of a **single** random die to a new function in effects.js. Call this function in app.js.

    💡 Hint: you may want to move the generation of a random die **value** to its own function as well.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkGMD2A7BAXUmBTADxwGUdwcDQBeUAbyVGdBjd0oIBomWATAJaoCALlAcqMQcJgBbKAAoATuEx90sgCICCASh4BfANwoQoAgDMLBVDgTxkaLLlAq1G7QQBq4ADYBXajoFXVoAPlAAWUoACxgLX3R0JQVonDi3dVkQ0AAqUAA2UIBqUABGEyRiSGS8DGw8TI8dWlAcmgiFelAANz9AsSatHR8AghCuUBj0Xz4xCz8EagNdIA).

4. 🧑‍💻 In app.js, use ramda's [`map`](https://ramdajs.com/docs/#map) and the function from the previous step to create random dice. You use `map` to "transform" each die into a new one with a random value.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkEsC2kD2AnALqAN6jpSgC+oAZjluqAOQ7joAm4DA3CgMZYB2CAvwCmADzwBlPODwjQAXiJJQq0DA1DZIgDQq1rVDxEAuElAAUzfqzoARVLtBa5MQ8YCUe8tyA).

5. 🧑‍💻 Now you're going to make a function that's responsible for updating the `dice` property in `state` when the user clicks the "Roll dice" button. It should accept and return the entire state object. Create this function in effects.js and call it in app.js.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkEsC2kD2AnALqAN6g7gB2AJlugCKoDGApqAL6gBmO1oA5DMI3btG9PAngIeKLGQBKWADYK6TABSqAlKAC8APiJJQR0PRkICZRgA88AZTzg8zbSXJVaDRqvOPGGgNyGxjiMlIw4Kl6WNva+AUFGCIx2Dk6q0SlxgSzxSCCggsKi4ogoGNj4RKDoUKwcXOi8pOgU4FJIpmTmrpTUdIwAauAKAK7OoJo6+gCyjgAWMOwKWLiqs3gLpL3okwBUoABsWgDUoACMgR1mBFvu-ToTWnoTxABuw2MAXD13qIMfXg0ABpQHNFBRvuxhklWLlrBUCJ1urc+p4Ht5Un4pi9QDA8T4nCCKJ5vjVIKoUR5GCCCYwYMSmFocoEgA).

6. The function from the previous step only modifies the `dice` property of the state object. Use ramda's [modify](https://ramdajs.com/docs/#modify) to express that you're updating a property (`dice`) of an object (`state`) using a function (the function from the previous step).

    💡 Hint: `modify` works like this:
    ```js
    const propertyName = 'a';
    const fn = (a) => a + 1;
    const object = { a: 1 };
    modify(propertyName, fn, object) // returns: { a: 2 }
    ```

    💡 Hint: remember that `map` (like nearly all ramda functions) is "auto-curried"; you can pass it only its first argument and it will return a function that has the exact same signature as the 2nd argument of `modify`...

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEFMDNPBjAXAzgOgFaIFAYJYFsAOA9gE7ygDeouAhvgDRWEAm2kAnqAL6iTGG6gA5MWq4m1QVliEAdojIiZTfgBFs4AGrUANgFdwoALygAFAEojAPlABZavAAWySNsIkTdx8kXLc50ABUoABsFgDUoACMANxSsvKgPqrqRqYWhtYmlABuOvoAXInUSsmaeeDmDA6E2kyFkDqIBpxmsRjgAB5EpKDScgrFvmqwBsYm8vbg6da4zKxsJoIsI4IMNPgmSbhqUwwT8FOxQA).

7. ❓ You can make the function of the previous step completely point-free. Would that improve things?

8. 🧑‍💻 Finally, compose the functions in the callback to `onRollDice`. Use either `flow` or `pipe` to transform and render `state`.

    💡 Hint: an [example](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkHsB2AlVAbHARASwGMBTACnIEpQBeAPlGACpQAzHVAd2tFQCdQkQpAo0A5qlIJQAC1L9SoZsCoBuIA) to get you started.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkHsB2AlVAbHARASwGMBTACnIEpQBeAPlADMdUB3chAF3C9IBpQAbQBO4dABNUAWyJlBPSORGlJpEXNJUFUTqS4BlHnyoBdKlQDcQA).

## Step 3️⃣

1. 🧑‍💻 Now you're going to sort the random dice. This makes it a bit easier to see which values are thrown. Remember exercise 07? Use that composition to sort the random dice in effects.js.

    💡 Hint: change how you use `modify` so that you're composing "the creation of random dice" followed by "the sorting of dice".

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEFMDNPBjAXAzgOgFaIFAYJYFsAOA9gE7ygDeoAhorOAHYAmANKLlfq7oY9pAJ6t82fOCHFCnUIhJkAvqEgTcoAOTEquRlVVZYheojIamhXABFs4AGpUANgFdwoALygAFAEpXAPlABZKngAC2RIO0ISd0CQ5BNGMy9QACpQADZvAGpQAEYAbj0DI1B4s0tnNySXP3dKADd7JwAuEqpTCytbR3AvVmDCO0YWyHtEZzlPAoxwAA8iUlB9Q2M2hI66Vw8jIPBvarYePn53VV46VSERHvZ8d1KO3dYZUncaOiZ3fAlb1Qbu1U8gM8T3gO0mGCAA).

2. 🧑‍💻 A die's value should only be randomized unless it's `hold` property is `true`. Update de code in effects.js to make it work.

    💡 Hint: use ramda's [unless](https://ramdajs.com/docs/#unless) for bonus points.

    💡 Hint: when you got it working you may want to refactor a little bit. Extracting self-contained functionality to new functions and/or renaming functions.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEFMDNPBjAXAzgOgFaIFAYJYFsAOA9gE7ygDeoAhorOAHYAmANKLlfq7oY9pAJ6t82fOCHFCnUIhLxWAV3oAbcIkSgAvqEgTcoAOTEquRlX0BuLLEL1EZI00K4AItnAA1KkvnhQAXlAACgBKfwA+UABZKngAC2RIJUISQOi45AdGJxDQACpQADZQgGpQAEZLDGtbeypHF2w6AFVlVUQACXAlRn8g3jpQvzCMUDYOQJHR0EUVNUD8CXxA-VjCbv1g1hyhoMoANy8fAC5QTKdXD0PwENZV7pPIL0RfDWDNydH+sUngypBQAByhHgvjiMVAcWw6kgigQ2BsoChpwYxnAjAw4AAHkRSKBqnZpvhTCDXHRPN5VL1AnYYuBBsNRtxeAJll99EIRNczg1mq01J1uqwZKRAjQ6Ex5otlgcKRs3ptpPBab8MEA) (including refactoring).

3. 🧑‍💻 Next you're going to decrement the `throwsLeft` property of `state` after the dice are thrown. Find the `decrementThrowsLeft` function in calculations.js and update it so it does what it should do. Call the function in app.js, also make sure `renderThrowsLeft` and `renderPossibleScores` are called.

    💡 Hint: ramda has a [function for everything](https://ramdajs.com/docs/), find the one that does the decrementing.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkHsB2AlVAbHARASwGMBTACnIEpQBeAPlADMdUB3chAF3C9IBpQAbQBO4dABNUAWyJlBE0sRGlppdFwAqACxHsEAGVJMugnpHIrJpEXNJUzUS+sUidetoeNcHoc51IuAGUePioAXSoqAG4UEFBicBxiAFccXkIMBHhkJEJpSFQRLlAAb1BFYkFpVAlCJgBPUABfZj1pUAByMWkJcE6UUgAPQuKErJLKlTUNd30jEzpQTlD7OkYausbyTq5dee9OhSVBbl57aKA).

## Step 4️⃣

1. 🧑‍💻 When the user clicks on a die, the die's `hold` property should toggle. `updateHeldDie` in calculations.js is responsible for toggling the `hold` property of a single die in `state`. Use ramda's [`modifyPath`](https://ramdajs.com/docs/#modifyPath) to update a deeply nested part of `state`. The first argument of `modifyPath` is an array that describes a "path" towards this deeply nested property.

    💡 Hint: ramda also has a function that negates its argument. Use this to toggle the `hold` property.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEGMEMBtwV2pALgSwPYDsDOA6AVlgFCEoC2ADmgE5KgDeopaAJigGYCeACsgBYA0oDGloBfUGyppSoAORVIpZpFkBuYgFMAHpRoRMWWnHLKkGgBIbozACIoNoALygAFKw0BJDM20BKJwB8jCzs3HwuANqyrOAasoLuXj5agrK8aNayALqCwki+qkA).

2. 🧑‍💻 In app.js `onDieClick` is used to handle click events on dice. Compose `updateHeldDie`, `renderDice` and `setState` in a similar way as you did in the `onRollDice` callback. For now, pass `4` to `updateHeldDie`. You'll pass the actual die index in the next step.

    💡 Hint: you've successfully completed this step when you click a die and always see the last die being held/released.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkHsB2ARAlgUwMIA22AxgNYAUFAlKALwB8oAZoagO4UIAu43uAGlABtAK6QAJn1wAJXIQk5cFACzUhvSBQBOudBNzacJXOtCauubgGVe-agF1q1ANxA).

3. 🧑‍💻 The callback of `onDieClick` is called with a click event. The die's index can be retrieved from `event.target.name` (it's the `name` of a checkbox). But the value is a string and `updateHeldDie` expects a number. Update the code in app.js so that the clicked die's index is passed *as a number* to `updateHeldDie`.

    💡 Hint: use ramda's [`path`](https://ramdajs.com/docs/#path). Also, optionally use `parseInt` from `src/lib/utils.js`.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkHsB2ARAlgUwMIA22AxgNYAUSoNok2kuFk4ALgBYUDaA5K+ACcA5rlY8ANKB7pwAW1w8AugEpJLAQlwBJdK0kUAJnh0HcAD2WgAvAD5qtBwDNCqAO4UE-VrklcArpAGbLgAEriEBjhMRtrophaS-JAUArhxuAI4JLiqoEkeogDKXjkq4vY0qkjKANxIQA).
