// console.log(window.document);

// // dom manupulation

// // id selector
// document.getElementById("myid");

// // returns null if  id dont exit

// document.getElementsByClassName("myclass");

// // return a empty html collection - similar to an array

// document.getElementsByTagName("p");


// query selector

// document.querySelector("myid/myclass/tagname");
// returns first element
let but = document.querySelector("button");
console.dir(but);

// document.querySelectorAll("myid/myclass/tagname");
// returns a nodelist

// DOM Manipulation

// Properties
// • tagName : returns tag for element nodes
// • innerText : returns the text content of the element and all its children
// • innerHTML : returns the plain text or HTML contents in the element
// • textContent : returns textual content even for hidden elements