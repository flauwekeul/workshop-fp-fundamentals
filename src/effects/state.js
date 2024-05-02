/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/immutable-data */

import { flow, last, tap } from 'ramda';

export const trackState = (initialState) => {
  const states = [initialState];

  return {
    updateState: (nextState) => flow(states, [last, nextState, tap((state) => states.push(state))]),
    states,
  };
};
