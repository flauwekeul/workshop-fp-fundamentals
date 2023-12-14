import { describe, expect, test, vi } from 'vitest';
import { pipe, shouldBe19 } from '../composition';

describe('composition', () => {
  test('pipe()', () => {
    const fn1 = vi.fn((n: number) => n + 1);
    const fn2 = vi.fn((_: unknown) => _);

    const result = pipe(fn1, fn2)(1);

    expect(shouldBe19).toBe(19);
    expect(result).toBe(2);
    expect(fn1).toBeCalledWith(1);
    expect(fn2).toBeCalledWith(2);
  });
});
