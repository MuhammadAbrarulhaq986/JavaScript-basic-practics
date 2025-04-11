
let index = 0;

while (index <= 10) {
    //console.log(`Value of index is ${index}🏐`);
    index = index + 2;//* the count will start from 0, 2, 4, 6, 8, 10
}


let myArray = ["Sitama", "Tanjiro", "Esagi"]
let arr = 0

while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}🎡`);
    arr = arr + 1;//* If we don't write this while will print infinitly 
    //arr = arr++;//* this will also go in to infinit loop 
    //console.log(`Value is ${myArray}🎡`);//* this will print all of myArray 3 times
}

let score = 1;
//let score = 11;//* If the value is higher then the lopp below it will print only this value. This is called a spical case

do {
    console.log(`Score is ${score}🥎`);
    score++
} while (score <= 10);


