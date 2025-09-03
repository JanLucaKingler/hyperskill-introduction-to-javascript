const input = require('sync-input');
let correctWord = "";

console.log("H A N G M A N");

function randomizeWords() {
    let meineListe = ["python", "java", "swift", "javascript"];
    let randomNumber = Math.floor(Math.random() * meineListe.length);
    correctWord = meineListe[randomNumber]; // set global variable
    let firstThreeLetters = correctWord.substring(0, 3);
    const hiddenPart = "-".repeat(correctWord.length - 3);
    const wordWithHiddenPart = firstThreeLetters + hiddenPart;

    console.log(wordWithHiddenPart);
    playHangman(wordWithHiddenPart);
}

function playHangman(wordWithHiddenPart) {
    let userInput = input('Guess the word: ');
    if (userInput.toLowerCase() === correctWord.toLowerCase()) {
        console.log("You survived!");
    } else {
        console.log("You lost!");
    }
}

randomizeWords();
