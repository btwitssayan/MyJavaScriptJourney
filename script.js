// console.log("Hello World!")

// // datatype and variables

// // primitives-dataTypes

// let num = 14; //number
// const fullName = "Sayan Golder"//string
// let address; // undifined
// let id = null; // null
// let bigInt = BigInt(14000) // BigInt
// let sym = Symbol("Hey there!") // Symbol

// console.log(typeof(num),typeof(fullName),typeof(address),typeof(id),typeof(bigInt),typeof(sym))

// // nonPrimite-dataType

// const Class = {
//     name:"Sayan Golder",
//     CGPA:7.2,
//     Roll:31
// };

// console.log(Class["CGPA"])

// // Practice Question 1

// const product = {
//     pName : "Parker Jotter Standard CT Ball Pen (Black)",
//     rating : 4,
//     isDealOfTheDay : true,
//     MRP: 270,
//     offer: 5
// };



// console.log(product)

// console.log("1234" + 12)

// Arithematic opeartors

// let a = 4;
// letb = 6;

// console.log("a+b",a+b)
// console.log("a-b",a-b)
// console.log("a*b",a*b)
// console.log("a/b",a/b)
// console.log("a%b",a%b)
// console.log("a**b",a**b)
// console.log("a++",a++)
// console.log("b--",b--)


// let a = 4;
// let b = 9;
// let c = 8;

// res = a > b ? a : c > b ? c : b;

// console.log(res)

// for(let i = 1;i<=100;i++){
//     if (i%2 === 0){
//         console.log(i);
//     } 
// }

// templates literals

// console.log(`Product name : ${product.pName} Rating: ${product.rating} MRP : ${product.MRP}`)

// let str = "sayan";

// let newstr = str.toUpperCase();

// console.log(newstr)



// let fname = prompt("Enter your Full Name : ");

// let len = fname.length;

// let username = `@${fname}${len}`;

// console.log(username);


// let price = [250,645,300,900,50]

// let dis = 0;

// let i = 0

// for (let p of price){
//     dis = p - (p * 0.10);
//     price[i] = dis;
//     i++;
// }

// console.log(price)

// functions


// function sum(a,b){
//     return a+b;
// }

// const mul = (a,b) => {
//     return a*b
// }


// no of vowels in a string

// const isVowel = (char) =>{
//     let i = char.toLowerCase();
//     return "aeiou".includes(i);
// }


// function countVowels(str){
//     let count = 0;
//     for ( i of str){
//         if (isVowel(i)){
//             count++;
//         }
//     }
//     return count;
// }

// str = prompt("Enter a string")

// console.log(countVowels(str));


// for eaCH METHOD

// it is only apply on array

// it take a function as parameter which is called a call back function and the function which take a function as a paramter or return a function is called a higher oreder function


// let arr = [1,2,3,4,5]

// arr.forEach((val,indces,arr) =>{  // val,indces,arr default parameters you can take or avoid this parameters except val because it theactual value of the array
//     console.log(val**2)
// });


// map 
// same as forEach but in addition it returs a new array

// arr.map(callbackFunction(value,index,arr))

// filter
// craete a new array from old by applying a function or some condition on each value

// let arr = [1,2,3,4,54,6,7,8]

// let newarr = arr.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(newarr)

//reduce

// it returns a single value form an array

//for example

// let arr= [1,2,3,4,435,89];

// let value = arr.reduce((prv,cur) =>{
//     return prv > cur ? prv : cur;
// })

// console.log(value)

//Math

// let min = 1;
// let max = 100;

// function random(min,max) {
//     return (Math.floor(Math.random()*(max-min+1)) + min);
// }

// let num = random(1,100);

// console.log(num)

//date

// let date = new Date();

// console.log(date.toTimeString())//11:15:36 GMT+0530 (India Standard Time)
// console.log(date.toString())//Sat Jul 13 2024 11:16:10 GMT+0530 (India Standard Time)
// console.log(date.toDateString())//Sat Jul 13 2024
// console.log(date.toISOString())
// console.log(date.toTimeString())

// let myCreatedDate = new Date("12-04-2004")
// let myCreatedDate = new Date(2034,5,17,17,9)
// console.log(myCreatedDate.toString())

//compairing date in ms

// let mybookingdate = new Date("06-17-2024")

// let timestamp = Date.now()

// console.log(timestamp);
// console.log(mybookingdate.getTime())

//converting ms in s

// console.log(Math.floor(Date.now()/1000))

// let date = new Date()

// console.log(date.getDate())
// console.log((date.getMonth()+1))//because in js month is start from 0

// let t  = date.toLocaleString("default",{
//     month:"2-digit",
//     day:"2-digit",
//     year:"numeric"
    
// });

// console.log(t)

// array concatination

// const marvel = ["Ironman","Spiderman"]
// const DC = ["Batman", "Superman"]

// // const all = marvel.concat(DC)
// const all = [...DC,...marvel] //spread opeartor
// console.log(all)

// let arr = [12,3,4,24,243,2,[234234,3254345,345,34,654],324234,2[324,23[3423,45]]]

