import { Maybe, ap, map, of, range } from 'sanctuary';
import './styles.css';

/**
 *
 * @param {number} col
 * @returns {(row: number) => Cell}
 */
const createCell = (col) => (row) => ({ col, row });

const COLS = range(0)(7);
const ROWS = range(0)(6);
const CELLS = ap(map(createCell)(COLS))(ROWS);

/**
 *
 * @param {Player} player1
 * @param {Player} player2
 *
 * @returns {Game}
 */
const createGame = (player1, player2) => {
  return {
    state: 'playing',
    cells: CELLS,
    players: [player1, player2],
    currentPlayer: player1,
  };
};

/**
 *
 * @param {Game} gameState
 *
 * @returns {void}
 */
// eslint-disable-next-line functional/no-return-void
const render = ({ cells, currentPlayer }) => {
  const frame = of(Maybe)(document.getElementById('frame'));
  const cellElements = map(() => {
    const el = document.createElement('div');
    // eslint-disable-next-line functional/no-expression-statements
    el.classList.add('cell');
    return el;
  })(cells);
  // todo: use IO?
  // eslint-disable-next-line functional/no-expression-statements
  map((f) => f.append(...cellElements))(frame);

  const currentPlayerEl = document.getElementById('current-player');
  // eslint-disable-next-line functional/no-expression-statements
  currentPlayerEl.classList.add(currentPlayer.color);
  // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
  currentPlayerEl.textContent = currentPlayer.name;
};

/** @type {Player} */
const player1 = { color: 'red', name: 'Hank' };
/** @type {Player} */
const player2 = { color: 'yellow', name: 'Sandy' };

// eslint-disable-next-line functional/no-expression-statements, functional/no-return-void
(() => {
  const gameState = createGame(player1, player2);
  // eslint-disable-next-line functional/no-expression-statements
  render(gameState);
})();
