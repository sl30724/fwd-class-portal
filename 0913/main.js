const button = document.querySelector("#my-button");
const firstTextInput = document.querySelector("#first-text-input");
button.addEventListener("click", () => {
    // process form here
    console.log(firstTextInput.value);

    const colorInput = document.querySelector("#color-input");
    const form = document.querySelector("form");
    form.style.backgroundColor = colorInput.value;
    // when using local server, make sure refresh by pressing down shift at the same time
})

firstTextInput,addEventListener("change", () => {
    console.log("change detected!");
})

//see type of objects or elements this way!
console.log(typeof firstTextInput);
console.log(typeof 2);

// disable form from refreshing the page when you press enter
const myForm = document.getElementById("my-form");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
})