// Task 1

const returnName = (obj) => {
    if (obj.hasOwnProperty('name')) {
        return obj.name;
    } else {
        return null;
    }
};

// Task 2

const returnNameTryCatch = (obj) => {
    try {
        return obj.name;
    } catch (error) {
        return null;
    }
};

// Task 3

const divideNums = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2) || num2 == 0) {
        throw new Error('Invalid input');
    }
    return num1 / num2;
};

// Task 4

const promptAge = () => {
    let age = Number(prompt('Please enter your age:'));

    if (isNaN(age) || age <= 0 || age >= 100) {
        throw new Error('Invalid age');
    }
    return age;
};

const isAdult = () => {
    try {
        let age = promptAge();
        if (age >= 18) {
            console.log('You are an adult');
        } else {
            console.log('You are a juvenile');
        }
    } catch (error) {
        console.log(error);
    }
};

// Task 5

const parseJSON = (jsonString) => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log(error);
    }
};

// Task 6

const fetchGithubApi = async () => {
    try {
        let response = await fetch(
            'https://api.github.com/users/temuritsutskiridze'
        )
            .then((res) => res.json())
            .then((data) => console.log(data));
    } catch (error) {
        throw new Error('Something went wrong');
    }
};

// Retry

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure('Klunk');
    }
}

function reliableMultiply(a, b) {
    // იმედია სწორია ;დ
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) {
                throw error;
            }
        }
    }
}

// The locked box

const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error('Locked!');
        return this._content;
    },
};

function withBoxUnlocked(body) {
    const boxLocked = box.locked;
    box.unlock();
    try {
        body();
    } finally {
        if (boxLocked) {
            box.lock();
        }
    }
}

withBoxUnlocked(function () {
    box.content.push('gold piece');
});

try {
    withBoxUnlocked(function () {
        throw new Error('Pirates on the horizon! Abort!');
    });
} catch (e) {
    console.log('Error raised: ' + e);
}
console.log(box.locked);
