---
theme: seriph
lineNumbers: true
layout: cover
background: /images/earth-from-orbit.jpg
title: Functional Programming Fundamentals
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

# What is functional programming (FP)?

<div v-click="[1, 2]" class="text-[19vh] mt-20 text-center text-fuchsia-600 font-black animate-bounce">MONADS!</div>

---
disabled: true
layout: none
---

<div class="gap-0" style="column-count: 4">
  <img src="https://media.giphy.com/media/Ysce790SgjJK0/giphy.gif" class="w-full">
  <img src="https://media.giphy.com/media/pPhyAv5t9V8djyRFJH/giphy.gif" class="w-full">
  <img src="https://media.giphy.com/media/kc0kqKNFu7v35gPkwB/giphy.gif" class="w-full">
  <img src="https://media.giphy.com/media/l0IypeKl9NJhPFMrK/giphy.gif" class="w-full">
  <img src="https://media.giphy.com/media/3owzW5c1tPq63MPmWk/giphy.gif" class="w-full">
  <img src="/uuuh.gif" class="w-full">
  <img src="/what-the-fuck.gif" class="w-full">
  <img src="/internally-screaming.gif" class="w-full">
  <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" class="w-full">
  <img src="/happy-destroy.gif" class="w-full">
  <img src="https://media.giphy.com/media/h36vh423PiV9K/giphy.gif" class="w-full">
  <img src="https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif" class="w-full">
  <img src="https://media.giphy.com/media/tJwj0RDHsKmLm/giphy.gif" class="w-full">
</div>

---

<div class="flex gap-5">
  <div class="flex-1">
  <h2 class="!mb-5">FP is difficult 🫣</h2>

  <ul>
    <li v-click>It's <em>unfamiliar</em></li>
    <li v-click>It's like <em>learning to program</em> all over again</li>
    <li v-click>It uses many <em>abstractions</em></li>
  </ul>

  <h2 v-click class="!mb-5">You should learn FP 🧑‍🎓</h2>

  <ul>
    <li v-click>It's <em><a href="https://softwareengineering.stackexchange.com/questions/82902/is-functional-programming-just-different-or-is-it-actually-really-tougher">just different</a></em></li>
    <li v-click>It makes you a <em>better programmer</em></li>
    <li v-click>It's <em>fun</em>!</li>
  </ul>
  </div>

  <div class="flex-1">

  <img v-click src="/dunning-kruger-effect.png">

  </div>
</div>

<!--
"I don't know Turkish, does that mean it's a bad language?"
-->

---
layout: section
---

# How is FP different?

---

<div class="flex">
  <div class="flex-1 mr-5">
  <h2 class="mb-5">🚫 Imperative style</h2>

  <ol v-click="1" class="mb-3 text-sm">
    <li>Take bread and cut 2 slices</li>
    <li>Apply butter to each slice</li>
    <li>Pull 3 leaves of lettuce</li>
    <li>Spread lettuce evenly on bread</li>
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
  </ul>
  </div>
</div>

<!--
Declarative style isn't monopolized by FP, but it comes more naturally.
-->

---

Statements vs expressions?

---

Separate data and behavior?

https://www.reddit.com/r/Clojure/comments/f791fm/comment/fiaebv5/:

* "Ad hoc APIs"
* "Objects are state machines"

---

<div class="flex">
  <div class="flex-1 mr-5">
  <h2 class="mb-5">🚫 Shared mutable state</h2>

  <div v-click="1" class="mb-3">

  ```js
  const appendUser = (users, user) => {
    users.push(user)
    return users
  }

  const lastUser = () => users.pop()

  // Usage:

  appendUser([], { name: 'Hank' })
  const user = lastUser()
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

  <div v-click="2" class="mb-3">

  ```js
  const appendUser = (users, user) => {
    return users.concat(user)
  }


  const lastUser = (users) => users.at(-1)

  // Usage:

  const nextUsers = appendUser([], { name: 'Hank' })
  const user = lastUser(nextUsers)
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

