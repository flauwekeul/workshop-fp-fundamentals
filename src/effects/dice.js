import { curry, map, prop, unless } from 'ramda';

const randomDieValue = (rng) => Math.floor(rng() * 6) + 1;

export const randomDice = curry((rng, dice) =>
  map(
    unless(prop('hold'), () => ({ value: randomDieValue(rng), hold: false })),
    dice,
  ),
);
