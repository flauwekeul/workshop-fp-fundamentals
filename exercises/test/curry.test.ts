import { describe, expect, test } from 'vitest';
import {
  curriedDescribePerson,
  describe23YearOldWebDeveloper,
  describe31YearOldBettyWhoLikesToKnit,
  describeRupert,
  multiplyAllBy,
} from '../curry';

describe('curry', () => {
  test('describePerson()', () => {
    const rupert = describeRupert('AGE', 'OCCUPATION', ['HOBBY']);
    const webDev = describe23YearOldWebDeveloper('NAME', ['HOBBY']);
    const betty = describe31YearOldBettyWhoLikesToKnit('OCCUPATION');

    expect(rupert).toBe('Rupert is AGE years old and works as a OCCUPATION. Rupert enjoys HOBBY.');
    expect(webDev).toBe('NAME is 23 years old and works as a web developer. NAME enjoys HOBBY.');
    expect(betty).toBe('Betty is 31 years old and works as a OCCUPATION. Betty enjoys knitting.');
  });

  test('curriedDescribePerson()', () => {
    expect(curriedDescribePerson('Hank')(56)('plumber')(['fishing', 'pole dancing'])).toBe(
      'Hank is 56 years old and works as a plumber. Hank enjoys fishing, pole dancing.',
    );
  });

  test('multiplyAllBy()', () => {
    const array = [1, 2, 3];
    const multiplyAllBy2 = multiplyAllBy(2);

    expect(multiplyAllBy2(array)).toEqual([2, 4, 6]);
  });
});