<!--
Mutating state is essential, so is having shared state, but doing both at the same time makes things unnecessarily difficult.
-->
---

<!--
  - Explain (side) effects, lots of examples: https://stackoverflow.com/a/766736/660260
  - Why they're dangerous
  - Why they're essential (they're what make a program useful)
  - How FP controls them
-->

<div class="flex">
  <div class="flex-1 mr-5">
  <h2 class="mb-5">🚫 (Side) Effects everywhere</h2>

<div v-click="1" class="mb-3">

  ```js
  const main = async () => {
    const users = await getUsers()
    await updateUsers(users)
    await renderUsers(users)
  }

  const updateUsers = (users) {
    //
  }
  ```

  <!--
  const storeData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getUsers = () =>
    fetch('/users')
      .then((response) => response.json())
      .catch(console.error)

  const add = (a, b) => {
    console.log(`Adding ${a} and ${b}`)
    return a + b
  }
  -->

  </div>

  <ul>
    <li v-click="3"></li>
    <li v-click="5"></li>
    <li v-click="7"></li>
  </ul>
  </div>

  <div class="flex-1">
  <h2 class="mb-5">✅ Controlled effects</h2>

  <div v-click="2" class="mb-3">

  ```js
  const storeData = (key, value) => () => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getUsers = () => () =>
    fetch('/users')
      .then((response) => response.json())
      .catch(console.error);

  const add = (a, b) => () => {
    console.log(`Adding ${a} and ${b}`)
    return a + b
  }
  ```

  </div>

  <ul>
    <li v-click="4"></li>
    <li v-click="6"></li>
    <li v-click="8"></li>
  </ul>
  </div>
</div>

<!--
- An effect is anything that's not a computation
- A *side* effect is an implicit, sometimes unintended effect
- Effects are contagious (similar to async code)
- Functions without input or output often have (side) effects
-->

---

Partial vs total functions (`divide(1, 0)` throws)?

---
layout: section
---

# How to start?

<!--
Where to start learning FP? First some theory
-->

---

<h1 class="!mb-10">🧐 First-class citizens</h1>

<p class="text-2xl !mb-10 !opacity-100">Functions can be…</p>

<div class="flex">
  <div v-click class="flex-1 mr-5">

  ```js
  const a = () => 1

  a() // 1
  ```

  <p>Assignable to variables</p>
  </div>
  <div v-click class="flex-1 mr-5">

  ```js
  const b = (fn) => fn()

  b(() => 2) // 2
  ```

  <p>Passed to other functions</p>
  </div>
  <div class="flex-1">
  <v-click>

  ```js
  const c = (fn) => fn
  const d = c(() => 3)
  d() // 3
  ```

  <p>Returned from other functions</p>
  </v-click>

  <v-click>

  ```js
  const e = (a) => (b) => a + b

  e(2)(2) // 4
  ```

  </v-click>
  </div>
</div>

<!--
Higher Order Functions are hard to grasp
-->

---

<h1 class="!mb-10">🧨 Side effects</h1>

<div class="flex mb-8">
  <div v-click class="flex-1 mr-5">

  ```js
  const user = {}
  function setUserName(name) {
    user.name = name
  }
  ```

  <p>Mutate state outside own scope</p>
  </div>
  <div v-click class="flex-1 mr-5">

  ```js
  function getUserName() {
    return this.user.name
  }

  ```

  <p>Access state outside own scope</p>
  </div>
  <div v-click class="flex-1">

  ```js
  function incrementAge(user) {
    user.age += 1
  }

  ```

  <p>Mutate arguments</p>
  </div>
</div>

<div class="flex">
  <div v-click class="flex-1 mr-5">

  ```js
  function logUser(user) {
    console.log(user)
  }
  ```

  <p>Access global symbols</p>
  </div>
  <div v-click class="flex-1 mr-5">

  ```js
  function now() {
    return new Date()
  }
  ```

  <p>Non-deterministic result</p>
  </div>
  <div v-click class="flex-1">

  ```js
  function attemptSetAge(age) {
    if (age < 0) {
      throw new Error('🖕')
    }
    user.age = age
  }
  ```

  <p>Throwing exceptions</p>
  </div>
