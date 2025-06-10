//* Prototype keyword

//let myName = "Abrar     "

//* console.log(myName.trim().length);// trim() remove the extra spaces in the string 

//console.log(myName.truelength);//* Creating a method that remove spaces from everywhere in this file when it called




let myHeros = ["thor", "spiderman", "batman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    batman: "rich",

    getspiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abrar = function () {
    console.log(`Abrar is present in all objects`);
}

Array.prototype.heyAbrar = function () {
    console.log(`Abrar says hello`);
}

//heroPower.abrar()
//myHeros.abrar()
//myHeros.heyAbrar();
//heroPower.heyAbrar();



//***** Inheritance *****

const User = {
    name: "gojo",
    email: "gojo@gmail.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssginment: "JS assignment",
    fullTIme: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;

//* modren syntax
//Object.setPrototypeOf(TeachingSupport, Teacher)//* Prototypel Inheritance


let anotherUsername = "chaiOrCode     ";

String.prototype.truelenght = function () {
    //console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True langht is: ${this.trim().length}`);
}

anotherUsername.truelenght()

"abrar".truelenght()
"icetea".truelenght();
