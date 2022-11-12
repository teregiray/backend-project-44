import readlineSync from 'readline-sync';

export default greetingFunction = () => {
console.log('Welcome to the Brain Games!');
let nameUser = readlineSync.question('May I have your name? ');
  return (`Hello, ${nameUser}!`);
}
