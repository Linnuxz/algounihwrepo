// Project 49

function validateLicenseUsuserInput(userInput) {
    let illegalCharacters = [' ', '.', ',', '?', '!', ':', ';'];

    if (userInput.length > 6 || userInput.length < 2) {
        return `Invalid`;
    }

    if (
        !(
            userInput[0] >= 'A' &&
            userInput[0] <= 'Z' &&
            userInput[1] >= 'A' &&
            userInput[1] <= 'Z'
        )
    ) {
        return `Invalid`;
    }
    for (let i = 0; i < userInput.length; i++) {
        if (illegalCharacters.includes(userInput[i])) {
            return `Invalid`;
        }
    }
    var hasNumber = false;
    var hasLetterAfterNumber = false;

    for (let i = 2; i < userInput.length; i++) {
        if (hasNumber) {
            if (userInput[i] >= 'A' && userInput[i] <= 'Z') {
                hasLetterAfterNumber = true;
            }
        }
        if (userInput[i] >= '0' && userInput[i] <= 9) {
            hasNumber = true;
        }
    }
    if (hasLetterAfterNumber) {
        return `Invalid`;
    }

    var numberStarted = false;
    for (var i = 2; i < userInput.length; i++) {
        if (userInput[i] >= '0' && userInput[i] <= '9') {
            numberStarted = true;
            if (
                numberStarted &&
                userInput[i] === '0' &&
                userInput[i - 1] >= 'A' &&
                userInput[i - 1] <= 'Z'
            ) {
                return 'Invalid';
            }
        } else {
            if (numberStarted) {
                return 'Invalid';
            }
        }
    }

    return `Valid`;
}

// Project 50

const rateOfReturn = () => {
    let ror = parseFloat(prompt('What is the rate of return?'));
    const year = 72 / ror;
    while (isNaN(ror) || ror === 0) {
        console.log("Sorry. That's not a valid input.");
        ror = parseFloat(prompt('What is the rate of return?'));
    }

    return `It will take ${year} years to double your initial investment.`;
};

// Project 51

const multiplicationTable = () => {
    for (let i = 0; i <= 12; i++) {
        for (let j = 0; j <= 12; j++) {
            console.log(`${i} X ${j} = ${i * j}`);
        }
    }
};

// Project 52

const calculateHeartRate = () => {
    let restingHR = Number(prompt('Resting Pulse: '));
    while (isNaN(restingHR) || restingHR <= 0) {
        restingHR = Number(prompt('Resting Pulse: '));
    }
    let age = Number(prompt('Age: '));
    while (isNaN(age) || age <= 0 || age >= 100) {
        age = Number(prompt('Age: '));
    }
    console.log('Intensity | Rate');
    for (let i = 55; i <= 95; i += 5) {
        let TargetHeartRate = (220 - age - restingHR) * (i / 100) + restingHR;
        console.log(`${i}% | ${Math.floor(TargetHeartRate)} bpm`);
    }
};

// Project 53

const guessTheNumber = () => {
    console.log("Let's play Guess the Number.");
    let difficultyLevels = [1, 2, 3];
    let difficulty = Number(prompt('Pick a difficulty level (1, 2, or 3):'));

    while (!difficultyLevels.includes(difficulty)) {
        console.log('Invalid Choice');
        difficulty = Number(prompt('Pick a difficulty level (1, 2, or 3):'));
    }

    let difficultyIndex = difficulty === 1 ? 10 : difficulty === 2 ? 100 : 1000;

    const randomNum = Math.ceil(Math.random() * difficultyIndex);

    console.log('I have my number.');

    let guess = Number(prompt("What's your guess?"));
    let count = 0;

    while (guess !== randomNum) {
        if (guess < randomNum) {
            console.log('Too low.');
        } else {
            console.log('Too high.');
        }
        count++;
        guess = Number(prompt("What's your guess?"));
    }

    console.log(`You got it in ${count} guesses!`);

    let playAgain = prompt('Play again? (y / n)');

    while (playAgain !== 'y' && playAgain !== 'n') {
        playAgain = prompt('Play again? (y / n)');
    }
    if (playAgain === 'y') {
        guessTheNumber();
    } else {
        console.log('Goodbye!');
    }
};

// Project 54

const magicBall = () => {
    prompt("What's your question?");
    let response =
        Math.ceil(Math.random() * 3) === 1
            ? 'Yes'
            : Math.ceil(Math.random() * 3) === 2
            ? 'No'
            : 'Ask again later';
    return response;
};

// Project 55

const pickAWinner = () => {
    let candidates = [];
    let input = prompt('Enter a name');
    while (input !== '') {
        candidates.push(input);
        input = prompt('Enter a name');
    }
    let winner = candidates[Math.ceil(Math.random() * candidates.length)];
    console.log(candidates);
    return `The winner is... ${winner}.`;
};

// Project 56

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const getInput = () => {
    const input = prompt('Date: ');
    const formattedDate = formatDate(input);
    if (formattedDate) {
        console.log(formattedDate);
    } else {
        console.log('Please enter a valid date.');
        getInput();
    }
};
function formatDate(input) {
    const parts = input.split(/[ ,/]+/);
    let month, day, year;

    if (parts.length === 3) {
        if (isNaN(parts[0])) {
            month =
                months.findIndex(
                    (m) => m.toLowerCase() === parts[0].toLowerCase()
                ) + 1;
        } else {
            month = parseInt(parts[0]);
        }
        day = parseInt(parts[1]);
        year = parseInt(parts[2]);

        if (
            !isNaN(month) &&
            !isNaN(day) &&
            !isNaN(year) &&
            month >= 1 &&
            month <= 12 &&
            day >= 1 &&
            day <= 31 &&
            year >= 1000 &&
            year <= 9999
        ) {
            return `${year}-${month.toString().padStart(2, '0')}-${day
                .toString()
                .padStart(2, '0')}`;
        }
    }
    return null;
}
