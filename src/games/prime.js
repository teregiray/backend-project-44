import readlineSync from 'readline-sync';
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
export function prime()  {
    let result = 0;
    let resultLength = 0;
    let answersCounter = 0;
  while(answersCounter < 3) {
    let randomNumber1 = Math.floor(Math.random() *10 +1)
    console.log("Question: " + randomNumber1);
    let answerUser = readlineSync.question("Your answer: ");
    for(let i = 0 ; i < randomNumber1 ; i +=1) {
        if(randomNumber1 % i === 0) {
            result += String(i)
        }
    
    }
    if (result.length == 2 ) {
        resultLength = "yes"
    }
    else {
        resultLength = "no"
    }

    if (resultLength === answerUser) {
        console.log("Correct!");
        answersCounter +=1;
    }
    else {
        console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${resultLength}'.\nLet's try again, ${userName}!`);
        break;
    }

}
    if(answersCounter == 3) {
console.log(`Congratulations, ${userName}! `) 
    }
}