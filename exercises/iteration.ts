/**
 * Implement a map() function that takes an array and callback.
 * It returns a new array with the results of the callback applied to each element.
 *
 * @example:
 * ```ts
 * map([1, 2, 3], (item) => item * 2) // [2, 4, 6]
 * ```
 *
 * Try not to use the built-in Array map() function.
 * Bonus points if you can do it with recursion.
 */
export const map = <T, U>(array: T[], callback: (item: T) => U): U[] => {
  // implement
};

/**
 * Implement a filter() function that takes an array and predicate function.
 * It returns a new array with only the elements that pass the predicate.
 *
 * @example:
 * ```ts
 * filter([1, 2, 3], (item) => item > 2) // [3]
 * ```
 *
 * Try not to use the built-in Array filter() function.
 * Bonus points if you can do it with recursion.
 */
export const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  // implement
};

/**
 * Implement a reduce() function that takes an array, an initial value and a reducer function.
 * It returns the same type as the initial value by calling the reducer.
 *
 * @example:
 * ```ts
 * reduce([1, 2, 3], 0, (acc, item) => acc + item) // 6
 * ```
 *
 * Try not to use the built-in Array reduce() function.
 * Bonus points if you can do it with recursion.
 */
export const reduce = <T, U>(array: T[], initial: U, reducer: (acc: U, item: T) => U): U => {
  // implement
};
