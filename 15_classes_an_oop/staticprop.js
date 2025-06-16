
class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }

}
const abrar = new User("abrar")

//console.log(abrar.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const phone = new Teacher("phone", "phone@gmail.com");
phone.logMe();
console.log(phone.createId());
