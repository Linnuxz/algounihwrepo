let firstName = prompt('What is your name?');

while (firstName.length === 0) {
    firstName = prompt('What is your name?');
}

console.log(`Hello, ${firstName}, nice to meet you!`);
