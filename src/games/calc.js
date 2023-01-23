import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'What is the result of the expression?';

const theCalc = (number1, number2, randomSign) => {
    switch (randomSign) {
        case '*':
          return number1 * number2;
        case '-':
          return number1 - number2;
        case "+":
          return number1 + number2;
      }
}


const gameFunction = () => {
    const signs = ["*","+","-"]
    const randomSign = signs[Math.floor(Math.random() * signs.length)];
    const number1 = generateRandomNumber(1,10);
    const number2 = generateRandomNumber(1,10);
    const question = `${number1} ${randomSign} ${number2}`;
    const answer = String(theCalc(number1, number2, randomSign));
    return [question, answer]
}

export const playGame = engine(gameFunction, gameDescription);
export default playGame