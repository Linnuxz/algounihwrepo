// Task 1

const oddOrEven = (num) => {
    if (num === 1) {
        console.log('Neither');
    } else if (num % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
};

oddOrEven(1);

// Task 2

const positiveOrNegative = (num) => {
    if (num === 0) {
        console.log('Neither');
    } else if (num > 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
};

positiveOrNegative(-1);

// Task 3

const isDivisible = (a, b) => {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isDivisible(5, 2));

// Task 4

const isEmpty = (str) => {
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEmpty(''));

// Task 5

let quote =
    'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.';

console.log(quote.includes('thinking'));

// Task 6

const min = (a, b) => {
    console.log(Math.min(a, b));
};

min(10, 100);

// Task 7

const max = (a, b) => {
    console.log(Math.max(a, b));
};

max(10, 100);

// Task 8

const adultOrNot = () => {
    let age = Number(prompt('How old are you?')); // ეს browser ში მუშაობს მარტო
    if (age >= 18) {
        console.log('Adult');
    } else {
        console.log('Minor');
    }
};

// Task 9

const grade = () => {
    let score = Number(prompt('Enter your score')); // ესეც browser ში
    if (score < 0 || score > 100) {
        console.log('Invalid score');
    } else {
        let grade;
        switch (true) {
            case score > 90:
                grade = 'A';
                break;
            case score > 80:
                grade = 'B';
                break;
            case score > 70:
                grade = 'C';
                break;
            case score > 60:
                grade = 'D';
                break;
            case score > 50:
                grade = 'E';
                break;
            default:
                grade = 'F';
        }
        console.log(`Your grade is ${grade}`);
    }
};

// Task 10

const rating = () => {
    let grade = prompt('Enter your grade'); // Same here
    let rating;
    switch (grade) {
        case 'A':
            rating = 'Excellent';
            break;
        case 'B':
            rating = 'Very good';
            break;
        case 'C':
            rating = 'Good';
            break;
        case 'D':
            rating = 'Fair';
            break;
        case 'E':
            rating = 'Barely enough';
            break;
        case 'F':
            rating = 'Failure';
            break;
        default:
            console.log('Invalid input');
            return;
    }
    console.log(`Your rating: ${rating}`);
};

// Task 11

const daysInMonth = () => {
    let monthNum = Number(prompt('Enter month number'));
    let days;
    switch (monthNum) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            console.log('Invalid month number');
            return;
    }
    console.log(`Number of days: ${days}`);
};
