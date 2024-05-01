import {
  ascend,
  equals,
  filter,
  flow,
  groupBy,
  identity,
  length,
  map,
  modify,
  pipe,
  prop,
  sort,
  subtract,
  tail,
  unless,
  values,
  zipWith,
} from 'ramda';

const randomDieValue = (rng) => Math.floor(rng() * 6) + 1;

export const rollDice = (state) =>
  modify(
    'dice',
    pipe(
      map(unless(prop('hold'), () => ({ value: randomDieValue(state.rng), hold: false }))),
      sort(ascend(prop('value'))),
    ),
    state,
  );

export const kindsCount = (diceValues) => flow(diceValues, [groupBy(identity), map(prop('length')), values]);

export const sequenceCount = (diceValues) =>
  flow(diceValues, [zipWith(subtract, tail(diceValues)), filter(equals(1)), length]);
