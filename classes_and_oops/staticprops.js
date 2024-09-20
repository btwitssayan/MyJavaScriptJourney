class User {
    constructor(username, age) {
        this.username = isNaN(username) ? username : 'Guest'
        this.age = age
    }
    static greet() {
        console.log("Hello " + this.username)
    }
}

new User('Sayan','24')
User.greet()