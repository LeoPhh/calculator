const userInput = require('./userInput');

function getOperator() {
    return userInput.getStringWithPrompt('Please enter the operator')
}

function getTimes(operator) {
    const times = userInput.getStringWithPrompt(`How many times would you like to ${operator}?`);
    if (isNaN(times)) {
        return getTimes();
    } else {
        return times;
    }
}

function askForSpecificNumber(k) {
    const currentNumber = userInput.getStringWithPrompt(`Enter number ${k.toString()}: `);
    if (isNaN(currentNumber)) {
        askForSpecificNumber(k);
    } else {
        return currentNumber;
    }
} 

function getNumbers(times) {
    let numbers = [];
    for (let i = 1; i < (+times+1); i++) {
        const currentNumber = askForSpecificNumber(i);
        numbers.push(+currentNumber);
    }
    return numbers
}

function calculateAndPrint(numbersArray, operator) {
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
        } else {
            console.log(`Please make sure you enter a valid operator. '${operator}' is invalid.`);
            return 0; // Stop running this function
        }
    }

    if (isNaN(result)) {
        console.log('The answer is invalid. Please make sure you entered correct numbers at each stage.')
    } else {
        console.log(`The answer is ${result}`);
    }
}

exports.performOneArithmeticCalculation = function() {
    var operator = getOperator();
    var times = getTimes(operator);
    var numbersArray = getNumbers(times);
    calculateAndPrint(numbersArray, operator);
    return userInput.goAgain();
}