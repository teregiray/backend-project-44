import readlineSync from 'readline-sync';

import name from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
export default function calc() {
  const signs = ['*', '-', '+'];
  let answersCounter = 0;
  while (answersCounter < 3) {
    const randomSign = signs[Math.floor(Math.random(signs.length - 1))];
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    let result = 0;
    console.log(`Question: ${randomNumber1} ${randomSign} ${randomNumber2}`);

    const answerUser = readlineSync.question('Your answer: ');
    if (randomSign === '+') {
      result = randomNumber1 + randomNumber2;
      if (answerUser === String(result)) {
        console.log('Correct!');
        answersCounter += 1;
      }
    }

    if (randomSign === '-') {
      result = randomNumber1 - randomNumber2;
      if (answerUser === String(result)) {
        console.log('Correct!');
        answersCounter += 1;
      }
    }

    if (randomSign === '*') {
      result = randomNumber1 * randomNumber2;
      if (answerUser === String(result)) {
        console.log('Correct!');
        answersCounter += 1;
      }
    }
    if (answerUser !== String(result)) {
      console.log(`${answerUser} is wrong answer  ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (answersCounter === 3) {
    console.log(`Congratulations, ${userName}! `);
  }
}
