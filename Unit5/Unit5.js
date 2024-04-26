// Task 1

const sumOfArray = (arr) => {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
};

// Task 2

const averageOfArray = (arr) => {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / arr.length;
};

// Task 3

const sortAsc = (arr) => {
    return arr.sort();
};

console.log(sortAsc([3, 2, 1]));

// Task 4

const biggestElement = (arr) => {
    return Math.max(...arr);
};

// Task 5

const smallestElement = (arr) => {
    return Math.min(...arr);
};

// Task 6

const checkArray = (arr, e) => {
    return arr.includes(e);
};

// Task 7

const removeElement = (arr, e) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

// Task 8

const amountOfElement = (arr, e) => {
    let count = 0;

    for (let element of arr) {
        if (element === e) {
            count++;
        }
    }
    return count;
};

// Task 9

const sumEvenNumbers = (arr) => {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
};

// Task 10

const secondBiggestNum = (arr) => {
    let tempArr = arr.sort((a, b) => a - b);
    return tempArr[arr.length - 2];
};

// Task 11

const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

// Task 12

const mergeTwoArrays = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a, b) => a - b);
};

// Task 13

const sortArrayAlphabetically = (arr) => {
    return arr.sort();
};

// Task 14

const findCommonElements = (...arrays) => {
    return arrays[0].filter((element) =>
        arrays.every((array) => array.includes(element))
    );
};

// Task 15

const Car = {
    mark: 'McLaren',
    model: 'Senna',
    year: 2018,
};

console.log(Car);

// Task 16

Car.start = () => {
    console.log('The car is starting!');
};

Car.start();

// Task 17

const Person = {
    name: 'Nika',
    age: 19,
    city: 'Tbilisi',
};

console.log(Person.name);

// Task 18

Person.job = 'Unemployed';

console.log(Person);
