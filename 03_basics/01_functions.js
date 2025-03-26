
//* function declaration
function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("R");
    console.log("A");
    console.log("R");
}
//* FUNCTION EXECUTE
//sayMyName(); //* THIS IS HOW WE EXECUTE OUR FUNCTION
//sayMyName //* THIS WILL NOT EXECUTE BECAUSE IT TELL THERE IS A FUNCTION 

//* when we create function () these are called parameters ***************
//function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2) {
    //let result = number1 + number2;
    //return result;//* after using return whatever you write nothing will be EXECUTED
    return number1 + number2;
    //* return value can be saved in the variables
    //* but not in the console.log
}

//* when we EXECUTE a function these are called () arguments
//addTwoNumbers(3, 4);//* we need to add numbers in the arguments becaues we didn't give any number in the function nor in the console.
//addTwoNumbers(3, "4");//* result: 34 becaues you give a number and string that way its showing you 34 
//addTwoNumbers(3, null);//* result: 3 
const result = addTwoNumbers(3, 5);//*  

//console.log("Result", result);//*result: Result undefined

//function loginUserMessage(username) {
function loginUserMessage(username = "Johan") {//* in this we set a default value if the user didn't wirte his name it will automaticaly give Johan
    //if (username === undefined) { 
    if (!username) { //* short version of the above one 
        //console.log("Please enter a username");
        return
    }
    return `${username} just logged in`//*
}

//console.log(loginUserMessage("Abrar"));
//console.log(loginUserMessage("")); //* result:  just logged in
//console.log(loginUserMessage()); //* result: undefined


//function calculateCartPrice(...num1) {//* (...num1) this is called rest operator.
function calculateCartPrice(val1, val2, ...num1) {//* (val1, val2, ...num1) In this the starting 2 value in this case( 100, 200) will not print.
    return num1;
}
//console.log(calculateCartPrice(100, 200, 300, 400, 500, 600));


const user = {
    username: "Abrar",
    price: 199,
}

function handleObject(anyObject) {
    //console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);//* When taking an object always check the spllings. IF you wirte wrong splling the error will show undefined. 
}
//handleObject(user);
handleObject({ //* Directly passing an object
    username: "Johan",
    price: 399,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
