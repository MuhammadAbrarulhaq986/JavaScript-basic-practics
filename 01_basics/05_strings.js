//******** CONCATENATE ****************
const name = "Abrar "; //* THIS IS HOW STRING IS DECLARE IN VARIABLE 
const repoCount = 50;
//* THIS EXAMPLE IS USING AN OLD VERSION OF CONCATENATE.
//console.log(name + repoCount + " Value"); //* THIS IS HOW CONCATENATE WORKS

//* THIS IS A MODERAN WAY TO USE CONCATENATE.
//* USING BACK TICK ``  IS A MODERAN WAY THE TERM THAT IS USE TO REFER IT IS string interpolation  
//console.log(`Hello my name is ${name}and my repo count is ${repoCount} `);

const gameName = new String("Abrar-ul-haq");

//console.log(gameName[0]);//* IN THIS YOU WILL GET THE LENGTH OF THE STRING FROM 0 TO 9 
//console.log(gameName.__proto__);//* THIS WILL SHOW THE PROTOTYPE OBJECT THAT YOU CAN IN ANY BROWSER CONSOLE
//console.log(gameName.length); //* THIS WILL SHOW THE LENGTH OF THE STRING
//console.log(gameName.toUpperCase()); //* THIS WILL CONVERT THE STRING TO UPPER CASE
//console.log(gameName.charAt(2)); //* THIS WILL SHOW THE CHARACTER AT THE INDEX 2
//console.log(gameName.indexOf('d')); //* THIS WILL SHOW THE INDEX OF THE CHARACTER AT THE INDEX 2

//const newString = gameName.substring(0, 4); //* THIS WILL SHOW THE STRING FROM 0 TO 4
//console.log(newString);

//const anotherString = gameName.slice(-11, 4); //* THIS WILL SHOW THE STRING FROM -11 TO 4
//console.log(anotherString);

const newStringOne = "    abrar    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //* THIS WILL REMOVE THE SPACE FROM THE STRING

const url = "https://abrar.com/abrarUl%20haq";

console.log(url.replace("%20", "-")); //* THIS WILL REPLACE THE %20 WITH -
console.log(url.includes("JavaScript")); //* THIS WILL CHECK IF THE STRING CONTAINS THE STRING
//console.log(url.includes("abrar")); //* THIS WILL CHECK IF THE STRING CONTAINS THE STRING
console.log(gameName.split("-")); //* THIS WILL SPLIT THE STRING INTO AN ARRAY
