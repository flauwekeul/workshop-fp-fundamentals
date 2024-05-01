import { assoc, assocPath, curry, dec, flow, modify } from 'ramda';
import { randomDice } from './dice.js';
import { possibleScores } from './scores.js';

const decrementThrowsLeft = (state) => modify('throwsLeft', dec, state);

const resetThrowsLeft = (state) => assoc('throwsLeft', 3, state);

const updateDice = (state) => modify('dice', randomDice(state.rng), state);

const updatePossibleScores = (state) => assoc('possibleScores', possibleScores(state.dice), state);

const otherPlayer = (currentPlayer) => (currentPlayer === 'player1' ? 'player2' : 'player1');

export const currentPlayerScores = (state) => state[state.currentPlayer].scores;

export const rollDice = (state) => flow(state, [updateDice, decrementThrowsLeft, updatePossibleScores]);

export const chooseScore = curry((scoreId, score, state) =>
  assocPath([state.currentPlayer, 'scores', scoreId], Number.parseInt(score), state),
);

export const switchPlayer = (state) => flow(state, [modify('currentPlayer', otherPlayer), resetThrowsLeft]);
