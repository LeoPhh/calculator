const userInput = require('./userInput');

exports.performOneVowelCountingCalculation = function() {

    const s = userInput.getStringWithPrompt('Please enter a string: ')

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
    return userInput.goAgain();
}