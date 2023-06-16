const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Please enter some input: ');
const response1 = readline.prompt();

console.log('Please enter another input: ');
const response2 = readline.prompt();

console.log(+response1 * +response2);