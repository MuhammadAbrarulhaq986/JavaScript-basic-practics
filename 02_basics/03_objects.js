
//* SINGLETON
//Object.create //* THIS IS CALLED constructor methods. IN THE WE CREATE SINGLETON

const mySym = Symbol("key1");

//* OBJECT LITERALS
const JsUser = {
    name: "Abrar",
    "full name": "Muhammad Abrar ul haq",
    [mySym]: "mykey1", //* THIS IS THE CORRECT WAY 
    //mySym: "mykey1", //* THIS IS NOT THE WAY YOU DECLARE A Symbol IN THE OBJECT
    age: 20,
    location: "Kararchi",
    email: "abrar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

//* THERE ARE MULTIPLE WAYS YOU CAN ACCESS THIS OBJECT
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["Full name"]);

//console.log(JsUser.mySym); //* RESULT IS IN STRING: mykey1. WE ARE TRYING TO GET THE Symbol IN THIS
//console.log(typeof (JsUser.mySym)); //* THIS HAVE STRING TYPE VALUE
//console.log(JsUser[mySym]); //* THIS WILL WORK


JsUser.email = "abrar@chatgpt.com";
//Object.freeze(JsUser); //* THIS WILL FREEZE THE OBJECT AND YOU CANNOT CHANGE THE VALUE OF THE OBJECT
//JsUser.email = "abrar@microsoft.com";

//console.log(JsUser); //* WHICH EVER OBJECT VALUE YOU FREEZE IT WON'T CHANGE AGAING AFTER YOU CHNAGE IT. 

JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//console.log(JsUser.greeting);//* RESULT OF THIS IS: [Function (anonymous)]

