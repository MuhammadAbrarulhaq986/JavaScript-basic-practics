
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
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`//*
}

//console.log(loginUserMessage("Abrar"));
//console.log(loginUserMessage("")); //* result:  just logged in
console.log(loginUserMessage()); //* result: undefined
