/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { curry } from 'ramda';

export const setInnerHTML = (el, html) => {
  el.innerHTML = html;
};

export const queryElement = (selector) => document.querySelector(selector);

export const setElementHtml = (selector) => (html) => setInnerHTML(queryElement(selector), html);

export const on = curry((eventName, el, callback) => el.addEventListener(eventName, callback));
