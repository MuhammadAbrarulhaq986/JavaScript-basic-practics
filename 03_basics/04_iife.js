//* Immediately Invoked Function Ecpressions (IIFE)

//function chai() {
//    console.log("DB Connedted");
//}
//chai();

//* IIFE: this method is use to remove the polution of the global scope
(function chai() {
    //* This is called named IIFE
    console.log(`DB Connedted`);
})(); //* adding samicolum is nasasaree.

(() => {
    //* Simple IIFE
    console.log(`DB Connedted Two `)
})();

((name) => {
    //* Un-named IIFE
    console.log(`DB Connedted Three ${name}`)
})('Abrar');


