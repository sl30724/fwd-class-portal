const submitBtn = document.getElementById("submit-button");
const result = document.getElementById("result");
const result1 = document.getElementById("result-1");
const form = document.getElementById("bubbletea");
let toppingList = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

form.addEventListener("reset", () => {
    location.reload();
})

form.addEventListener("submit", () => {
    let orderName = document.getElementById("order-name");
    // console.log(orderName.value)
    let tea = document.querySelector('input[name="tea"]:checked');
    // console.log(tea.value);
    let milk = document.querySelector('input[name="milk"]:checked');
    // console.log(milk.value);
    let toppings = document.getElementsByName("toppings");

    if (orderName != null && tea != null && milk != null) {
        result.innerText = `Hi ${orderName.value}, you ordered a ${milk.value} ${tea.value} with `;
        
        for (let topping of toppings) {
            if (topping.checked) {
                result.append(topping.value + " ");
                console.log(topping.value);
                toppingList.push(topping);
                console.log(toppingList);
            }
        }
         if (toppingList = []) {
            result.append("nothing");
         }
    } else {
        result.innerText = "Oops! You haven't finished your order. Make sure you've answered all questions.";
    }
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