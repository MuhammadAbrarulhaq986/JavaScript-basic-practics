// foreach

const coding = ["js", "ruby", "java", "python", "cpp",];

//* Using normal function
//coding.forEach( function (val) {
//    console.log(val);
//})

//* Using arrow function
//coding.forEach((val) => {
//    console.log(val);
//})

//function printMe(item) {
//    console.log(item);
//}

//coding.forEach(printMe)//* We are giving reffrence here not excuting it.

//coding.forEach((item, index, arr) => {
//    console.log(item, index, arr);
//})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})