// console.log(arr.flat(Infinity))

// console.log(Array.isArray("Sayan"))
// console.log(Array.from("Sayan"))

// console.log(Array.from({name:"Sayan"})) // we need to specific whom we should make the array of it is key or value 

// let num1 = 12
// let num2 = 80

// console.log(Array.of(num1,num2))


//object

// let mysmp = Symbol("hey")// hey is the description of the symbol

// console.log(mysmp)

// const obj = {
//     name:"Sayan",
//     email:"sayan@",
//     [mysmp] : "hey"
// }

// console.log(obj[mysmp])

//freeze a object

// Object.freeze(obj)

// obj.name="Ritu"

// console.log(obj);

// obj.greeting = function (){
//     console.log("Hello")
//     // return "Hello Coders"
// }

// obj.greetingTwo = function(){
//     return `hello ${this.name}`
// }

// console.log(obj.greetingTwo())
// console.log(obj.greeting)// function return back - function reference

// const a ={
//     0:"a",
//     2:"b"
// }

// const b = {
//     3:"a",
//     4:"b"
// }

// // const c = Object.assign({},a,b)

// const c = {...a,...b}
// console.log(c);

// console.log(Object.keys(c));
// console.log(Object.values(c));
// console.log(Object.entries(c));
// console.log(c.hasOwnProperty(4));


// const course = {
//     courseName : "JS",
//     price:"999",
//     courseInstractor:"Sayan"
// }

// console.log(course.courseInstractor)

// const {courseInstractor:Instractor} = course //de - structure

// console.log(Instractor)

// function calculatecartPrice(...num){ //rest operator -> rest parameter
//     return num
// }

// console.log(calculatecartPrice(1,2,3,4,56))


// arrow function

// const add = (num1,num2) =>{
//     return num1+num2   // explicit return
// }

// const add2 = (num1,num2) => (num1+num2)// implicit return we can use it without parenthesis

// to return an object

// const obj = () => ({name:"Sayan"})

// console.log(obj())


//IIFe
// An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is defined and executed immediately after it is created. It is a common design pattern used to create a new scope and avoid polluting the global namespace. Here’s a simple example:

// javascript

// (function() {
//     console.log("This is an IIFE");
// })();

// In this example, the function is defined within parentheses () and immediately invoked with (). This pattern is useful for several reasons:

//     Avoid Global Variables: By wrapping code inside an IIFE, variables declared within it are not accessible outside of it, preventing potential conflicts with other scripts.

//     Scope Encapsulation: IIFEs create a new scope, so any variables declared inside the IIFE are not visible outside of it. This helps in maintaining modular code and reducing potential bugs.

//     Initialization: IIFEs can be used to initialize code that needs to run once, such as setting up event listeners or initializing a module.


// let arr = []

// if (arr.length === 0){

// }

// const Boy={}

// if (Object.keys(Boy).length === 0) {
//     console.log("Empty");
// }

// nullish coalesing operator for null and undefined

// let val = null ?? 6 //assign -> 6
// let val = undefined ?? 10 //assign -> 10

// let val = 33??12 //assign -> 33



// Maps as datatype :- unique and same order preservation
// const map = new Map()

// map.set("IN","India")
// map.set("USA","United States of America")
// map.set("FR","France")
// map.set("IN","India")


// for (const [key,value] of map) {
//     console.log(`${key} :- ${value}`);
// }

// // for of loop does not work on object

// const myobj = {
//     js:"javascript",
//     cpp:"C++"
// }

// for (const key in myobj) {
//     console.log(myobj[key]);
// }


const coding = ["java","C++","Python","Javascript","C"]

// coding.forEach(function (val){
//     console.log(val); // call back function doest have any name
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function print(item) {
//     console.log(item);
// }

// coding.forEach(print) // we need to pass the reference of the function

// coding.forEach( (val,index,array) => {
//     console.log(val,index,array);
// })

// const myCoding = [
//     {
//         langName:"JAVA",
//         extention:".java"
//     },

//     {
//         langName:"PYTHON",
//         extention:".py"
//     },

//     {
//         langName:"C++",
//         extention:".cpp"
//     },

//     {
//         langName:"JAVASCRIPT",
//         extention:".js"
//     }

// ]

// for (const key in myCoding) {
//     console.log(myCoding[key].langName)
// }

// myCoding.forEach((obj)=>{
//     console.log(obj.langName);
// })


//===================================================================================================================================================================



//filters

// const num =[1,2,3,4,5,6]

// // let val = num.filter((item) => item > 2)

// // console.log(val)

// // foreach doesnt return anyting by we do this in another way


// const newnum = []

// num.forEach((item) => {
//     if (item > 2){
//         newnum.push(item)
//     }
// })

// console.log(newnum);


//MAP

// const num =[1,2,3,4,5,6]

// let val = num.map((item)=> item *10)

// console.log((val));


// Reduce

const num =[1,2,3,4,5,6]

let sum = 0

let total = num.reduce((a,c) => a+c,sum)

console.log(total);