</div>

<!--
Some examples
-->

---

<h1 class="!mb-10">👼 Pure functions</h1>

<div class="flex mb-8">
  <div v-click class="flex-1 mr-5">

  ```js
  function setUserName(user, name) {
    return { ...user, name }
  }
  ```

  <p>Never mutate, copy instead</p>
  </div>
  <div v-click class="flex-1">

  ```js
  function logUser(logger, user) {
    logger.log(user)
  }
  ```

  <p>Dependency injection</p>
  </div>
</div>

<div class="flex mb-8">
  <div v-click class="flex-1 mr-5">

  ```js
  let user = { name: 'Rupert' }

  logUser(console, user) // 'Rupert'
  user = setUserName(user, 'Hank')
  logUser(console, user) // 'Hank'
  ```

  <p>Explicit side effects</p>
  </div>
  <div v-click class="flex-1 mr-5">

  ```js
  const mockLogger = {
    log: () => {}
  }

  logUser(mockLogger, user) // ✨
  ```

  <p>Only when you want side effects</p>
  </div>
</div>

<!--
1:
* Same input, same output
* Referential transparency
* Deterministic

2:
Easy to test

3:
Side effects are moved to the boundary of your program

4:
* Control of side effects in a single place
* logger can be different for envs
-->

---

<!-- ---

<h1 class="!mb-10">😴 Laziness</h1>

<div class="flex">
  <div class="flex-1 mr-5">

  ```js
  const persist = (message) => {
    localStorage.setItem('message', message)
  }


  ```

  </div>
  <div class="flex-1">

  ```js
  const lazyPersist = (message) => () => {
    localStorage.setItem('message', message)
  }
  ```

  </div>
</div> -->

<!--
How are side-effects isolated? With lazy evaluation
-->

<h1>🥪 Function composition</h1>

<div v-click class="mb-5">

```js
makeSandwich('🥖') // ['🥖', '🥬', '🍅', '🧀']
```

</div>

<div class="flex mb-3">
  <div v-click class="flex-1 mr-5">
  Imperative:

  ```js
  const makeSandwich = (breadType) => {
    let sandwich = takeBread(breadType)
    sandwich = addLettuce(sandwich)
    sandwich = addTomatoes(sandwich)
    sandwich = addCheese(sandwich)
    return sandwich
  }
  ```

  </div>
  <div v-click class="flex-1">
  Compressed:

  ```js
  const makeSandwich = (breadType) => {
    return addCheese(addTomatoes(addLettuce(takeBread(breadType))))
  }
  ```

  </div>
</div>
<div class="flex">
  <div v-click class="flex-1 mr-5">
  Composed:

  ```js
  const makeSandwich = (breadType) => pipe(
    takeBread,
    addLettuce,
    addTomatoes,
    addCheese,
  )(breadType)
  ```

  </div>
  <div v-click class="flex-1">
  Point-free:

  ```js
  const makeSandwich = pipe(
    takeBread,
    addLettuce,
    addTomatoes,
    addCheese,
  )
  ```

  </div>
</div>

---

<h1>🚰 Pipe</h1>

<div v-click class="flex mb-3">
  <div class="flex-1 mr-5">

  ```js
  const makeSandwich = (breadType) => pipe(
    takeBread,
    addLettuce,
    addTomatoes,
    addCheese,
  )(breadType)
  ```

  </div>
  <div class="flex-1">

  ```js
  const makeSandwich = pipe(
    takeBread,
    addLettuce,
    addTomatoes,
    addCheese,
  )
  ```

  </div>
</div>

<v-click>

```js {1,9|1,2,8,9|all}
const pipe = (...fns) => {
  return (startValue) => {
    let value = startValue
    for (let fn of fns) {
      value = fn(value)
    }
    return value
  }
}
```

</v-click>

