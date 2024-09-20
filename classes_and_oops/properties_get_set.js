function User(username,age){
    this._username = username
    this._age = age

    Object.defineProperty(this,'username',{
        get: function(){
            return this._username.toUpperCase()
        },
        set: function(value){
            this._username = value
        }
    })

    Object.defineProperty(this,'age',{
        get: function(){
            return `${this._age}abc`
        },
        set: function(value){
            this._age = value
        }
    })
}

const user = new User('sachin',24)

console.log(user.username);
console.log(user.age)