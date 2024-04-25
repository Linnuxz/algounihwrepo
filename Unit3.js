// Task 1

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// Task 2

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 3

const helloNumber = () => {
    let num = Number(prompt('Enter a number'));
    if (num <= 0) {
        console.log('Invalid input');
        return;
    } else {
        for (let i = 1; i <= num; i++) {
            console.log('Hello!');
        }
    }
};

// Task 4

const task4 = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
};

// Task 5

const task5 = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(sum);
};

// Task 6

const guessTheNumber = () => {
    let secretNum = 3;
    let userInput = Number(prompt('Guess the number'));

    if (userInput === secretNum) {
        console.log("You're correct");
        return;
    } else {
        while (userInput !== secretNum) {
            console.log('Wrong Number');
            userInput = Number(prompt('Try again'));
            if (userInput === secretNum) {
                console.log('You are correct');
            }
        }
    }
};
