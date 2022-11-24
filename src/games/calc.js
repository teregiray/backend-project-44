import readlineSync from 'readline-sync';

import name from '../cli.js' ;

console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?')
export function calc()  {

   let signs = ["*","-","+"];
   let answersCounter = 0
    while(answersCounter < 3) {
        let randomSign = signs[Math.floor(Math.random(signs.length-1))]
        let randomNumber1 = Math.floor(Math.random() * 10);
        let randomNumber2 = Math.floor(Math.random() * 10);
        let result = 0;
        console.log("Question: " + randomNumber1 + " " + randomSign + " " + randomNumber2 );
        
        let answerUser = readlineSync.question("Your answer: ");
        if (randomSign === "+") {
            result = randomNumber1 + randomNumber2;
           if (answerUser == result) {
            console.log("Correct!")
            answersCounter +=1;
           }
        }
        
        if (randomSign === "-") {
           result = randomNumber1 - randomNumber2;
           if (answerUser == result) {
            console.log("Correct!")
            answersCounter +=1;
           }
        }

        if (randomSign === "*") {
            result = randomNumber1 * randomNumber2;
           if (answerUser == result) {
            console.log("Correct!")
            answersCounter +=1;
           }
        }
         if (answerUser != result) {
        console.log(answerUser + ` is wrong answer  ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`)
        break;        
    }
    
}
   if( answersCounter == 3) {
      
        console.log(`Congratulations, ${userName}! `) 
   }
        }
        