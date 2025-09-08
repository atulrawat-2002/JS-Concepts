let count = 0;

const obj = {
    name: "Atul",
    greet: function(profession) {
        document.getElementById("data").innerText = `${profession} ${this.name} the event is called ${count++}`
    }
}

function throttle (fun, limit) {
    let flag = true;    
    return function(...args) {        
        if(flag) fun.call(this, ...args);
        flag = false;
        setTimeout(() => {
            flag = true
        }, limit);
    }
}

let newGreet = throttle(obj.greet, 700);

document.onmousemove = newGreet.bind(obj, "Engineer")