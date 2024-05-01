/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { flow, modifyPath, path, pipe } from 'ramda';
import { rollDice, updatePossibleScores } from './calculations.js';
import { initialState } from './data.js';
import { accumState, on, queryElement, render } from './effects.js';

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

main(initialState);
