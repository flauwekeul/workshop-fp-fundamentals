import { Game } from '../domain/types.js';
import { DOM, IO, IOE, IOO, RNEA, pipe, sequenceArray_ } from '../fp-ts.js';

export const createElement =
  <T extends HTMLElement>(tag: string, attrs: Record<string, string> = {}): IO.IO<T> =>
  () => {
    const element = document.createElement(tag) as T;
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  };

export const queryElement = <T extends Element>(selector: string): IOE.IOEither<string, T> =>
  pipe(
    DOM.querySelector(selector)(document) as IOO.IOOption<T>,
    IOO.matchE(() => IOE.left(`Could not find element with id "${selector}"`), IOE.right),
  );

export const CONTAINER_ELEMENT = queryElement<HTMLDivElement>('#frame');

export const appendToFrame = <T extends Element>(el: T): IOE.IOEither<string, void> =>
  pipe(CONTAINER_ELEMENT, IOE.flatMapIO(DOM.appendChild(el)));

// export const dropDisc =
//   (game: Game) =>
//   (e: Event): IO.IO<void> =>
//   () => {};

export const updateGame = (listener: (e: Event) => IO.IO<void>) =>
  pipe(CONTAINER_ELEMENT, IOE.flatMapIO(DOM.addEventListener_('click')(listener)));

export const renderCell = (): IOE.IOEither<string, void> =>
  pipe(createElement<HTMLDivElement>('div', { class: 'cell' }), IO.flatMap(appendToFrame));

export const renderCurrentPlayer = ({
  currentColor,
  players,
}: Pick<Game, 'currentColor' | 'players'>): IOE.IOEither<string, void> => {
  const currentPlayer = players[currentColor];
  return pipe(
    queryElement<HTMLDivElement>('#current-player'),
    IOE.flatMapIO((el) => () => {
      el.classList.add(currentColor);
      el.textContent = currentPlayer.name;
    }),
  );
};

export const render = ({ cells, players, currentColor }: Game): IOE.IOEither<string, void> =>
  pipe(cells, RNEA.map(renderCell), sequenceArray_, IOE.flatMapEither(renderCurrentPlayer({ currentColor, players })));
