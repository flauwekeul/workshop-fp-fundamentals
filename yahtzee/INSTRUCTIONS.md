# Instructions

Look for the number icons (1️⃣, 2️⃣, etc) in comments in the code. Each number corresponds to an item in the list below. Follow the steps to get to a working Yahtzee game.

Lines that start with "❓" are questions and don't require you to write code. Optionally write your answer in this file.

Lines that start with "🧑‍💻" mean you have to write some code. Take your time to read the instructions and hints (indicated by "💡") and don't hesitate to ask the trainer any questions.

Lines that start with "👀" have a link that shows how the previous 🧑‍💻 code challenge could be implemented.

## 1️⃣ Initial render 🎨

### Requirements

Compose the 3 render functions in a functional style (todo: maybe skip this or make it a bonus as it doesn't really improve the code?).

### Implementation

1. ❓ If you need to use either `pipe` or `flow` to call them, which one would you use?
2. ❓ These render functions return nothing, what happens when you compose them with `pipe` or `flow`? (try it out!)

3. 🧑‍💻 Write a function called `tap` to fix this problem, it's used like this: `tap(renderTableHeader)`.

    💡 Hint: if you can't get `tap` to work, you can also import ramda's [`tap`](https://ramdajs.com/docs/#tap).

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/MYewdgzgLgBFCGAHGBeGAKAZmAlKgfBgB54qEDeAUDDTNuiQNzW0BOAplAK6tgxHMAvoyA).

4. 🧑‍💻 Compose the 3 render functions using either `pipe` or `flow`; use `tap` so that each render function is passed `initialState`. Don't change the render functions themselves.

    💡 Hint: since you're "piping" (or "flowing") a value through functions, both `pipe` and `flow` will do the job. However, one results in improved readability over to other.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/GYGw9g7gFAlgdjALjAhiAyoliCmAaAAgG0sAHKAJxzgBMcKAVFAIxBwAkcU6KBKQspWo8AwgFcKVOIgAKIFAE96AORQBbHPwKCpPBgAsKkAM4AZHMES8AurwDcQA).

## 2️⃣ Roll dice 🎲

### Requirements

todo: split work vertically: first roll dice, then sort them, then hold some.

When the "Roll dice" button is pressed the state is updated as follows:

1. Each die in `dice` gets a random `value` (between 1 and 6) *unless* the die is held (`hold: true`). When the die is held, the die's `value` doesn't change.
2. `dice` is sorted by `value` ascending (low to high).
3. `throwsLeft` is decremented by 1.

### Implementation

1. 🧑‍💻 Implement the above requirements by copying `state`, updating the required properties and assigning it to `nextState`. Initially forget FP for a moment, *get it working first*. Check data.js to see what the state looks like.

    💡 Hint: holding a die doesn't work yet, but you can test it by temporarily setting `hold: true` for a die in data.js.

    💡 Hint: `Array.prototype.sort` isn't pure, but there's a new Array method that is...

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/MYewdgzgLgBGCmAPKBlKBDK8YF4YG8AoGEmAOguk3gBpjSATAS2HgC4YqsznX7TSZALboADgApxzeAEpcAPhhSm8MgAsQAGwYwA-DGkwO+GADd0mgK7sYAWUxqyAM00gQAJ3H2oj9+jAMIELicgBUMABscgDUMACMNDAa2hxOFhDYAL4yMvwC5FAgKB5YDJLoiQBGcjiK6GTmVtgAtDCVDRbWMnQCPu4gAO4QADLwTlAcXKp9gyNjsK0JhJkA3IRAA).

2. ❓ Click the "Roll dice" button a couple of times. Did you implement all the requirements?
3. ❓ Creating `nextState` as above causes a side-effect. Can you identify it?
4. ❓ The creation of `nextState` requires about 5 distinct operations. Describe each in 1 or 2 words below:

    1.
    2.
    3.
    4.
    5.

Next you're going to refactor the code you just wrote to make it more FP-style.

5. 🧑‍💻 Extract the first requirement (see "Requirements" above) from the code you just wrote. Do this by moving the relevant code to a new function in effects.js. This function should accept and return a single die. Call this function from app.js.

    💡 Hint: you can always spread the functionality over multiple functions.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/MYewdgzgLgBATgQzAExAWwCIEsCmA1BAGwFccYBeGACgEoKA+GAWQSgAsA6AM0JBDiot2HRCnS0YAKhgA2OgGoYARgDcAKDU4AHgAd+sUJFijUaAKpg2OQsmxlKVZLjrlGj3BzYgbMAPwwnMgAuGABvGAA3IlIQk3Q7AhIcWgAaGC8bEK4iCDIAXxogA).

6. 🧑‍💻 **BONUS**: update the previous function and replace any [property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) and [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) with a function.

    💡 Hint: use ramda's [`prop`](https://ramdajs.com/docs/#prop) and [`when`](https://ramdajs.com/docs/#when) or [`unless`](https://ramdajs.com/docs/#unless) functions.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/JYWwDg9gTgLgBAbzgVwHYBsCmBnbAaOMKCMOAXzgDNiQ4ByKAQxABNG6BuAKC4GMJU2eE1QsIIACLBMANUbpkmOAF44ACgCUKgHxwAsoxgALAHSV0EaGoPGTIsSE1wAVHABsWgNRwAjNy6YAB6QsHD8gsKMouIAqqhGmOgsUkqqaizSWsq6aFi4akQkanRGEEl0GgRO2epIAG7yigBccPbiKXIKmJoEpUktlPLYSmSVcBmYGhxAA).

