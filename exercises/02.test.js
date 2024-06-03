import { describe, expect, test } from 'vitest';
import { flip } from './02.js';

describe('flip', () => {
  test('flips the first two arguments of a function', () => {
    const subtract = (a, b) => a - b;
    const flippedSubtract = flip(subtract);

    expect(subtract(3, 4)).toBe(-1);
    expect(flippedSubtract(3, 4)).toBe(1);
  });

  test('only flips the first two arguments', () => {
    expect(Array.of(1, 2, 3)).toEqual([1, 2, 3]);
    expect(flip(Array.of)(1, 2, 3)).toEqual([2, 1, 3]);
  });

  test('also works with less than two arguments', () => {
    const negate = (a) => -a;
    const flippedNegate = flip(negate);

    expect(negate(3)).toBe(-3);
    expect(flippedNegate(3)).toBe(-3);
  });
});
