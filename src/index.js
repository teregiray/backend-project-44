import readlineSync from 'readline-sync';

const name = () => readlineSync.question('May I have your name? ');
export default name;
