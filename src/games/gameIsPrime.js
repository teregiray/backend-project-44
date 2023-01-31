import { engine } from '../engine.js';

import { generateRandomNumber } from '../generateRandomNumber.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result += 1;
    }
  }
  if (result === 2) {
    return true;
  }
  return false;
};

const gameFunction = () => {
  const number = generateRandomNumber(1, 49);
  const question = ` ${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const playIsPrime = engine(gameFunction, gameDescription);
export default playIsPrime;
