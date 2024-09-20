// class User{
//     constructor(username,password,email){
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encrtypPassword(){
//         return `${this.password}abc`
//     }

//     userUpper(){
//         return this.username.toUpperCase()
//     }

// }

// const user = new User("john","12345","j@j.com")

// console.log(user.encrtypPassword());
// console.log(user.userUpper());


//behind the scene

function User(username,password,email){
    this.username = username
    this.password = password
    this.email = email
}

User.prototype.encrtypPassword = function (){
    return `${this.password}abc`
}

User.prototype.userUpper = function (){
    return this.username.toUpperCase()
}


console.log(new User("john","12345","j@j.com").encrtypPassword())
console.log(new User("john","12345","j@j.com").userUpper());
