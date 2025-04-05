//* if statement

//if (true) {

//}
//if (false) {

//}
const isUserLoggedIn = true;
const temperature = 41;

//if (temperature < 50) {
//if (temperature === 40) {
//    console.log("Temperature is Less then 50");
//} else {
//    console.log("Temperature is Greter then 50");
//}
//console.log("Excuted");


//* less-then <, Greter-then >, less-then equal-to <=, Greter-then equal-to >=, Double-equal ==, Not-equal !=, Triple equals ===, Check for negative signs !==

//const score = 200;
//if (score > 100) {
//var power = "fly";//* var is accessable from every ware because it's a Global scope
//    const power = "fly";
//    console.log(`User power ${power}`);
//}
//console.log(`User power ${power}`);

//const balance = 1000;
//* This is emplisit scope
//if (balance > 500) console.log("Test"),console.log("Test-2"); //* this is not recommended. Unprofessional type of code

//const balance = 1000;

//if (balance < 500) {
//    console.log("Less then 500")
//} else if (balance < 750) {
//    console.log("Less then 750");
//} else if (balance < 900) {
//    console.log("Less then 900");
//} else {
//    console.log("Less then 1200");
//}

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;
//* And symble:&& checks bothsides for true or false 
//if (userLoggedIn && debitCard) {
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User logged in");
}