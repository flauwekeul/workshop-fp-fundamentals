import {
  __,
  always,
  ascend,
  assoc,
  equals,
  filter,
  flow,
  groupBy,
  gte,
  identity,
  ifElse,
  includes,
  length,
  map,
  modify,
  pipe,
  pluck,
  prop,
  props,
  sort,
  subtract,
  sum,
  tail,
  unless,
  values,
  zipWith,
} from 'ramda';

const randomDieValue = (rng) => Math.floor(rng() * 6) + 1;

export const rollDice = (state) =>
  modify(
    'dice',
    pipe(
      map(unless(prop('hold'), () => ({ value: randomDieValue(state.rng), hold: false }))),
      sort(ascend(prop('value'))),
    ),
    state,
  );

export const upperSectionSum = (scores) => sum(props(['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'], scores));

export const bonus = ifElse(gte(__, 63), always(35), always(0));

const kindsCount = (dice) => flow(dice, [groupBy(identity), map(prop('length')), values]);

const sequenceCount = (dice) => flow(dice, [zipWith(subtract, tail(dice)), filter(equals(1)), length]);

// Each calculator is called with a sorted array of dice values, e.g.: [2, 2, 3, 4, 6]
const SCORE_CALCULATORS = {
  ones: pipe(filter(equals(1)), sum),
  twos: pipe(filter(equals(2)), sum),
  threes: pipe(filter(equals(3)), sum),
  fours: pipe(filter(equals(4)), sum),
  fives: pipe(filter(equals(5)), sum),
  sixes: pipe(filter(equals(6)), sum),
  threeOfAKind: ifElse(pipe(kindsCount, includes(3)), sum, always(0)),
  fourOfAKind: ifElse(pipe(kindsCount, includes(4)), sum, always(0)),
  fullHouse: ifElse(pipe(kindsCount, sort(ascend), equals([2, 3])), always(25), always(0)),
  smallStraight: ifElse(pipe(sequenceCount, gte(__, 3)), always(30), always(0)),
  largeStraight: ifElse(pipe(sequenceCount, gte(__, 4)), always(40), always(0)),
  chance: sum,
  yahtzee: ifElse(pipe(kindsCount, includes(5)), always(50), always(0)),
};

export const updatePossibleScores = (state) =>
  assoc(
    'possibleScores',
    map((calculator) => calculator(pluck('value', state.dice)), SCORE_CALCULATORS),
    state,
  );
