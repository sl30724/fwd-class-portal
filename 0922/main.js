/** 
* this catched an error but can't handle it
* And this style of commenting is good!
*/

// const input = document.getElementById("input");
// input.addEventListener("change", function() {
//     if (input.value > 10) {
//         throw new Error("woah that's too big!");
//     }
//     console.log("Thanks that's a good number");
// }); 


// /**
//  * this function handles the error (input value processing)
//  */
// const input = document.getElementById("input");
// function handleInput() {
//     if (input.value > 10) {
//         throw new Error("woah that's too big!");
//     }
//     console.log("thanks, that's a good number.");
// }

// input.addEventListener("change", function () {
//     try {
//         // try the code
//         handleInput();
//     } catch (e) {
//         // handle the error
//         // this returns console message in red. Console.log(e) works too.
//         console.error(e);
//     } finally {
//         // this code will run after handling the error
//     }
//     // maybe more code here!
// })


/**
 * Asynchronous Javascript with setTimeout
 */

function takeAReallyLongTime() {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += 1;
    }
    console.log(`the really big sum is ${sum}`);
    return sum;
}
// this works too: setTimeout(takeAReallyLongTime, 1000)
setTimeout(function () {
    const result = takeAReallyLongTime()
    console.log(result);
})
console.log("this log will appeart first but it takes place after takeAReallyLongTime");


/**
 * Asynchronous javascript with promises
 */

// writing your own promise (you probably won't ever need to do this)
function takeAReallyLongTimewithPromises() {
    // resolve is a function that kinda behaves like return
    return new Promise(function (resolve, reject) {
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += 1;
        }
        console.log(`the really big sum is ${sum}`);
        resolve(sum);
    });
}

// async javascript using promises
takeAReallyLongTime()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error(error);
    });
// this line will actually show up after takeAReallyLongTim in promises
console.log("this log will now appear after takeAReallyLongTime in promises");


/**
 * async javascript with function
 */

async function takeAReallyLongTimeAsync() {
    // without using resolve and reject, async function turns the following into a promise.
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += 1;
    }
    console.log(`the really big sum is ${sum}`);
    return sum;
}

const result = await takeAReallyLongTimeAsync();
// the following is equal to .then in promises
// async function doesSeomthingElse(){
//     const result1 = await somethingElse();
//     const result2 = await aThirdThing();
// }
console.log(result);
console.log("this logtakes place after takeAReallyLongTime");

/** 
 * better loop with setInterval
 */ 
let counter = 0;
function loop() {
    console.log("loop!");
    console.log(counter);
    counter++;
}

// framerate cycle could be different with different browser and stuff, so this is not the best way
const intervalid = setInterval(loop, 100);
button.addEventListener("click", () => {clearInterval(intervalid)});