<p v-click class="text-center">
  👆 Imperative implementation of <code>pipe</code> 🥲
  <img src="https://media.giphy.com/media/H1wPB41Fn5dfWfGxYi/giphy.gif" class="inline-block ml-5 max-h-20">
</p>

<!--
Pipe is like **creating** an assembly line

The implementation is imperative, because it's more familiar
-->

---

<h1>🍛 Currying</h1>

<div class="flex mb-8">
  <div class="flex-1 mr-5">
  <v-click>

  ```js
  const addTomatoes = (sandwich) => {
    return [...sandwich, '🍅']
  }
  ```

  </v-click>
  <v-click>
  <div class="text-center">👇</div>

  ```js
  const addIngredient = (ingredient, sandwich) => {
    return [...sandwich, ingredient]
  }
  ```

  </v-click>
  </div>
  <div v-click class="flex-1">
  <p class="!mt-0">How would that work?</p>

  ```js
  const makeSandwich = pipe(
    takeBread,
    addIngredient('🥬', sandwich), // ❌
    addIngredient,                 // ❌
    addIngredient('🧀'),           // 🤔
  )
  ```

  </div>
</div>

<div class="flex">
  <div v-click class="flex-1 mr-5">
  <p class="!mt-0">A function for each argument:</p>

  ```js
  const addIngredient = (ingredient) => (sandwich) => {
    return [...sandwich, ingredient]
  }
  ```

  </div>
  <div v-click class="flex-1">

  ```js
  const makeSandwich = pipe(
    takeBread,
    addIngredient('🥬'),
    addIngredient('🍅'),
    addIngredient('🧀'),
  )
  ```

  </div>
</div>

<ul>
  <li v-click>Definition: convert a function with <em>n</em> arguments into a sequence of <em>n</em> functions that each take 1 argument.</li>
  <li v-click>Function composition often requires curried functions.</li>
</ul>

---

<h1 class="!mb-8">🛠 JS Libraries</h1>

<div class="flex">
  <div class="flex-1 mr-5">
<h2 v-click class="mb-5">
  <a href="https://ramdajs.com/" target="_blank">Ramda</a>
  or
  <a href="https://github.com/lodash/lodash/wiki/FP-Guide" target="_blank">Lodash/FP</a>
</h2>

<ul>
  <li v-click>Immutable</li>
  <li v-click>
  Overloaded currying (auto-currying):

  ```js
  insert(2, 'x', [1, 2, 3]) // [1, 2, 'x', 3]
  insert(2, 'x')([1, 2, 3]) // [1, 2, 'x', 3]
  insert(2)('x')([1, 2, 3]) // [1, 2, 'x', 3]
  ```

  </li>
  <li v-click>Shitty TypeScript support 💩</li>
</ul>
  </div>

  <div class="flex-1">
<h2 v-click class="mb-5"><a href="https://sanctuary.js.org/" target="_blank">Sanctuary</a></h2>

<ul>
  <li v-click>Stricter than Ramda and Lodash/FP</li>
  <li v-click>Everything's curried</li>
  <li v-click>No null-checks (<code>Maybe</code> and <code>Either</code>)</li>
  <li v-click>Also shitty TypeScript support 💩</li>
</ul>
  </div>
</div>

<!--
Definitely start with a lib, it'll force you to think more functional

Sanctuary has its own **run-time** type checking
Sanctuary is less suitable for beginners
-->

---
layout: section
---

# Where to go next?

<!--
When the fundamentals "click", what's next?
-->

---
layout: iframe-right
url: https://gcanti.github.io/fp-ts/
---

<h1 class="!mb-8">⌨️ TypeScript</h1>

<h2 v-click class="mb-5">
  <a href="https://gcanti.github.io/fp-ts/" target="_blank">fp-ts</a>:
</h2>

<ul>
  <li v-click>Extensive documentation ✅</li>
  <li v-click>Relatively many tutorials ✅</li>
  <li v-click>A lot of <a href="https://gcanti.github.io/fp-ts/ecosystem/" target="_blank">companion libraries</a> ✅</li>
  <li v-click>Contains <a href="https://jrsinclair.com/articles/2019/algebraic-data-types-what-i-wish-someone-had-explained-about-functional-programming/" target="_blank">Algebraic Data Types</a> ✅</li>
  <li v-click class="mt-5">Target audience: FP experts 😭</li>
