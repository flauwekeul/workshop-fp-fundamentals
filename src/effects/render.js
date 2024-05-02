/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import {
  addIndex,
  curry,
  filter,
  flow,
  forEach,
  forEachObjIndexed,
  isNil,
  join,
  keys,
  map,
  path,
  prop,
  reject,
  tap,
  toPairs,
} from 'ramda';
import { bonus, totalScore, upperSectionSum, winner } from '../calculations/scores.js';
import { canHoldDie, currentPlayerScores } from '../calculations/state.js';
import { queryElement, removeAttribute, setElementHtml, toggleAttribute } from './dom.js';

const mapWithIndex = addIndex(map);

export const renderCurrentPlayerName = (state) =>
  flow(state, [path([state.currentPlayer, 'name']), setElementHtml('#current-player')]);

const dieTemplate = curry(
  (canHold, die, index) => `
  <li>
    <label>
      <input type="checkbox" name="${index}" ${die.hold ? 'checked' : ''} ${canHold ? '' : 'disabled'} />
      ${die.value}
    </label>
  </li>
`,
);

export const renderDice = (state) =>
  flow(state, [prop('dice'), mapWithIndex(dieTemplate(canHoldDie(state))), join(''), setElementHtml('#dice')]);

export const renderTableHeader = (state) => {
  setElementHtml('#player1-name', state.player1.name);
  setElementHtml('#player2-name', state.player2.name);
};

const renderDerivedScores = (state) =>
  flow(state, [
    currentPlayerScores,
    upperSectionSum,
    tap(setElementHtml(`#${state.currentPlayer}-sum`)),
    bonus,
    setElementHtml(`#${state.currentPlayer}-bonus`),
  ]);

const renderScores = (state) =>
  flow(state, [
    currentPlayerScores,
    reject(isNil),
    forEachObjIndexed((score, scoreId) => setElementHtml(`#${state.currentPlayer}-${scoreId}`, score)),
  ]);

export const renderAllScores = (state) => flow(state, [tap(renderDerivedScores), tap(renderScores)]);

// todo: refactor, or maybe change how scores and possible scores are stored in state?
export const renderPossibleScores = (state) => {
  flow(state, [
    prop('possibleScores'),
    toPairs,
    map(([scoreId, possibleScore]) => ({ score: state[state.currentPlayer].scores[scoreId], possibleScore, scoreId })),
    filter(({ score }) => isNil(score)),
    forEach(({ possibleScore, scoreId }) => {
      setElementHtml(
        `#${state.currentPlayer}-${scoreId}`,
        `<button data-score-id="${scoreId}" data-score="${possibleScore}">${possibleScore}</button>`,
      );
    }),
  ]);
};

export const clearPossibleScores = (state) =>
  flow(state, [
    path([state.currentPlayer, 'scores']),
    filter(isNil),
    keys,
    forEach((scoreId) => setElementHtml(`#${state.currentPlayer}-${scoreId}`, '')),
  ]);

export const renderThrowsLeft = (state) => {
  setElementHtml('#throws-left', state.throwsLeft);
  toggleAttribute('disabled', state.throwsLeft === 0, queryElement('#roll-dice'));
};

export const renderTotalScore = (state) => {
  setElementHtml('#player1-total', totalScore(state.player1.scores));
  setElementHtml('#player2-total', totalScore(state.player2.scores));
};

export const renderWinner = (state) => {
  const player = winner(state);
  setElementHtml('#winner-name', player.name);
  removeAttribute('hidden', queryElement('#winner'));
};
