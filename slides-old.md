---
theme: seriph
lineNumbers: true
layout: cover
background: 'https://source.unsplash.com/milky-way-galaxy-wallpaper-fUnfEz3VLv4/1600x900'
title: Functional Programming Fundamentals
transition: slide-left
---

# Functional Programming Fundamentals

---
layout: center
---

<div class="text-center">
  <img src="/avatar.svg" alt="Abbe Keultjes" class="h-24 mx-auto mb-5 font-sans" />
  <h1 class="!text-8xl mb-5">Abbe Keultjes</h1>

  <img src="/logos/io-logo.svg" alt="iO" class="h-36 mx-auto mb-5" />

  <img src="/logos/logo-github.svg" alt="flauwekeul@github" class="inline-block h-7 mr-2" />
  <a href="https://github.com/flauwekeul">github.com/flauwekeul</a>
  <br>
  <span class="text-4xl mr-1 align-middle">@</span>
  <a href="mailto:abbe.keultjes@iodigital.com">abbe.keultjes@iodigital.com</a>
</div>

<!--
* Didn't study IT, self-taught
* 15 years experience
* OOP background
* FP experts mean well, but they often use too much jargon or make it seem too easy
-->

---
layout: center
---

## What is functional programming (FP)?

<div v-click="[1, 2]" class="fixed top-[18vh] left-0 w-full text-[18vh] text-center text-fuchsia-600 font-black animate-bounce">MONADS!!</div>

---
layout: center
---

## What do you want to learn about FP?

<div v-click="[1, 2]" class="fixed top-[18vh] left-0 w-full text-[12vh] text-center text-emerald-400 font-black animate-spin">MONADS!!</div>

---

Show imperative JS code, then show declarative JS code (with array methods?)
Maybe show idiomatic Haskell code next?
Move Rich Hickey's quote from the next slide to here

---

<div class="flex gap-5">
  <div class="flex-1">
  <h3 class="mb-3">FP is difficult 🫣</h3>

  <ul>
    <li v-click>It's <em>unfamiliar</em></li>
    <li v-click>It's like <em>learning to program</em> all over again</li>
    <li v-click>It uses many <em>academic abstractions</em></li>
  </ul>

  <h3 v-click class="mt-8 mb-3">You should learn FP 🧑‍🎓</h3>

  <ul>
    <li v-click>It's <em><a href="https://softwareengineering.stackexchange.com/questions/82902/is-functional-programming-just-different-or-is-it-actually-really-tougher">just different</a></em></li>
    <li v-click>It makes you a <em>better programmer</em></li>
    <li v-click>It may <em>improve</em> your code</li>
    <li v-click>It's <em>fun</em>!</li>
  </ul>
  </div>

  <div class="flex-1">

  <img v-click src="/dunning-kruger-effect.png">

  </div>
</div>

<blockquote v-click cite="https://www.youtube.com/watch?v=SxdOUGdseq4&t=423s" class="mt-8 !p-3">
  <p class="text-xl italic !mb-3">"If you want everything to be familiar, you'll never learn anything new."</p>
  <footer>
    — Rich Hickey,
    <cite>
      <a href="https://www.youtube.com/watch?v=SxdOUGdseq4&t=423s">Easy Made Simple</a>
    </cite>
  </footer>
</blockquote>

<!--
You'll learn to approach problems differently.
-->

---

<h2 class="mb-8">Agenda</h2>

<v-clicks>

1. 🧠 Concepts
2. 🤓 Functions
3. 📦 Functors
4. 🪺 Monads
5. 🚶 Applicatives
6. 🍹 Monoids

</v-clicks>

<!--
- Exercises in between
- Code will be in JS (todo: maybe some things in TS?)
-->

---
layout: section
---

# Concepts

---

