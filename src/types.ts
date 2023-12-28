export type RedPlayer = Readonly<{
  color: 'red';
  name: string;
}>;

export type YellowPlayer = Readonly<{
  color: 'yellow';
  name: string;
}>;

export type Player = RedPlayer | YellowPlayer;

export type Cell = Readonly<{
  col: number;
  row: number;
  ownedBy?: Player;
}>;

export type GameState = 'playing' | 'finished';

export type Game = Readonly<{
  state: GameState;
  cells: ReadonlyArray<Cell>;
  redPlayer: RedPlayer;
  yellowPlayer: YellowPlayer;
  currentPlayer: Player;
}>;
