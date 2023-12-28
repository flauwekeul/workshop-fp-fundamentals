const add = (a) => (b) => a + b;
const subtract = (a) => (b) => a - b;
const multiply = (a) => (b) => a * b;
const divide = (a) => (b) => a / b;

const OPERATOR_PRECEDENCE = [multiply, '/', '+', '-'];
const OPERATOR_MAP = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

const tokens = (string) => string.split(/[^\d+\-*/]/);
const nextOperation = (tokens) => {
  const nextOperator = OPERATOR_PRECEDENCE.find((op) => tokens.includes(op));
  const operatorIndex = tokens.findIndex((token) => token === nextOperator);
  return tokens.slice(operatorIndex - 1, operatorIndex + 2);
};
// const evaluate = (tokens) => tokens.map(token => Number.parseFloat(token) || OPERATOR_MAP[token])
const parse = (string) => {
  nextOperation(tokens(string));
  tokens(string);
};

parse('1 + 2 * 3 - 4 / 5');

// prettier-ignore
subtract(
  add(1)(
    multiply(2)(3)
  )
)(
  divide(4)(5)
)