<div class="flex">
  <div class="flex-1 mr-5">
  <h2 class="mb-5">🚫 Imperative style</h2>

  <ol v-click="1" class="mb-3 text-sm">
    <li>Take bread and cut 2 even slices by pushing and pulling a knife through the bread</li>
    <li>Apply lump of butter on knife and apply uniformly to each slice</li>
    <li>Pull 3 leaves of lettuce and arrange evenly on bread</li>
    <li>…</li>
  </ol>

  <div v-click="3" class="mt-5 mb-3">

  ```js
  // Sum these numbers:
  const numbers = [1, 2, 3, 4, 5]

  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }
  result // 15
  ```

  </div>
  <ul class="text-sm">
    <li v-click="5">Implementation details</li>
    <li v-click="7">Requires <em>reading</em></li>
    <li v-click="9">Concerned with <em>how</em></li>
    <li v-click="11">Statements</li>
  </ul>
  </div>
  <div class="flex-1">
  <h2 class="mb-5">✅ Declarative style</h2>

  <ol v-click="2" class="mb-30 text-sm">
    <li>Make me a lettuce-tomato-cheese sandwich</li>
  </ol>

  <div v-click="4" class="mb-3">

  ```js
  // Sum these numbers:
  const numbers = [1, 2, 3, 4, 5]

  numbers.reduce(add) // 15





  ```

  </div>

  <ul class="text-sm">
    <li v-click="6">Abstraction</li>
    <li v-click="8">Requires <em>knowledge</em></li>
    <li v-click="10">Concerned with <em>what</em></li>
    <li v-click="12">Expressions</li>
  </ul>
  </div>
</div>

<!--
Declarative style isn't monopolized by FP, but it comes more naturally.
-->

---

<h2 class="!mb-16">Functions</h2>

<p class="!opacity-100">Functions are first-class, they can be…</p>

<div class="flex">
  <div v-click class="flex-1 mr-5">

  Assigned to variables

  ```js
  const one = () => 1
  const fn = one

  fn() // 1
  ```

  </div>
  <div v-click class="flex-1 mr-5">

  Passed to functions

  ```js
  const call = (fn) => fn()
  const two = () => 2

  call(two) // 2
  ```

  </div>
  <div class="flex-1">

  <v-click>

  Returned from functions

  ```js
  const identity = (x) => x
  const three = () => 3
  const callThree = identity(three)
  callThree() // 3
  ```

  </v-click>

  <div v-click class="mt-5">

  ```js
  const add = (x) => (y) => x + y
  const add3To = add(3)

  add3To(5) // 8
  ```

  </div>
  </div>
</div>

---

## Everything's first-class in FP

- Operators (`+`, `*`, etc)
- Side effects (thunk)
- In JS, the trick is to wrap everything in a function

---

## Separate data and behavior

* Data, calculations and effects
* Algebraic data types
* [No classes](https://www.reddit.com/r/Clojure/comments/f791fm/comment/fiaebv5/):
  * Easier reuse
  * No ad hoc APIs

---

<div class="flex">
  <div class="flex-1 mr-5">
  <h2 class="mb-5">🚫 Shared mutable state</h2>

  <div v-click="1" class="mb-5">

  ```js
  const users = []

  const appendUser = (user) => {
    users.push(user)
  }

  const lastUser = () => users.pop()

  appendUser({ name: 'Hank' })
  lastUser().name // 'Hank'
  lastUser().name // undefined
  ```

  </div>

  <ul>
    <li v-click="3">Implicit dependencies</li>
    <li v-click="5">Depends on when it's called</li>
    <li v-click="7">Non-deterministic / unpredictable</li>
    <li v-click="9">Harder to test</li>
  </ul>
  </div>

  <div class="flex-1">
  <h2 class="mb-5">✅ Shared <em class="text-green-200">im</em>mutable state</h2>

  <div v-click="2" class="mb-5">

  ```js
  const initialUsers = []

  const appendUser = (users, user) => {
    return users.concat(user)
  }

  const lastUser = (users) => users.at(-1)

  const nextUsers = appendUser(initialUsers, { name: 'Hank' })
  lastUser(nextUsers).name // 'Hank'
  lastUser(nextUsers).name // 'Hank'
  ```

  </div>

  <ul>
    <li v-click="4">Explicit dependencies</li>
    <li v-click="6">Independent of time</li>
    <li v-click="8">Deterministic</li>
    <li v-click="10">Easy to test</li>
  </ul>
  </div>
</div>

---
layout: center
---

<div class="text-center flex flex-col gap-8">
  <h2 class="text-green">Sharing state is essential ✅</h2>
  <h2 v-click class="text-yellow">Mutate state in private 🤫</h2>
  <h2 v-click class="text-red">Sharing mutable state is reckless 🚨</h2>
</div>

<!--
Mutating state is essential, so is having shared state, but doing both at the same time makes things unnecessarily difficult.
-->

---

## Controlled side effects

* Explain (side) effects, lots of examples: https://stackoverflow.com/a/766736/660260
* Why they're dangerous
* Why they're essential (they're what make a program useful)
* How FP controls them (concentrate and defer)

