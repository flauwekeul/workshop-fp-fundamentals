/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import {
  addIndex,
  always,
  cond,
  curry,
  equals,
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
import {
  bonus,
  canHoldDie,
  currentPlayerScores,
  possibleScores,
  totalScore,
  upperSectionSum,
  winner,
} from '../calculations.js';
import { queryElement, removeAttribute, setElementHtml, toggleAttribute } from './dom.js';

// ⛔️ No need to make changes in this file

const mapWithIndex = addIndex(map);

const setCurrentPlayerClass = (currentPlayer) => {
  const scoresTableElement = queryElement('#scores-table');
  scoresTableElement.classList.remove('player1', 'player2');
  scoresTableElement.classList.add(currentPlayer);
};

const positionPointer = (currentPlayer) =>
  flow(currentPlayer, [
    (playerId) => queryElement(`#${playerId}-name`),
    (element) => element.getBoundingClientRect(),
    ({ x }) => {
      const pointerEl = queryElement('#current-player-pointer');
      pointerEl.style.left = `${x}px`;
    },
  ]);

export const highlightCurrentPlayer = (state) =>
  flow(state, [prop('currentPlayer'), tap(setCurrentPlayerClass), tap(positionPointer)]);

const basePipClasses = `size-3 bg-black rounded-full`;
const pips = cond([
  [
    equals(1),
    always(`
      <div class="size-full grid place-content-center">
        <div class="${basePipClasses}"></div>
      </div>
    `),
  ],
  [
    equals(2),
    always(`
    <div class="size-full p-2 grid">
      <div class="${basePipClasses} place-self-start"></div>
      <div class="${basePipClasses} place-self-end"></div>
    </div>
  `),
  ],
  [
    equals(3),
    always(`
    <div class="size-full p-2 grid">
      <div class="${basePipClasses} place-self-start"></div>
      <div class="${basePipClasses} place-self-center"></div>
      <div class="${basePipClasses} place-self-end"></div>
    </div>
  `),
  ],
  [
    equals(4),
    always(`
    <div class="size-full grid grid-cols-2 gap-2 place-items-center place-content-evenly">
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
    </div>
  `),
  ],
  [
    equals(5),
    always(`
    <div class="size-full grid grid-cols-2 gap-x-2 place-items-center place-content-evenly">
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses} col-span-2"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
    </div>
  `),
  ],
  [
    equals(6),
    always(`
    <div class="size-full grid grid-cols-2 place-items-center place-content-evenly">
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
      <div class="${basePipClasses}"></div>
    </div>
  `),
  ],
]);

const dieClasses = (canHold, isHeld) =>
  `block size-16 bg-white rounded-lg shadow-lg transition-all
  ${canHold ? 'cursor-pointer hover:-rotate-12' : 'opacity-70'}
  ${isHeld ? '-rotate-12 outline outline-4 outline-pink-400' : ''}`;

const dieTemplate = curry(
  (canHold, die, index) => `
  <li>
    <label class="${dieClasses(canHold, die.hold)}">
      <input type="checkbox" name="${index}" ${die.hold ? 'checked' : ''} ${canHold ? '' : 'disabled'} class="sr-only" />
      ${pips(die.value)}
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

const scoreButtonClasses = (score) =>
  // Unfortunately, `data-[score=0]:opacity-30` doesn't work (probably because it doesn't support numeric values,
  // see https://github.com/tailwindlabs/tailwindcss/issues/14026).
  `border-2 border-pink-400 bg-pink-600 hover:border-pink-300 hover:bg-pink-500 w-8 leading-6 text-xl text-white rounded-md ${score === 0 ? 'opacity-30' : ''}`;

export const renderPossibleScores = (state) => {
  flow(possibleScores(state.dice), [
    toPairs,
    map(([scoreId, possibleScore]) => ({ score: state[state.currentPlayer].scores[scoreId], possibleScore, scoreId })),
    filter(({ score }) => isNil(score)),
    forEach(({ possibleScore, scoreId }) => {
      setElementHtml(
        `#${state.currentPlayer}-${scoreId}`,
        `<button data-score-id="${scoreId}" data-score="${possibleScore}" class="${scoreButtonClasses(possibleScore)}">${possibleScore}</button>`,
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
