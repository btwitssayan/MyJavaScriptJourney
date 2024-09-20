class User  {
    constructor(username,age){
        this.username = username
        this.age = age
    }
    get age(){
        return `${this._age}abc`
    }
    set age(value){
        this._age = value
    }

    get username(){
        return this._username.toUpperCase()
    }

    set username(value){
        this._username = value
    }
}

const user = new User('sachin',24)

console.log(user.username);
