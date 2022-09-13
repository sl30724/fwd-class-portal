const button = document.querySelector("#my-button");
button.addEventListener("click", () => {
    // process form here
    const firstTextInput = document.querySelector("#first-text-input");
    console.log(firstTextInput.value);

    const colorInput = document.querySelector("#color-input");
    const form = document.querySelector("form");
    form.style.backgroundColor = colorInput.value;
    // when using local server, make sure refresh by pressing down shift at the same time
})

