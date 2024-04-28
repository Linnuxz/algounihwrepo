// Project 35

const bloodAlcoholCalculator = () => {
    let gender = prompt("What's your gender? (M or F)");
    while (
        gender !== 'M' &&
        gender !== 'm' &&
        gender !== 'F' &&
        gender !== 'f'
    ) {
        console.log('Invalid input');
        gender = prompt("What's your gender? (M or F)");
    }
    let r = gender.toUpperCase() === 'M' ? 0.73 : 0.66;
    let W = parseFloat(prompt('How much do you weigh?'));
    let A = parseFloat(prompt('Consumed alcohol (oz): '));
    let H = Number(prompt('Hours passed after the last drink: '));

    const illegal = ((A * 5.14) / W) * r - 0.015 * H >= 0.08 ? true : false;
    return illegal
        ? 'It is not legal for you to drive'
        : 'It is legal for you to drive';
};

// Project 36

const temperatureConverter = () => {
    console.log('Enter C to convert from Fahrenheit to Celsius');
    console.log('Enter F to convert from Celsius to Fahrenheit');

    let userChoice = prompt('Your choice: ');

    while (
        userChoice !== 'C' &&
        userChoice !== 'c' &&
        userChoice !== 'f' &&
        userChoice !== 'F'
    ) {
        console.log('Invalid choice');
        userChoice = prompt('Your choice: ');
    }

    let userInput = parseFloat(
        prompt(
            `Please enter the temperature in ${
                userChoice.toUpperCase() === 'C' ? 'Fahrenheit' : 'Celsius'
            }`
        )
    );
    console.log(
        `The temperature in ${
            userChoice.toUpperCase() === 'C' ? 'Celsius' : 'Fahrenheit'
        }: ${
            userChoice.toUpperCase() === 'C'
                ? ((userInput - 32) * 5) / 9
                : (userInput * 9) / 5 + 32
        }`
    );
};

// Project 37

const bmiCalculator = () => {
    let height = parseFloat(prompt('Enter your height (inches)'));
    let weight = parseFloat(prompt('Enter your weight (lbs)'));

    const bmi = (weight / Math.pow(height, 2)) * 703;

    console.log(`Your BMI is ${bmi}`);

    if (bmi >= 18.5 && bmi < 25) {
        return 'You are within the ideal weight range';
    } else if (bmi < 18.5) {
        return 'You are underweight';
    } else {
        return 'You should see your doctor.';
    }
};

// Project 38

const multistateSalesTaxCalculator = () => {
    let orderAmount = parseFloat(prompt('What is the order amount?'));
    let state = prompt('What state do you live in').toLowerCase();

    let tax = 0;
    let total = orderAmount;

    if (state === 'wisconsin') {
        let county = prompt('What county do you live in').toLowerCase();

        if (county === 'eau claire') {
            tax = orderAmount * 0.005;
        } else if (county === 'dunn') {
            tax = orderAmount * 0.004;
        }
        total = orderAmount + tax;
    } else if (state === 'illinois') {
        tax = orderAmount * 0.08;
        total = orderAmount + tax;
    }
    return total;
};

// Project 39

const numbersToNames = () => {
    let monthNum = Number(prompt('Please enter the number of the month: '));
    let monthName;
    while (monthNum < 1 || monthNum > 12 || isNaN(monthNum)) {
        console.log('Invalid input (1-12)');
        monthNum = Number(prompt('Please enter the number of the month: '));
    }
    switch (monthNum) {
        case 1:
            monthName = 'January';
            break;
        case 2:
            monthName = 'February';
            break;
        case 3:
            monthName = 'March';
            break;
        case 4:
            monthName = 'April';
            break;
        case 5:
            monthName = 'May';
            break;
        case 6:
            monthName = 'June';
            break;
        case 7:
            monthName = 'July';
            break;
        case 8:
            monthName = 'August';
            break;
        case 9:
            monthName = 'September';
            break;
        case 10:
            monthName = 'October';
            break;
        case 11:
            monthName = 'November';
            break;
        case 12:
            monthName = 'December';
            break;
    }

    return `The name of the month is ${monthName}`;
};

// Project 40

const comparingNumbers = () => {
    let num1 = Number(prompt('Enter the first number: '));
    let num2 = Number(prompt('Enter the second number: '));
    let num3 = Number(prompt('Enter the third number: '));
    let biggest;

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return;
    }
    if (num1 > num2 && num1 > num3) {
        biggest = num1;
    } else if (num2 > num1 && num2 > num3) {
        biggest = num2;
    } else {
        biggest = num3;
    }
    return `The largest number is ${biggest}`;
};

// Project 41

const troubleshootingCarIssues = () => {
    let question1 = prompt(
        'Is the engine making strange noises? (yes/no)'
    ).toLowerCase();
    if (question1 === 'yes') {
        console.log('You may have an engine problem.');
    } else {
        let question2 = prompt(
            'Is the car shaking while driving? (yes/no)'
        ).toLowerCase();
        if (question2 === 'yes') {
            console.log(
                'You may have a problem with your tires or suspension.'
            );
        } else {
            let question3 = prompt(
                'Is the car vibrating at idle? (yes/no)'
            ).toLowerCase();
            if (question3 === 'yes') {
                console.log('You may have an engine mount problem.');
            } else {
                console.log('Sorry, I cannot determine the problem.');
            }
        }
    }
};
