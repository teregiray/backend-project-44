import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number1) => {
    let result = 0;
    for (let i = 1; i <= number1; i += 1) {
      if (number1 % i === 0) {
        result += 1;
      }
    }
    if (result === 2) {
      return true;
    }
    return false;
  };

const gameFunction = () => {
const number1 = generateRandomNumber(1,49);
const question = `${number1}`;
const answer = isPrime(number1) ? "yes": "no";
return [question, answer]
};

export const playGame = engine(gameFunction, gameDescription);
export default playGame