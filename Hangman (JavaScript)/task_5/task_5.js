const input = require('sync-input')

function playHangman() {
    const words = ['python', 'java', 'swift', 'javascript'];
    const word = words[Math.floor(Math.random() * words.length)];
    let attempts = 8;
    let guessedCorrectLetters = new Set();
    let state = Array(word.length).fill('-');

    console.log("H A N G M A N");
    console.log();
    console.log(state.join(''));

    while (attempts > 0) {
        const userInput = input("Input a letter: ");
        const letter = userInput.trim()[0];

        if (!letter) {
            if (attempts > 1) console.log("\n" + state.join(''));
            continue;
        }

        attempts--;

        if (guessedCorrectLetters.has(letter)) {
            
        } else if (word.includes(letter)) {
            
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) state[i] = letter;
            }
            guessedCorrectLetters.add(letter);
        } else {
            console.log("That letter doesn't appear in the word.");
        }

        if (attempts > 0) {
            console.log("\n" + state.join(''));
        }
    }

    console.log("\nThanks for playing!");
}
playHangman();
