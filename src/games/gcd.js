import readlineSync from 'readline-sync';
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.')
export function gcd()  {
  let answersCounter = 0;
  while(answersCounter < 3) {
    let randomNumber1 = (Math.floor(Math.random() * 10 + 1))
    let randomNumber2 = (Math.floor(Math.random() * 10 + 1))
    console.log("Question: " + randomNumber1, randomNumber2);
    let answerUser = readlineSync.question("Your answer: ");
    let maxdel = 0;
  
    while (randomNumber1 != randomNumber2) {
        if (randomNumber1 > randomNumber2) {
          randomNumber1 = randomNumber1 - randomNumber2;
        }
        else {
          randomNumber2 = randomNumber2 - randomNumber1;
        }
      }
  
      maxdel = randomNumber1;
            if(answerUser == maxdel) {
                console.log("Correct!");
                answersCounter +=1;
            }
        
        else {
            console.log(answerUser + ` is wrong answer  ;(. Correct answer was ${maxdel}. \nLet's try again, ${userName}!`);
            break;
        }
    }    if(answersCounter == 3) {
        console.log(`Congratulations, ${userName}! `) 
    }
    
}
