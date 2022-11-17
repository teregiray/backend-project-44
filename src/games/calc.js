import readlineSync from 'readline-sync';
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?')
export function calc()  {
    let signs = ["*","-","+"];
    for(let answersCounter = 0;answersCounter < 3; answersCounter +=1) {
        let randomSign = signs[Math.floor(Math.random(signs.length-1))]
        let randomNumber1 = Math.floor(Math.random() * 10);
        let randomNumber2 = Math.floor(Math.random() * 10);
        console.log("Question: " + result);
        let answerUser = readlineSync.question("Your answer: ");
        if (randomSign === "+") {
            let result = randomNumber1 + randomNumber2;
        }
        
        if (randomSign === "-") {
            let result = randomNumber1 - randomNumber2;
        }

        if (randomSign === "*") {
            let result = randomNumber1 * randomNumber2;
        }
           else {
        console.log(answerUser + ` is wrong answer  ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`)
        break;        
    }
    
}
        console.log(`Congratulations,  ${userName}! `) 
        }
        
        calc()