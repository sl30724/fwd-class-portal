import Title from "./title.js";

const title = new Title("Peter");
const title2 = new Title("idk");
document.body.innerHTML += title.render();
document.body.innerHTML += title2.render();
console.log("hello");