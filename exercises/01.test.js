import { describe, expect, test } from 'vitest';
import { add } from './01.js';

describe('add', () => {
  test('returns the sum of two numbers', () => {
    expect(add(3)(4)).toBe(7);
  });
});
