// Task 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello there!');
    }
}

let person = new Person('Nika', 19);

for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

// Task 2

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}

// Task 3

class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}$`);
        } else {
            console.log('Deposit amount must be greater than 0.');
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) this.#balance -= amount;
            else {
                console.log(
                    'Insufficient funds. Withdrawal amount exceeds available balance.'
                );
            }
        } else {
            console.log('Withdrawal amount must be greater than 0.');
        }
    }
}

// Task 4

class Shape {
    calculateArea() {}
}

class Circlee extends Shape {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.width * this.length;
    }
}

// Task 5

class Calculator {
    static sum(num1, num2) {
        return num1 + num2;
    }
}

// Task 6

class Temperature {
    #celsius;
    constructor(value) {
        this.#celsius = value;
    }
    getTemp() {
        return this.#celsius;
    }

    setTemp(temp) {
        this.#celsius = temp;
    }
}

// Task 7

class ArrayHelper {
    reverseArray(arr) {
        return arr.reverse();
    }
}

// Task 8

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    static createCircle() {
        return new Circle();
    }
}

// Task 9

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalPrice() {
        return this.price * this.quantity;
    }
}

class ShoppingCart {
    products = [];
    addProduct(id, name, price, quantity) {
        this.products.push({
            id: id,
            name: name,
            price: price,
            quantity: quantity,
        });
    }
    removeProduct(id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                this.products.splice(i, 1);
            }
        }
    }
    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price * this.products[i].quantity;
        }
        return total;
    }
}

ShoppingCart.prototype.checkout = function () {
    console.log(this.products);
    console.log(`Total Price: ${this.calculateTotal()}`);
};

ShoppingCart.prototype.emptyCart = function () {
    for (let i = this.products.length; i >= 0; i--) {
        this.products.splice(i, 1);
    }
};
