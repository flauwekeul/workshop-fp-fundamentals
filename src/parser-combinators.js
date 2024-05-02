// Utils

const success = (parsed, rest) => ({ success: true, parsed, rest });

const fail = (expected, actual) => ({ success: false, expected, actual });

const parse = (parser, input) => {
  const result = parser(input);

  if (!result.success) {
    throw new Error(`expected ${result.expected}, received: "${result.actual}".`);
  }

  return result;
};

// Rename to evaluate?
const map = (parser, fn) => (input) => {
  const result = parser(input);

  if (!result.success) {
    return result;
  }

  return success(fn(result.parsed), result.rest);
};

// Rename to combine or foldMap?
const apply = (parsers, fn) => (input) => {
  const acc = [];
  let currentInput = input;

  for (const parser of parsers) {
    const result = parser(currentInput);

    if (!result.success) {
      return result;
    }

    acc.push(result.parsed);
    currentInput = result.rest;
  }

  return success(fn(...acc), currentInput);
};

// Operators

const add = (left, right) => left + right;
const subtract = (left, right) => left - right;
const multiply = (left, right) => left * right;
const divide = (left, right) => left / right;

// Parsers

// Not sure this is needed?
// const collect = (...parsers) => apply(parsers, (...results) => results)

const oneOf =
  (...parsers) =>
  (input) => {
    for (const parser of parsers) {
      const result = parser(input);
      if (!result.success) {
        continue;
      }
      return result;
    }

    return fail('oneOf', input);
  };

// Not used
// const ignore = (ignoreParser) => (parser) => apply([ignoreParser, parser, ignoreParser], (_, data, __) => data)

const eof = (input) => (input.length === 0 ? success(null, input) : fail('"end of input"', input));

const text = (token) => (input) => {
  if (input.startsWith(token)) {
    return success(token, input.slice(token.length));
  }
  return fail(`"${token}"`, input);
};

const regex = (pattern) => {
  const anchoredRegex = new RegExp(`^${pattern.source}`);

  return (input) => {
    const match = anchoredRegex.exec(input);

    if (match) {
      const matched = match[0];
      return success(matched, input.slice(matched.length));
    }

    return fail(pattern, input);
  };
};

const maybeSpaces = regex(/\s*/);

const token = (parser) => apply([maybeSpaces, parser, maybeSpaces], (_, parsed, __) => parsed);

const integer = map(regex(/\d+/), (value) => Number.parseInt(value, 10));

const OPERATORS = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};
const operator = map(oneOf(text('+'), text('-'), text('*'), text('/')), (token) => OPERATORS[token]);

// Test

const expression = apply([token(integer), token(operator), token(integer), eof], (left, operatorFn, right) =>
  operatorFn(left, right),
);

parse(expression, '4 * 2');
