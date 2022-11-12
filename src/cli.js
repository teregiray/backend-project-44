import readlineSync from 'readline-sync';

export default greeting = () => {
console.log('Welcome to the Brain Games!');
const nameUser = readlineSync.question('May I have your name? ');
  return (`Hello, ${nameUser}!`);
}
