import readlineSync from 'readline-sync';
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?')
export function prime() {


  
  let answersCounter = 0;
    while(answersCounter < 3) {
    let rightAnswer;
    const result = [];
    const randomNumber1 = Math.floor(Math.random() * 10 );
    for (let z = 0; z <= randomNumber1; z += 1) {
      if (randomNumber1 % z === 0) {
        result.push(z);
      }
    }
    
   
    if (result.length === 2) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${randomNumber1}`);
    const userAnswer = readlineSync.question('Your answer: ');
    

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
      answersCounter +=1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  if(answersCounter === 3) {
  console.log(`Congratulations, ${userName}!`);
}
}

