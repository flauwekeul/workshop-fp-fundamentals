import { Maybe, ap, map, of, pipe, range } from 'sanctuary';
import './styles.css';

const createCell = (col) => (row) => ({ col, row });

const COLS = range(0)(7);
const ROWS = range(0)(6);
const CELLS = ap(map(createCell)(COLS))(ROWS);

const game = (players) => ({
  state: 'playing',
  cells: CELLS,
  players,
  currentPlayer: players[0],
});

const cellElement = () => {
  const el = document.createElement('div');
  el.classList.add('cell');
  return el;
};

const render = ({ cells, currentPlayer }) => {
  const frame = of(Maybe)(document.getElementById('frame'));
  const cellElements = map(cellElement)(cells);
  // todo: use IO?
  map((f) => f.append(...cellElements))(frame);

  const currentPlayerEl = document.getElementById('current-player');
  currentPlayerEl.classList.add(currentPlayer.color);
  currentPlayerEl.textContent = currentPlayer.name;
};

const player1 = { color: 'red', name: 'Hank' };
const player2 = { color: 'yellow', name: 'Sandy' };

const main = () => {
  const players = [player1, player2];
  pipe([game, render])(players);
};

main();
