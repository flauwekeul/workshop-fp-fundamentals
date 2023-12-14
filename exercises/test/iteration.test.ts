import { describe, expect, test, vi } from 'vitest';
import { filter, map, reduce } from '../iteration';

describe('Iteration', () => {
  test('map()', () => {
    const array = [1, 2, 3];
    const callback = vi.fn((item: number): number => item * 2);

    const result = map(array, callback);

    expect(result).toEqual([2, 4, 6]);
    expect(callback).toBeCalledTimes(3);
    expect(array).toEqual([1, 2, 3]);
  });

  test('filter()', () => {
    const array = [1, 2, 3];
    const predicate = vi.fn((item: number): boolean => item > 2);

    const result = filter(array, predicate);

    expect(result).toEqual([3]);
    expect(predicate).toBeCalledTimes(3);
    expect(array).toEqual([1, 2, 3]);
  });

  test('reduce()', () => {
    const array = [1, 2, 3];
    const initial = 0;
    const reducer = vi.fn((acc: number, item: number): number => acc + item);

    const result = reduce(array, initial, reducer);

    expect(result).toEqual(6);
    expect(reducer).toBeCalledTimes(3);
    expect(array).toEqual([1, 2, 3]);
  });
});
