//let a = 10;
//const b = 20;
//var c = 30;

//var c = 300;
let a = 300; //* this is called global scope

//{ } //* In every language this is called block scope 
if (true) {
    //! this whole if statement is called block scope
    let a = 10;
    const b = 20;

    console.log("INNER: ", a);


    //c = 30;
    //var c = 30; //*  declaring a variable in var and console it out side of the if statement will show the var value from in side of the if.
    //* meaning the closest to console will print. this is only for var declared variables


}

console.log(a);
//console.log(b);
//console.log(c);
