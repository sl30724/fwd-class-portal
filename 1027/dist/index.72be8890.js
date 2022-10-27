// import * as _ from "lodash"
console.log(_.now());
function hello(name) {
    const p = document.createElement("p");
    p.innerHTML = `Hello ${name}`;
    document.body.append(p);
}
// use arrow function to successfully delay the function
_.delay(hello, 1500, "Peter");

//# sourceMappingURL=index.72be8890.js.map
