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

## What is functional programming (FP)?

<div v-click="[1, 2]" class="fixed top-[18vh] left-0 w-full text-[18vh] text-center text-fuchsia-600 font-black animate-bounce">MONADS!!</div>

---

## What do you want to learn about FP?

---

<h2 class="mb-3!">Why functional programming?</h2>

<div v-click class="mb-3">A typical programmer's path to software supremacy:</div>

<ul class="mb-3">

<li v-click>👶🏼 Learn a language's syntax.</li>
<li v-click>👦🏻 Learn abstractions.</li>
<li v-click>👨🏾‍🎓 Learn <a href="https://en.wikipedia.org/wiki/Design_Patterns">Design Patterns</a>.</li>
<li v-click>👨🏽 Learn to <em>not</em> over-engineer.</li>
<li v-click>🧓🏼 Senior developer.</li>
<li v-click>
  <span v-mark.strike.red="8">💀 Die knowing what the value of <code>this</code>is <em>in any circumstance</em>.</span>
</li>
<li v-click>🤓 Learn functional programming.</li>
<li v-click><img src="/doomgod-emoji.png" class="inline-block h-4 align-baseline"> Godlike developer.</li>

</ul>

<blockquote v-click cite="https://changelog.com/podcast/267" class="!p-5">
  <p class="text-xl italic !mb-3">"[...] functional programming is a way to break out of [...] your local maximum, get to a higher hill where you can combine different paradigms."</p>
  <footer class="!opacity-50">
    — Eric Normand,
    <cite>
      <a href="https://changelog.com/podcast/267" target="_blank">The Changelog 267</a>
    </cite>
  </footer>
</blockquote>

---

<h2 class="mb-3">Which do you prefer?</h2>

<div class="flex gap-5">
  <div>

```js
function getPublishedPageTitlesByAuthor(pages) {
  const titlesByAuthor = {};
  for (const page of pages) {
    if (page.isPublished) {
      titlesByAuthor[page.author] ??= [];
      titlesByAuthor[page.author].push(page.title);
    }
  }

  const result = [];
  for (const titles of Object.values(titlesByAuthor)) {
    result.push(...titles);
  }

  return result;
}
```

  </div>
  <div>

```js
function getPublishedPageTitlesByAuthor(pages) {
  return flow(pages, [
    filter(prop('isPublished')),
    groupBy(prop('author')),
    map(map(prop('title'))),
  ]);
}
```

  </div>
</div>

<blockquote v-click cite="https://www.youtube.com/watch?v=SxdOUGdseq4&t=423s" class="mt-3 !p-5">
  <p class="text-2xl italic !mb-3">"If you want everything to be familiar, you'll never learn anything new."</p>
  <footer class="!opacity-50">
    — Rich Hickey,
    <cite>
      <a href="https://www.youtube.com/watch?v=SxdOUGdseq4&t=423s" target="_blank">Easy Made Simple</a>
    </cite>
  </footer>
</blockquote>

<!--
- Ask people which code block they'd prefer to have in a code base they have to maintain.
- Then explain the FP code and ask them to imagine being more familiar with FP. Do they still have the same preference?
- Key take-aways:
  - left is imperative, right is declarative / expressive.
  - preference depends on familiarity
-->

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

  <div v-click="3" class="mt-5 mb-3 h-36">

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

  <div v-click="4" class="mb-3 h-36">

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

Similar to the difference between French and American recipes:
- French: "Make mashed potatoes"
- American: "Peel potatoes, boil for 20 mins with salt, mash with some milk and butter."
-->

---

<h2 class="mb-8">Agenda</h2>

<v-clicks>

1. ✋ Before we start
2. 🧐 First-class functions
3. 🧑‍🎨 Function composition
4. 🍛 Currying
5. 💎 Pure functions
6. 🗿 Immutable state
7. 🎲 Apply what you've learned

</v-clicks>

---

<h2 class="mb-13">✋ Before we start</h2>

<div v-click class="mb-13 text-2xl text-center">
  <a href="https://github.com/flauwekeul/workshop-fp-fundamentals" target="_blank">
  github.com/flauwekeul/workshop-fp-fundamentals
  </a>
</div>

<div class="grid grid-cols-2 gap-5">
  <ul>
    <li v-click><span v-mark.strike.red="1">TypeScript</span>, just JavaScript 😵</li>
    <li v-click><span v-mark.strike.red="2">Copilot / AI Assistant</span> 🚫🤖</li>
    <li v-click><a href="https://quokkajs.com/" target="_blank">Quokka.js</a> 👉</li>
    <li v-click><a href="https://ramdajs.com/" target="_blank">Ramda.js</a> as the missing standard lib 🐏</li>
    <li v-click>Team up! 🤝</li>
  </ul>

  <img src="/quokkajs-demo.gif" v-click="4">
