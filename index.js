const arithmetic = require('./arithmetic');
const userInput = require('./userInput');
const vowelCounting = require('./vowelCounting');

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function getCalculationMode() {
    return userInput.getStringWithPrompt('Which calculator mode do you want?\n1) Arithmetic\n2) Vowel Counting');
}

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();

var flag = true;
while (flag) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        flag = arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        flag = vowelCounting.performOneVowelCountingCalculation();
    }
}