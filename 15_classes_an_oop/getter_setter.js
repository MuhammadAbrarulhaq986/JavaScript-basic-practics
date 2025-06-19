
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        //* When we get vlaue from DB it will come in Upper Case
        //return this._password.toUpperCase()
        return `${this._password}abrar`
    }

    set password(value) {
        //* this value will save as it is 
        this._password = value

    }
}

const abrar = new User("a@abrar.ai", "abc")

console.log(abrar.password);
console.log(abrar.email);
