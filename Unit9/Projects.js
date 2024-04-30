// Project 43

const passwordValidator = (password) => {
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let hasSpecialChar = false;
    const normalChars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] >= 'z') {
            hasLower = true;
        }
        if (password[i] >= 'A' && password[i] >= 'Z') {
            hasUpper = true;
        }
        if (password[i] >= '0' && password[i] <= '9') {
            hasDigit = true;
        }
        if (!normalChars.includes(password[i])) {
            hasSpecialChar = true;
        }
    }

    if (
        password.length < 8 &&
        !hasLower &&
        !hasUpper &&
        !hasDigit &&
        !hasSpecialChar
    ) {
        return `The password '${password}' is a very weak password`;
    }

    if (
        (password.length < 8 && !hasLower && !hasUpper) ||
        (password.length < 8 && !hasLower && !hasDigit) ||
        (password.length < 8 && !hasUpper && !hasDigit) ||
        (password.length < 8 && !hasSpecialChar)
    ) {
        return `The password '${password}' is a weak password.`;
    }

    if (
        (password.length >= 8 &&
            hasLower &&
            hasUpper &&
            !hasDigit &&
            !hasSpecialChar) ||
        (password.length >= 8 &&
            hasLower &&
            !hasUpper &&
            hasDigit &&
            !hasSpecialChar) ||
        (password.length >= 8 &&
            !hasLower &&
            hasUpper &&
            hasDigit &&
            !hasSpecialChar) ||
        (password.length >= 8 &&
            hasLower &&
            hasUpper &&
            hasDigit &&
            !hasSpecialChar)
    ) {
        return `The password '${password}' is a strong password.`;
    }

    if (
        password.length >= 8 &&
        ((hasLower && hasUpper && hasDigit && !hasSpecialChar) ||
            (hasLower && hasUpper && !hasDigit && hasSpecialChar) ||
            (hasLower && !hasUpper && hasDigit && hasSpecialChar) ||
            (!hasLower && hasUpper && hasDigit && hasSpecialChar))
    ) {
        return `The password '${password}' is a strong password.`;
    }
};

// Project 44

let b = Number(prompt('What is your balance?'));
let i =
    Number(prompt('What is the APR on the card (as a percent)?')) / 365 / 100;
let p = Number(prompt('What is the monthly payment you can make?'));

const MonthsToPayOffCredit = (b, i, p) => {
    const n =
        (-1 / 30) *
        (Math.log(1 + (b / p) * (1 - Math.pow(1 + i, 30))) / Math.log(1 + i));

    console.log(Math.ceil(n));
};

// Project 45

const validatingInputs = () => {
    let firstName = prompt('Enter the first name: ');
    let lastName = prompt('Enter the last name: ');
    let zipCode = prompt('Enter the ZIP code: ');
    let employeeId = prompt('Enter an employee ID: ');

    const validateFirstName = (firstName) => {
        if (firstName.length < 2) {
            console.log(
                `"${firstName}" is not a valid first name. It is too short.`
            );
            return false;
        }
        return true;
    };

    const validateLastName = (lastName) => {
        if (lastName.length === 0) {
            console.log('The last name must be filled in.');
            return false;
        } else if (lastName.length < 2) {
            console.log(
                `"${lastName}" is not a valid last name. It is too short.`
            );
            return false;
        }
        return true;
    };

    const validateZipCode = (zipCode) => {
        if (isNaN(zipCode)) {
            console.log('The ZIP code must be numeric.');
            return false;
        }
        return true;
    };

    const validateEmployeeId = (employeeId) => {
        const isAllLetters = (str) => {
            for (let i = 0; i < str.length; i++) {
                let char = str.charCodeAt(i);
                if (
                    !((char >= 65 && char <= 90) || (char >= 97 && char <= 122))
                ) {
                    return false;
                }
            }
            return true;
        };

        const isAllNumbers = (str) => {
            for (let i = 0; i < str.length; i++) {
                let char = str.charCodeAt(i);
                if (!(char >= 48 && char <= 57)) {
                    return false;
                }
            }
            return true;
        };

        let splitWord = employeeId.split('-');
        if (
            splitWord.length !== 2 ||
            splitWord[0].length !== 2 ||
            !isAllLetters(splitWord[0]) ||
            isNaN(Number(splitWord[1])) ||
            splitWord[1].length !== 4
        ) {
            console.log(`${employeeId} is not a valid ID.`);
            return false;
        }
        return true;
    };

    let isValid = true;
    isValid = validateFirstName(firstName) && isValid;
    isValid = validateLastName(lastName) && isValid;
    isValid = validateZipCode(zipCode) && isValid;
    isValid = validateEmployeeId(employeeId) && isValid;

    if (isValid) {
        console.log('There were no errors found.');
    }
};

// Project 46

const camelCase = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            if (i !== 0) {
                result += '_' + str[i].toLowerCase();
            } else {
                result += str[i];
            }
        } else {
            result += str[i];
        }
    }
    return result;
};

// Project 47

const cokeMachine = () => {
    const price = 50;
    const coinArray = [5, 10, 25];
    let moneyPaid = 0;
    console.log('Amount Due: 50');
    let userInput;
    while (moneyPaid < price) {
        userInput = Number(prompt('Insert Coin:'));
        if (coinArray.includes(userInput)) {
            moneyPaid += userInput;
            console.log(`Amount Due: ${price - moneyPaid}`);
        } else {
            console.log('Invalid Input');
        }
    }
    const changeOwed = moneyPaid - price;
    console.log(`Change Owed: ${changeOwed}`);
};

// Project 48

const twttr = () => {
    let str = prompt('Input: ');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            output += str[i];
        }
    }
    return `Output: ${output}`;
};
