/* eslint-disable functional/no-let */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { INITIAL_STATE } from './state.js';
import { on, queryElement } from './lib/dom.js';
import {
  clearPossibleScores,
  renderAllScores,
  renderCurrentPlayerName,
  renderDice,
  renderPossibleScores,
  renderTableHeader,
  renderThrowsLeft,
  renderTotalScore,
  renderWinner,
} from './lib/render.js';
import { parseInt } from './lib/utils.js';

const onRollDice = on('click', queryElement('#roll-dice'));
const onDieClick = on('change', queryElement('#dice'));
const onScoreClick = on('click', queryElement('#scores'));

const app = (initialState) => {
  let state = initialState;
  const setState = (nextState) => {
    state = nextState;
  };

  // Step 1️⃣
  renderTableHeader(initialState);
  renderCurrentPlayerName(initialState);
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
    const nextState = {};
    renderAllScores(nextState);
    clearPossibleScores(nextState);
  });
};

app(INITIAL_STATE);
