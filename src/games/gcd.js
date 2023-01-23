import  engine  from '../engine.js';

import  generateRandomNumber  from '../generateRandomNumber.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const isGcd = (number1, number2) => {
    if (number2) {
        return isGcd(number2, number1 % number2);
    } else {
        return number1;
    }
}
const gameFunction = () => {
const number1 = generateRandomNumber(1,49);
const number2 = generateRandomNumber(1,49);
const question = `${number1} ${number2}`;
const answer = String(isGcd(number1, number2));
return [question, answer]
};

export const playGame = engine(gameFunction, gameDescription);
export default playGame