---

## Recursion

<!-- todo: maybe include this as a bonus or something? -->

* Enables iteration
* How it works: base case, self-calling
* Examples: factorial, tree traversal
* [Google search](https://www.google.nl/search?q=recursion)

---
layout: section
---

# Functions

---

## Pure functions

Referential transparency

---

## Hindley-Milner type signatures

---

<h2>🥪 Function composition</h2>

<div class="mb-5">

  <h4>Let's make a sandwich.</h4>

  <p v-click>
    Ingredients: <span class="text-4xl">🥖</span>,  <span class="text-4xl">🧈</span>, <span class="text-4xl">🥬</span>, <span class="text-4xl">🍅</span> and <span class="text-4xl">🧀</span>.
  </p>

</div>

<v-click>

````md magic-move
```js {1-3,9|1-4,9|1-5,9|1-6,9|all}
// Imperative

const makeSandwich = (ingredients) => {
  let sandwichAndIngredients = butterBread(ingredients)           // returns 🥪, 🥬, 🍅, 🧀
  sandwichAndIngredients = addLettuce(sandwichAndIngredients)     // returns 🥪, 🍅, 🧀
  sandwichAndIngredients = sliceTomatoes(sandwichAndIngredients)  // returns 🥪, 🧀
  const sandwich = grateCheese(sandwichAndIngredients)            // returns 🥪
  return sandwich
}
```
```js
// Composed

const makeSandwich = (ingredients) => {
  return grateCheese(sliceTomatoes(addLettuce(butterBread(ingredients))))
}
```
```js
// Function composition using pipe

const makeSandwich = (ingredients) => {
  const makeIt = pipe(
    butterBread,
    addLettuce,
    sliceTomatoes,
    grateCheese,
  )
  const sandwich = makeIt(ingredients)
  return sandwich
}
```
```js
// Function composition using pipe, point-free style

const makeSandwich = pipe(
  butterBread,
  addLettuce,
  sliceTomatoes,
  grateCheese,
)
```
````

</v-click>

<!--
With pipe you can make declarative specifications of behavior
-->

---

## Lambda Calculus

---

## 🍛 Currying

- Partial application
- Point-free style

---

## Total vs partial functions

- Not to be confused with partial application
- "A total function is a function that is defined for all possible values of its input. That is, it terminates and returns a value."
- Functions that throw an error (more than you'd think) are LYING!
  - divide by 0
  - unhandled types (`x is not a function`, `Cannot read properties of undefined (reading x)`)
- Functions that halt very late
  - promises that take very long
  - blocking the main thread
  - recursion without base case

---
layout: section
---

# Functors

---

## Containers

- A way to handle control flow, error handling, asynchronicity, state and effects
- Associates a value with a "concept" by "wrapping" the value
- Initially we use objects (and even classes!) to wrap the value

```js
class Container {
  constructor(x) {
    this._value = x
  }
}
```

---

## `map()`

- This obviously doesn't work:
  ```js
  const add1 = (x) => x + 1
  const thing = new Container(2)
  add1(thing) // '[object Object]1'
  ```
- We need a way to apply functions to containers, enter: `map()`

```js {6-9|all}
class Container {
  constructor(x) {
    this._value = x
  }

  map(fn) {
    const newValue = fn(this._value)
    return new Container(newValue)
  }
}

const add1 = (x) => x + 1
const thing = new Container(2)
thing.map(add1) // { _value: 3 }
```

---

## Array and Promise

- Array:
  - A container for ordered indexed values
  - `Array.prototype.map`
- Promise:
  - A container for any future value
  - `Promise.prototype.then`

---

## Optionality

```js
class Maybe {
  get isNothing() {
    return this._value === null || this._value === undefined
  }

  constructor(x) {
    this._value = x
  }

  map(fn) {
    return this.isNothing ? this : new Maybe(fn(this._value))
  }
}

const add1 = (x) => x + 1

new Maybe(2).map(add1)
new Maybe(null).map(add1)
new Maybe().map(add1)
```

- Examples
- Use cases
- How to retrieve the contained value (compare to Array and Promise)

---

## Pure error handling

```js
class Left {
  constructor(message) {
    this._value = message
  }

  map(fn) {
    return this
  }
}

class Right {
  constructor(x) {
    this._value = x
  }

  map(fn) {
    const newValue = fn(this._value)
    return new Either(newValue)
  }
}
```

- Examples
- Use cases (not only error handling, it's a union type)
- How to retrieve the contained value

---

## Each functor has its own map

- No need to actually wrap a value in a container
- Having different (namespaced) implementations of `map()` is enough
- Functor is a type class, Maybe implements the functor type class (as does List, Either, etc)
- Type classes: "These mathematical apis tend to capture most things we'd like to do in an interoperable, reusable way, rather than each library reinventing these functions for a single type."

```js
// Formerly known as Container
const Identity = {
  map: (fn) => (x) => fn(x),
  // Or:
  // map: identity,
}

const List = {
  map: (fn) => (xs) => xs.map(fn),
}

const Maybe = {
  isNothing: (x) => x === null || x === undefined,
  map: (fn) => (x) => (isNothing(x) ? x : fn(x)),
}

const Left = (x) => ({
  map: (_) => Left(x),
})

const Right = (x) => ({
  map: (fn) => Right(fn(x)),
})

const Either = {
  left: Left,
  right: Right,
  map: (fn) => (either) => either.map(fn),
}
```

---

## Pure side effects

```js
const IO = {
  map: (fn) => (io) => () => fn(io()),
}
```

- The containing "value" is a thunk
- Examples
- Use cases
- How to retrieve the contained value

---

## Task?

---

## Functor laws

- See page 64 of Mostly Adequate Guide
- Algebraic properties, exercise with composing CSS transformations?

---
layout: section
---

# Monads

<!--
1. Briefly show the concepts and compare them to OOP
   1. Declarative/imperative
   2. Functions
   3. Separate data and behavior (no classes; data, calculations and effects)
   4. Immutability
   5. Controlled side effects (laziness)
   6. Recursion
2. Functions
   1. Pure functions (referential transparency)
   2. Hindley-Milner type system
   3. Function composition (compose/pipe, mention Lambda Calculus)
   4. Currying (partial application, point-free style)
   5. Total/partial functions (todo: move to Maybe/Either?)
3. Functors
   1. Value containers
   2. Array and Promise are functors
   3. map() (laws: page 64 of Mostly Adequate Guide)
   4. Maybe
   5. Either
   6. IO
   7. Task?
4. Monads
   1. Nested containers
   2. Array and Promise (kind of) are monads
   3. of() (laws: page 78)
   4. flat() (join())
   5. chain() (bind())
   6. Maybe, Either, IO, Task
5. Applicatives
   1. Function containers
   2. `ap()`
   3. Use cases (monads run sequential, applicatives run parallel, ap works great for Tasks)
   4. Maybe, Either, IO, Task
6. Ord, Eq, Semigroup, Monoid
-->
