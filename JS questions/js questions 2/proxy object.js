const target = {
    name: 'Atul',
    age: 23,
}

const handler = {
    get(target, prop, receiver) {
        return 'world';
    }
};

const newProxy = new Proxy(target, handler)


// newProxy.age = 89; 

// target.age = 99
console.log(newProxy.name);
console.log(target.name);