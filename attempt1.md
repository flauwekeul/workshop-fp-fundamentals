<!--
* A function `add1` that takes a value, adds 1 to it and returns the result.
* Won't work on an array without making a special implementation for handling arrays: `add1([1, 2, 3])`.
* Won't work on a promise without making a special implementation for handling promises: `add1(Promise.resolve(1))`.
* So how do you apply `add1` (or any function) to an array or promise? `map` and `then` respectively.
* `Array`'s `map` applies a function to the *contents* of the array. You get back a new array, but with different contents.
* `Promise`'s `then` applies a function to a future value. You get back a new promise, but with different contents.
* Arrays and promises are both (almost) functors: containers that have a way to apply functions to their contents.
  * Exercise: implement List and Task?
* Maybe.
* Either.
  * Exercise: implement Maybe and Either.
* Functors don't have to be containers. There only needs to be a `map` that knows how to apply a function to a particular value.
* In JS we use "namespaces" (POJOs) to keep these `map`s apart.
  * Exercise: rewrite List, Task, Maybe and Either to a namespaced version.
* Functor laws.
* Task and why promises aren't functors (it's because promises also work with POJOs that have a `then` prop, I think)?
* IO.
  * Exercise: implement IO.
-->

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
