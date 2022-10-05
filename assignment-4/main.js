// fetch("https://nekos.best/api/v2/neko")

//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((json) => {
//         console.log(img);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// https://nekos.best/api/v2/neko/0001.png

function getQuote() {
fetch("https://animechan.vercel.app/api/random")

    .then((response) => {
    console.log(response);
    return response.json();
})
    .then((quote) => {
        console.log(quote.quote);
        const resultDisplay = document.getElementById("result");
        resultDisplay.innerText = quote.quote;
        const originDisplay = document.getElementById("origin");
        originDisplay.innerText = quote.character + ", " + quote.anime
    })
}

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    getQuote();
})