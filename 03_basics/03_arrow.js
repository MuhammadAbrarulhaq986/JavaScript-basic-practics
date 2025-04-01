//* object of a user
const user = {
    username: "abrar",
    price: 999,
    welcomeMessage: function () {
        //* THIS: key word is use for current context       
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }

}

//user.welcomeMessage()//*Ressult: abrar, welcome to website

//user.username = "Johan"//* after changing the current context the result will be
//user.welcomeMessage()//*Result: Johan, welcome to website

//* node js is a runtime environment

//console.log(this);//* we are working in node when we log THIS key word it will give you empty object {}

//*when we log THIS key word the working in browser it will give us window object
//! browser majo global object haa who window object haa

//function chai() {
//console.log(this);//* when we only log THIS key word it will give multiples values
//    let username = "abrar";
//    console.log(this.username);//*Result: undefined
//}

//chai()

//const chai = function () {
//    let username = "abrar";
//    console.log(this.username);//*Result: 
//}

const chai = () => {
    let username = "abrar";
    console.log(this);//*when we log only THIS the Result will be Empty object {}
}

//chai()

//* basic arrow function
//const addTwo = (num1, num2) => {
//    return num1 + num2;
//}

//* IF WE WRITE LIKE THIS: const addTwo = (num1, num2) => (num1 + num2) . AND USED CURCULAR BRACKET () WE NOT NEED TO WRITE RETURN KEY WORD

//* IF WE WRITE LIKE THIS: const addTwo = (num1, num2) => {num1 + num2} . AND USED CURLEY BRACKET {} WE  NEED TO WRITE RETURN KEY WORD

//* impleset return
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

//const addTwo = (num1, num2) => { username: "abrar" }//* result: undefined

const addTwo = (num1, num2) => ({ username: "abrar" })//*Ressult: { username: "abrar" }
console.log(addTwo(3, 4))


//const myArray = [2, 5, 3, 7, 8];
//myArray.forEach()