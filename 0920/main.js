// THE BAD WAY, since it repeates itself

// const jackRabbit = {
//     name: "Jack",
//     height: "very tall",
// };

// const peterRabbit = {
//     name: "Peter",
//     height: "kinda tall",
// }

// console.log(`Hello, my name is ${jackRabbit.name}, and I am ${jackRabbit.height}`);
// console.log(`Hello, my name is ${peterRabbit.name}, and I am ${peterRabbit.height}`);



// THE BETTER WAY: function
// const jackRabbit = {
//     name: "Jack",
//     height: "very tall",
// };

// const peterRabbit = {
//     name: "Peter",
//     height: "kinda tall",
// };

// function sayHello(rabbit) {
//     console.log(`Hello, my name is ${rabbit.name}, and I am ${rabbit.height}`);
// }
// sayHello(jackRabbit);
// sayHello(peterRabbit);

// console.log(`Hello, my name is ${jackRabbit.name}, and I am ${jackRabbit.height}`);
// console.log(`Hello, my name is ${peterRabbit.name}, and I am ${peterRabbit.height}`);



// THE SLIGHTLY BETTER WAY: cloning objects

// const jackRabbit = {
//     name: "Jack",
//     height: "very tall",
// };

// const peterRabbit = structuredClone(jackRabbit);
// peterRabbit.name = "Peter";
// peterRabbit.height = "kinda tall";

// function sayHello(rabbit) {
//     console.log(`Hello, my name is ${rabbit.name}, and I am ${rabbit.height}`);
// }

// sayHello(jackRabbit);
// sayHello(peterRabbit);



// // EVEN BETER WAY: using object prototypes
// const rabbitProto ={
//     name: "",
//     height: "",
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}, and I am ${this.height}`);
//     }
// };



// THE BEST WAY: classes
// naming convention for classes are titlecase
class Rabbit {
    // constructor is kind like a function. Return is implied
    constructor(name, height) {
        this.name = name; //this.name is different for every instance depends on what you assign
        this.height = height;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}, and I am ${this.height}`);
    }

}
const jackRabbit = new Rabbit("Jack", "very tall");
const peterRabbit = new Rabbit("Peter", "kinda tall");

jackRabbit.sayHello();
peterRabbit.sayHello();