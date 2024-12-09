import { describe, expect, test, vi } from 'vitest';
import { Either } from './10.js';

const identity = (x) => x;

describe('Either', () => {
  test('fromNullable', () => {
    expect(Either.fromNullable('fallback')(1)).toEqual({ _tag: 'Right', right: 1 });
    expect(Either.fromNullable('fallback')(null)).toEqual({ _tag: 'Left', left: 'fallback' });
  });

  test('map', () => {
    expect(Either.map((x) => x + 1)({ _tag: 'Right', right: 1 })).toEqual({ _tag: 'Right', right: 2 });
    expect(Either.map((x) => x + 1)({ _tag: 'Left', left: 'fallback' })).toEqual({ _tag: 'Left', left: 'fallback' });
  });

  test('fold', () => {
    expect(Either.fold(identity, identity)({ _tag: 'Right', right: 1 })).toBe(1);
    expect(Either.fold(identity, identity)({ _tag: 'Left', left: 'fallback' })).toBe('fallback');
  });

  test('tryCatch', () => {
    expect(
      Either.tryCatch(
        (x) => x + 1,
        () => 'fallback',
      )(1),
    ).toEqual({ _tag: 'Right', right: 2 });
    expect(
      Either.tryCatch(
        () => {
          throw 'error';
        },
        () => 'fallback',
      )('error'),
    ).toEqual({ _tag: 'Left', left: 'fallback' });
  });
});
