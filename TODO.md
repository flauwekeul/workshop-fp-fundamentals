# Workshop FP Fundamentals

## Topics

1. Functions
    1. First class
       `const getServerStuff = callback => ajaxCall(json => callback(json));` copied from Mostly Adequate Guide
    2. Pure functions (referential transparency)
       > A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.
       Subtle example of an impure function:
       ```js
       let minimum = 21;
       const checkAge = age => age >= minimum;
       ```
    3. Side effects (not bad, but should be contained)
       Impure functions can be made pure by wrapping them in a function (*thunk*): `() => Math.random()`
       "Dependency injection"
    4. Partial application and currying (also mention closures?)
       Partial application allows "configuration"
       Currying helps to compose n-ary functions and may force different order of arguments
    5. Compose and pipe
    6. Total/partial functions (nice bridge to `Maybe`/`Option` and `Either`/`Result`)
    7. Point-free style (tacit programming)
       Subjective
    8. Hindley-Milner type signatures
2. Declarative vs imperative? Expressive code (see chapter 8.1 in FP for sceptics)
    1.  In declarative code there's fewer variables, often only at the edges of the program; data and behavior are separated
3. Explain:
    1. `map()` (also `map2()`?)
    2. `of()` (a.k.a. `return()`)
    3. `flatMap()` (a.k.a. `chain()`(?) or `bind()`)
    4. `apply()` (`Promise.all()` is maybe a tiny bit similar?): apply a (curried) function wrapped in a monad to arguments wrapped in a monad
       See: https://youtu.be/d2yLsBn_Lz0?si=VBXWuNY3V0sj_5m8&t=2544 and https://ramdajs.com/docs/#ap
    5. `reduce()` (a.k.a. `fold()`)?
    6. `traverse()`?
    7. Functor: `map()`, Applicative: `of()` and `apply()`, Monad: `of()` and `flatMap()`
4. Algebraic Structures (implemented by Type classes), probably also tell about types of polymorphism?
    1. `Ord`, `Eq`
    2. Functor
    3. `Array`
    4. `Maybe`/`Option`
    5. `Either`/`Result`
    6. `IO`
    7. `Task`
    8. Monad
    9. Applicative
5. Algebraic Data Types
    1. Sum types
    2. Product types
6. Architecture?
    1. Stratified Design
    2. Onion Architecture
    3. DDD
    4. [Universal Process Pattern](https://ericnormand.me/podcast/what-is-the-universal-process-pattern)?

Also incorporate?
```
lift0 =  a              ->  SomeType a
lift1 = (a -> b)        -> (SomeType a -> SomeType b)
lift2 = (a -> b -> c)   -> (SomeType a -> SomeType b -> SomeType c)
```

## Todo:

* Use https://sli.dev/guide/syntax#monaco-runner
* Rename to something like "Functional Programming in JavaScript"?

### Learning opportunities:

1. [x] Separating code into data, calculations and effects
    * Effects are "contagious" (similar to promises)
2. [x] State:
    * Immutable
    * Store state snapshots in an array (bonus)
    * Flow: event listeners (effects) -> next state (calculations) -> update UI (effects) (**visualize this**)
3. [x] Currying
    * Ramda's auto-currying
    * Partial application
    * Order of arguments: value last, or: from least to most likely to change
4. [x] Function composition
    * Programs change state by passing it from function to function; they're "pipelines" (visualize, also mention sequential and parallel computations)
    * `flow` vs `pipe` vs lambda (rule of thumb: named functions always have explicit args, inline functions only have args when they're needed in scope)
    * When and when not to use point-free style
    * When to extract code to new functions vs when to leave it inline
5. [ ] Abstractions
    * When to use syntax (e.g. operators, property accessors) vs functions (answer: functions as much as possible, they're composable, but syntax is more familiar)

## Exercise ideas

* For the last "big exercise": refactor code that does something with data coming from something like Contentful. The code is imperative, first step is to use Array methods, then function composition, finally maybe monads, functions, applicatives?
* Start with replacing imperative iterations to Array methods, then to curried ramda functions.
* Implement flatMap, map, filter, take, groupBy using only `reduce()`
* Create a game with simple AI players and just logging as output (e.g. https://youtu.be/vK1DazRK_a0?si=POqr1UnSS2GO5ESw&t=3124)
* Server side form validation
* File upload:
    * for each file:
        * validate (size, mimetype) -> create hash -> get presigned url -> upload file
        * show progress bar
        * show any errors
        * retries?
* Create AND and OR operators using lambda calculus: https://youtu.be/eis11j_iGMs?si=rw_AqZmHBNRTX6Ty (maybe also explain the y-combinator that makes recursion possible)
* Implement strategies for the Prisoners Dilemma according to [Veritasium's video](https://youtu.be/mScpHTIi-kM?si=LTzV2O8cYX9LFcGx&t=395)
* When using js, there's less type safety, so make functions that wrap the curried map, filter, reduce, etc functions that add type safety at runtime. Similar to Spec in Clojure.
* map, filter, reduce, etc that also work for Objects, Maps and Sets
* Declarative API for DOM or [Web API](https://dev.to/eludadev/12-rarely-used-javascript-web-apis-that-will-take-your-website-to-the-next-level-4lf1)s
* Pretend FE frameworks don't exist and create your own
* Parse [s-expressions](https://www.freecodecamp.org/news/s-expressions-in-javascript/)

## Migrate to FP:

* move (shared) state into a single structure
    * replace redundant state with derived state (calculations)
* identify mutations and effects (and more?)
* replace mutations with pure functions
* move effects to the boundary of the system
* distribute functionality over generic helpers, domain functions and effects (?)
