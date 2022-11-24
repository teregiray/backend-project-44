import readlineSync from 'readline-sync';

export function greeting() {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
}
const name = () => readlineSync.question('May I have your name? ');
export default name;
