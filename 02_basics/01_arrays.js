
const myArray = [0, 1, 2, 3, 4, 5];
//console.log(myArray[1]);
const myHeros = ["Gojo", "Esagi"];
//console.log(myHeros[1]);

const myArray2 = new Array(1, 2, 3, 4, 5);//* THIS WILL AUTOMATICALY ADD ARRARY BRACKET IN THIS  
//console.log(myArray2[4]);


//* ARRARY METHODS

//myArray.push(6);//* PUSH METHOD ADD'S FROM THE LAST OF THE ARRAY.
//myArray.push(7);//* IN PUSH YOU NEED TO GIVE SOME THING TO ADD IN THE ARRAY.
//myArray.pop();//* POP METHOD DELETES FROM THE LAST OF THE ARRAY.
//myArray.pop();//* IN POP YOU DON'T NEED TO GIVE ANYTHING IT'S AUTOMATICALY DELETES FROM THE END ON AN ARRAY.

//myArray.unshift(9);//* UNSHIFT ADD'S FROM THE START OF THE ARRAY.  
//myArray.shift();//* SHIFT DELETES FROM THE START OF THE ARRAY.  


//console.log(myArray.includes(9));//* YOU WILL GET THE RESULT OF THIS IN BOOLEAN: TRUE OR FALSE.
//console.log(myArray.indexOf(3));//* IN THIS WE CHECK IF THE VALUE IS IN THE ARRAY INDEX OR NOT. IF YOU ASK A NUMBER THAT'S NOT IN THIS IT WILL GIVE YOU -1. THE NUMBER DOES NOT MATCH WITH THE ARRAY IT WILL ONLY GIVE YOU -1 

const newArray = myArray.join(); //* IN THIS WE CONVERT THE ARRAY TO STRING.

//console.log(myArray);
//console.log(newArray);


//* SLICE, SPLICE
console.log("A", myArray);//* Output: A [0, 1, 2, 3, 4, 5]

//* Using slice: Creates a new array with elements from index 1 to 2 (end index is exclusive)
const myn1 = myArray.slice(1, 3);//*Extracts elements at index 1 and 2

console.log(myn1); //* Output: [1, 2]

//* Log the original array again to show it remains unchanged
console.log("B", myArray); //* Output: B [0, 1, 2, 3, 4, 5] (slice does not modify the original array)

//* Using splice: Removes elements from the original array starting at index 1, and removes 3 elements
const myn2 = myArray.splice(1, 3); //* Removes elements at index 1, 2, and 3
console.log("C", myArray); //* Output: C [0, 4, 5] (splice modifies the original array)

//* Log the removed elements returned by splice
console.log(myn2); //* Output: [1, 2, 3] (splice returns the removed elements)
