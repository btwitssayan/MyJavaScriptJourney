// class User{
//     constructor(username){
//         this.username = username
//     }

//     logname(){
//         console.log(this.username)
//     }
// }

// class Admin extends User{
//     constructor(username,role){
//         super(username)
//         this.role = role
//     }

//     logrole(){
//         console.log(this.role)
//     }
// }


// const adminuser = new Admin('Sayan','admin')

// adminuser.logname()
// adminuser.logrole()

// behind the scene

// function User(username){
//     this.username = username
// }

// User.prototype.logname = function (){
//     console.log(this.username)
// }


// function Admin(username,role){
//     User.call(this,username)
//     this.role = role
// }

// Admin.prototype = Object.create(User.prototype)

// // Admin.prototype.constructor = Admin; // change constructor

// Admin.prototype.logrole = function (){
//     console.log(this.role)
// }



// const adminuser = new Admin('Sayan','admin')

// adminuser.logname()
// adminuser.logrole()