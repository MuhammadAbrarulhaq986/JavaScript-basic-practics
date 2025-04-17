//const numbers = [1, 2, 3];
//const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// Initial acc = 0 (provided), curr = 1 → acc becomes 1  
// Next acc = 1, curr = 2 → acc becomes 3  
// Next acc = 3, curr = 3 → acc becomes 6 (final result)  
//acc → Holds the intermediate result.

//curr → The current array element.

//Short: The accumulator collects results, while currentValue is the element being processed. 🚀

const myNumbers = [1, 2, 3]

//const myTotal = myNumbers.reduce(function (accumulator, currentValue) {
//    console.log(`accumulator ${accumulator} and currentValue ${currentValue}`);

//    return accumulator + currentValue;
//}, 0);

const myTotal = myNumbers.reduce((accumulatar, currentValue) => accumulatar + currentValue, 0)

//console.log(myTotal);

const shoopingCart = [
    {
        itemName: "JS Course",
        price: 2999,
    },
    {
        itemName: "Python Course",
        price: 2999,
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999,
    },
    {
        itemName: "Data Science Course",
        price: 12999,
    },
]


const priceToPay = shoopingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
