const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

// Asking for user prompt
console.log('Please enter the operator: ');
const operator = readline.prompt();

console.log('Please enter the first number: ');
const response1 = readline.prompt();

console.log('Please enter the second number: ');
const response2 = readline.prompt();

// Choosing between different operators using if-else statements
// if (operator == '+') {
//     console.log('\The sum of the two numbers is ' + (+response1 + +response2));
// } else if (operator == '-') {
//     console.log('\The first number minus the second number is ' + (+response1 - +response2));
// } else if (operator == '*') {
//     console.log('\The product of the two numbers is ' + +response1 * +response2);
// } else if (operator == '/') {
//     console.log('\The first number divided by the second number is ' + +response1 / +response2);
// }

// Choosing between different operators using switch statements
switch (operator) {
    case '+':
        console.log('\The sum of the two numbers is ' + (+response1 + +response2));
        break;
    case '-':
        console.log('\The first number minus the second number is ' + (+response1 - +response2));
        break;
    case '*':
        console.log('\The product of the two numbers is ' + +response1 * +response2);
        break;
    case '/':
        console.log('\The first number divided by the second number is ' + +response1 / +response2);
        break;
}