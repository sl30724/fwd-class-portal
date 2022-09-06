// only use let instead of var for variables.
// use const for variables that don't change. It takes up less space.
// also use const for variables from the start if it's a big program to save space, and later change to let if it needs to be changable
const x = 2;
let y = 3;

console.log("hello!");
// both double quotes and single quots work
const str = 'this is bob\'s';
// template literal with ` and ${}
const template = `this is a ${x + y} template literal`;
// same exaple without template literal
const concat = "this is " + x + " a concatenation";

console.log(str);


const myArray = [0, 2, 7, 8];
myArray.push(10);

// objects are collections of key(string) and value pairs, separated by comma
const classroom = {
    building: "ATLAS",
    room: 104
}

console.log(classroom);
//two ways to call pairs
console.log(classroom.room);
console.log(classroom["building"]);
//add a pair to the object
classroom.occupancyLimit = 30;
console.log(classroom);

y = 11;
const stringy = "11";
// double equals would return y in the following
// but triple equals in js behave like in other languages, which would return x
if (y == stringy) {
    console.log(y);
} else {
    console.log(x);
}

// make sure there's an end to the loop
while (y<15){
    console.log(y);
    y++;
}

// for loop is safer than while loop because it forces you to remember to put in the update statement. for (initial statement; condition; update to initial) {}
for (let i = 0; i < myArray.length; i++){
    console.log(`index: ${i}`);
    console.log(`value: ${myArray[i]}`);
}

// for...of loops
for (const item of myArray){
    console.log(`value: ${item}`);
}

// for...in loops. They loop through the keys in objects. Only use it when you know you need it
for (key in classroom){
    console.log(`key: ${key}`);
    console.log(`value: ${classroom[key]}`)
}

// forEach loops
myArray.forEach(function(item) {
    console.log(`value: ${item}`);
});

// functions are also variables!
function add(x,y) {
    return x+y;
}

console.log(add(7,15));

// arrow function
const subtract = (x,y) => {
    return x-y;
}
console.log(subtract(x,y));

const h1 = document.getElementById("heading");
console.log(h1);
// innertext attribute changes the content of html, while innerHTML allows you to do more
h1.innerText = "hellow from js";

// querySelectorAll selects all items in the class
const divs = document.querySelectorAll(".my-div");
for (const div of divs) {
    div.style.backgroundColor = "#0000ff";
}

// querySelector only selects the first item in the class
const div = document.querySelector("div");
const button = document.querySelector("button");
div.addEventListener('mouseenter', () =>{
    div.style.background = "#ff0000";
});