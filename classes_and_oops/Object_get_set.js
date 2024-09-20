const user = {
    _username: 'sachin',
    _age: 24,
    get username(){
        return this._username.toUpperCase()
    },
    set username(value){
        this._username = value
    }
}

console.log(user.username);

user.username = 'Sayan'// set property value 
console.log(user.username);// get property value

const userOne = Object.create(user) // create new object from existing object 

console.log(userOne.username) // get property value