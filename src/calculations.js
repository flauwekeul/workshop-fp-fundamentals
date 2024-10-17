import {
  __,
  always,
  any,
  assoc,
  assocPath,
  both,
  chain,
  curry,
  dec,
  equals,
  filter,
  flow,
  groupBy,
  gte,
  identity,
  ifElse,
  includes,
  isNil,
  length,
  map,
  max,
  modify,
  modifyPath,
  not,
  paths,
  pipe,
  pluck,
  prop,
  props,
  reduce,
  splitWhenever,
  subtract,
  sum,
  tail,
  uniq,
  values,
  zipWith,
} from 'ramda';
import {
  BONUS_SCORE,
  BONUS_THRESHOLD,
  FULL_HOUSE_SCORE,
  LARGE_STRAIGHT_SCORE,
  MAX_THROWS,
  NO_SCORE,
  SMALL_STRAIGHT_SCORE,
  YAHTZEE_SCORE,
} from './state.js';

export const decrementThrowsLeft = (state) => modify('throwsLeft', dec, state);

export const updateHeldDie = (dieIndex) => modifyPath(['dice', dieIndex, 'hold'], not);

export const updatePlayerScore = curry((scoreId, score, state) =>
  assocPath([state.currentPlayer, 'scores', scoreId], score, state),
);

const otherPlayer = (currentPlayer) => (currentPlayer === 'player1' ? 'player2' : 'player1');

const resetThrowsLeft = (state) => assoc('throwsLeft', MAX_THROWS, state);

const resetHeldDice = (state) => modify('dice', map(assoc('hold', false)), state);

export const switchPlayer = (state) =>
  flow(state, [modify('currentPlayer', otherPlayer), resetThrowsLeft, resetHeldDice]);

export const anyScoresEmpty = (state) =>
  flow(state, [
    paths([
      ['player1', 'scores'],
      ['player2', 'scores'],
    ]),
    chain(values),
    any(isNil),
  ]);

/**
 * 🚫 The following functions are done. No need to change them.
 */

export const currentPlayerScores = (state) => state[state.currentPlayer].scores;

export const canHoldDie = (state) => state.throwsLeft < MAX_THROWS;

// Returns an array of the counts of each kind of die value, e.g.: [2, 2, 3, 5, 5] returns [2, 1, 2]
const kindsCount = (diceValues) => flow(diceValues, [groupBy(identity), map(prop('length')), values]);

// Very difficult to come up with this 🤯
export const sequenceCount = (diceValues) => {
  const uniqueValues = uniq(diceValues);
  return flow(uniqueValues, [
    // Make a list of the differences between each die value (this list is 1 shorter than the original list)
    zipWith(subtract, tail(uniqueValues)),
    // Split the list into groups that each have differences of 1
    splitWhenever((diff) => diff !== 1),
    // Get the length of each group
    map(length),
    // Find the maximum length
    reduce(max, 0),
  ]);
};

const sumWithValue = (kind) => pipe(filter(equals(kind)), sum);

// Each calculator is called with a sorted array of dice values, e.g.: [2, 2, 3, 4, 6]
const scoreCalculators = {
  ones: sumWithValue(1),
  twos: sumWithValue(2),
  threes: sumWithValue(3),
  fours: sumWithValue(4),
  fives: sumWithValue(5),
  sixes: sumWithValue(6),
  threeOfAKind: ifElse(pipe(kindsCount, any(gte(__, 3))), sum, always(NO_SCORE)),
  fourOfAKind: ifElse(pipe(kindsCount, any(gte(__, 4))), sum, always(NO_SCORE)),
  fullHouse: ifElse(pipe(kindsCount, both(includes(2), includes(3))), always(FULL_HOUSE_SCORE), always(NO_SCORE)),
  smallStraight: ifElse(pipe(sequenceCount, gte(__, 3)), always(SMALL_STRAIGHT_SCORE), always(NO_SCORE)),
  largeStraight: ifElse(pipe(sequenceCount, gte(__, 4)), always(LARGE_STRAIGHT_SCORE), always(NO_SCORE)),
  chance: sum,
  // When yahtzee is scored when it's been scored before, 100 points should be awarded.
  // But to keep things simple, yahtzee always scores 50 points.
  yahtzee: ifElse(pipe(kindsCount, includes(5)), always(YAHTZEE_SCORE), always(NO_SCORE)),
};

export const possibleScores = (dice) => map((calculator) => calculator(pluck('value', dice)), scoreCalculators);

export const upperSectionSum = (scores) => sum(props(['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'], scores));

export const bonus = (sum) => (sum >= BONUS_THRESHOLD ? BONUS_SCORE : NO_SCORE);

export const totalScore = (scores) => sum(values(scores));

export const winner = ifElse(
  (state) => totalScore(state.player1.scores) > totalScore(state.player2.scores),
  prop('player1'),
  prop('player2'),
);
