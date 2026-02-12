const target = {
    name: 'Atul',
    age: 23
}

const handler = {
    set(target, prop, value) {
        if(prop === "age" && (typeof value === "string" || value <= 0) ) {
            throw new Error(`Invalid operation with ${prop} and ${value}`)
        }
        target[prop] = value;
        return true;
    },
    get(target, prop) {
        console.log(`The ${prop} is accessed`);
        return target[prop];
    }
}

const myProxy = new Proxy(target, handler);

myProxy.age = -1

console.log(myProxy.age)