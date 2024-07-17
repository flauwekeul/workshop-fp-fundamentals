import { map, pluck } from 'ramda';
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

export const decrementThrowsLeft = (state) => state;

export const updateHeldDie = (dieIndex) => (state) => state;

export const updatePlayerScore = (scoreId, score, state) => state;

const otherPlayer = (currentPlayer) => 'player1';

const resetThrowsLeft = (state) => state;

const resetHeldDice = (state) => state;

export const switchPlayer = (state) => state;

export const currentPlayerScores = (state) => state.player1.scores;

export const canHoldDie = (state) => true;

/**
 * Scores
 */

// Returns an array of the counts of each kind of die value, e.g.: [2, 2, 3, 5, 5] returns [2, 1, 2]
const kindsCount = (diceValues) => [];

// Very difficult to come up with this 🤯
export const sequenceCount = (diceValues) => 0;

// Each calculator is called with a sorted array of dice values, e.g.: [2, 2, 3, 4, 6]
const scoreCalculators = {
  ones: (diceValues) => 0,
  twos: (diceValues) => 0,
  threes: (diceValues) => 0,
  fours: (diceValues) => 0,
  fives: (diceValues) => 0,
  sixes: (diceValues) => 0,
  threeOfAKind: (diceValues) => 0,
  fourOfAKind: (diceValues) => 0,
  fullHouse: (diceValues) => 0,
  smallStraight: (diceValues) => 0,
  largeStraight: (diceValues) => 0,
  chance: (diceValues) => 0,
  // When yahtzee is scored when it's been scored before, 100 points should be awarded.
  // But to keep things simple, yahtzee always scores 50 points.
  yahtzee: (diceValues) => 0,
};

export const possibleScores = (dice) => map((calculator) => calculator(pluck('value', dice)), scoreCalculators);

export const upperSectionSum = (scores) => 0;

export const bonus = (sum) => 0;

export const totalScore = (scores) => 0;

export const anyScoresEmpty = (state) => true;

export const winner = 'player1';
