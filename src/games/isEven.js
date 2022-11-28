import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export const startEvenGame = engine(generateRound, gameDescription);

export default startEvenGame;