</div>

<!--
* Don't forget: `npm install`.
* Quokka:
  * Command + Shift + P, "Toggle (Start/Stop) on Current File"
  * If the code uses DOM stuff, they'll get an error.
-->

---

<h2 class="mb-8">🧐 First-class functions</h2>

<p class="!opacity-100">Functions can be…</p>

<div class="flex">
  <div v-click class="flex-1 mr-5">

  Assigned to variables

```js
const one = () => 1;
const fn = one;

fn(); // 1
```

  </div>
  <div v-click class="flex-1 mr-5">

  Passed to functions

```js
const call = (fn) => fn();
const two = () => 2;

call(two); // 2
```

  </div>
  <div class="flex-1">

  <v-click>

  Returned from functions

```js
const identity = (x) => x;
const three = () => 3;
const callThree = identity(three);
callThree(); // 3
```

  </v-click>

  <div v-click class="mt-5">

```js
const add = (x) => (y) => x + y;
const add3To = add(3);

add3To(5); // 8
```

  </div>
  </div>
</div>

---
layout: center
---

<h2 class="text-center mb-20">
  🧑‍💻 Exercises <strong class="text-6xl">01</strong>, <strong class="text-6xl">02</strong> and <strong class="text-6xl">03</strong>
  <div class="mt-5">⏰ 20 minutes</div>
</h2>

Look in the `/exercises` folder.

To run tests: `npm t`.

---

<h2 class="mb-5">🧑‍🎨 Function composition</h2>

<blockquote v-click cite="https://en.wikipedia.org/wiki/Function_composition_(computer_science)" class="!p-5 mb-5">
  <p class="text-lg italic !mb-3">"An act or mechanism to combine simple functions to build more complicated ones. [...] the result of each function is passed as the argument of the next, and the result of the last one is the result of the whole."</p>
  <footer class="!opacity-50">
    — <cite>
      <a href="https://en.wikipedia.org/wiki/Function_composition_(computer_science)" target="_blank">Wikipedia</a>
    </cite>
  </footer>
</blockquote>

<div v-click class="mb-5">

```js
const increment = (x) => x + 1;
const double = (x) => x * 2;
const quarter = (x) => x / 4;

quarter(double(increment(3))); // (((3 + 1) * 2) / 4) = 2
```

</div>

<p v-click>If only there was a way to make this more readable… 🤔</p>

<div v-click>

```js
const incrementDoubleQuarter = compose(quarter, double, increment);
incrementDoubleQuarter(3); // 2

// Or in a single line:
compose(quarter, double, increment)(3); // 2
```

</div>

<!--
Compose is an example of a combinator:
a function that takes one or more functions and returns a new function
that in some way combines the passed function(s).
-->

---

<h2 class="mb-13">🔁 Composition order</h2>

```js
// Right to left composition, value last
compose(quarter, double, increment)(3); // 2
```

Composing right to left is… unfamiliar.

<p v-click>If only we could compose left to right… 🤔</p>

<div v-click>

```js
// Left to right composition, value last
pipe(increment, double, quarter)(3); // 2
```

</div>

<div v-click class="mb-13">

```js
// Left to right composition, value first
flow(3, [increment, double, quarter]); // 2
```

</div>

---
layout: center
---

<h2 class="text-center">
  🧑‍💻 Exercise <strong class="text-6xl">04</strong> <span class="opacity-50">(and optionally <strong class="text-6xl">05</strong>)</span>
  <div class="mt-5">⏰ 20 minutes</div>
</h2>

---

<h2 class="mb-8">🤷 Composing binary/ternary functions</h2>

What if you want to compose functions that take multiple arguments?

```js
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
```

<div class="grid grid-cols-2 gap-x-20">

<div v-click>

Lambda's are verbose.

```js
flow(1, [
  (x) => add(2, x),
  (x) => multiply(3, x)
]); // 9
```

</div>
<div v-click>

Partial application is better.

```js
const add2 = (x) => add(2, x);
const multiply3 = (x) => multiply(3, x);

flow(1, [add2, multiply3]); // 9
```

</div>
<div v-click>

Currying is the best!

```js
const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

flow(1, [add(2), multiply(3)]); // 9
```

</div>
</div>

<!--
A function always returns a single value. So the next function should always except a single value.
-->

---

<h2 class="mb-5">🍛 Currying</h2>

<blockquote cite="https://en.wikipedia.org/wiki/Currying" class="!p-5 mb-5">
  <p class="text-xl italic !mb-3">"Currying is the technique of translating a function that takes multiple arguments into a sequence [...] of functions, each taking a single argument."</p>
  <footer class="!opacity-50">
    — <cite>
      <a href="https://en.wikipedia.org/wiki/Currying" target="_blank">Wikipedia</a>
    </cite>
  </footer>
