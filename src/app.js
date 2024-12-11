/* eslint-disable functional/no-let */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { INITIAL_STATE } from './state.js';
import { on, queryElement } from './lib/dom.js';
import {
  clearPossibleScores,
  renderAllScores,
  highlightCurrentPlayer,
  renderDice,
  renderPossibleScores,
  renderTableHeader,
  renderThrowsLeft,
  renderTotalScore,
  renderWinner,
} from './lib/render.js';
import { parseInt, randomInt } from './lib/utils.js';
import { equals, path, pipe, when } from 'ramda';

const onRollDice = on('click', queryElement('#roll-dice'));
const onDieClick = on('change', queryElement('#dice'));
const onScoreClick = (callback) =>
  on('click', queryElement('#scores'), when(pipe(path(['target', 'tagName']), equals('BUTTON')), callback));

const app = (initialState) => {
  let state = initialState;
  const setState = (nextState) => {
    state = nextState;
  };

  // Step 1️⃣
  renderTableHeader(initialState);
  highlightCurrentPlayer(initialState);
  renderThrowsLeft(initialState);

  onRollDice(() => {
    // Steps 2️⃣ and 3️⃣
    const nextState = {};
    renderDice(nextState);
    setState(nextState);
  });

  onDieClick(() => {
    // Step 4️⃣
    const nextState = {};
    renderDice(nextState);
    setState(nextState);
  });

  onScoreClick(() => {
    // Step 5️⃣
    const nextState = {};
    renderAllScores(nextState);
    clearPossibleScores(nextState);
    setState(nextState);
  });
};

app(INITIAL_STATE);
