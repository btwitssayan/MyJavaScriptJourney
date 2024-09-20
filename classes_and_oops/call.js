function setUsername (username){

    // complex logic
    this.username = username
}

function createUser (username,email,password){

    setUsername.call(this,username)

    this.email = email  
    this.password = password
}

console.log(new createUser("john","j@j.com","12345"))