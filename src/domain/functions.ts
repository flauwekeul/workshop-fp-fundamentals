import { CELLS } from './constants.js';
import { Game, Players } from './types.js';

export const createGame = (players: Players): Game => ({
  state: 'playing',
  cells: CELLS,
  currentColor: 'red',
  players,
});
