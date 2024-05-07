import { assoc, assocPath, curry, dec, flow, map, modify } from 'ramda';
import { MAX_THROWS } from '../data.js';

export const decrementThrowsLeft = (state) => modify('throwsLeft', dec, state);

export const updateHeldDie = curry((dieIndex, isHeld, state) => assocPath(['dice', dieIndex, 'hold'], isHeld, state));

export const updatePlayerScore = curry((scoreId, score, state) =>
  assocPath([state.currentPlayer, 'scores', scoreId], parseInt(score), state),
);

const otherPlayer = (currentPlayer) => (currentPlayer === 'player1' ? 'player2' : 'player1');

const resetThrowsLeft = (state) => assoc('throwsLeft', MAX_THROWS, state);

const resetHeldDice = (state) => modify('dice', map(assoc('hold', false)), state);

export const switchPlayer = (state) =>
  flow(state, [modify('currentPlayer', otherPlayer), resetThrowsLeft, resetHeldDice]);

export const currentPlayerScores = (state) => state[state.currentPlayer].scores;

export const canHoldDie = (state) => state.throwsLeft < MAX_THROWS;
