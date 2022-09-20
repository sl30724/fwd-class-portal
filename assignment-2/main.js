const submitBtn = document.getElementById("submit-button");
const result = document.getElementById("result");
const result1 = document.getElementById("result-1");
const form = document.getElementById("bubbletea");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

form.addEventListener("submit", () => {
    let orderName = document.getElementById("order-name");
    console.log(orderName.value)
    let tea = document.querySelector('input[name="tea"]:checked');
    console.log(tea.value);
    let milk = document.querySelector('input[name="milk"]:checked');
    console.log(milk.value);

    result.innerText = `You ordered a ${milk.value} ${tea.value} with `;

    let toppings = document.getElementsByName("toppings");
    for (let topping of toppings) {
        if (topping.checked) {
            console.log()
            result.append(topping.value + " ");
        }
    }
    // let milk = document.querySelector('input[name="milk"]:checked');
    // alert(milk);
    // let toppings = document.querySelector('input[name="toppings"]:checked');
    // alert(toppings);
    // result.innerText = "You completed your order!";
})

// submitBtn.addEventListener("clicked", () => {
//     let orderName = document.getElementById("order-name").value;
//     console.log(orderName);
//     let tea = document.querySelector('input[name="tea"]:checked');
//     console.log(tea);
//     let milk = document.querySelector('input[name="milk"]:checked');
//     console.log(milk);
//     let toppings = document.querySelector('input[name="toppings"]:checked');
//     console.log(toppings);
//     result.innerText = "You completed your order!";
    // if (orderName === null || tea == false || milk == false || toppings == false){
    //     result.innerText = "You haven't finished your order! Make sure you've answered all questions.";
    // } else {
    //     result.innerText = "You finished your order!"
    // }
// })