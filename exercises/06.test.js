import { describe, expect, test, vi } from 'vitest';
import { map, unary, parseAndDoubleAll } from './06.js';

describe('map', () => {
  test('accepts a function and array and applies the function to each item in the array', () => {
    const double = vi.fn((x) => x * 2);

    const result = map(double)([1, 2, 3]);

    expect(result).toEqual([2, 4, 6]);
    expect(double).toBeCalledTimes(3);
  });
});

describe('unary', () => {
  test('takes a function and a value and calls the function with the value', () => {
    const fn = vi.fn((a, b) => [a, b]);

    const result = unary(fn)(1);

    expect(result).toEqual([1, undefined]);
    expect(fn).toBeCalledWith(1);
  });
});

describe('parseAndDoubleAll', () => {
  test('parses an array of strings to an array of numbers and doubles each number', () => {
    const result = parseAndDoubleAll(['1', '2', '3']);

    expect(result).toEqual([2, 4, 6]);
  });
});
