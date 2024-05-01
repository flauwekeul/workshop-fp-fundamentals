import {
  __,
  always,
  ascend,
  assoc,
  equals,
  filter,
  gte,
  ifElse,
  includes,
  map,
  pipe,
  pluck,
  props,
  sort,
  sum,
} from 'ramda';
import {
  BONUS_SCORE,
  BONUS_THRESHOLD,
  FULL_HOUSE_SCORE,
  LARGE_STRAIGHT_SCORE,
  NO_SCORE,
  SMALL_STRAIGHT_SCORE,
  YAHTZEE_SCORE,
} from '../data.js';
import { kindsCount, sequenceCount } from './dice.js';

export const upperSectionSum = (scores) => sum(props(['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'], scores));

export const bonus = ifElse(gte(__, BONUS_THRESHOLD), always(BONUS_SCORE), always(NO_SCORE));

// Each calculator is called with a sorted array of dice values, e.g.: [2, 2, 3, 4, 6]
const scoreCalculators = {
  ones: pipe(filter(equals(1)), sum),
  twos: pipe(filter(equals(2)), sum),
  threes: pipe(filter(equals(3)), sum),
  fours: pipe(filter(equals(4)), sum),
  fives: pipe(filter(equals(5)), sum),
  sixes: pipe(filter(equals(6)), sum),
  threeOfAKind: ifElse(pipe(kindsCount, includes(3)), sum, always(NO_SCORE)),
  fourOfAKind: ifElse(pipe(kindsCount, includes(4)), sum, always(NO_SCORE)),
  fullHouse: ifElse(pipe(kindsCount, sort(ascend), equals([2, 3])), always(FULL_HOUSE_SCORE), always(NO_SCORE)),
  smallStraight: ifElse(pipe(sequenceCount, gte(__, 3)), always(SMALL_STRAIGHT_SCORE), always(NO_SCORE)),
  largeStraight: ifElse(pipe(sequenceCount, gte(__, 4)), always(LARGE_STRAIGHT_SCORE), always(NO_SCORE)),
  chance: sum,
  yahtzee: ifElse(pipe(kindsCount, includes(5)), always(YAHTZEE_SCORE), always(NO_SCORE)),
};

export const updatePossibleScores = (state) =>
  assoc(
    'possibleScores',
    map((calculator) => calculator(pluck('value', state.dice)), scoreCalculators),
    state,
  );
