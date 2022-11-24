import readlineSync from 'readline-sync';

import name from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export default function isEven() {
  let answersCounter = 0;
  while (answersCounter < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    const evenNumber = randomNumber % 2 === 0;
    console.log(`Question: ${randomNumber}`);

    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === 'yes' && evenNumber === true) {
      console.log('Correct!');
      answersCounter += 1;
    } else if (answerUser === 'yes' && evenNumber === false) {
      console.log(`${answerUser} is wrong answer  ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
      break;
    }

    if (answerUser === 'no' && evenNumber === false) {
      console.log('Correct!');
      answersCounter += 1;
    } else if (answerUser === 'no' && evenNumber === true) {
      console.log(`${answerUser} is wrong answer  ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (answersCounter === 3) {
    console.log(`Congratulations, ${userName}!  `);
  }
}
