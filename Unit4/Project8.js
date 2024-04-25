let gameDifficulty = Number(prompt('Enter game difficulty'));

while (gameDifficulty <= 0 || isNaN(gameDifficulty)) {
    console.log('Invalid input!');
    gameDifficulty = Number(prompt('Enter game difficulty'));
}

let secretNumber = Math.floor(Math.random() * gameDifficulty);
console.log('Secret Number:', secretNumber);

let userGuess = Number(prompt('Guess the number'));

while (userGuess !== secretNumber) {
    if (userGuess > secretNumber) {
        console.log('Too Large!');
    } else {
        console.log('Too Small!');
    }
    userGuess = Number(prompt('Guess the number'));
}

console.log('Just right!');
