const wordsList = ['python', 'java', 'swift', 'javascript'];
const input = require('sync-input')
let wins = [];
let loses = [];

let hangMan = function () {

    let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    let hiddenWord = "-".repeat(randomWord.length);
    let usedWrongLetters = [];
    let usedCorrectWords = [];

    while (usedWrongLetters.length < 8) {
        console.log(`${hiddenWord}`);
        let quiz = input("Input a letter: ");
        console.log(``);
        if (usedCorrectWords.includes(quiz)) {
            console.log("You've already guessed this letter.");
        }
        if (quiz.length === 1) {
            usedCorrectWords.push(quiz);
        }
        if (quiz.length !== 1) {
            console.log("Please, input a single letter.")
        }
        if (/[a-z]/.test(quiz) === false) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
        }
        if (randomWord.includes(quiz)) {
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
                console.log(`You guessed the word ${randomWord}!
You survived!`);
                wins.push(1);
                gameMenu();
                break;
            }
        } else {
            if (quiz.length === 1 && /[a-z]/.test(quiz) === true) {
                console.log("That letter doesn't appear in the word.");
                usedWrongLetters.push(quiz);
            }
        }
    }
    if (hiddenWord !== randomWord) {
        console.log('You lost!');
        loses.push(1);
        gameMenu();
    }
}

let gameMenu = function () {

    console.log(`H A N G M A N`);

    let menuChoices =
        input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
    switch(menuChoices) {
        case "play":
            hangMan();
            break;
        case "results":
            console.log(`You won: ${wins.length} times.`);
            console.log(`You lost: ${loses.length} times.`);
            gameMenu();
            break;
        case "exit":
            break;
        default:
            gameMenu();
    }
}

gameMenu();
