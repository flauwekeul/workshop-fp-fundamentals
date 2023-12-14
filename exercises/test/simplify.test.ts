import { describe, expect, test, vi } from 'vitest';
import { add1, addOneToAll, fetchJSON, getServerStuff } from '../simplify';

const getServerStuffIsSimplified = getServerStuff === fetchJSON;

describe('Simplify', () => {
  test('addOneToAll()', () => {
    const numbers = [1];
    const mapSpy = vi.fn();
    numbers.map = mapSpy;

    addOneToAll(numbers);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const addOneToAllIsSimplified = mapSpy.mock.calls[0][0] === add1;
    // this comment obscures details that could give away the correct solution 😅

    expect(addOneToAllIsSimplified).toBe(true);
  });

  test('getServerStuff()', () => {
    expect(getServerStuffIsSimplified).toBe(true);
  });
});
