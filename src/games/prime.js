import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(1, 99);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
};

export const startGame = engine(generateRound, gameDescription);

export default startGame;