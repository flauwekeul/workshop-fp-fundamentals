/* eslint-disable functional/immutable-data */
import { flow, last, tap } from 'ramda';

export const accumState = (initialState) => {
  const states = [initialState];
  return (updateState) => flow(last(states), [updateState, tap((state) => states.push(state))]);
};
