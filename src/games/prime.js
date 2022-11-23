import readlineSync from 'readline-sync';
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
export function prime()  {
    let result = 0;
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
    let resultLength = result.length === 2
    if(resultLength === true && answerUser === "yes") {
        console.log("Correct!")
        resultLength = "yes"
        answersCounter +=1;
    }
    if(resultLength === false && answerUser === 'no') {
        console.log("Correct!")
        resultLength = "no"
        answersCounter +=1;
    }
    else {
        console.log(answerUser + ` is wrong answer  ;(. Correct answer was ${resultLength}. \nLet's try again, ${userName}!`);
        break;
    }

}
    if(answersCounter == 3) {
console.log(`Congratulations, ${userName}! `) 
    }
}