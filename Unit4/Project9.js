const generateRandomNumber = (level) => {
    switch (level) {
        case 1:
            return Math.floor(Math.random() * 5);
        case 2:
            return Math.floor(Math.random() * 10);
        case 3:
            return Math.floor(Math.random() * 15);
        default:
            console.log('Invalid level. Please choose 1, 2, or 3.');
            return -1;
    }
};

const chooseDifficultyLevel = () => {
    let difficulty;
    do {
        difficulty = Number(
            prompt('Select your difficulty level (1, 2, or 3):')
        );
        if (isNaN(difficulty) || difficulty < 1 || difficulty > 3) {
            console.log('Invalid input. Please choose 1, 2, or 3.');
        }
    } while (isNaN(difficulty) || difficulty < 1 || difficulty > 3);
    return difficulty;
};

const game = () => {
    const level = chooseDifficultyLevel();
    let score = 0;

    for (let i = 0; i < 10; i++) {
        const num1 = generateRandomNumber(level);
        const num2 = generateRandomNumber(level);
        const correctAnswer = num1 + num2;
        let attempts = 0;
        let userAnswer;

        do {
            userAnswer = Number(prompt(`${num1} + ${num2} = `));
            if (userAnswer === correctAnswer) {
                score++;
                break;
            } else {
                console.log('EEE');
                attempts++;
                if (attempts === 3) {
                    console.log(`${num1} + ${num2} = ${correctAnswer}`);
                    break;
                }
            }
        } while (true);
    }
    console.log(`Score: ${score}`);
};
