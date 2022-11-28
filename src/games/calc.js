import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'What is the result of the expression?';

const calc = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
  }
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 99);
  const secondNumber = generateRandomNumber(1, 99);
  const operators = ['*', '-', '+'];
  const operation = operators[generateRandomNumber(0, operators.length - 1)];
  const answer = String(calc(firstNumber, secondNumber, operation));
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return [question, answer];
};

export const calcGame = engine(generateRound, gameDescription);

export default calcGame;