7. 🧑‍💻 In app.js, combine ramda's [`map`](https://ramdajs.com/docs/#map) and the function from the previous step.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/JYWwDg9gTgLgBAbziAhmOBfOAzKERwDkUKIAJioQFCiSyJwkB2Z+AqkwBYCmANmQBFg3TDjwFCAOgD03bNm4BjGAGdJAKxXUqiiExXwm3AB4wAyjBQwRAXkRU4juJJcGr3ADQOnZYIu4AXMhoABTMrCAcPPxCnnBu1pK+-gCUkjAQZtDWZCEhKB5wAEYpcDYAfHAokgBuKLwAriIAtMW19U0pXk5wMJx4AO4qADJyMEEJ3On9EEOj2PCtAIxeGADcQA).

8. 🧑‍💻 In app.js, use ramda's [`sort`](https://ramdajs.com/docs/#sort) to sort the dice. Also use either `pipe` or `flow` to compose the mapping and sorting of dice.

    💡 Hint: remember the exercise to compose `sort`, `ascend` and `prop`?

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/JYWwDg9gTgLgBAbzgQwM4GMCmA7AJgGjgDMAbCAd0JGTELCglrlWngF9iGQ4ByKZELmQ8AUKEixEcfngggAqtgAWmErgAiwTHA5EuvAHQB6TESKZ0MVAYBWqUSPQRsqeNkwAPGAGUYyGNoAvIgicGFwBpGu-pj4oeG4wFgAXMRk5AAU0QEGiViEANrUYBkyuHKKKmqamACUhCywGWhYeBn0jBk8AG7IJACumDy1IwC69fFhMEoM5KgAMqYwqdmYBtOzC0twALRwAIxxbADcQA).

9. 🧑‍💻 Move the composition of mapping and sorting dice from the previous step to a new function in effects.js. Make the function accept and return the entire state object. Then use ramda's [modify](https://ramdajs.com/docs/#modify) to update the `dice` property of `state`. Call the function in app.js.

    💡 Hint: `modify` works like this:
    ```js
    const propertyName = 'a';
    const modifierFn = (a) => a + 1; // or multiple composed functions…
    const object = { a: 1 };
    modify(propertyName, modifierFn, object) // returns: { a: 2 }
    ```

    💡 Hint: it may be a matter of taste, but this might be a good time to use `pipe` instead of `flow`.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkEsC2kD2AnALqAN6gCukAJuHgKYAiqAxtQGrgA2J1CoAvqAGY4s6UAHIYwav37UGeBPASiUDLADsEBNdQAeeAMp4q1UAF4iSUFdAxbm4wBpL12zDKUa9Jqw5cAFPY0AJRO1qB4ABZCAO4IADJSeABcoIHUMJEx8YmgALSgAIxOPADcKCCgUjJyCogoGNj4RBAITGrkDqDoUJ3oWOSo-ACenZCokNSjQpCdCLh4nSRqbFzcfILCYjjg6JSiZUiqGgTb7cL0LOycZqB+QWYAfKAAslQRMPxsWLh+r5Ewp3IwjuoAAVKAAGz3ADUhQOR00oEBwgAqmoItQ2OQLjc-ANqPdTE8lisEAg-JBpn5RBEsFjRCFboSnn5iAA3K7UFLI9AXHycO6dWlYlL8dgIEw8Rn4oIHXSNAgIgjuYxeS6+bjmAJGYKPZx9AbDakDJiiUbjah+bqQPw8tEYrEXRlzfB+cCtajtClU0Qc3wMoKB2Y6gllIA).

10. ❓ Why should the function from the previous step accept the entire state object?

11. 🧑‍💻 Similar to the previous step: move the decrementing of `throwsLeft` to a function that accepts and returns state. The function should use ramda's [modify](https://ramdajs.com/docs/#modify) and [dec](https://ramdajs.com/docs/#dec). Should this function be placed in effects.js or calculations.js?

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PTAEEMAdIOgKwM4CgkEsC2kD2AnALqAN6gCukAJuHgKYAiqAxtQGrgA2J1CoAvqAGY4s6UAHIYwav37UGeBPASi0mXAWLlZOaumoA7PABUAFkIDuCADJSCfQcLESG7BiTZVUWPQsTKkDLwQCPWoADzwAZTwqalAAXiIkUGTQGDSgmIAaJJS0mDJKGnomVg4uAAoMmgBKbJTUtM0GbV0DE3MrG0romuyeAG4UEFBnNld3PE9vRRQMbHwiUCbM0HQsclR+AE9eASERURxwdEpRQaQw+YIA7wImlv0jUywLa34CBO6Y6viAPlX1pstuVRHhnq8bKIVstQFVqNV+kA).

12. 🧑‍💻 The final step to make rolling the dice in an FP-style. In app.js, rewrite the function that's passed to `onRollDice` to contain a single composition that calls all the functions it currently does. In other words: replace the individual function calls with a single `pipe` or `flow` that "threads" `state` through all those functions.

    👀 [Solution](https://www.typescriptlang.org/play/?strict=false&noImplicitAny=false&target=9&filetype=js#code/PYOwSsA2kCIJYGMCmAKFBKABAXgHwChMjMAzSYAdxQGcAXAQ1qQBpMBtQ4rgVwAcATRknjIAavUjck1Zpy5F+SBACckAWyQhaAFQAWyytQAySErVnziDXilUhFykUnQXLma7c0O9BisdO0LnLyHtRItADKDExBXAC6QegA3EA).
