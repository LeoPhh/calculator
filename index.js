const readline = require('readline-sync');

// Functions
function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function getOperator() {
    console.log('Please enter the operator: ');
    return readline.prompt();
}

function getTimes(operator) {
    console.log(`How many times would you like to ${operator}?`);
    const times = +readline.prompt();
    if (isNaN(times)) {
        return getTimes();
    } else {
        return times;
    }
}

function askForSpecificNumber(k) {
    console.log(`Enter number ${k.toString()}: `);
    const currentNumber = readline.prompt();
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

function goAgain() {
    console.log("Would you like to do another calculation? [Y/N]")
    return (readline.prompt() == 'Y');
}

function getCalculationMode() {
    console.log('Which calculator mode do you want?');
    console.log('1) Arithmetic');
    console.log('2) Vowel counting');
    const mode = readline.prompt();
    return mode;
}

function performOneArithmeticCalculation() {
    var operator = getOperator();
    var times = getTimes(operator);
    var numbersArray = getNumbers(times);
    calculateAndPrint(numbersArray, operator);
    flag = goAgain();
}

function performOneVowelCountingCalculation() {
    console.log('Please enter a string:');
    const s = readline.prompt();

    // Creating vowels object
    const vowelsObject = {
        'A': 0,
        'E': 0,
        'I': 0,
        'O': 0,
        'U': 0,
    }

    // Increment appropriate vowels in vowels object
    for (var i = 0; i <= s.length - 1; i++) {
        currentVowel = s[i].toUpperCase();
        if (vowelsObject.hasOwnProperty(currentVowel) == true) {
            vowelsObject[currentVowel] += 1;
        }
    }

    console.log(vowelsObject);
    return goAgain();
}

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();

var flag = true;
while (flag) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}