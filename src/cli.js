import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
let name = readlineSync.question('May I have your name? ');
export default function askName = () => {
  return (`Hello, ${name}!`);
}

