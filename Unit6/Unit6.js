// Task 1

let arr = [123, 1244, 34, 3, 23, 23, 2, 5, 36, 32, 184];

let newArr = arr.filter((num) => {
    return num % 2 === 0;
});

// Task 2

let users = [
    { name: 'Nika', age: 19 },
    { name: 'Nika', age: 19 },
    { name: 'Nika', age: 19 },
    { name: 'Giorgi', age: 35 },
    { name: 'Lasha', age: 17 },
];
let adults = users.filter((user) => user.age >= 18);

// Tasks 3

const words = [
    'cat',
    'dog',
    'apple',
    'banana',
    'elephant',
    'chocolate',
    'crocodile',
    'orange',
    'kiwi',
    'hedgehog',
    'whale',
    'rhinoceros',
    'hippopotamus',
    'kangaroo',
];

console.log(words.filter((word) => word.length > 5));

// Task 4

let nums = [2, 3, 4, 5, 6, 7, 8, 9, -1];
let newNums = nums.map((num) => num * 2);

// Task 5

let userArr = users.map((user) => user.name);

// Task 6

let uppercaseWords = words.map((word) => word.toUpperCase());

// Task 7

let sum = 0;
nums.forEach((num) => (sum += num));

// Task 8

let obj = {};
let names = [
    'Gio',
    'Gio',
    'Gio',
    'Gio',
    'Saba',
    'Nika',
    'Nika',
    'Dato',
    'Beqa',
    'Gela',
    'Gela',
    'Gela',
    'Mitrofane',
];
names.map((name) => {
    obj[name] = (obj[name] || 0) + 1;
});

// Task 9

console.log(arr.sort((a, b) => a - b));

// Task 10

console.log(arr.sort((a, b) => b - a));

// Task 11

console.log(names.sort());

// Task 12

console.log(words.sort((a, b) => a.length - b.length));

// Task 13

names.forEach((name) => {
    console.log(name);
});

// Task 14

let sumNums = 0;
nums.forEach((num) => {
    sumNums += num;
});

// Task 15

const everyPositive = (arr) => {
    return arr.every((number) => number > 0);
};
const somePositive = (arr) => {
    return arr.some((number) => number > 0);
};

// Task 16

const checkLegalAge = (arr) => {
    return arr.every((person) => person.age > 18);
};

// Task 17

let testArr = ['', '', '', '', ''];

const everyEmpty = (arr) => {
    return arr.every((word) => word === '');
};

// Task 18

const someOdd = (arr) => {
    return arr.some((num) => num % 2 !== 0);
};

// Task 19

const someJuveniles = (users) => {
    return users.some((user) => user.age < 18);
};

// Task 20

const capitalizeWords = (str) => {
    str = str.split(' ');
    str = str.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
    console.log(str);
};

// Task 21

const uniqueNames = (users) => {
    let map = {};
    users.map((user) => {
        map[user.name] = 1;
    });
    return Object.keys(map);
};

// Task 22

const checkPangram = (str) => {
    str = str.toLowerCase();

    let set = new Set();
    for (let ch of str) {
        if (ch >= 'a' && ch <= 'z') {
            set.add(ch);
        }
    }
    return set.size === 26;
};

// Task 23

const arrayOfUniqueWords = (str) => {
    str = str.split(' ');
    let set = new Set();
    for (let word of str) {
        if (word !== 'the' && word !== 'a' && word !== 'is') set.add(word);
    }
    return set;
};

// Task 24

const removeFalsyValues = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        // reverse order cuz splice messes up the order when do it normally
        if (!arr[i]) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

// Task 25

const reverseWords = (str) => {
    return str.split(' ').reverse().join(' ');
};
