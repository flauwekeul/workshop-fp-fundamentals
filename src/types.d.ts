type Player = {
  name: string;
  color: 'red' | 'yellow';
};

type Cell = {
  col: number;
  row: number;
  ownedBy?: Player;
};

type GameState = 'playing' | 'finished';

type Game = {
  state: GameState;
  cells: Cell[];
  players: [Player, Player];
  currentPlayer: Player;
};

// type ImmutableShallow<T extends object> = {
//   readonly [P in keyof T & object]: T[P];
// };

// type Player = Readonly<{
//   name: string;
//   color: 'red' | 'yellow';
// }>;

// type Cell = Readonly<{
//   col: number;
//   row: number;
//   ownedBy?: Player;
// }>;

// type GameState = 'playing' | 'finished';

// type Game = Readonly<{
//   state: GameState;
//   cells: ImmutableShallow<ReadonlyArray<Cell>>;
//   players: ImmutableShallow<ReadonlyArray<[Player, Player]>>;
//   currentPlayer: Player;
// }>;
