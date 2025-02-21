//let score = 33 //* RESULT IS NUMBER
//let score = "33asd" //* RESULT IS STRING
//let score = null; //* RESULT IS 0
//let score = undefined; //* RESULT IS NaN. IT MEANS (NOT A NUMBER)
//let score = true; //* RESULT IS 1
//let score = false; //* RESULT IS 0
//let score = "Abrar"; //* RESULT IS NaN


//console.log(typeof score);
//console.log(typeof (score));


//** WHEN YOU WRITE Number HERE IS WILL CONVERTS THE VARIABLE TO WHAT YOU WANT */
//let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//* "33" => 33
//* "33asd" => NaN
//* true => 1; false => 0

//let isLoggedIn = 1; //* RESULT IS TRUE
//let isLoggedIn = 0; //* RESULT IS FALSE
//let isLoggedIn = ""; //* RESULT IS FALSE
//let isLoggedIn = "Abrar"; //* RESULT IS TRUE

//****** WHEN YOU WRITE Boolean HERE IS WILL CONVERTS THE VARIABLE TO WHAT YOU WANT */
//let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

//* 1 => true; 0 => false
//* "" => false
//* "Abrar" => true


//let someNumber = 33; //* THE RESULT IS IN NUMBER

//** WHEN YOU WRITE String HERE IS WILL CONVERTS THE VARIABLE TO WHAT YOU WANT */
//let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber); //* WHEN WE CHECK ITS typeof IT'S SHOWS STRING


//********************* OPERATIONS **************************************//

//let value = 3;
//let negValue = -value;
//console.log(negValue);

//* THESE ALL ARE CALLED REMENDERS
//console.log(2 + 2);
//console.log(2 - 2);
//console.log(2 * 2);
//console.log(2 ** 3);
//console.log(2 / 3);
//console.log(2 % 3);

//let str1 = "Hello"
//let str2 = " Abrar"

//let str3 = str1 + str2;
//console.log(str3);

//****** THESE ARE CALLED CONFUSION CODE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//console.log(true); //* RESULT : true
//console.log(+true); //* RESULT : 1
//console.log(-true); //* RESULT : -1

//console.log(""); //* RESULT : blank space
//console.log(+""); //* RESULT : 0


//console.log(false); //* RESULT : false
//console.log(+false); //* RESULT : 0
//console.log(-false); //* RESULT : -0

//let num1, num2, num3;
//num1 = num2 = num3 = 2 + 2;
//console.log(num1, num2, num3); //* RESULT IS IN NUMBERS 4 4 4

//let gameCounter = 100;
//gameCounter++; //* THIS WILL INCREASE THE VALUE BY 1. THIS CALLED POSTFIEXD
//++gameCounter; //* THIS CALLED PREFIXED
//console.log(gameCounter);

//gameCounter--; //* THIS WILL DECREASE THE VALUE BY 1. THIS CALLED POSTFIEXD
//--gameCounter; //* THIS CALLED PREFIXED
//console.log(gameCounter);

//**********************************************************************************

//console.log("1" + 2);//* THE RESULT OF THIS WILL COME IN STRING like: 12
//console.log(1 + "2");//* THE RESULT OF THIS SAME AS THE ABOVE ONE like: 12
//console.log("1" + "2");//* THE RESULT OF THIS WILL COME IN STRING like: 12
//console.log("1" + 2 + 2);//* THE RESULT OF THIS WILL COME IN STRING like: 122
//console.log("1" + "2" + 2);//* THE RESULT OF THIS WILL COME IN STRING like: 122
//console.log(1 + 2 + "2");//* THE RESULT OF THIS WILL COME IN STRING like: 32

//console.log(1 + 2); //* THE RESULT OF THIS WILL COME IN NUMBER like: 3


//console.log(3 + 4 * 5 % 3); //* RESULT : 5
//console.log((3 + 4) * 5 % 3);//* RESULT : 2
//console.log(3 + 4 * (5 % 3));//* RESULT : 11
//console.log(3 + (4 * 5 % 3));//* RESULT : 5


//**************************************************************************************************/


//************* Memory ********************************* 
//* THERE ARE TWO TYPES OF MEMORY IN JS. 1:Stack, 2:Heap,

//* Stack is (Primitive), give you a variable copy.
let myYoutubeName = "TKD_Abrar";
let anotherName = myYoutubeName;
anotherName = "UltraMan";

console.log(anotherName);
console.log(myYoutubeName);

//* Heap is (Non-Primitive), give you original reference.
let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "abrar@google.com"

console.log(userOne.email);
console.log(userTwo.email);
