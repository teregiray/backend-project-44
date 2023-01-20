import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'What is the result of the expression?';

const signs = ["*","+","-"]
const randomSign = signs[Math.floor(Math.random() * signs.length)];

const theCalc = (number1, number2, randomSign) => {
    switch (randomSign) {
        case '*':
          answer = number1 * number2;
          break;
        case '-':
          answer = number1 - number2;
          break;
        default:
          answer = number1 + number2;
          break;
      }
      return answer
}


const gameFunction = () => {
    const number1 = generateRandomNumber(1,99);
    const number2 = generateRandomNumber(1,99);
    const question = `${number1} ${randomSign} ${number2}`;
    const answer = theCalc(number1, number2, randomSign);
    return [question, answer]
    console.log(question)
}

export const playGame = engine(gameFunction, gameDescription);
export default playGame