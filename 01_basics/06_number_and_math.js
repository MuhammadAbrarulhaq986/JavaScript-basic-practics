
const score = 400;
//console.log(score);

const balance = new Number(100);


//** toString, toFixed, toFixed.length EXAMPLES ***********************************/
//console.log(balance);//* THIS RESULT WILL COME IN NUMBER FORM.
//console.log(balance.toString());//* THIS RESULT WILL COME IN STRING FORM.
//console.log(balance.toString().length);//* THIS WILL SHOW YOU THE LENGTH. 
//console.log(balance.toFixed(2)); //* THIS WILL ROUND OFF THE NUMBER TO 2 DECIMAL PLACES. ( RESULT: 100.00 ).

//** toPrecision EXAMPLES ***********************************/
//const otherNumber = 23.8966;
//console.log(otherNumber.toPrecision(3)); //* THIS WILL ROUND OFF THE NUMBER TO 3 DECIMAL PLACES. ( RESULT: 23.9 ).
const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(4)); //* THIS WILL ROUND OFF THE NUMBER TO 3 DECIMAL PLACES. ( RESULT: 123.9 ).  WHEN THERE IS A NUMBER LIKE THIS 23.86, 12.78, OR 78.98, THE RESULT WILL BE 24, 13, 79.
//const otherNumber = 1123.8966;
//console.log(otherNumber.toPrecision(3)); //* BUT IN THIS EXAMPLE THE RESULT WILL BE DIFFERENT ( RESULT: 1.12e+3 ). KNOW IT'S GIVING YOU A PRECISION VALUE AND A EXPONENTIAL VALUE

//** toLocaleString EXAMPLES ***********************************/
const hundreds = 1000000;
//console.log(hundreds.toLocaleString());//*THIS IS A USA STANDARD VALUE RESULT: 1,000,000
//console.log(hundreds.toLocaleString('en-PK'));//*THIS IS A PAKISTANI STANDARD VALUE RESULT: 1,000,000
//console.log(hundreds.toLocaleString('en-IN'));//*THIS IS A INDIAN STANDARD VALUE RESULT: 10,00,000

//******** MATHS EXAMPLES ***********************************/

//console.log(Math);//* RESULT: Object [Math] {}
//console.log(Math.abs(-4));//* THIS IS CALLED ABSOLUTE VALUE. IT WILL CONVERT NEGATIVE VALUE IN TO POSITIVE VALUE. RESULT: 4
//console.log(Math.round(4.5));//* THIS WILL ROUND OFF THE VALUE. IF THE THE VALUE IS 4.2, 4.3, 4.4 THE RESULT WILL BE 4. IF THE THE VALUE IS 4.5, 4.6, 4.7 UP TO .9 THE RESULT WILL BE 5
//console.log(Math.ceil(4.2));//* IN THIS IF THERE IS ANY NUMBER LIKE 4.2, 4.1 IT WILL CONVERT IN TO 5. IF THERE IS ANY VALUE ABOVE THE VALUE OF 4 OR ANY NUMBER VALUE IT WILL SHOW THE ABOVE NUMBER VALUE  
//console.log(Math.floor(4.9));//* IN THIS IF THERE IS ANY NUMBER LIKE 4.9, 4.6 IT WILL CONVERT IN TO 4. BECAUSE THIS WILL GIVE THE LOWEST VALUE  
//console.log(Math.min(10, 8, 6, 4, 2));//* THIS WILL SHOW YOU THE LOWEST VALUE IN THIS
//console.log(Math.max(1, 3, 5, 7, 9));//* THIS WILL SHOW YOU THE HIGHEST VALUE IN THIS

//console.log(Math.random());//* THIS WILL SHOW A RANDOM NUMBERS STARTING FROM 0. THE VALUE ALWAYS COMES BETWEEN  0 AND 1: 
//console.log(Math.random() * 10);//* 
//console.log(Math.random() * 10 + 1);//* THIS WILL GIVE US SOME ISSUS THAT
//console.log((Math.random() * 10) + 1);//*
//console.log(Math.floor(Math.random() * 10) + 1);//* THIS IS USE TO GET A SINGLE DIGIT NUMBER 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//* KNOW THE VALUE WILL BE IN BETWEEN 10 TO 20
