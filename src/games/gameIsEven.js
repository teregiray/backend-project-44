import { engine } from '../engine.js';

import { generateRandomNumber } from '../generateRandomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameFunction = () => {
  const number = generateRandomNumber(1, 99);
  const question = ` ${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

<<<<<<< HEAD:src/games/isEven.js
const playEven = engine(gameFunction, gameDescription);
export default playEven;
=======
export const playIsEven = engine(gameFunction, gameDescription);
export default playIsEven;
>>>>>>> temp-branch:src/games/gameIsEven.js
