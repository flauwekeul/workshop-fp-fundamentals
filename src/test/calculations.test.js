import { describe, expect, test } from 'vitest';
import { sequenceCount } from '../calculations.js';

describe('sequenceCount', () => {
  test('returns the length of the longest sequence of consecutive numbers', () => {
    expect(sequenceCount([1, 2, 3, 4, 5])).toBe(4);
    expect(sequenceCount([1, 2, 4, 5, 6])).toBe(2);
    expect(sequenceCount([1, 2, 3, 5, 6])).toBe(2);
    expect(sequenceCount([1, 2, 4, 4, 6])).toBe(1);
    expect(sequenceCount([2, 2, 3, 4, 5])).toBe(3);
    expect(sequenceCount([1, 1, 1, 1, 1])).toBe(0);
    expect(sequenceCount([1, 1, 1, 1, 2])).toBe(1);
    expect(sequenceCount([3, 4, 5, 5, 6])).toBe(3);
  });
});
