// Project 10

const grade = () => {
    let score = Number(prompt("Enter the student's score"));
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
        console.log(`Student's Score: ${score}`);
        console.log(`Grade: ${grade}`);
    }
};

// Project 11

let num1 = Number(prompt('What is the first number?'));
let num2 = Number(prompt('What is the second number?'));
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);

// Project 12

let m = Number(prompt('Enter the mass (kg)'));
const c = 300000000;
let e = m * Math.pow(c, 2);
console.log(`E: ${e}`);

// Project 13

const priceInput = (input) => {
    return parseFloat(input.slice(1));
};
const percentage = (input) => {
    return parseFloat(input.slice(0, -1)) / 100;
};

let mealPrice = prompt('How much was the meal?');
let tipPercentage = prompt('What percentage would you like to tip?');

console.log(`Leave $${priceInput(mealPrice) * percentage(tipPercentage)}`);

// Project 14

let age = Number(prompt('What is your current age?'));
let retirementAge = Number(prompt('At what age would you like to retire?'));
let currentYear = new Date().getFullYear();
console.log(`You have ${retirementAge - age} years left until you can retire`);

console.log(
    `It's ${currentYear}, so you can retire in ${
        currentYear + retirementAge - age
    }`
);

// Project 15

let length = Number(prompt('What is the length of the room in feet?'));
let width = Number(prompt('What is the width of the room in feet?'));
const areaInFeet = length * width;
const areaInMeters = areaInFeet * 0.09290304;

console.log(`You entered dimensions of ${length} feet by ${width} feet`);
console.log('The area is');
console.log(`${areaInFeet} square feet`);
console.log(`${areaInMeters} meters`);

// Project 16

let people = Number(prompt('How many people?'));
let pizzas = Number(prompt('How many pizzas do you have?'));
let sliceCountPerPizza = Number(prompt('How many slices per pizza?'));

console.log(`${people} people with ${pizzas} pizzas`);
console.log(
    `Each person gets ${Math.floor((pizzas * sliceCountPerPizza) / people)} ${
        Math.floor((pizzas * sliceCountPerPizza) / people) === 1
            ? 'piece'
            : 'pieces'
    } of pizza`
);
console.log(
    `There are ${(pizzas * sliceCountPerPizza) % people} leftover ${
        (pizzas * sliceCountPerPizza) % people === 1 ? 'piece' : 'pieces'
    }`
);

// Project 17

let grocery = prompt(
    'Enter your grocery list (if you are done just press enter)'
);

let productMap = {};

while (grocery !== '') {
    productMap[grocery] = (productMap[grocery] || 0) + 1;
    grocery = prompt(
        'Enter your grocery list (if you are done just press enter)'
    );
}
let i = 1;
for (let key of Object.keys(productMap)) {
    console.log(`${i}. ${key.toUpperCase()}`);
    i++;
}

// Project 18

let names = [];
let userInput = prompt('Enter names');

while (userInput !== '') {
    names.push(userInput);
    userInput = prompt('Enter names');
}

let bye = 'Adieu, adieu, to ';

if (names.length === 1) {
    bye += names[0];
} else if (names.length === 2) {
    bye += names.join(' and ');
} else {
    bye += names.slice(0, -1).join(', ') + ', and ' + names.slice(-1);
}
