let count = 0;

const obj = {
    name: "Atul",
    greet: function(profession) {
        document.getElementById("data").innerText = `${profession}  ${this.name} The event happened ${count++}`
    }
}

function show(name) {
    document.getElementById("data").innerText = `${this.name} The event happened ${count++}`;
}

function throttle (fun, limit) {
    let flag = true;
    return function(...args) {
        
        if(flag) fun.call(this, ...args);
        flag = false;
        setTimeout(() => {
            flag = true;
        }, limit);
    }
}
let newShow = throttle(obj.greet, 500);


window.onmousemove = newShow.bind(obj, "Engineer")
