

// const form = document.querySelector("form");
// const div = document.querySelector("div");
// const button = document.querySelector("button");

// div.addEventListener("click", function (event) {
//     event.preventDefault();
//     // console.log("\r\ndiv clicked ", "event.target => ",event.target, "event.currentTarget => ", event.currentTarget, "this => ",this)
//     console.log(event.altKey)
// } ,true)


// form.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("\r\nform clicked ", "event.target => ",event.target, "event.currentTarget => ", event.currentTarget, "this => ",this)
// }, true)

// button.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("\r\nButton clicked ", "event.target => ",event.target, "event.currentTarget => ", event.currentTarget, "this => ",this)
// },true )


const listParent = document.querySelector("ul");
const listChild = document.querySelectorAll("li");

const handler = () => {
    console.log("clicked")
}

listParent.addEventListener('click', handler)

listParent.removeEventListener('click', handler)

// listParent.removeEventListener("click", () => {
//     console.log("clicked")
// })


