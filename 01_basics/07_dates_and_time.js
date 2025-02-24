//***** DATES ************************************/

let myDate = new Date() //* DATA OBJECT AND IT'S INSTANCES
//console.log(typeof myDate);//* RESULT: object

//console.log(myDate);//* RESULT: 2025-02-24T09:11:31.895Z
//console.log(myDate.toString());//* RESULT: Mon Feb 24 2025 14:12:52 GMT+0500 (Pakistan Standard Time)
//console.log(myDate.toLocaleString());//* RESULT: 2/24/2025, 2:16:57 PM
//console.log(myDate.toDateString());//* RESULT: Mon Feb 24 2025
//console.log(myDate.toISOString());//* RESULT: 2025-02-24T09:15:21.669Z
//console.log(myDate.toJSON());//* RESULT: 2025-02-24T09:15:49.199Z
//console.log(myDate.toLocaleDateString());//* RESULT: 2/24/2025 

//let myCreateDate = new Date(2025, 0, 24) //* THIS IS HOW ITS WORKS FIRST YOU PUT: (YEAR, MONTH, DAY, HOURS, MINUTES, SECONDS, MILE-SECONDS, MICRO-SECONDS,)
//console.log(myCreateDate.toDateString());//*RESULT: Fri Jan 24 2025
//let myCreateDate = new Date(2025, 0, 24, 5, 3) //* THIS IS HOW ITS WORKS FIRST YOU PUT: (YEAR, MONTH, DAY, HOURS, MINUTES, SECONDS, MILE-SECONDS, MICRO-SECONDS,)
//let myCreateDate = new Date("2024-01-15") //* YOU CAN ALSO USE STRING IN THIS BUT REMEMBER IN THIS THE MONTH START FROM 1 NOT FROM 0. THIS METHOD IS CALLED YY-MM-DD
let myCreateDate = new Date("01-15-2024") //* RESULT: 1/15/2024, 12:00:00 AM
//console.log(myCreateDate.toLocaleString());//*RESULT: 1/24/2025, 5:03:00 AM

let myTimeStamp = Date.now()
//console.log(myTimeStamp);//* RESULT: 1740389876308. THIS IS THE TOTAL TIME FROM 1st JAN 1970 TO YOUR PRESENT DATE. IN MILE-SECOND COUNT
//console.log(myCreateDate.getTime());//* RESULT: 1705258800000. WE USE THIS AND THE ABOVE ONE TO COMPARE WITH EACH OTHER TO CREATE DIFFERENT KINDS OF DUE DATES
//console.log(Date.now() / 1000);//* WHEN WE COMPARISON WITH SECOND THERE WILL COME DECIMAL VALUE
//console.log(Date.now());//*DO COMPARISON IN milliSecond TO GET BETTER RESULTS

//console.log(Math.floor(Date.now() / 100));//* THIS IS A GOOD WAY TO FIND THE VALUE IN SECONDS


let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getFullYear());//* THE METHOD IS TELLING YOU WHAT WILL BE THE RESULTS.
//console.log(newDate.getMonth());//* THE METHOD IS TELLING YOU WHAT WILL BE THE RESULTS.
//console.log(newDate.getDay());//* THE METHOD IS TELLING YOU WHAT WILL BE THE RESULTS.
//console.log(newDate.getHours());//* THE METHOD IS TELLING YOU WHAT WILL BE THE RESULTS.
//console.log(newDate.getSeconds());//* THE METHOD IS TELLING YOU WHAT WILL BE THE RESULTS.
//console.log(newDate.getMilliseconds());//* THE METHOD IS TELLING YOU WHAT WILL BE THE RESULTS.

//* THIS IS HOW YOU CAN CREATE A CUSTOM DATE METHODS
newDate.toLocaleString('default', {
    weekday: "long",
})