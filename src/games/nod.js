import _ from 'lodash';
import readlineSync from 'readline-sync';
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.')
export function nod()  {
    let answersCounter = 0;
    while(answersCounter < 3){
        let maxdel = 0;
    const randomNumber1 = (Math.floor(Math.random() * 10))
    const randomNumber2 = (Math.floor(Math.random() * 10))
    console.log("Question: " + randomNumber1, randomNumber2);
    let answerUser = readlineSync.question("Your answer: ");
    for(let delCounter = 0 ; delCounter <= randomNumber1; delCounter +=1) {
        if(randomNumber1 % delCounter === 0 && randomNumber2 % delCounter === 0) {
            answersCounter =+1;
            maxdel = delCounter;
            if(answerUser == maxdel) {
                console.log("Correct!")
            }
        }
        else {
            console.log(answerUser + ` is wrong answer  ;(. Correct answer was ${maxdel}. \nLet's try again, ${userName}!`)
            break;
        }
    }
    }
       if(answersCounter === 3) {}
}
nod()
// делаю цикл, от 1 до половины максимального числа, проверяю делятся ли оба на это, и если да, то записывать в maxdel