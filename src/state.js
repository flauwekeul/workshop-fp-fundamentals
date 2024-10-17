// ⛔️ No need to make changes in this file

export const MAX_THROWS = 3;

export const NO_SCORE = 0;

export const BONUS_THRESHOLD = 63;

export const BONUS_SCORE = 35;

export const FULL_HOUSE_SCORE = 25;

export const SMALL_STRAIGHT_SCORE = 30;

export const LARGE_STRAIGHT_SCORE = 40;

export const YAHTZEE_SCORE = 50;

export const SCORES = {
  ones: null,
  twos: null,
  threes: null,
  fours: null,
  fives: null,
  sixes: null,
  threeOfAKind: null,
  fourOfAKind: null,
  fullHouse: null,
  smallStraight: null,
  largeStraight: null,
  yahtzee: null,
  chance: null,
};

export const INITIAL_STATE = {
  player1: {
    name: 'Hank',
    scores: SCORES,
  },
  player2: {
    name: 'Fred',
    scores: SCORES,
  },
  currentPlayer: 'player1',
  throwsLeft: MAX_THROWS,
  dice: [
    { value: 1, hold: false },
    { value: 2, hold: false },
    { value: 3, hold: false },
    { value: 4, hold: false },
    { value: 5, hold: false },
  ],
};
