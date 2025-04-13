//******************* for of  loop *******************

// ["", "", "", "", "",] //* Array of Strings

// [{}, {}, {}, {}, {},] //* Array of Object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {//* In for of loop the key value of array will come in String and directly be printed here 
    //console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    //console.log(`Each Character is ${greet}`);
}

//******************* Maps *******************

const map = new Map()

map.set("PAK", "Pakistan")
map.set("CH", "China")
map.set("RS", "Russia")
//map.set("PAK", "Pakistan")//* This wont be print. Because Map only use unique values

//console.log(map);//* Result: Map(3) { 'PAK' => 'Pakistan', 'CH' => 'China', 'RS' => 'Russia' }

//for (const key of map) {//* [ 'PAK', 'Pakistan' ] [ 'CH', 'China' ] [ 'RS', 'Russia' ]

for (const [key, value] of map) {//* by adding [] we are destructure so we can saprate the Key an Value
    //console.log(key, ":-", value);
}

//const myObject = { //* TypeError: myObject is not iterable
//    "game1": "NFS",
//    "game2": "Rubolx"
//}
const myObject = { //* TypeError: myObject is not iterable
    game1: "NFS",
    game2: "Rubolx"
}
/*
for (const [key, value] of myObject) {
    console.log(key, ":-", value);
} 
*/ //* This method wont work with this example
