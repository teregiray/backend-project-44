import readlineSync from 'readline-sync';

import name from '../index.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');
export default function progression() {
  let answersCounter = 0;
  while (answersCounter < 3) {
    let randomSwitch = Math.floor(Math.random() * 10);
    const rN3 = randomSwitch;
    const randomNumber2 = Math.floor(Math.random() * 10);
    let progr = '';
    let result = 0;

    for (let i = 0; i <= 10; i += 1) {
      if (i === randomNumber2) {
        randomSwitch += rN3;
        result = randomSwitch;
        progr += ' ..';
      } else {
        randomSwitch += rN3;
        progr += ` ${randomSwitch}`;
      }
    }

    console.log(`Question:${progr} `);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === String(result)) {
      console.log('Correct!');
      answersCounter += 1;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (answersCounter === 3) {
    console.log(`Congratulations, ${userName}!  `);
  }
}
