// Task 1

const sayHello = () => {
    console.log('Hello, World');
};

// Task 2

const greet = (name) => {
    console.log(`Hello, ${name}`);
};

// Task 3

const sum = (a, b) => {
    return a + b;
};

console.log(sum(1, 2));

// Task 4

const calculateArea = (length, width) => {
    return length * width;
};

console.log(calculateArea(10, 5));

// Task 5

function largerNum(a, b) {
    return Math.max(a, b);
}

let largerNumFunction = function (a, b) {
    return Math.max(a, b);
};

const largerNumFunc = (a, b) => {
    return Math.max(a, b);
};

// Task 6

const helloWorld = (amount) => {
    for (let i = 1; i <= amount; i++) {
        console.log('Hello, World');
    }
};

// Task 7

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};

// Task 8

const sumDigits = (num) => {
    let stringNum = num.toString();
    let sum = 0;
    for (let num of stringNum) {
        sum += Number(num);
    }
    return sum;
};

// Task 9

const countBs = (str) => {
    let count = 0;

    for (let char of str) {
        if (char === 'B') {
            count++;
        }
    }
    return count;
};

// Task 10

const sumInterval = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Task 11

const palindromeString = (string) => {
    return string == string.split('').reverse().join('') ? true : false;
};
