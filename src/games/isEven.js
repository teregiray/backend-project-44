import readlineSync from 'readline-sync';
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".')
export function isEven()  {

for(let answersCounter = 0;answersCounter < 3; answersCounter +=1) {
	const randomNumber = Math.floor(Math.random() * 100);
	const evenNumber = randomNumber % 2 === 0
	console.log("Question: " + randomNumber);
	
	const answerUser = readlineSync.question("Your answer: ");
if (answerUser === "yes" && evenNumber === true) {
	console.log("Correct!");
}

else if (answerUser === "yes" && evenNumber === false) {
	console.log(answerUser + ` is wrong answer  ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`)
	break;
	}

	if (answerUser === "no" && evenNumber  === false ) {
	console.log("Correct!");
}

else if (answerUser === "no" && evenNumber === true) {
console.log(answerUser + ` is wrong answer  ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`)
break;
}

}

console.log(`Congratulations, ${userName}!  `) 
}
