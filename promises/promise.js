// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promiseOne");
//         resolve();
//     },2000)
// })

// promiseOne.then(()=>{
//     console.log("promiseOne resolved");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("setInterval");
//         resolve();
//     },2000)
// }).then(()=>{
//     console.log("promiseTwo");
// })

// resolve also passes the value to the next then function in the chain of promises 

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promiseThree");
//         resolve({
//             name:"sachin",
//             age:24,
//         });
//     },2000)
// })


// promiseThree.then((e)=>{
//     console.log(e);
// })

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const error = false;
//         if(!error){
//             resolve({
//                 name:"sachin",
//                 age:24,
//             });
//         }
//         else{
//             reject("error");
//         }
//     },2000)
// })

// promiseFour
//     .then((data)=>{
//         return data.name;
//     })
//     .then((name)=>{
//         console.log(name);
//     })
//     .catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//         console.log("finally");
//     })


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({
//                 name:"sachin",
//                 age:24,
//             });
//         }
//         else{
//             reject("error");
//         }
//     },2000)
// })

// async function asyncFunc() {
//     try{
//         const data = await promiseFive;
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// asyncFunc();


async function asyncFunc() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //await will pause the execution until the promise is resolved
        const data = await response.json(); // await will pause the execution until the promise is resolved
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

asyncFunc();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))