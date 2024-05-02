/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { assocPath, curry, flow, ifElse, path, pipe, prop, tap } from 'ramda';
import { anyScoresEmpty } from './calculations/scores.js';
import { decrementThrowsLeft, switchPlayer, updateDiceValues, updatePossibleScores } from './calculations/state.js';
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
import { trackState } from './effects/state.js';

const rollDice = (state) =>
  flow(state, [
    updateDiceValues,
    decrementThrowsLeft,
    updatePossibleScores,
    tap(renderDice),
    tap(renderThrowsLeft),
    tap(renderPossibleScores),
  ]);

const changeHeldDie = curry((dieIndex, isHeld, state) =>
  flow(state, [assocPath(['dice', parseInt(dieIndex), 'hold'], isHeld), tap(renderDice)]),
);

const chooseScore = curry((scoreId, score, state) =>
  flow(state, [
    assocPath([state.currentPlayer, 'scores', scoreId], parseInt(score)),
    tap(renderAllScores),
    tap(clearPossibleScores),
    ifElse(
      anyScoresEmpty,
      pipe(switchPlayer, tap(renderDice), tap(renderThrowsLeft), tap(renderCurrentPlayerName)),
      pipe(tap(renderTotalScore), tap(renderWinner)),
    ),
  ]),
);

const onRollDice = on('click', queryElement('#roll-dice'));
const onHoldDieChange = on('change', queryElement('#dice'));
const onChooseScore = on('click', queryElement('#scores'));

const app = (initialState) => {
  const { updateState } = trackState(initialState);

  flow(initialState, [tap(renderTableHeader), tap(renderCurrentPlayerName), tap(renderThrowsLeft)]);

  onRollDice(() => updateState(rollDice));

  onHoldDieChange(pipe(prop('target'), ({ name, checked }) => updateState(changeHeldDie(name, checked))));

  onChooseScore(pipe(path(['target', 'dataset']), ({ scoreId, score }) => updateState(chooseScore(scoreId, score))));
};

app(INITIAL_STATE);
