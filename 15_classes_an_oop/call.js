//* Function to set username (simulating a complex operation)
function SetUsername(username) {
    //* This function is simulating complex database calls or calculations

    //* 'this' refers to the object that will be created when this function is called with 'new'
    //* OR whatever object we explicitly tell it to use with .call()
    this.username = username;
    console.log("Called"); //* Just to show when this function executes
}

//* Function to create a user
function createUser(username, email, password) {
    //* Problem: If we just call SetUsername normally:
    //* SetUsername(username)
    //* - 'this' inside SetUsername would refer to the global object (or undefined in strict mode)
    //* - The username wouldn't be set on our new user object

    //* Solution: We use .call() to explicitly set 'this'
    //* .call() lets us specify what 'this' should be inside the called function
    //* Here we pass 'this' (the new object being created) to SetUsername
    SetUsername.call(this, username);

    //* Set the remaining properties on the new object
    this.email = email;
    this.password = password;
}

//* Creating a new user with the 'new' keyword
const chai = new createUser("chai", "chai@fb.com", "123");

//* The 'new' keyword does these important things:
//* 1. Creates a new empty object {}
//* 2. Sets 'this' in the constructor function to point to that new object
//* 3. Returns that object (unless the function returns something else)

console.log(chai); //* Now chai has all three properties: username, email, and password