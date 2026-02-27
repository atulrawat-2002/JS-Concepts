function greet(name, greeting) {
    return `HI, ${name} ${greeting}`;
}

function goodby() {
    console.log("Good bye")
}
function hey(name) {
    console.log(`hey ${name}`)
}

module.exports = {greet, goodby, hey};