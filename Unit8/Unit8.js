// Task 1

const oneSecDelay = (func) => {
    setTimeout(func, 1000);
};
oneSecDelay(() => {
    console.log('hello');
});
// Task 2

const compareNums = (num1, num2, cb1, cb2) => {
    if (num1 > num2) {
        cb1();
    } else {
        cb2();
    }
};

// Task 3

const pushIntoArray = (arr, num, func) => {
    func(arr, num);
    return arr;
};

const push = (arr, num) => {
    arr.push(num);
};

let arr = [1, 2, 3];
let num = 4;
console.log(pushIntoArray(arr, num, push));

// Task 4

const promiseAfterTwoSeconds = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 2000);
});

promiseAfterTwoSeconds.then((result) => console.log(result));

// Task 5

const checkAge = (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve('Adult');
            } else {
                reject('Underage');
            }
        }, 3000);
    });
};

// Task 6

const randomPromise = new Promise((resolve, reject) => {
    let randomNum = Math.random(); // range 0 dan 1 mdea
    if (randomNum < 0.5) {
        resolve('success');
    } else {
        reject('failure');
    }
});

randomPromise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

// Task 7

const chainedPromise = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve('first success');
    }, 1000);
})
    .then((result) => {
        console.log(result);
        return new Promise((resolve, _) => {
            setTimeout(() => {
                resolve('second success');
            }, 1000);
        });
    })
    .then((result) => {
        console.log(result);
        return new Promise((resolve, _) => {
            setTimeout(() => {
                resolve('third success');
            }, 1000);
        });
    });

// Task 8

const multiplicationPromises = (num) => {
    return new Promise((resolve, _) => {
        resolve(num);
    }).then((res) => {
        return new Promise((resolve, _) => {
            resolve(res * 2);
        });
    });
};

// Task 9

const count = (num) => {
    return new Promise((resolve, _) => {
        let count = 0;
        let interval = setInterval(() => {
            count++;
            console.log(count);
            if (count === num) {
                clearInterval(interval); // to stop the loop from running when we reach the limit
                resolve();
            }
        }, 1000);
    });
};

const askForNum = async () => {
    let userInput = Number(prompt('enter a positive num'));

    while (isNaN(userInput) || userInput <= 0) {
        userInput = Number(prompt('enter a positive num'));
        return;
    }
    await count(userInput);
};

// Task 10

const getGithubInfo = async () => {
    let userName = prompt("What's your github username?");
    await fetch(`https://api.github.com/users/${userName}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err);
        });
};

// Task 11

const getGithubNameAndNodeId = async () => {
    let userName = prompt("What's your github username?");
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let data = await response.json();
    const { name, node_id } = data;

    console.log(`Name: ${name}`);
    console.log(`Node ID: ${node_id}`);
};

// Task 12

const fetchData = () => {
    const user = fetch('https://api.github.com/users/linnuxz');
    const repo = fetch('https://api.github.com/users/linnuxz/data-finance');
    const orgs = fetch('https://api.github.com/orgs/github');

    Promise.race([user, repo, orgs])
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
