function add(a, b) {
    return a + b
}


function greet(name, greeting) {
    return `${greeting} ${name}`;
}



module.exports = {
    adding: add,
    greeter: greet,
}


module.exports.add = add;
module.exports.greet = greet;





// function subtract(a, b) {
//     return a - b;
// }



// module.exports = subtract;