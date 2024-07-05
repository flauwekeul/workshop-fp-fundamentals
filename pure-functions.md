---
layout: center
---

<div class="mb-12">

```js
const subtract = (a, b) => a - b;
```

</div>

<PureOrNot answer="pure" />

<style>
    code {
        font-size: 1rem;
    }
</style>

---
layout: center
---

<div class="mb-12">

```js
function launchNukes() {
  missiles.forEach((missile) => {
    missile.launch();
  });
}
```

</div>

<PureOrNot answer="impure" />

<!-- Impure because launching missiles has quite an effect on the world. -->

---
layout: center
---

<div class="mb-12">

```js
const calculate = (a, b) => {
  console.log(a, b);
  return a * b;
}
```

</div>

<PureOrNot answer="impure" />

<!-- Impure because logging impacts the world (although hardly) -->

---
layout: center
---

<div class="mb-12">

```ts
function getWidth(element: HTMLElement): number {
  return element.clientWidth;
}
```

</div>

<PureOrNot answer="pure" />

<div v-click class="opacity-50 text-xs mt-5">(But <code>element</code> won't be immutable…)</div>

<!-- Probably non-deterministic (element width can be different each time this function is called). -->

---
layout: center
---

<div class="mb-12">

```js
const prop = (keyName) => (obj) => obj[keyName];
```

</div>

<PureOrNot answer="pure" />

<div v-click class="opacity-50 text-xs mt-5">(Unless the property is a getter with side effects…)</div>

<!-- It's probably safe to assume the property is not a getter with side-effects. -->

---
layout: center
---

<div class="mb-12">

```js
function divide(a, b) {
  if (b === 0) {
    throw Error(`Can't divide by 0!`);
  }
  return a / b;
}
```

</div>

<PureOrNot answer="impure" />

<!--
Throwing errors makes the function *partial* (as opposed to *total*):
some inputs may cause the function to produce a side-effect (possibly panicking the program).
-->

---
layout: center
---

<div class="mb-12">

```js
function fetchUsers(fetch) {
  return fetch('/api/users').then(response => response.json());
}
```

</div>

<PureOrNot answer="impure" />

<!-- `fetch` isn't pure, so `fetchUsers` isn't pure. It also doesn't handle errors, so it may throw. -->

---
layout: center
---

<div class="mb-12">

```js
const randomInt = (min = 0, max = min + 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

</div>

<PureOrNot answer="impure" />

<!--
It's possible to have pure functions that return random data by passing (and returning)
a random number generator initialized with a seed value.
-->

---
layout: center
---

<div class="mb-12">

<a href="https://xkcd.com/221" target="_blank" class="color-gray-500 text-sm">
  <img src="https://imgs.xkcd.com/comics/random_number.png" class="mx-auto">
  <cite class="block text-center">xkcd.com/221</cite>
</a>

</div>

<PureOrNot answer="pure" />