</blockquote>

<v-click>

`assoc` *associates* a key with a value of an object:

````md magic-move
```js{1-3|1-7|all}
const assoc = (key, value, obj) => ({ ...obj, [key]: value });

assoc('a', 2, { a: 1 }); // { a: 2 }

const assocA =     (value, obj) => assoc('a', value, obj);

assocA(    2, { a: 1 }); // { a: 2 }

const assocAWith2 =       (obj) => assocA(2, obj);

assocAWith2(  { a: 1 }); // { a: 2 }
```
```js
const assoc = (key) => (value, obj) => ({ ...obj, [key]: value });

assoc('a')(2, { a: 1 }); // { a: 2 }

const assocA =         (value, obj) => assoc('a')(value, obj);

assocA(    2, { a: 1 }); // { a: 2 }

const assocAWith2 =           (obj) => assocA(2, obj);

assocAWith2(  { a: 1 }); // { a: 2 }
```
```js
const assoc = (key) => (value, obj) => ({ ...obj, [key]: value });

assoc('a')(2, { a: 1 }); // { a: 2 }

const assocA =                         assoc('a');

assocA(    2, { a: 1 }); // { a: 2 }

const assocAWith2 =           (obj) => assocA(2, obj);

assocAWith2(  { a: 1 }); // { a: 2 }
```
```js
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });

assoc('a')(2)({ a: 1 }); // { a: 2 }

const assocA =                             assoc('a');

assocA(    2, { a: 1 }); // { a: 2 }

const assocAWith2 =               (obj) => assocA(2)(obj);

assocAWith2(  { a: 1 }); // { a: 2 }
```
```js
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });

assoc('a')(2)({ a: 1 }); // { a: 2 }

const assocA =                             assoc('a');

assocA(    2, { a: 1 }); // { a: 2 }

const assocAWith2 =                        assocA(2);

assocAWith2(  { a: 1 }); // { a: 2 }
```
```js
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });

assoc('a')(2)({ a: 1 }); // { a: 2 }

const assocA = assoc('a');

assocA(2, { a: 1 }); // { a: 2 }

const assocAWith2 = assocA(2);

assocAWith2({ a: 1 }); // { a: 2 }
```
````

</v-click>

<!--
1. `assoc` is not curried
2. 'assocA' is a specialized version of `assoc`
3. `assocAWith2` is a specialized version of `assocA`
4. the first argument of `assoc` is curried
5. we can simplify `assocA` by removing the redundant lambda
6. `assoc` is "completely curried"
7. we can simplify `assocAWith2` as well
-->

---
layout: center
---

<h2 class="text-center">
  🧑‍💻 Exercises <strong class="text-6xl">06</strong> and <strong class="text-6xl">07</strong>
  <div class="mt-5">⏰ 30 minutes</div>
</h2>

---

<h2 class="mb-8">🤫 Point-free style</h2>

<blockquote cite="https://en.wikipedia.org/wiki/Tacit_programming" class="!p-5 mb-8">
  <p class="text-xl italic !mb-3">"Tacit programming, also called point-free style, is a programming paradigm in which function definitions do not identify the arguments (or "points") on which they operate."</p>
  <footer class="!opacity-50">
    — <cite>
      <a href="https://en.wikipedia.org/wiki/Tacit_programming" target="_blank">Wikipedia</a>
    </cite>
  </footer>
</blockquote>

<v-click>

````md magic-move
```js
// Simple example
[1, 2, 3].forEach(n => console.log(n));
```
```js
// Simple example
[1, 2, 3].forEach(console.log);
```
```js{4-9}
// Simple example
[1, 2, 3].forEach(console.log);

// More complex
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });

const assocA = (value) => (obj) => assoc('a')(value)(obj); // { ...obj, [key]: value }

assocA(2)({ a: 1 }); // { a: 2 }
```
```js{4-9}
// Simple example
[1, 2, 3].forEach(console.log);

// More complex
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });

const assocA = (value) => assoc('a')(value);     // (obj) => ({ ...obj, [key]: value })

assocA(2)({ a: 1 }); // { a: 2 }
```
```js{4-9}
// Simple example
[1, 2, 3].forEach(console.log);

// More complex
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });

const assocA = assoc('a');            // (value) => (obj) => ({ ...obj, [key]: value })

assocA(2)({ a: 1 }); // { a: 2 }
```
```js{8-10}
// Simple example
[1, 2, 3].forEach(console.log);

// More complex
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });
const assocA = assoc('a');            // (value) => (obj) => ({ ...obj, [key]: value })
assocA(2)({ a: 1 }); // { a: 2 }

 // WTF
const getUsers = (users) => pipe(map(flip(prop)(users)));
```
```js{8-10}
// Simple example
[1, 2, 3].forEach(console.log);

// More complex
const assoc = (key) => (value) => (obj) => ({ ...obj, [key]: value });
const assocA = assoc('a');            // (value) => (obj) => ({ ...obj, [key]: value })
assocA(2)({ a: 1 }); // { a: 2 }

 // WTF
const getUsers = (users) => (userIds) => map(id => users[id])(userIds);
```
````

