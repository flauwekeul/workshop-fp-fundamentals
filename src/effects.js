/* eslint-disable functional/functional-parameters */

import { ascend, map, modify, pipe, prop, sort, unless } from 'ramda';

const randomDieValue = () => Math.floor(Math.random() * 6) + 1;

const randomDice = (dice) =>
  map(
    unless(prop('hold'), () => ({ value: randomDieValue(), hold: false })),
    dice,
  );

export const updateDiceValues = (state) => modify('dice', pipe(randomDice, sort(ascend(prop('value')))), state);
