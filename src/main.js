import { Either, IO, List, Maybe, appendChild, pipe, querySelector } from './lib';
import { identity } from './lib/functions.js';
import './styles.css';

// const ioAdd1 = (x) => () => {
//   console.log(`adding 1 to ${x}`);
//   return x + 1;
// };
// const ioMultiplyBy2 = (x) => () => {
//   console.log(`multiplying ${x} by 2`);
//   return x * 2;
// };
// const ioSubtract3 = (x) => () => {
//   console.log(`subtracting 3 from ${x}`);
//   return x - 3;
// };

// const run = pipe(ioAdd1, IO.chain(ioMultiplyBy2), IO.chain(ioSubtract3))(1);
// run();

const xs = [Either.of(1), Either.of(2), Either.of(3)];
const r = List.sequence(Either)(xs);
console.log(Either.fold(identity)(identity)(r));

const createCell = (col) => (row) => ({ col, row });

const COLS = List.range(0)(7);
const ROWS = List.range(0)(6);
const CELLS = List.ap(List.map(createCell)(COLS))(ROWS);

const createGame = (players) => ({
  state: 'playing',
  cells: CELLS,
  players,
  currentColor: 'red',
});

// () -> IO(HTMLDivElement)
const createCellElement = () => () => {
  const el = document.createElement('div');
  el.classList.add('cell');
  return el;
};

// Node -> IO()
const appendToFrame = (node) => () => {
  const maybeFrame = Maybe.of(querySelector('#frame')(document));
  pipe(
    Maybe.map(appendChild(node)),
    Either.fromMaybe(() => console.error('frame element not found')),
  )(maybeFrame);
};

// Game -> List(IO())
const renderCells = (state) => () =>
  pipe(({ cells }) => cells, List.map(createCellElement), List.chain(IO.chain(appendToFrame)))(state);

// Game -> IO()
const renderCurrentPlayer =
  ({ currentColor, players }) =>
  () => {
    const currentPlayerEl = document.getElementById('current-player');
    currentPlayerEl.classList.add(currentColor);
    currentPlayerEl.textContent = players[currentColor];
  };

// todo: use State monad?
// Game -> IO()
const render = (state) => () =>
  pipe(
    renderCells(state),
    List.sequence(IO),
    // (x) => {
    //   console.log(x);
    //   return x;
    // },
    List.chain(IO.chain(renderCurrentPlayer(state))),
  )(state);

const main = () => {
  const players = { red: 'Hank', yellow: 'Sandy' };
  const runIO = pipe(createGame, render)(players);
  runIO();
};

main();
