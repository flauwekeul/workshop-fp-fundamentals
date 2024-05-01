import { Maybe } from './Maybe.js';

// String -> Node -> Maybe<Node>
export const querySelector = (selector) => (parent) => Maybe.of(parent.querySelector(selector));

// Node -> Node -> IO()
export const appendChild = (child) => (parent) => () => parent.appendChild(child);
