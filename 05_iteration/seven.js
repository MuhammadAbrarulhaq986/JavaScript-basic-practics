//const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map((num) => num + 10)//* result will be [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

//* This is because the map method returns a new array with the results of calling a provided function on every element in the calling array.


//const newNums = myNumbers.map((num) => { num + 10 })//* writing like this will give you undefined

//const newNums = myNumbers.map((num) => {//* If we add currly bracket means { a Scope } and don't write return the console will give you undefined
//    return num + 10
//})

//const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* Example using Map
//const newNums = myNumbers.map((num) => { return num + 10 })

//console.log(newNums);

//* Example using forEach
//const forEachNums = [];
//myNumbers.forEach((num) => {
//    forEachNums.push(num + 10)
//})

//console.log("Using forEach:", forEachNums);

// Example using filter
//const filterdNums = myNumbers.filter((num) => {
//    return num > 5 // Keep only numbers greater than 5
//})

//console.log("Using filter:", filterdNums);



const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums)
