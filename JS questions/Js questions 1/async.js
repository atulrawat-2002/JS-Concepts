// console.log("Script starts")

// setTimeout(() => {
//     console.log("SetTime out")
// }, 0);

// Promise.resolve('ok')
// .then(() => console.log("promise 1"))
// .then(() => console.log("Promise 2"))
// .then(() => console.log("Promise 3"))

// Promise.resolve('ok')
// .then(() => console.log("promise 4"))
// .then(() => console.log("Promise 5"))
// .then(() => console.log("Promise 6"))

// console.log("Script ends");

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
}

console.log("A");

async function run() {
  let result = await greet();
  console.log("B");
}

run();

console.log("C");
