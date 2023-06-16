const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('Please enter the operator: ');
const operator = readline.prompt();

console.log('Please enter the first number: ');
const response1 = readline.prompt();

console.log('Please enter the second number: ');
const response2 = readline.prompt();

if (operator == '+') {
    console.log('\The sum of the two numbers is ' + (+response1 + +response2));
} else if (operator == '-') {
    console.log('\The first number minus the second number is ' + (+response1 - +response2));
} else if (operator == '*') {
    console.log('\The product of the two numbers is ' + +response1 * +response2);
} else if (operator == '/') {
    console.log('\The first number divided by the second number is ' + +response1 / +response2);
}