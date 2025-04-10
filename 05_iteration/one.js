//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}
//console.log(element);//* calling from out side of the scope wont work

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value ${i}🎆`);

    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j}🎇 and Outer loo ${i}🎆`);
        //console.log(i + '*' + j + ' = ' + i * j);
    }
}

let myArray = ["Gojo✨", "Johan🎆", "Levi🎇"]

//console.log(myArray.length);//* result: 3
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];

    //console.log(element);
}

//* Break and continue

//for (let index = 1; index <= 20; index++) {
//    if (index == 5) {
//        console.log(`Number 5 Detected 🔔`);
//        break;
//    }
//    console.log(`The value of i is ${index} 🎃`);
//}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Number 5 is Detected 🔔`);
        continue;
    }
    console.log(`The value of i is ${index} 🎃`);
}