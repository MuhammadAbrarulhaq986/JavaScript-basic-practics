const marvel_heros = ["thor", "Ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);//* RESULT OF USING PUSH: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]. PUSH ADD THE VALUES IN EXSISTANT ARRAY.

//console.log(marvel_heros);//* THE RESULT IS AN ARRAY WITHIN THE ARRAY.
//console.log(marvel_heros[3][1]);//* THIS IS HOW YOU CAN ACCESS IT.

//const allHeros = marvel_heros.concat(dc_heros);//* CONCAT COMBINE AND THE ARRAYS AND RETURNS A NEW ARRAY 

//console.log(allHeros);//* RESULT: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marvel_heros, ...dc_heros]; //* THREE DOTS ... ARE CALLED SPREAD OPERATOR.
//console.log(all_new_heros);//*RESULT: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5,]]]
//const real_another_array = another_array.flat(Infinity); //* INFINITY IS USED TO FLAT THE ARRAY. SUMMARY OF FLAT:Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
//console.log(real_another_array);//* RESULT: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


//console.log(Array.isArray("Abrar")); //* THIS WILL GIVE YOU FALSE BECAUSE IT'S NOT AN ARRAY.
//console.log(Array.from("Abrar")); //* THIS WILL MAKE ALL THE STRING DISPLAY LIKE AN ARRARY. RESULT: [ 'A', 'b', 'r', 'a', 'r' ]
console.log(Array.from({ name: "Abrar" }));//*INTERESTING: THE RESULT OF THIS WILL SHOW YOU AN EMPTY ARRAY.

let score1 = 100;
let score2 = 200;
let score3 = 300;

//* Array.of : Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3)); //* THIS WILL MAKE THE ARRAY WITH THE GIVEN VALUES. RESULT: [ 100, 200, 300 ]


//* Array.from() is used to create a new array from an array-like object or an iterable (like a string or a Set).


//* Array.of() is used to create a new array from a variable number of arguments.
