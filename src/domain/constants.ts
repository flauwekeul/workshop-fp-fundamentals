import { RNEA } from '../fp-ts.js';
import { Cell } from './types.js';

const COLS = RNEA.range(0, 6);
const ROWS = RNEA.range(0, 5);

const createCell =
  (col: number) =>
  (row: number): Cell => ({ col, row });

export const CELLS = RNEA.ap(ROWS)(RNEA.map(createCell)(COLS));
