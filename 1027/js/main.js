import * as _ from "lodash"
import { times } from "lodash";

console.log(_.now());

function hello(name, times) {
    for (let i=0; i< times; i++) {
    const p = document.createElement("p");
    p.innerHTML = `Hello ${name}, for the ${i}th time`;
    document.body.append(p);
    }
}
// use arrow function to successfully delay the function

// _.delay(hello, 1500, "Peter");

const input = document.querySelector("input");
input.addEventListener ("change", () => {
    const times = _.clamp(input.value, 0, 10);
    _.delay(hello, 1500, "Peter", times);
    })