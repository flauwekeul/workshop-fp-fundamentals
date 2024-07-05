import { describe, expect, test, vi } from 'vitest';
import { result2 } from './08.js';

describe('todo list', () => {
  test('has 2 items with the first done', () => {
    expect(result2).toEqual([
      { text: expect.any(String), done: true },
      { text: expect.any(String), done: false },
    ]);
  });
});
