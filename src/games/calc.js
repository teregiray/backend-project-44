import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '-':
      return number1 * number2;
  }
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 99);
  const secondNumber = generateRandomNumber(1, 99);
  const operators = ['*', '-', '+'];
  const operation = operators[generateRandomNumber(0, operators.length - 1)];
  const answer = String(calculate(firstNumber, secondNumber, operation));
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return [question, answer];
};

export const startCalcGame = engine(generateRound, gameDescription);

export default startCalcGame;