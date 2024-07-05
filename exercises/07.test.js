import { describe, expect, test, vi } from 'vitest';
import { sortByAscendingValue } from './07.js';

describe('sortByAscendingValue', () => {
  test('sorts an array of numbers in ascending order', () => {
    const result = sortByAscendingValue([{ value: 8 }, { value: 10 }, { value: 3 }, { value: 1 }, { value: -5 }]);

    expect(result).toEqual([{ value: -5 }, { value: 1 }, { value: 3 }, { value: 8 }, { value: 10 }]);
  });
});
