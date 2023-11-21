import { describe, expect, test, vi } from 'vitest';
import { add1, addOneToAllSolution, fetchJSON, getServerStuffSolution } from '../simplify';

const getServerStuffIsSimplified = getServerStuffSolution === fetchJSON;

describe('Simplify', () => {
  test.only('addOneToAll()', () => {
    const numbers = [1];
    const mapSpy = vi.fn();
    numbers.map = mapSpy;

    addOneToAllSolution(numbers);

    const addOneToAllIsSimplified = mapSpy.mock.calls[0] === add1;
    // this comment obscures details that could give away the correct solution 😅

    expect(addOneToAllIsSimplified).toBe(true);
  });

  test('getServerStuff()', () => {
    expect(getServerStuffIsSimplified).toBe(true);
  });
});
