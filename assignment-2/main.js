const submitBtn = document.getElementById("submit-button");
const result = document.getElementById("result");
const personality = document.getElementById("personality");
const form = document.getElementById("bubbletea");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

form.addEventListener("reset", () => {
    location.reload();
})

form.addEventListener("submit", () => {
    let orderName = document.getElementById("order-name");
    let tea = document.querySelector('input[name="tea"]:checked');
    let milk = document.querySelector('input[name="milk"]:checked');


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
        console.log(toppings.length);
        // if (toppingValues.length === 0) {
        //     result.append("nothing");
                // this also works
        // }
        if (toppings.length === 0) {
            result.append("nothing");
            // but I prefer this because it's more logical to me
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
        if (toppingValues.includes("tapioca(boba)") === true) {
            personality.append("You were a teacher pet growing up. ");
        }
        if (toppingValues.includes("taro ball") === true) {
            personality.append("You seem like you know your shit but you're actually a mess. ");
        }
        if (toppings.length === 0) {
            personality.append("You're the boring one in your siblings and you know it. ");
        }
        if (toppingValues.includes("pudding") === true) {
            personality.append("Your favorite thing to talk about is either anime or gaming. ");
        }
        if (toppingValues.includes("herbal jelly") === true) {
            personality.append("You act mature and confident but you're soft like a baby. ");
        }
        if (toppingValues.includes("nata jelly") === true) {
            personality.append("You spend more time in front of your mirror than literally anything else. ");
        }
        if (toppingValues.includes("red bean") === true) {
            personality.append("You probably enjoy hiking and camping and all the outdoor shit. ");
        }
        if (toppings.length >= 3) {
            personality.append("You grew up learning not sharing your snack is ok. ");
        }


    } else {
        result.innerText = "Oops! You haven't finished your order. Make sure you've answered all questions.";
    }
})