import { describe, expect, test, vi } from 'vitest';
import { compose } from './04';

describe('compose', () => {
  test('composes the passed functions and applies the passed value to it', () => {
    const increment = vi.fn((x) => x + 1);
    const double = vi.fn((x) => x * 2);

    const result = compose(increment, double)(1);

    expect(result).toBe(3);
    expect(increment).toBeCalledWith(2);
    expect(double).toBeCalledWith(1);
  });
});
