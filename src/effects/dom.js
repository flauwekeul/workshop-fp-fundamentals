/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */

export const setInnerHTML = (el) => (html) => {
  el.innerHTML = html;
};

export const queryElement = (selector) => document.querySelector(selector);

export const on = (eventName) => (el) => (callback) => el.addEventListener(eventName, callback);

export const setElementProp = (el) => (prop) => (value) => {
  el[prop] = value;
};
