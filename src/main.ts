import { createGame } from './domain/functions.js';
import { Players } from './domain/types.js';
import { Console, IO, IOE, pipe } from './fp-ts.js';
import './styles.css';
import { render } from './ui/functions.js';

const main: IO.IO<void> = () => {
  const players: Players = {
    red: { name: 'Hank' },
    yellow: { name: 'Sandy' },
  };
  const runIO = pipe(players, createGame, render, IOE.orElseFirstIOK(Console.error));

  runIO();
};

main();
