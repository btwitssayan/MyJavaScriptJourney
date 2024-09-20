const user = {
    username : 'sachin',
    age : 24
}

const printme = function(){
    console.log(this.username + ' ' + this.age)
}


let print = printme.bind(user) // its bind a function to an object and return a new function with cna be invoked later
print()
