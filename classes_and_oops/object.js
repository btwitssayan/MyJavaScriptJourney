function sum(n,m){
    return n+m
}

sum.power = 2

console.log(sum(3,7));
console.log(sum.power)
console.log(sum.prototype)


function createuser(name,age){

    this.name = name
    this.age = age
}


createuser.prototype.getdetails = function (){
    this.age++
    return `${this.name} is ${this.age} years old`
}

const one = new createuser("sachin",24)

console.log(one.getdetails()) //sachin is 24 years old