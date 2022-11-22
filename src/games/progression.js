import readlineSync from 'readline-sync'
import name from '../cli.js' ;
console.log('Welcome to the Brain Games!');
const userName = name()
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?')
export function progression () {

    for(let answersCounter = 0; answersCounter < 3; answersCounter +=1){
        let randomSwitch = Math.floor(Math.random() * 10 + 1)
        let randomNumber2 = Math.floor(Math.random() * 10 + 1)
        let progression = 0
        let result = 0
       
        for  (let i = 0; i <= 10; i +=1){
            if (i === randomNumber2){
                randomSwitch += randomSwitch
                result = randomSwitch
                progression += ` ...`
            }
           else { 

            randomSwitch += randomSwitch
            progression += ` ${randomSwitch}`
           
            }
            
        }

        console.log(`Question: ${progression}`)
        const answerUser = readlineSync.question('Your answer: ');
        if (answerUser == (result)) {
            console.log('Correct!')
        }

        else {
            console.log(answerUser + ` is wrong answer  ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`)
            break;
        }
        
    }
    console.log(`Congratulations, ${userName}! `) 
}