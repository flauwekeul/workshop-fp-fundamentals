/* eslint-disable functional/no-let */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { equals, flow, ifElse, path, pipe, tap, when } from 'ramda';
import { anyScoresEmpty, decrementThrowsLeft, switchPlayer, updateHeldDie, updatePlayerScore } from './calculations.js';
import { INITIAL_STATE } from './state.js';
import { updateDiceValues } from './effects.js';
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
import { parseInt } from './lib/utils.js';

const onRollDice = on('click', queryElement('#roll-dice'));
const onDieClick = on('change', queryElement('#dice'));
const onScoreClick = (callback) =>
  on('click', queryElement('#scores'), when(pipe(path(['target', 'tagName']), equals('BUTTON')), callback));

const app = (initialState) => {
  let state = initialState;
  const setState = (nextState) => {
    state = nextState;
  };

  flow(initialState, [tap(renderTableHeader), tap(highlightCurrentPlayer), tap(renderThrowsLeft)]);

  onRollDice(() =>
    flow(state, [
      updateDiceValues,
      decrementThrowsLeft,
      tap(renderDice),
      tap(renderThrowsLeft),
      tap(renderPossibleScores),
      tap(setState),
    ]),
  );

  onDieClick(
    pipe(path(['target', 'name']), parseInt, (dieIndex) =>
      flow(state, [updateHeldDie(dieIndex), tap(renderDice), tap(setState)]),
    ),
  );

  onScoreClick(
    pipe(path(['target', 'dataset']), ({ scoreId, score }) =>
      flow(state, [
        updatePlayerScore(scoreId, parseInt(score)),
        tap(renderAllScores),
        tap(clearPossibleScores),
        ifElse(
          anyScoresEmpty,
          pipe(switchPlayer, tap(renderDice), tap(renderThrowsLeft), tap(highlightCurrentPlayer)),
          pipe(tap(renderTotalScore), tap(renderWinner)),
        ),
        tap(setState),
      ]),
    ),
  );
};

app(INITIAL_STATE);
