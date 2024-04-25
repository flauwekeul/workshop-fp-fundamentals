/**
 * Copied from https://api.le-systeme-solaire.net/rest/bodies
 * Docs: https://api.le-systeme-solaire.net/en/
 *
 * Semi-major axis: The average distance between a planet and the Sun.
 * 1 Astronomical Unit (AU) is the average distance between the Earth and the Sun.
 */
import { bodies } from './solar-system/bodies.json';

const RADIUS_SCALE = 0.002;
const DISTANCE_SCALE = 0.000005;

renderBody(bodies.find((body) => body.bodyType === 'Star'));
bodies.filter((body) => body.bodyType === 'Planet').forEach(renderBody);

function renderBody(body) {
  document.getElementById(body.id) ?? createElement(body);
}

function createElement({ id, englishName, meanRadius, semimajorAxis }) {
  const el = document.createElement('div');
  el.id = id;
  el.classList.add('body');
  el.style.setProperty('--radius', `${meanRadius * RADIUS_SCALE}px`);
  el.style.setProperty('--distance', `${semimajorAxis * DISTANCE_SCALE}px`);
  el.innerHTML = `<div class="body__name">${englishName}</div>`;
  document.body.appendChild(el);
}
