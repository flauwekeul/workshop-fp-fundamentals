import { ReadonlyNonEmptyArray } from 'fp-ts/ReadonlyNonEmptyArray';

export type Color = 'red' | 'yellow';

export type Cell = {
  col: number;
  row: number;
  ownedBy?: Color;
};

export type Player = {
  name: string;
};

export type Players = {
  [key in Color]: Player;
};

export type GameState = 'playing' | 'finished';

export type Game = {
  state: GameState;
  cells: ReadonlyNonEmptyArray<Cell>;
  currentColor: Color;
  players: Players;
};
