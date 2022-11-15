import readlineSync from 'readline-sync';
import {greeting} from '../cli.js' ;
greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".')
let answersCounter = 0;
while(answersCounter < 3) {
	const randomNumber = Math.floor(Math.random() * 100);
	const evenAnswer = randomNumber % 2 === 0
console.log("Question: " + randomNumber);
const answerUser = readlineSync.question("Your answer: ");
if (answerUser === "yes" && evenAnswer === true) {
	answersCounter =+1;
	console.log("Correct!");
}
else if (answerUser === "yes" && evenAnswer === false) {
console.log(answerUser + " is wrong answer  ;(. Correct answer was 'no'. \nLet's try again, Bill!")
continue;
}
else if (answerUser === "no" && evenAnswer  === false ) {
	answersCounter +=1;
	console.log("Correct!");
}
else {
console.log(answerUser + " is wrong answer  ;(. Correct answer was 'yes'. \nLet's try again, Bill!")
continue; 
}

}
if (answersCounter === 3) {
console.log("Congratulations, Bill"  ) // придумать как эспортировать переменную из cli.js и заменить на "Bill"
}

