const submitBtn = document.getElementById("submit-button");
const result = document.getElementById("result");
const result1 = document.getElementById("result-1");
const form = document.getElementById("bubbletea");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

form.addEventListener("reset", () => {
    location.reload();
})

form.addEventListener("submit", () => {
    let orderName = document.getElementById("order-name");
    console.log(orderName.value)
    let tea = document.querySelector('input[name="tea"]:checked');
    console.log(tea.value);
    let milk = document.querySelector('input[name="milk"]:checked');
    console.log(milk.value);


    if (orderName != null && tea != null && milk != null) {
        result.innerText = `Hi ${orderName.value}, you ordered a ${milk.value} ${tea.value} with `;

        let toppings = document.querySelectorAll('input[name="toppings"]:checked');
        let toppingValues = [];
        toppings.forEach((topping) => {
            toppingValues.push(topping.value);
            result.append(topping.value + " ");

        // Another way to do this! which is basically the same
        // let toppings = document.getElementsByName("toppings");
        // let toppingList = [];
        // for (let topping of toppings) {
        //     if (topping.checked) {
        //         result.append(topping.value + " ");
        //         toppingList.push(topping);
        //     }
        // }
        });

        if (toppingValues.length === 0) {
            result.append("nothing");
        }

        // if (toppings == false) {
        //     result.append("nothing");
        //     // this will not return "nothing"
        // }

        // if (toppings == null){
        //     result.append("nothing");
        //     // this also will not return "nothing"
        // }

        // if (toppings.value == null){
        //     result.append("nothing");
        //     // this will always return "nothing" 
        // }


    } else {
        result.innerText = "Oops! You haven't finished your order. Make sure you've answered all questions.";
    }
})