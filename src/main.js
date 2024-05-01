/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { flow, ifElse, path, pipe, tap } from 'ramda';
import { anyScoresEmpty } from './calculations/scores.js';
import { chooseScore, rollDice, switchPlayer } from './calculations/state.js';
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
  renderWinner,
} from './effects/render.js';
import { trackState } from './effects/state.js';

const onRollDice = on('click', queryElement('#roll-dice'));
const onChooseScore = on('click', queryElement('#scores'));

const main = (state) => {
  const updateState = trackState(state);

  flow(state, [tap(renderTableHeader), tap(renderCurrentPlayerName), tap(renderThrowsLeft)]);

  onRollDice(() => updateState(pipe(rollDice, tap(renderDice), tap(renderThrowsLeft), tap(renderPossibleScores))));

  onChooseScore(
    pipe(path(['target', 'dataset']), ({ scoreId, score }) =>
      updateState(
        pipe(
          chooseScore(scoreId, score),
          tap(renderAllScores),
          tap(clearPossibleScores),
          ifElse(anyScoresEmpty, switchPlayer, tap(renderWinner)),
          tap(renderThrowsLeft),
          tap(renderCurrentPlayerName),
        ),
      ),
    ),
  );
};

main(INITIAL_STATE);
