const readline = require('readline-sync');

function getStringWithPrompt(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
}

exports.goAgain = function() {
    return (getStringWithPrompt("Would you like to do another calculation? [Y/N]") == 'Y');
}

// Export the getStringWithPrompt() function (wasn't exported in line 3, because it was needed in the goAgain() function)
exports.getStringWithPrompt = getStringWithPrompt;