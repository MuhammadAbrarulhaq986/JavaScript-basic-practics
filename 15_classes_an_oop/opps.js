//class CoffeeMachine {
//    // Internal details are hidden
//    #boilWater() {
//        console.log("Boiling water...");
//    }

//    #grindBeans() {
//        console.log("Grinding beans...");
//    }

//    // Simple public method
//    makeCoffee() {
//        this.#grindBeans();
//        this.#boilWater();
//        console.log("Coffee is ready!");
//    }
//}

//const machine = new CoffeeMachine();
//machine.makeCoffee(); // You don't see the complex steps

//class BankAccount {
//    #balance = 0; // Private field

//    deposit(amount) {
//        if (amount > 0) {
//            this.#balance += amount;
//        }
//    }

//    withdraw(amount) {
//        if (amount > 0 && amount <= this.#balance) {
//            this.#balance -= amount;
//            return amount;
//        }
//        return 0;
//    }

//    getBalance() {
//        return this.#balance;
//    }
//}

//const account = new BankAccount();
//account.deposit(100);
//account.withdraw(30);
//console.log(account.getBalance()); // 70
//// account.#balance = 1000; // Error - can't access private field


//class Animal {
//    constructor(name) {
//        this.name = name;
//    }

//    eat() {
//        console.log(`${this.name} is eating`);
//    }
//}

//class Dog extends Animal {
//    bark() {
//        console.log("Woof woof!");
//    }
//}

//const myDog = new Dog("Rex");
//myDog.eat(); // From Animal class
//myDog.bark(); // From Dog class

//class Bird {
//    fly() {
//        console.log("Flying high!");
//    }
//}

//class Penguin extends Bird {
//    fly() {
//        console.log("Penguins can't fly!");
//    }
//}

//class Eagle extends Bird {
//    fly() {
//        console.log("Soaring through the sky!");
//    }
//}

//const birds = [new Bird(), new Penguin(), new Eagle()];

//birds.forEach(bird => bird.fly());
///*
//Flying high!
//Penguins can't fly!
//Soaring through the sky!
//*/

//* Objectliters
const user = {
    username: "abrar",
    loginCount: "8",
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "abrar",
    loginCount: "8",
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }
}


//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//* Constructor Function 
//* new Key word means Constructor Function
// * it's use for creating new context
//const promiseOne = new Promise()
//const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username
    //***^^^^^^^^^^^^***^^^^^^^^*********************************
    //*** Variable ***** we are passing this value *******************************
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Abrar", 12, true)
const userTwo = new User("Chai", 11, false);
//* new keyword create a new object we call it instance

//console.log(userOne);
console.log(userOne.constructor);
//console.log(userTwo);
