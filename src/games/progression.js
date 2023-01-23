import { engine } from '../engine.js';

import { generateRandomNumber } from '../generateRandomNumber.js';

const gameDescription = 'What number is missing in the progression?';

const progressionFunction = (number1, diffPerElement) => {
  let differenceDynamic = diffPerElement;
  let viewProggresion = '';
  let missedNumber = 0;
  const differenceStatic = differenceDynamic;

  for (let i = 0; i <= 10; i += 1) {
    if (i === number1) {
      differenceDynamic += differenceStatic;
      viewProggresion += ' ..';
      missedNumber = differenceDynamic;
    } else {
      differenceDynamic += differenceStatic;
      viewProggresion += ` ${differenceDynamic}`;
    }
  }
  return [viewProggresion, missedNumber]; // костыль
};

const gameFunction = () => {
  const number1 = generateRandomNumber(1, 10);
  const diffPerElement = generateRandomNumber(1, 10);
  const question = String(`${progressionFunction(number1, diffPerElement)[0]}`); // костыль
  const answer = String(progressionFunction(number1, diffPerElement)[1]); // костыль
  return [question, answer];
};

const playGame = engine(gameFunction, gameDescription);
export default playGame;
