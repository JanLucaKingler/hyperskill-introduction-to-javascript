const input = require('sync-input')
const wordsList = ['python', 'java', 'swift', 'javascript'];
let hangMan = function () {

    let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    let hiddenWord = "-".repeat(randomWord.length);
    let usedWrongLetters = [];
    let usedCorrectWords = [];

    console.log(`H A N G M A N
`);

    while (usedWrongLetters.length < 8) {
        console.log(`${hiddenWord}`);
        let quiz = input(`Input a letter: `);
        console.log(``);
        if (usedCorrectWords.includes(quiz)) {
            console.log("No improvements.");
            usedWrongLetters.push(quiz);
        }
        if (randomWord.includes(quiz)) {
            usedCorrectWords.push(quiz);
            let newHiddenWord = "";
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === quiz && hiddenWord[i] === "-") {
                    newHiddenWord += quiz;
                } else {
                    newHiddenWord += hiddenWord[i];
                }
            }
            hiddenWord = newHiddenWord;
            if (newHiddenWord === randomWord) {
                console.log("You guessed the word!\nYou survived!");
                break;
            }
        } else {
            console.log("That letter doesn't appear in the word.");
            usedWrongLetters.push(quiz);
        }
    }
    if (hiddenWord !== randomWord) {
        console.log('You lost!');
    }
}

hangMan();
