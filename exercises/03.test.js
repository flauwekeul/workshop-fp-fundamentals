import { describe, expect, test, vi } from 'vitest';
import { getServerStuff } from './03.js';

describe('getServerStuff', () => {
  test('calls the callback', () => {
    const callback = vi.fn();
    getServerStuff(callback);

    expect(callback).toBeCalledWith({ data: true });
  });
});
