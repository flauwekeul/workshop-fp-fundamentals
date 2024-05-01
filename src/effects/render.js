/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { flow, forEach, join, map, path, prop, tap, toPairs, values, zipWith } from 'ramda';
import { bonus, upperSectionSum } from '../calculations/scores.js';
import { setElementHtml } from './dom.js';

const renderCurrentPlayer = (state) =>
  flow(state, [path([state.currentPlayer, 'name']), setElementHtml('#current-player')]);

const renderDice = (state) =>
  flow(state, [
    prop('dice'),
    map((die) => `<li class="die ${die.hold ? 'die--hold' : ''}">${die.value}</li>`),
    join(''),
    setElementHtml('#dice'),
  ]);

const renderTableHeader = (state) => {
  setElementHtml('#player1-name')(state.player1.name);
  setElementHtml('#player2-name')(state.player2.name);
};

const renderScores = (state) => {
  flow(
    zipWith(
      ([scoreId, score], possibleScore) => [scoreId, score, possibleScore],
      toPairs(state[state.currentPlayer].scores),
      values(state.possibleScores),
    ),
    [
      forEach(([scoreId, score, possibleScore]) => {
        // eslint-disable-next-line functional/no-conditional-statements
        if (Number.isFinite(score)) {
          setElementHtml(`#${state.currentPlayer}-${scoreId}`)(score);
          // eslint-disable-next-line functional/no-conditional-statements
        } else if (Number.isFinite(possibleScore)) {
          setElementHtml(`#${state.currentPlayer}-${scoreId}`)(
            `<button data-score-id="${scoreId}" data-score="${possibleScore}">${possibleScore}</button>`,
          );
        }
      }),
    ],
  );
};

const renderDerivedScores = (state) => {
  flow(state, [
    path([state.currentPlayer, 'scores']),
    upperSectionSum,
    tap(setElementHtml(`#${state.currentPlayer}-sum`)),
    bonus,
    setElementHtml(`#${state.currentPlayer}-bonus`),
  ]);
};

export const render = (state) =>
  flow(state, [
    tap(renderCurrentPlayer),
    tap(renderTableHeader),
    tap(renderScores),
    tap(renderDerivedScores),
    tap(renderDice),
  ]);
