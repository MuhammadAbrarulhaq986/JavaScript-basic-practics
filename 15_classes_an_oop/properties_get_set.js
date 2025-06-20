function User(email, password) {
    // Internal variables
    this._email = email;
    this._password = password;

    // Define property for email
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    // Define property for password
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);     // Outputs: CHAI@CHAI.COM
console.log(chai.password);  // Outputs: CHAI
