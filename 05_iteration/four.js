
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple",
}

for (const key in myObject) {
    //console.log(myObject[key]);//* Result: javascript C++ ruby swift by apple
    //console.log(`${key} shortform of ${myObject[key]}`);//* Result: js shortform of javascript cpp shortform of C++ rb shortform of ruby swift shortform of swift by apple
}

const programing = ["js", "rb", "py", "java", "cpp"]

for (const key in programing) {//* In for in loop the key value of array will come in numbers  
    //console.log(key);//*Result: 0 1 2 3 4
    //console.log(programing[key]);//*Result: js rb py java cpp
}

//const map = new Map()//* MAP is not Iterable

//map.set("PAK", "Pakistan")
//map.set("CH", "China")
//map.set("RS", "Russia")

//for (const key in map) {
//    console.log(key); //* there will be nothing in the Terminal when we run this
//}

