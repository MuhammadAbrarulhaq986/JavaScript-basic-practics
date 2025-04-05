const userEmail = [];

//if (userEmail) {
//    console.log("User email is present ✋");
//} else {
//    console.log("User email is not present 👻");
//}

//if (userEmail.length === 0) {
//    console.log("Array is empty 👻");
//}



//! Falsy Valuse
//* false, 0, -0, Bigint 0n, "", null, undefined, NaN

//! Truthy Values
//* true, "0", 'false', " ", [], {}, function () {}
//* false in string is a Truthy value "false", 'false'
//* space between the empty string " " is also a Truthy value

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty ");

}

//* Nullish Coalescing Operator (??): null undefined

let val1;

//val1 = 5 ?? 10;//* Result: 5
//val1 = null ?? 10;//* Result: 10
//val1 = undefined ?? 15;//* Result: 15
val1 = null ?? 10 ?? 20;//* Result: 10

//console.log(val1);

//* Terniary Operator

//consdition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More then 80");

