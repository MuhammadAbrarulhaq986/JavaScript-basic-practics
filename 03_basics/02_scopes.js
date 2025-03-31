//let a = 10;
//const b = 20;
//var c = 30;

//var c = 300;
let a = 300; //* this is called global scope

//{ } //* In every language this is called block scope 
if (true) {
    //! this whole if statement is called block scope
    let a = 10;
    const b = 20;

    //console.log("INNER: ", a);


    //c = 30;
    //var c = 30; //*  declaring a variable in var and console it out side of the if statement will show the var value from in side of the if.
    //* meaning the closest to console will print. this is only for var declared variables


}

//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "Abrar"

    function two() {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);//* the execution will display undefined because this is out side of the scope
    two()//* if you comment this it wont be able to excute the function
}
//one()

if (true) {
    const username = "Abrar"
    if (username === "Abrar") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);//* if you log it out side of a scope it will give not-defined
}
//console.log(username); //* if you log it out side of a scope it will give not-defined

//************ interesting **********************************/

//* THIS IS A FUNCTION
//* YOU CAN ACCESS THIS before initialization 
//addOne(5)
console.log(addOne(5));

function addOne(num) {
    return num + 1
}
//addOne(5)

//* THIS ALSO A FUNCTION BUT SOME TIMES WE CALL IT EXPRESSION.

//addTwo(5)//* ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}
addTwo(5)