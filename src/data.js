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

export const initialState = {
  player1: {
    name: 'Hank',
    scores: SCORES,
  },
  player2: {
    name: 'Fred',
    scores: SCORES,
  },
  currentPlayer: 'player1',
  possibleScores: SCORES,
  throwsLeft: 3,
  dice: [
    { value: 1, hold: false },
    { value: 2, hold: false },
    { value: 3, hold: false },
    { value: 4, hold: false },
    { value: 5, hold: false },
  ],
  rng: Math.random,
};
