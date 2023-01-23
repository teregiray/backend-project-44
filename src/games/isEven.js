import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameFunction = () => {
    const number = generateRandomNumber(1,99);
    const question = `${number}`;
    const answer = isEven(number) ? "yes" : "no";
    return [question, answer]
}

export const playGame = engine(gameFunction, gameDescription);
export default playGame
