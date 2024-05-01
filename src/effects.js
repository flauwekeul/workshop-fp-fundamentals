/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { curry, flow, forEach, join, last, map, path, prop, tap, toPairs, values, zipWith } from 'ramda';
import { bonus, upperSectionSum } from './calculations.js';

const setInnerHTML = (el, html) => {
  el.innerHTML = html;
};

export const queryElement = (selector) => document.querySelector(selector);

export const setElementHtml = (selector) => (html) => setInnerHTML(queryElement(selector), html);

export const on = curry((eventName, el, callback) => el.addEventListener(eventName, callback));

export const accumState = (initialState) => {
  const states = [initialState];
  return (updateState) => flow(last(states), [updateState, tap((state) => states.push(state))]);
};

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

// const renderPossibleScores = (state) =>
//   flow(state, [
//     prop('possibleScores'),
//     // using filter() with an object only works with its values, so we need to use toPairs() to get the keys as well
//     toPairs,
//     filter(([scoreId, score]) => isNotNil(score) && isNil(path([state.currentPlayer, 'scores', scoreId], state))),
//     forEachObjIndexed(([scoreId, score]) => {
//       setElementHtml(`#${state.currentPlayer}-${scoreId}`)(
//         `<button data-score-id="${scoreId}" data-score="${score}">${score}</button>`,
//       );
//     }),
//   ]);

export const render = (state) =>
  flow(state, [
    tap(renderCurrentPlayer),
    tap(renderTableHeader),
    tap(renderScores),
    tap(renderDerivedScores),
    // tap(renderPossibleScores),
    tap(renderDice),
  ]);
