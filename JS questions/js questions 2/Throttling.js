function apiCall() {
  console.log("Network call...");
  console.log("\n");
}

const btn = document.getElementById("call");

let id = null;

btn.addEventListener("click", () => {
  if (id !== null) {
    return;
  }

  apiCall();
  id = setTimeout(() => {
    id = null
  }, 1500);
});

// btn.addEventListener('click', () => {
//     if (id !== null) {
//         clearTimeout(id);
//     } 

//     id = setTimeout(() => {
//         apiCall();
//     }, 1500);
// })

const print = document.querySelector("#Print");

print.addEventListener("click", () => {
  console.log("Printing to the console");
});
