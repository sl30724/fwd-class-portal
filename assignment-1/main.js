const buttons = document.querySelectorAll(".btn");
for (const button of buttons) {
    button.addEventListener("mouseover", () =>{
        button.style.color = "red";
        button.style.backgroundColor = "black";
    })
    button.addEventListener("mouseout", () =>{
        button.style.color = "black";
        button.style.backgroundColor = "lightgray";
    })
}
const number = document.getElementById("number");
console.log(number);
let x = 50;
let y;

const heading = document.getElementById("heading");

if (x == 69){
    console.log("success");
    heading.innerText = "That's the right number!";
    heading.style.backgroundColor = "green";
    heading.style.color = "white";
}

const up = document.getElementById("up");
up.addEventListener("click", () =>{
    y=x+1;
    number.innerText = y;
    x=y;
})

const down = document.getElementById("down");
down.addEventListener("click", () =>{
    y=x-1;
    number.innerText = y;
    x=y;
})