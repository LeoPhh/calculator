const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

// Asking for user prompt
console.log('Please enter the operator: ');
const operator = readline.prompt();

console.log('How many times would you like to ' + operator + '? ');
const times = readline.prompt();

// Collecting all the numbers from the user
let numbers = [];
for (let i = 1; i < (+times+1); i++) {
    console.log('Enter number ' + i.toString() + ' : ');
    const currentNumber = readline.prompt();
    numbers.push(+currentNumber);
}

// Setting result equal to the first element of the array
let result = numbers[0];

// Calculating the corresponding result based on the operator
for (let x = 1; x < numbers.length; x++) {
    switch (operator) {
        case '+':
            result += numbers[x];
            break;
        case '-':
            result -= numbers[x];
            break;
        case '*':
            result = result * numbers[x];
            break;
        case '/':
            result = result / numbers[x];
            break;
    }
}

// Printing the answer
console.log('The answer is ' + result);