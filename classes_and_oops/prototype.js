// let heros = ["ironman", "thor", "hulk", "spiderman", "captain america"];

// const superheros = {
//     name: "superman",
//     name: "batman",
//     name: "wonderwoman",
//     name: "flash",
// }

// // console.log(typeof heros);

// Object.prototype.sayan = function () {
//     console.log(this);
// };

// Array.prototype.saysayan = function () { // protype kwyword is needed to add method in array object
//     console.log('i am an array say sayan');
// }
// heros.saysayan()   


// superheros.sayan() 
// superheros.saysayan()// erroe because saysayan is not a method of Object its for only array


//inheritance

const user = {
    name: "sachin",
    age: 24
}

const teacher = {
    isPresent: true,
   // __proto__: user
}

const student = {
    isPresent: false
}



teacher.__proto__ = user

console.log(teacher.name);

//modern syntax
Object.setPrototypeOf(student, user)

console.log(student.name);


//making a trueLenght method thats retrns the true length of string


let username = "john     "

String.prototype.trueLenght = function () {
    return this.trim().length
}

console.log(username.trueLenght())