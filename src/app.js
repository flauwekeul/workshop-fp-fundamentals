/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { INITIAL_STATE } from './data.js';

const app = (state) => {
  document.querySelector('#grid').addEventListener('click', (event) => {
    const tileElement = event.target;

    if (!tileElement.classList.contains('tile') || tileElement.textContent !== '') {
      return;
    }

    state.tiles[Number(tileElement.dataset.index)] = state.currentPlayer;
    console.log(state.tiles);
    tileElement.textContent = state.currentPlayer;
    state.currentPlayer = state.currentPlayer === '🤖' ? '👨🏻‍💼' : '🤖';
  });
};

app(INITIAL_STATE);
