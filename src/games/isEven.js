import {greeting} from '../cli.js' ;
import {randomNumber} from '../index.js' ; 
greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".')

const evenAnswer = randomNumber % 2 === 0
let answersCounter = 0;
while(answersCounter < 3) {
console.log( "Question: " + randomNumber);
const answerUser = readlineSync.question("Your answer: ");
if (answerUser === "yes" && evenAnswer === true) {
	answersCounter =+1;
	console.log("Correct!");
}
else if (answersUser === "no" && evenAnswer  === false ) {
	answersCounter +=1;
	console.log("Correct!");
}
else {
console.log(answerUser + "is wrong answer  ;(. Correct answer was 'no'.") 
}

if (answersCounter === 3) {
console.log("Congratulations, Bill!") // добавить экспорт в cli.js переменную имени
}

