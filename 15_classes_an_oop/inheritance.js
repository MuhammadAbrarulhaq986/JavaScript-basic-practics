
class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@Teacher.com", "123");

chai.addCourse()
chai.logMe()

const tea = new User("tea");
//tea.addCourse() //* No access
tea.logMe() //* 

//console.log(chai === tea); //* false
//console.log(chai === Teacher); //* false
//console.log(chai instanceof Teacher); //* true
console.log(chai instanceof User); //* true

