//!!!!!!!!!!!!!!!! Primitive !!!!!!!!!!!!!!!!!!!!!!!
//* there are 7 types of Primitive dataTypes
//* String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol("123");
const anotherId = Symbol("123");
//console.log(id === anotherId);

const bigNumber = 123456789012345678901234567890n;

const heroes = ["Gojo", "Jojo", "Goku"];
let myObj = {
    name: "Abrar",
    age: 20,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber); //* Result: Bigint
console.log(typeof heroes); //* Result: Object
console.log(typeof anotherId); //* Result: Symbol



//!!!!!!! Reference (Non-Primitive) !!!!!!!!!!!!!!!!
//* Array, Objects, Functions





//!!!! JavaScript is a dynamically typed language. !!!!!!!!!!!!!
//* This means variables can hold values of any type, and their types can change at runtime.

//let example;          //* Declare a variable without specifying its type

//example = 42;         //* example is now a number
//console.log(example); //* Output: 42

//example = "Hello";    //* example is now a string
//console.log(example); //* Output: Hello

//example = true;       //* example is now a boolean
//console.log(example); //* Output: true

//* In a statically typed language, this would cause an error.
//* But in JavaScript, it works perfectly fine because types are determined at runtime.

