// Project 19

const gallon = 350;
let width = Number(prompt('Enter the width of the room'));
let length = Number(prompt('Enter the length of the room'));
const area = width * length;

console.log(`You will need to purchase ${Math.ceil(area / gallon)}`);

// Project 20

let firstPrice = Number(prompt('Enter the price of item 1: '));
let firstQuantity = Number(prompt('Enter the quantity of item 1: '));
let secondPrice = Number(prompt('Enter the price of item 2: '));
let secondQuantity = Number(prompt('Enter the quantity of item 2: '));
let thirdPrice = Number(prompt('Enter the price of item 3: '));
let thirdQuantity = Number(prompt('Enter the quantity of item 3: '));
const subtotal =
    firstPrice * firstQuantity +
    secondPrice * secondQuantity +
    thirdPrice * thirdQuantity;
const tax = subtotal * 0.055;
console.log(`Subtotal: $${subtotal}`);
console.log(`Tax: ${tax}`);
console.log(`Total: ${subtotal + tax}`);

// Project 21

let euros = Number(prompt('How many euros are you exchanging?'));
let exchangeRate = parseFloat(prompt('What is the exchange rate?'));

const amountTo = (euros * exchangeRate) / 100;

console.log(
    `${euros} euros at an exchange rate of ${exchangeRate} is ${amountTo} U.S. dollars.`
);

// Project 22

let p = Number(prompt('Enter the principal: '));
let r = parseFloat(prompt('Enter the rate of interest: '));
let t = Number(prompt('Enter the number of years: '));
const a = p * (1 + (r / 100) * t);
console.log(`After ${t} years at ${r}%, the investment will be worth $${a}`);

// Project 23

let principalAmount = Number(prompt('What is the principal amount?'));
let rate = parseFloat(prompt('What is the rate?'));
let time = Number(prompt('What is the number of years?'));
let n = Number(
    prompt('What is the number of times the interest is compounded per year')
);
const A = principalAmount * Math.pow(1 + rate / 100 / n, n * time);

console.log(
    `${principalAmount} invested at ${rate}% for ${time} years compounded ${n} times per year is $${A}`
);

// Task 24

let answer = prompt(
    'What is the answer to the Great Question of Life, the Universe, and Everything? '
).toLowerCase();

if (answer === '42' || answer === 'forty-two' || answer === 'forty two') {
    console.log('Yes');
} else {
    console.log('No');
}

// Task 25

let greeting = prompt('Greetig: ');
if (greeting === 'Hello' || greeting === 'hello') {
    console.log('$0');
} else if (greeting[0] === 'h' || greeting[0] === 'H') {
    console.log('$20');
} else {
    console.log('$100');
}

// Task 26

const menu = {
    'Baja Taco': 4.25,
    Burrito: 7.5,
    Bowl: 8.5,
    Nachos: 11.0,
    Quesadilla: 8.5,
    'Super Burrito': 8.5,
    'Super Quesadilla': 9.5,
    Taco: 3.0,
    'Tortilla Salad': 8.0,
};

let userInput;
let userOrder = [];

while (true) {
    userInput = prompt('Item: ');
    if (userInput === '') {
        break;
    }
    let itemFound = false;
    for (let menuItem in menu) {
        if (menuItem.toLowerCase() === userInput.toLowerCase()) {
            userOrder.push(menuItem);
            itemFound = true;
            break;
        }
    }
    if (!itemFound) {
        console.log('Invalid item!');
    }
}

let total = 0;
for (let order of userOrder) {
    total += menu[order];
}
console.log(`Total: $${total.toFixed(2)}`);

// Project 27

emojiObject = {
    ':thumbs_up:': '👍',
    ':georgia:': '🇬🇪',
    ':japan:': '🇯🇵',
    ':1st_place_medal:': '🥇',
    ':European_Union:': '🇪🇺',
};

let emojiInput = prompt('Input: ');

while (emojiInput !== '') {
    for (let emoji in emojiObject) {
        if (emojiInput.includes(emoji)) {
            emojiInput = emojiInput.split(emoji).join(emojiObject[emoji]);
            console.log(`Output: ${emojiInput}`);
        }
    }
    emojiInput = prompt('Input: ');
}