</ul>

<!--
First: types are essential for *true* FP
-->

---

<h1 class="!mb-8">
  💸
  <a href="https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/" target="_blank">
    The billion dollar mistake
  </a>
</h1>

<div class="flex mb-3">
  <div v-click class="flex-1 mr-5">
  What if there's no more bread? 😱

  ```js
  const makeSandwich = pipe(
    // 👇 this now returns null
    takeBread,
    addIngredient('🥬'), // ❌ null is not iterable
    addIngredient('🍅'),
    addIngredient('🧀'),
  )
  ```

  </div>
  <div v-click class="flex-1">
  Break the pipeline? 😢

  ```js
  const makeSandwich = (breadType) => {
    const bread = takeBread(breadType)
    if (!bread) return 'No more bread'
    return pipe(
      addIngredient('🥬'),
      addIngredient('🍅'),
      addIngredient('🧀'),
    )(bread)
  }
  ```

  </div>
</div>

<div class="flex">
  <div v-click class="flex-1 mr-5">
  Use the Ramda-way? 🙂

  ```js
  const makeSandwich = pipe(
    takeBread,
    ifElse(isNil, () => 'No more bread', pipe(
      addIngredient('🥬'),
      addIngredient('🍅'),
      addIngredient('🧀'),
    ))
  )
  ```

  </div>
  <!-- <div v-click class="flex-1">
  What if more ingredients are out? 😟 -->

  <!-- ```js
  const makeSandwich = pipe(
    takeBread,
    ifElse(isNil, () => 'No more bread', pipe(
      // 👇 any of these can now also return null
      addIngredient('🥬'),
      addIngredient('🍅'),
      addIngredient('🧀'),
    )),
    when(any(isNil), () => 'Some ingredients are missing')
  )
  ``` -->

  <!-- </div> -->
</div>

<!-- ---

<h1 class="!mb-8">📦 Algebraic Data Types</h1>

<div v-click class="text-center">Container of 0 or more items:</div>
<div class="flex mb-5">
  <div v-click class="flex-1 mr-5">

  ```ts
  Array.of('🥖', '🥬', '🍅', '🧀')
    // ['🥖', '🥬', '🍅', '🧀']
  ```

  </div>
  <div v-click class="flex-1">

  ```ts
  import { of } from 'fp-ts/Option'

  of('💡') // { _tag: 'Some', value: '💡' }
  ```

  </div>
</div>

<div v-click class="text-center">Uses <code>map</code> to change its contents:</div>
<div class="flex mb-5">
  <div v-click class="flex-1 mr-5">

  ```ts
  [1, 2, 3].map(timesTwo) // [2, 4, 6]
  ```

  </div>
  <div v-click class="flex-1">

  ```ts
  import { of, map } from 'fp-ts/Option'

  const one = of(1)
  map(timesTwo)(one) // { _tag: 'Some', value: 2 }
  ```

  </div>
</div>

<div v-click class="text-center">Uses <code>flatMap</code>/<code>chain</code> to prevent nesting:</div>
<div class="flex">
  <div v-click class="flex-1 mr-5">

  ```ts
  const nestedTimesTwo = (n) => [n * 2]
  [1, 2, 3].map(nestedTimesTwo)
    // [[2], [4], [6]]

  [1, 2, 3].flatMap(nestedTimesTwo)
    // [2, 4, 6]
  ```

  </div>
  <div v-click class="flex-1">

  ```ts
  import { of, map, chain } from 'fp-ts/Option'

  const nestedTimesTwo = (n) => of(n * 2)
  const one = of(1)
  map(nestedTimesTwo)(one)
    // { _tag: 'Some', value: { _tag: 'Some', value: 2 } }
  chain(nestedTimesTwo)(one) // { _tag: 'Some', value: 2 }
  ```

  </div>
