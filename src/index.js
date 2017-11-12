import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');
const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  return console.log(`Hello, ${userName()}!`);
};
export default greeting;
