import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';


function gcd(number1, number2) {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
}

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);

  const answer = String(gcd(firstNumber, secondNumber));

  const question = `${firstNumber} ${secondNumber}`;

  return [question, answer];
};

export const startGame = engine(generateRound, gameDescription);

export default startGame;