</div> -->

<!--
First: let's take a step back

Last: these are still null checks
-->

---

<h1>🗑 <code>Option</code></h1>

<div v-click class="mb-3">

  ```ts
  type Option<A> = None | Some<A>

  import { fromNullable } from 'fp-ts/Option'

  fromNullable(null) // { _tag: 'None' }
  fromNullable('💡') // { _tag: 'Some', value: '💡' }
  ```

</div>

<v-click>

  ```ts
  import { flow } from 'fp-ts/function'
  import { fromNullable, map, getOrElse } from 'fp-ts/Option'

  const makeSandwich = flow(
    // takeBread() may return null!
    takeBread,
    fromNullable,
    map(addIngredient('🥬')), // map() can handle both Some and None containers 🤩
    map(addIngredient('🍅')),
    map(addIngredient('🧀')),
    getOrElse(() => 'Some ingredients are missing'), // return sandwich or a message
  )
  ```

</v-click>

<!--
```ts
import { pipe } from 'fp-ts/function'
import { fromNullable, chain, getOrElse } from 'fp-ts/Option'

// addIngredient may return null
const safeAddIngr = fromNullable(addIngredient)

const makeSandwich = (breadType) => pipe(
  takeBread(breadType),
  fromNullable,
  chain(safeAddIngr('🥬')),
  chain(safeAddIngr('🍅')),
  chain(safeAddIngr('🧀')),
  getOrElse(() => 'Some ingredients are missing'),
)
```
-->

<!--
`Option` can be used for possibly missing values (also called Maybe)

`flow` is the fp-ts version of `pipe`

`None` and `Some` both wrap a (single) value

Option-specific functions "know" how to handle None and Some containers
-->

---

<h1 class="!mb-3">☯️ <code>Either</code></h1>

<div v-click class="mb-2">

  ```ts
  type Either<E, A> = Left<E> | Right<A>

  import { tryCatch } from 'fp-ts/Either'

  const throwError = () => { throw '💣' }
  const allGood = () => 'All good'
  const handleError = () => 'Oops'

  tryCatch(throwError, handleError) // { _tag: 'Left', left: 'Oops' }
  tryCatch(allGood, handleError)    // { _tag: 'Right', right: 'All good' }
  ```

</div>

<v-click>

  ```ts
  import { flow } from 'fp-ts/function'
  import { tryCatch, map, getOrElse } from 'fp-ts/Either'

  const safeTakeBread = (breadType) => tryCatch(() => takeBread(breadType), () => 'No more bread')
  const makeSandwich = flow(
    // takeBread() may throw!
    takeBread,
    map(addIngredient('🥬')), // map() can handle both Left and Right containers 🤩
    map(addIngredient('🍅')),
    map(addIngredient('🧀')),
    getOrElse((error) => error), // return sandwich or value of Left
  )
  ```

</v-click>

<!--
`Either` is like `Option` but also contains a "failure" state
-->

---

<h1>🤓 Learning resources</h1>

<p class="!opacity-100 !mt-8">
  Huge list of resources: <a href="https://project-awesome.org/stoeffel/awesome-fp-js" target="_blank">Awesome FP JS</a>
</p>

<h2>Books</h2>
<ul>
  <li><a href="https://leanpub.com/fljs" target="_blank">Functional-Light JavaScript</a> — Kyle Simpson</li>
  <li><a href="https://leanpub.com/javascriptallongesix" target="_blank">JavaScript Allongé</a> — Reginald Braithwaite</li>
</ul>

<h2>Videos</h2>
<p>Anything from <a href="https://www.youtube.com/results?search_query=scott+wlaschin" target="_blank">Scott Wlaschin</a>.</p>

---
layout: center
---

See this presentation on <a href="https://abbekeultjes.nl/beginners-guide-to-fp/">https://abbekeultjes.nl/beginners-guide-to-fp</a>

<img src="/qrcode_abbekeultjes.nl.png" class="mx-auto mt-12 h-60">
