/* eslint-disable functional/no-let */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { INITIAL_STATE } from './data.js';
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

  // 1️⃣ Initial render 🎨
  renderTableHeader(initialState);
  renderCurrentPlayerName(initialState);
  renderThrowsLeft(initialState);

  onRollDice(() => {
    // 2️⃣ Roll dice 🎲
    const nextState = {};
    renderDice(nextState);
    renderThrowsLeft(nextState);
    setState(nextState);
  });

  onDieClick(() => {});

  onScoreClick(() => {});
};

app(INITIAL_STATE);
