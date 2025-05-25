//* Promise NO: 1
const promiseOne = new Promise(function (resolve, reject) {
    //* Do an asyns tasks
    //* DB calls, cryptography, network calls
    setTimeout(function () {
        //console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    //console.log("Promise consumed");
})

//* Promise NO: 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        //console.log("Async task 2");
        resolve()
    }, 2000)
}).then(function () {
    //console.log("Async 2 resolved");

})


//* Promise NO: 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "TKD", email: "tkd@gmail.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    //console.log(user);

})


//* Promise NO: 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        //let error = false
        if (!error) {
            resolve({ username: "abrar", password: "123" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 2000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        //console.log(username);
    })
    .catch(function (error) {
        //console.log(error);
    }).finally(() => console.log("The promisse is either resolved or rejected"))

//console.log(username);

//* Promise NO: 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        //let error = false
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        } else {
            reject("Error: JS went wrong");
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//async function getAllUsers() {
//    try {
//        const response = await fetch("https://jsonplaceholder.typicode.com/users")
//        //console.log(response);
//        const data = await response.json();
//        console.log(data);
//    } catch (error) {
//        console.log("E: ", error);
//    }
//}

//getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

