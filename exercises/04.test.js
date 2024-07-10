import { describe, expect, test, vi } from 'vitest';
import { flowCallbackResult, flowFn, flowResult, pipeCallbackResult, pipeFn, pipeResult } from './04.js';

describe('transforming in-place', () => {
  test('transforms 3 into 2', () => {
    expect(pipeResult).toBe(2);
    expect(flowResult).toBe(2);
  });
});

describe('transforming with a callback', () => {
  test('transforms 3 into 2', () => {
    expect(pipeCallbackResult).toBe(2);
    expect(flowCallbackResult).toBe(2);
  });
});

describe('transforming in a function', () => {
  test('transforms 3 into 2', () => {
    expect(pipeFn(3)).toBe(2);
    expect(flowFn(3)).toBe(2);
  });
});
