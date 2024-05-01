import { ascend, curry, flow, map, prop, sort, unless } from 'ramda';

export const randomDieValue = (rng) => Math.floor(rng() * 6) + 1;

export const randomDice = curry((rng, dice) =>
  flow(dice, [
    map(unless(prop('hold'), () => ({ value: randomDieValue(rng), hold: false }))),
    sort(ascend(prop('value'))),
  ]),
);
