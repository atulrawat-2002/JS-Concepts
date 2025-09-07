function printFulName () {
    console.log(this.firstName, this.lastName)
}

const name = {
    firstName: "Atul",
    lastName: "Rawat"
}

let x = 0;

function fun( ){
    console.log("The event happened")
}

function throttledfun(fun) {
    let timer = setTimeout(function() {
        fun;
    }, 500)
}

window.onresize = fun
