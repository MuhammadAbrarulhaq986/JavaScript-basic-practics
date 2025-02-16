//let score = 33 //* RESULT IS NUMBER
//let score = "33asd" //* RESULT IS STRING
//let score = null; //* RESULT IS 0
//let score = undefined; //* RESULT IS NaN. IT MEANS (NOT A NUMBER)
//let score = true; //* RESULT IS 1
//let score = false; //* RESULT IS 0
let score = "Abrar"; //* RESULT IS NaN


//console.log(typeof score);
//console.log(typeof (score));


//** WHEN YOU WRITE Number HERE IS WILL CONVERTS THE VARIABLE TO WHAT YOU WANT */
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//* "33" => 33
//* "33asd" => NaN
//* true => 1; false => 0

//let isLoggedIn = 1; //* RESULT IS TRUE
//let isLoggedIn = 0; //* RESULT IS FALSE
//let isLoggedIn = ""; //* RESULT IS FALSE
let isLoggedIn = "Abrar"; //* RESULT IS TRUE

//****** WHEN YOU WRITE Boolean HERE IS WILL CONVERTS THE VARIABLE TO WHAT YOU WANT */
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

//* 1 => true; 0 => false
//* "" => false
//* "Abrar" => true


let someNumber = 33; //* THE RESULT IS IN NUMBER

//** WHEN YOU WRITE String HERE IS WILL CONVERTS THE VARIABLE TO WHAT YOU WANT */
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); //* WHEN WE CHECK ITS typeof IT'S SHOWS STRING

