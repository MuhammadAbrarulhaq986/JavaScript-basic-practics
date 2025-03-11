//const tinderUser = new Object();//* THIS IS SINGLE TON OBJECT.
const tinderUser = {};//* THIS IS NON-SINGLE TON OBJECT

tinderUser.id = "123abc";
tinderUser.name = "Johan";
tinderUser.isLoggedIn = false;

//console.log(tinderUser); //*  { id: '123abc', name: 'Johan', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abrar",
            lastname: "ulhaq",
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }


//const obj3 = { obj1, obj2 }; //* obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign(obj1, obj2);//* { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//*   ADDEDING PARANTHASES ↓  IS RECOMENDED AND PERFERED
//const obj4 = Object.assign({}, obj1, obj2, obj3);//* { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = { ...obj1, ...obj2, ...obj3 }; //* { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }. WE ARE USING ISPRADE OPERATORS ... 
//console.log(obj4);


const users = [
    { id: 1, email: "a@gmail.com" },
    { id: 1, email: "a@gmail.com" },
    { id: 1, email: "a@gmail.com" },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //* [ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(tinderUser)); //* [ '123abc', 'Johan', false ]
//console.log(Object.entries(tinderUser)); //* [ [ 'id', '123abc' ], [ 'name', 'Johan' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty("isLoggedIn")); //* true


const course = {
    courseName: "JS in Urde",
    price: "999",
    courseInstructor: "Abrar"

}

//course.courseInstructor; //* THIS IS HOW YOU CAN ACCESS THIS OBJECT. THIS IS A OLD WAY.

//*WE ARE USING "syntactic sugar" refers to syntax that simplifies code, making it more readable or easier to write, without altering the underlying functionality
//const { courseInstructor } = course; //* THIS IS A NEW AND EASY WAY.
const { courseInstructor: instructor } = course; //* THIS IS CALLED OBJECT DE-STRUCTURE 

//console.log(courseInstructor);
console.log(instructor);


//* THIS IS HOW YOU WILL GET RESPONS FORM API'S.
//* THIS IS CALLED JSON FORMAT
//{
//    "name": "Abrar",
//    "courseName": "JS in Urdu",
//    "price": "free"
//}

[
    {},
    {},
    {}
]



//* THIS IS HOW WE DE-STRUCTURE IN REACT. KNOW THIS WILL REMINED YOU THAT THIS IS CALLED DE-STRUCTURE
//const navbar = ({company}) =>{
//}

//navbar(company = "Royal Stars")




