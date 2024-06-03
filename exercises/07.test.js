import { describe, expect, test, vi } from 'vitest';
import { sortByValueAscending } from './07.js';

describe('sortByValueAscending', () => {
  test('sorts an array of numbers in ascending order', () => {
    const result = sortByValueAscending([{ value: 8 }, { value: 10 }, { value: 3 }, { value: 1 }, { value: -5 }]);

    expect(result).toEqual([{ value: -5 }, { value: 1 }, { value: 3 }, { value: 8 }, { value: 10 }]);
  });
});
