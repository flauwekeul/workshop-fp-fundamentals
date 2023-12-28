import { Effect, pipe, ReadonlyArray } from 'effect';
import './styles.css';
import { Cell, Game, RedPlayer, YellowPlayer } from './types.js';

const createCell = ([col, row]: Readonly<[number, number]>): Cell => ({ col, row });

const COLS = ReadonlyArray.range(0, 6);
const ROWS = ReadonlyArray.range(0, 5);
const CELLS = ReadonlyArray.map(ReadonlyArray.cartesian(COLS, ROWS), createCell);

const createGame = (redPlayer: RedPlayer, yellowPlayer: YellowPlayer): Game => {
  return {
    state: 'playing',
    cells: CELLS,
    redPlayer,
    yellowPlayer,
    currentPlayer: redPlayer,
  };
};

// eslint-disable-next-line functional/no-return-void
const render = ({ cells, currentPlayer }: Game): void => {
  // eslint-disable-next-line functional/no-expression-statements
  pipe(
    // fromNullable(document.getElementById('frame')),
    cells,
    ReadonlyArray.map(() => {
      const el = document.createElement('div');
      // eslint-disable-next-line functional/no-expression-statements
      el.classList.add('cell');
      return el;
    }),
    ReadonlyArray.forEach((cellElements) => document.getElementById('frame')?.append(...cellElements)),
    // Effect.tap((cellElements) => document.getElementById('frame')?.append(...cellElements)),
  );
  // const frame = document.getElementById('frame');
  // const cellElements = map(cells, () => {
  //   const el = document.createElement('div');
  //   el.classList.add('cell');
  //   return el;
  // });
  // frame.append(...cellElements);

  // const currentPlayerEl = document.getElementById('current-player');
  // currentPlayerEl.classList.add(currentPlayer.color);
  // currentPlayerEl.textContent = currentPlayer.name;
};

const redPlayer: RedPlayer = { color: 'red', name: 'Hank' };
const yellowPlayer: YellowPlayer = { color: 'yellow', name: 'Charlotte' };

// eslint-disable-next-line functional/no-return-void
const main = Effect.try(() => {
  const gameState = createGame(redPlayer, yellowPlayer);
  // eslint-disable-next-line functional/no-expression-statements
  render(gameState);
});

// eslint-disable-next-line functional/no-expression-statements
Effect.runSync(main);
