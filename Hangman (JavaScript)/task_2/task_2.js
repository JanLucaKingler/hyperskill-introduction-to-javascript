const input = require('sync-input')
let correctWord = "python";
console.log("H A N G M A N");

function playHangman() {
    let userInput = input('Guess the word:');
    if (userInput.toLowerCase() === correctWord.toLowerCase()) {
        console.log("You survived!");
    } else {
        console.log("You lost!");
    }
}

playHangman()
