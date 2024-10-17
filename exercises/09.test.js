import { describe, expect, test, vi } from 'vitest';
import { Maybe } from './09.js';

describe('Maybe', () => {
  test('isNothing', () => {
    expect(Maybe.isNothing(null)).toBe(true);
    expect(Maybe.isNothing(undefined)).toBe(true);
    expect(Maybe.isNothing(0)).toBe(false);
    expect(Maybe.isNothing('')).toBe(false);
  });

  test('of', () => {
    expect(Maybe.of('hello')).toBe('hello');
    expect(Maybe.of(null)).toBe(null);
    expect(Maybe.of(undefined)).toBe(undefined);
  });

  test('map', () => {
    const safeInc = Maybe.map((x) => x + 1);

    expect(safeInc(null)).toBe(null);
    expect(safeInc(undefined)).toBe(undefined);
    expect(safeInc(0)).toBe(1);
  });
});
