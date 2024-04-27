// Task 1

let Person = {
    firstName: 'Nika',
    lastName: 'Parkosadze',
    age: 19,
};

// Task 2

Person.sayHello = function () {
    Object.keys(this).forEach((key) => {
        console.log(`${key}: ${this[key]}`);
    });
};

// Task 3

delete Person.age;

// Task 4

Person.job = 'Unemployed';

// Task 5

const jobLength = (object) => {
    return object.job.length;
};

console.log(jobLength(Person));

// Task 6

let methodCount = 0;
for (let prop in Person) {
    if (typeof Person[prop] === 'function') {
        methodCount++;
    }
}
console.log(`Method count: ${methodCount}`);

// Task 7

Person.genderProperty = function () {
    if (!this.hasOwnProperty('gender')) {
        this.gender = 'male';
    }
};

// Task 8

for (prop in Person) {
    console.log(prop);
}

// Task 9

for (prop in Person) {
    console.log(Person[prop]);
}

// Task 10

nameArray = [
    'Nika',
    'Irakli',
    'Dato',
    'Levani',
    'Levani',
    'Irakli',
    'Tarieli',
    'Nika',
];

let nameCount = {};

for (let name of nameArray) {
    nameCount[name] = (nameCount[name] || 0) + 1;
}

// Task 11

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.showPrice = function () {
    console.log(`Price of ${this.name}: ${this.price}`);
};

function Cart() {
    this.products = [];
}

Cart.prototype.addProduct = function (product) {
    this.products.push(product);
};

Cart.prototype.sumPrice = function () {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].price;
    }
    return sum;
};

// Task 12

let a = { a: 1, b: { c: 2 } };
let b = { a: 1, b: { c: 2 } };

const compareObject = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // comparing keys
    if (keys1.length !== keys2.length) {
        return false;
    }

    // comparing values using recursion
    for (let key of keys1) {
        if (!compareObject(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
};

// Task 13

let arr = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

const transformArray = (arr) => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i].id] = arr[i].name;
    }
    return result;
};

// Task 14

const serializeObject = (obj) => {
    return JSON.stringify(obj);
};

// Task 15

Object.prototype.sum = function () {
    let sum = 0;
    for (let key in this) {
        if (typeof this[key] === 'number') {
            sum += this[key];
        }
    }
    return sum;
};
