import { describe, expect, test, vi } from 'vitest';
import { pipe, flow } from './05';

describe('pipe', () => {
  test('composes the passed functions left to right and applies the passed value to it', () => {
    const increment = vi.fn((x) => x + 1);
    const double = vi.fn((x) => x * 2);

    const result = pipe(increment, double)(1);

    expect(result).toBe(4);
    expect(increment).toBeCalledWith(1);
    expect(double).toBeCalledWith(2);
  });
});

describe('flow', () => {
  test('composes the passed functions left to right and applies the passed value to it', () => {
    const increment = vi.fn((x) => x + 1);
    const double = vi.fn((x) => x * 2);

    const result = flow(1, [increment, double]);

    expect(result).toBe(4);
    expect(increment).toBeCalledWith(1);
    expect(double).toBeCalledWith(2);
  });
});
