/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

import { curry } from 'ramda';

export const setAttribute = curry((attr, value, el) => el.setAttribute(attr, value));

export const removeAttribute = curry((attr, el) => el.removeAttribute(attr));

export const toggleAttribute = curry((attr, add, el) => el.toggleAttribute(attr, add));

export const setInnerHTML = (el, html) => {
  el.innerHTML = html;
};

export const queryElement = (selector) => document.querySelector(selector);

export const setElementHtml = curry((selector, html) => setInnerHTML(queryElement(selector), html));

export const on = curry((eventName, el, callback) => el.addEventListener(eventName, callback));
