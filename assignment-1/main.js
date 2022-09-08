const buttons = document.querySelectorAll(".btn");
for (const button of buttons) {
    button.addEventListener("mouseover", () => {
        button.style.color = "black";
        button.style.backgroundColor = "yellow";
    })
    button.addEventListener("mouseout", () => {
        button.style.color = "black";
        button.style.backgroundColor = "lightgray";
    })
}
const number = document.getElementById("number");
console.log(number);
let x = 50;
let y;

const heading = document.getElementById("heading");

function success() {
    if (x == 69) {
        console.log("success");
        heading.innerText = "That's the right number!";
        heading.style.backgroundColor = "green";
        heading.style.color = "white";
    } else {
        heading.innerText = "Keep guessing...";
        heading.style.backgroundColor = "white";
        heading.style.color = "black";
    }
}

const up = document.getElementById("up");
up.addEventListener("click", () => {
    y = x + 1;
    number.innerText = y;
    x = y;
    success();
})

const down = document.getElementById("down");
down.addEventListener("click", () => {
    y = x - 1;
    number.innerText = y;
    x = y;
    success();
})