import { engine } from '../engine.js';

import { generateRandomNumber } from '../generateRandomNumber.js';

const gameDescription = 'What is the result of the expression?';

const theCalc = (number1, number2, randomSign) => {
  let answer = 0;
  switch (randomSign) {
    case '*':
      answer = number1 * number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '+':
      answer = number1 + number2;
      break;
    default:
      // решение ошибки 8:3   error  Expected a default case   default-case
  }
  return answer;
};

const gameFunction = () => {
  const signs = ['*', '+', '-'];
  const randomSign = signs[Math.floor(Math.random() * signs.length)];
  const number1 = generateRandomNumber(1, 10);
  const number2 = generateRandomNumber(1, 10);
  const question = ` ${number1} ${randomSign} ${number2}`;
  const answer = String(theCalc(number1, number2, randomSign));
  return [question, answer];
};

const playGame = engine(gameFunction, gameDescription);
export default playGame;
