// const user = {
//     name: 'John',
//     age: 30,
//     isLogedIn: true,

//     getDetails() {
//         //return `${this.name} is ${this.age} years old`;
//         return this //return current object referance 
//     }

// }

// console.log(user.getDetails()) 
// console.log(this) //window object in browser and global object in nodejs


// function myfun(username, age) { // function constructor
//     this.username = username
//     this.age = age

//     return this 
// } // return current object referance

// const userone = myfun("John", 30) // does not give new context to object because new keyword is not used
// console.log(userone); //return current object referance 


function User(username, age) { // function constructor
    this.username = username
    this.age = age

    //return this 
    this.greet = function () {
        console.log("Hello " + this.username);
    }
} // return current object referance

const userone = new User("John", 30) // give new context to object
const usertwo = new User("sachin", 24) // give new context to object

console.log(userone, usertwo);

console.log(userone.constructor === User); // check constructor of object or not
console.log(userone instanceof User); // check instance of object or not
