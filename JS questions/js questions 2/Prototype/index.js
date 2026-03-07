let o = {
    name: 'atul',
    age: 23,
    walk() {
        console.log("walking")
    }
}

let o2 = {
    
}

o.__proto__ = o2;


Object.prototype.talk = function() {
    console.log('Talking')
}
Object.prototype.dance = function() {
    console.log('dancing')
}

o.walk();
o.dance()

console.log(o.__proto__)