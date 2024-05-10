export const BOT = '🤖';

export const BOSS = '👨🏻‍💼';

export const INITIAL_STATE = {
  /**
   * Either '🤖' or '👨🏻‍💼'
   */
  currentPlayer: BOT,
  /**
   * An array of 9 elements, where the first 3 elements are the first row,
   * the next 3 elements are the second row, and the last 3 elements are the third row.
   * Each element is either '🤖', '👨🏻‍💼', or null (unclaimed).
   */
  tiles: Array.from({ length: 9 }, () => null),
};
