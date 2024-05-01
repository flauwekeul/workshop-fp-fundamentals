/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { flow, modifyPath, path, pipe } from 'ramda';
import { rollDice } from './calculations/dice.js';
import { updatePossibleScores } from './calculations/scores.js';
import { INITIAL_STATE } from './data.js';
import { on, queryElement } from './effects/dom.js';
import { render } from './effects/render.js';
import { accumState } from './effects/state.js';

const onRollDice = on('click', queryElement('#roll-dice'));
const onScoreClick = on('click', queryElement('#scores'));

const main = (state) => {
  const updateState = accumState(state);

  updateState(render);

  onRollDice(() => updateState(pipe(rollDice, updatePossibleScores, render)));

  onScoreClick(
    pipe(path(['target', 'dataset']), ({ scoreId, score }) =>
      updateState((state) =>
        flow(state, [modifyPath([state.currentPlayer, 'scores', scoreId], () => Number.parseInt(score)), render]),
      ),
    ),
  );
};

main(INITIAL_STATE);
