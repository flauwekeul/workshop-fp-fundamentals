/* eslint-disable functional/no-let */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { flow, ifElse, path, pipe, prop, tap } from 'ramda';
import { anyScoresEmpty } from './calculations/scores.js';
import { decrementThrowsLeft, switchPlayer, updateHeldDie, updatePlayerScore } from './calculations/state.js';
import { parseInt } from './calculations/utils.js';
import { INITIAL_STATE } from './data.js';
import { on, queryElement } from './effects/dom.js';
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
} from './effects/render.js';
import { updateDiceValues } from './effects/state.js';

const onRollDice = on('click', queryElement('#roll-dice'));
const onDieClick = on('change', queryElement('#dice'));
const onScoreClick = on('click', queryElement('#scores'));

const app = (initialState) => {
  let state = initialState;
  const setState = (nextState) => {
    state = nextState;
  };

  flow(initialState, [tap(renderTableHeader), tap(renderCurrentPlayerName), tap(renderThrowsLeft)]);

  onRollDice(() =>
    flow(state, [
      updateDiceValues,
      decrementThrowsLeft,
      tap(renderDice),
      tap(renderThrowsLeft),
      // Derived state
      tap(renderPossibleScores),
      tap(setState),
    ]),
  );

  onDieClick(
    pipe(prop('target'), ({ name, checked }) =>
      flow(state, [updateHeldDie(parseInt(name), checked), tap(renderDice), tap(setState)]),
    ),
  );

  onScoreClick(
    pipe(path(['target', 'dataset']), ({ scoreId, score }) =>
      flow(state, [
        updatePlayerScore(scoreId, score),
        tap(renderAllScores),
        tap(clearPossibleScores),
        ifElse(
          anyScoresEmpty,
          pipe(switchPlayer, tap(renderDice), tap(renderThrowsLeft), tap(renderCurrentPlayerName)),
          pipe(tap(renderTotalScore), tap(renderWinner)),
        ),
        tap(setState),
      ]),
    ),
  );
};

app(INITIAL_STATE);
