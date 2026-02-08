document.querySelectorAll('div')[0].addEventListener("click",(e) => {
    console.log("great grand parent");
}, true)

document.querySelectorAll('div')[1].addEventListener("click",(e) => {
    console.log("grand Parent");
}, true)

document.querySelectorAll('div')[2].addEventListener("click",(e) => {
    e.stopPropagation();
    console.log("Parent");
}, false)

document.querySelectorAll('div')[3].addEventListener("click",(e) => {
    console.log("child");
}, false)




