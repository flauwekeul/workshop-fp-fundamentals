import { Console, DOM, IO, IOE, IOO, RNEA, pipe, sequenceArray_ } from './fp-ts.js';
import './styles.css';
import { Cell, Game, Players } from './types.js';

const createCell =
  (col: number) =>
  (row: number): Cell => ({ col, row });

const COLS = RNEA.range(0, 6);
const ROWS = RNEA.range(0, 5);
const CELLS = RNEA.ap(ROWS)(RNEA.map(createCell)(COLS));

const appendToFrame = (el: HTMLDivElement): IOE.IOEither<string, void> =>
  pipe(
    DOM.querySelector('#frame')(document),
    IOO.flatMapIO(DOM.appendChild(el)),
    IOO.matchE(() => IOE.left('Could not find element with id "frame"'), IOE.right),
  );

const createCellElement = (): IO.IO<HTMLDivElement> => () => {
  const el = document.createElement('div');
  el.classList.add('cell');
  return el;
};

const renderCell = (cell: Cell): IOE.IOEither<string, void> => pipe(cell, createCellElement, IO.flatMap(appendToFrame));

const renderCurrentPlayer = ({
  currentColor,
  players,
}: Pick<Game, 'currentColor' | 'players'>): IOE.IOEither<string, void> => {
  const currentPlayer = players[currentColor];
  return pipe(
    DOM.querySelector('#current-player')(document),
    IOO.flatMapIO((el) => () => {
      el.classList.add(currentColor);
      el.textContent = currentPlayer.name;
    }),
    IOO.matchE(() => IOE.left('Could not find element with id "current-player"'), IOE.right),
  );
};

const render = ({ cells, players, currentColor }: Game): IOE.IOEither<string, void> =>
  pipe(cells, RNEA.map(renderCell), sequenceArray_, IOE.flatMapEither(renderCurrentPlayer({ currentColor, players })));

const createGame = (players: Players): Game => ({
  state: 'playing',
  cells: CELLS,
  currentColor: 'red',
  players,
});

const main: IO.IO<void> = () => {
  const players = {
    red: { name: 'Hank' },
    yellow: { name: 'Sandy' },
  };
  const runIO = pipe(players, createGame, render, IOE.orElseFirstIOK(Console.error));

  runIO();
};

main();
