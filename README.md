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
   3. `flatMap()` (a.k.a. `bind()`)
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

## Changes to slides

* Replace "declarative" with "expressive". And mention some advantages of FP aren't exclusive to FP.
*
  ```html
  <blockquote cite="https://www.thebehavioralscientist.com/glossary/familiarity-bias#:~:text=unfamiliar%20options%20may%20be%20perceived%20as%20more%20difficult%20to%20process%2C%20which%20can%20make%20them%20less%20appealing" class="font-serif italic">
    …unfamiliar options may be perceived as more difficult to process, which can make them less appealing.
  </blockquote>
  ```
* Stratified Design
* Onion Architecture

## Todo:

* Make sure `"editor.bracketPairColorization.enabled": true,` is enabled in VSCode
* Make sure GitHub Copilot is disabled
