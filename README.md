# Workshop FP Fundamentals

## Topics

1. Functions
   1. First class
      `const getServerStuff = callback => ajaxCall(json => callback(json));` copied from Mostly Adequate Guide
   2. Pure functions (referential transparency)
      > A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.
   3. Side effects (not bad, but should be contained)
      Impure functions can be made pure by wrapping them in a function (*thunk*): `() => Math.random()`
      "Dependency injection"
   4. Partial application and currying (also mention closures?)
      Partial application allows "configuration"
      Currying may force different order of arguments
   5. Total/partial functions
   6. Compose and pipe
   7. Point-free style (tacit programming)
      Subjective
   8. Hindley-Milner type signatures
2. Declarative vs imperative? Expressive code (see chapter 8.1 in FP for sceptics)
3. Algebraic Structures (implemented by Type classes), probably also tell about types of polymorphism?
   1. `Ord`, `Eq`
   2. Functor
   3. `Array`
   4. `Maybe`/`Option`
   5. `Either`/`Result`
   6. `IO`
   7. `Task`
   8. Monad
   9. Applicative
4. Algebraic Data Types
   1. Sum types
   2. Product types
