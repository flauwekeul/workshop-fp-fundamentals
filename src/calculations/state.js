import { ascend, assoc, dec, flow, map, modify, pipe, prop, sort } from 'ramda';
import { MAX_THROWS } from '../data.js';
import { randomDice } from '../effects/dice.js';
import { possibleScores } from './scores.js';

export const decrementThrowsLeft = (state) => modify('throwsLeft', dec, state);

export const resetThrowsLeft = (state) => assoc('throwsLeft', MAX_THROWS, state);

export const resetHeldDice = (state) => modify('dice', map(assoc('hold', false)), state);

export const updateDiceValues = (state) =>
  modify('dice', pipe(randomDice(state.rng), sort(ascend(prop('value')))), state);

export const updatePossibleScores = (state) => assoc('possibleScores', possibleScores(state.dice), state);

const otherPlayer = (currentPlayer) => (currentPlayer === 'player1' ? 'player2' : 'player1');

export const currentPlayerScores = (state) => state[state.currentPlayer].scores;

export const canHoldDie = (state) => state.throwsLeft < MAX_THROWS;

export const switchPlayer = (state) =>
  flow(state, [modify('currentPlayer', otherPlayer), resetThrowsLeft, resetHeldDice]);
