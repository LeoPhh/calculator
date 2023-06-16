const readline = require('readline-sync');

printWelcomeMessage();

var flag = true;
while (flag) {
    var operator = getOperator();
    var times = getTimes();
    var numbersArray = getNumbers();
    calculateAndPrint();
    flag = goAgain();
}


// Functions
function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function getOperator() {
    console.log('Please enter the operator: ');
    return readline.prompt();
}

function getTimes() {
    console.log('How many times would you like to ' + operator + '? ');
    const times = +readline.prompt();
    if (isNaN(times)) {
        return getTimes();
    } else {
        return times;
    }
}

function getNumbers() {
    let numbers = [];
    for (let i = 1; i < (+times+1); i++) {
        console.log('Enter number ' + i.toString() + ' : ');
        const currentNumber = readline.prompt();
        numbers.push(+currentNumber);
    }
    return numbers
}

function calculateAndPrint() {
    // Setting result equal to the first element of the array
    let result = numbersArray[0];

    // Calculating the corresponding result based on the operator
    for (let x = 1; x < numbersArray.length; x++) {
        if (operator == '+') {
            result += numbersArray[x];
        } else if (operator == '-') {
            result -= numbersArray[x];
        } else if (operator == '*') {
            result = result * numbersArray[x];
        } else if (operator == '/') {
            result = result / numbersArray[x];
        }
    }

    console.log('The answer is ' + result);
}

function goAgain() {
    console.log("Would you like to do another calculation? [Y/N]")
    return (readline.prompt() == 'Y');
}