</v-click>

---

<h2 class="mb-13">✍️ Recap</h2>

<v-clicks>

1. Functions can be <em>passed</em> and <em>returned</em> from other functions.
2. Functions can be <em>composed</em> to create more complex functions.
3. To compose functions, functions must <em>accept</em> and <em>return</em> 1 value.
4. <em>Curried functions</em> are much easier to compose.
5. Point-free style can <em>improve or hurt</em> readability.

</v-clicks>

---

<h2 class="mb-13">💎 Pure functions</h2>

When is a function pure?

<v-clicks>

  * Given the *same input*, always returns the *same output*.
  * Independent on *when* it's called or *how often* it's called.
  * Has no *side-effects*.

</v-clicks>
<v-clicks>

<p class="!mt-13">What are side-effects?</p>

  * Using implicit dependencies to read from and/or change the world.

</v-clicks>

---
src: ./pure-functions.md
---
<!-- This is replaced with the pure-functions slides -->
---

<h2 class="mb-13">🔪 Separating calculations and effects</h2>

Minimize and isolate impure code; keep effects at the edges of the system.

<div class="flex gap-8">
  <div>
  <v-clicks>

  * Effects are *contagious* 😷
  * Effects are never part of the *domain*.
  * Be *pragmatic*. A `console.log` won't hurt.

  </v-clicks>

  <div v-click class="mt-5">
    <img src="/impureim-sandwich.png" class="bg-neutral-300 p-3 rounded-lg">
    <span class="text-sm opacity-50">
      Source: <a href="https://fullsteak.dev/posts/fullstack-rescript-architecture-overview" target="_blank">fullsteak.dev</a>
    </span>
  </div>
  </div>

  <div v-click="5">

```js{1-3,12-13|5-10|all}{at:'+2'}
async function main() {
  const articles = await fetchArticles(); // 🍞 impure
  const today = new Date();               // 🍞 impure

  const yearAgo = subYears(today, 1);     // 🥬 pure
  const uniqueTags = flow(articles, [
    filter(createdAfter(yearAgo)),        // 🍅 pure
    chain(prop('tags')),                  // 🧀 pure
    unique,                               // 🥓 pure
  ]);

  renderTags(uniqueTags);                 // 🍞 impure
}
```

  </div>
</div>

<!--
This slide has the scope of *software design* instead of *code*.
-->

---

<h2 class="mb-3">🗿 Immutable state</h2>

<div class="flex">
  <div v-click="1" class="flex-1 mr-5">
  <p>Shared mutable state 👎</p>

  <div class="mb-5">

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
    <li v-click="7">Non-deterministic</li>
    <li v-click="9">Harder to test</li>
  </ul>
  </div>

  <div v-click="2" class="flex-1">
  <p>Local immutable state 👍</p>

  <div class="mb-5">

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
    <li v-click="8">Referentially transparant</li>
    <li v-click="10">Easy to test</li>
  </ul>
  </div>
</div>

<!-- Right side uses *persistent data structures*. -->

---
layout: center
---

<h2 class="text-center">
  🧑‍💻 Exercise <strong class="text-6xl">08</strong>
  <div class="mt-5">⏰ 15 minutes</div>
</h2>

---

<h2 class="mb-8">🎲 Apply what you've learned</h2>

<div class="grid grid-cols-3 gap-5">
  <img v-click v-mark.cross.red src="/poll.png" :class="{'opacity-50': $clicks > 2}">

  <img v-click v-motion :initial="{ x: -100 }" :enter="{ x: 0 }"  src="/yahtzee.jpg" :class="{'opacity-50': $clicks > 2}">

  <ul>
  <li v-click><a href="http://localhost:5173/" target="_blank">Show the game</a></li>
  <li v-click>File structure and instructions</li>
  <li v-click><code>eslint-plugin-functional</code></li>
  <li v-click><a href="https://ramdajs.com/docs">ramdajs.com/docs</a></li>
  <li v-click>
    Ramda's auto-currying:

```js
map(double, [1, 2, 3]);
map(double)([1, 2, 3]);
```

  </li>
  </ul>
</div>
