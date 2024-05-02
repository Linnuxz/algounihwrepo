// Project 57

const generatePassword = () => {
    let minLength = Number(prompt("What's the minimum length?"));
    let numSpecialChar = Number(prompt('How many special characters?'));
    let numbers = Number(prompt('How many numbers?'));
    let password = '';
    const charset =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const special = '!@#$%^&*()_+{}:"<>?';
    const num = '0123456789';

    for (let i = 0; i < numSpecialChar; i++) {
        let randomIndex = Math.floor(Math.random() * special.length);
        password += special[randomIndex];
    }
    for (let i = 0; i < numbers; i++) {
        let randomIndex = Math.floor(Math.random() * num.length);
        password += num[randomIndex];
    }
    let remainingLength = minLength - numSpecialChar - numbers;

    for (let i = 0; i < remainingLength; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    password = password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');

    return password;
};

// Project 58

const nutritionFacts = () => {
    fruits = [
        { name: 'Apple', calories: 130 },
        { name: 'Avocado', calories: 50 },
        { name: 'Banana', calories: 110 },
        { name: 'Cantaloupe', calories: 50 },
        { name: 'Grapefruit', calories: 60 },
        { name: 'Grapes', calories: 90 },
        { name: 'Honeydew Melon', calories: 50 },
        { name: 'Kiwifruit', calories: 90 },
        { name: 'Lemon', calories: 15 },
        { name: 'Lime', calories: 20 },
        { name: 'Nectarine', calories: 60 },
        { name: 'Orange', calories: 80 },
        { name: 'Peach', calories: 60 },
        { name: 'Pear', calories: 100 },
        { name: 'Pineapple', calories: 50 },
        { name: 'Plums', calories: 70 },
        { name: 'Strawberries', calories: 50 },
        { name: 'Sweet Cherries', calories: 100 },
        { name: 'Tangerine', calories: 50 },
        { name: 'Watermelon', calories: 80 },
    ];

    let input = prompt('Item: ');

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].name.toLowerCase() === input.toLowerCase()) {
            console.log(`Calories: ${fruits[i].calories}`);
        }
    }
};

// Project 59

const removeEmployee = () => {
    let employees = [
        { fullName: 'John Smith' },
        { fullName: 'Jackie Jackson' },
        { fullName: 'Chris Jones' },
        { fullName: 'Amanda Cullen' },
        { fullName: 'Jeremy Goodwin' },
    ];
    const listEmployees = () => {
        console.log(`There are ${employees.length} employees`);
        for (let i = 0; i < employees.length; i++) {
            console.log(employees[i].fullName);
        }
        console.log('\n');
    };
    listEmployees();
    let firedEmployee = prompt('Enter an employee name to remove: ');
    let nameFound = false;

    for (let i = employees.length - 1; i >= 0; i--) {
        if (
            employees[i].fullName.toLowerCase() === firedEmployee.toLowerCase()
        ) {
            employees.splice(i, 1);
            nameFound = true;
        }
    }
    if (nameFound) {
        listEmployees();
    } else {
        console.log('Invalid employee name');
    }
};

// Project 60

const computingStatistics = () => {
    const calculateAverage = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    };

    let numbers = [];
    let input = prompt('Enter a number:');
    while (input !== 'done') {
        let number = Number(input);
        if (!isNaN(number)) {
            numbers.push(number);
        }
        input = prompt('Enter a number (or type "done" to finish):');
    }

    console.log(`Numbers: ${numbers}`);

    let average = calculateAverage(numbers);

    let averageArr = [];

    for (let i = 0; i < numbers.length; i++) {
        averageArr.push((average - numbers[i]) ** 2);
    }

    let deviation = Math.sqrt(calculateAverage(averageArr));

    console.log(`The average is ${average}`);
    console.log(`The minimum is ${Math.min(...numbers)}`);
    console.log(`The maximum is ${Math.max(...numbers)}`);
    console.log(`The standard deviation is ${deviation}`);
};

// Project 61

const filteringValues = () => {
    let inputValues = prompt('Enter a list of numbers, separated by spaces: ');
    let evenNums = inputValues
        .split(' ')
        .map((n) => Number(n))
        .filter((n) => n % 2 === 0)
        .map((n) => n.toString())
        .join(' ');

    return `The even numbers are ${evenNums}`;
};

// Project 62

const sortingRecords = () => {
    const employees = [
        {
            firstName: 'John',
            lastName: 'Johnson',
            position: 'Manager',
            separationDate: '2016-12-31',
        },
        {
            firstName: 'Tou',
            lastName: 'Xiong',
            position: 'Software Engineer',
            separationDate: '2016-10-05',
        },
        {
            firstName: 'Michaela',
            lastName: 'Michaelson',
            position: 'District Manager',
            separationDate: '2015-12-19',
        },
        {
            firstName: 'Jake',
            lastName: 'Jacobson',
            position: 'Programmer',
            separationDate: '',
        },
        {
            firstName: 'Jacquelyn',
            lastName: 'Jackson',
            position: 'DBA',
            separationDate: '',
        },
        {
            firstName: 'Sally',
            lastName: 'Weber',
            position: 'Web Developer',
            separationDate: '2015-12-18',
        },
    ];

    employees.sort((a, b) => {
        return a.lastName < b.lastName ? -1 : 1;
    });

    console.log('| **Name** | **Position** | **Separation date**  |');
    employees.forEach((employee) => {
        console.log(
            `| ${employee.firstName} | ${employee.lastName} | ${employee.position} | ${employee.separationDate}`
        );
    });
};

// Project 63

const bitcoinPriceIndex = async () => {
    try {
        const response = await fetch(
            'https://api.coindesk.com/v1/bpi/currentprice.json'
        );
        const data = await response.json();
        const rateString = data.bpi.USD.rate;
        const rate = parseFloat(rateString.replace(',', ''));

        let convertInput = parseFloat(
            prompt('Enter the amount of btc to convert')
        );
        if (isNaN(convertInput)) {
            throw new Error('Invalid input. Enter a valid number');
        }

        console.log(`$${(convertInput * rate).toFixed(4)}`);
    } catch (error) {
        console.log(error);
    }
};
