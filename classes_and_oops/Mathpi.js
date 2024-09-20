// let dep = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(dep);

// Object.defineProperty(Math, 'PI', {
//     value : 5,
//     writable : true
// })

// console.log(Math.PI) // can't redefine the property value

const admin = {
    name : 'Sayan',
    role: 'admin',
    isActive: true,

    getDeatils: function(){
        return `${this.name} is ${this.role}`
    }
}

let dep = Object.getOwnPropertyDescriptor(admin, 'isActive')

console.log(dep);

Object.defineProperty(admin, 'isActive', {
    writable : false,
    enumerable : false
})

admin.isActive = false
console.log(admin)

for (let [key,values] of Object.entries(admin)){

    if (typeof values !== 'function'){
        console.log(`${key} : ${values}`);
    }
    
}