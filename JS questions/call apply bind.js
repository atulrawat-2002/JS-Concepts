const name1 = {
    firstname: "Ryan",
    lastName: "Goslin",
    
}

let printFullName = function(age=30, profession="Engineer") {
        console.log(this.firstname, this.lastName, "is an", profession, "and", age, "years old")
    }

const name2 = {
    firstname: "Leonardo",
    lastName: "Decaprio",
}

// printFullName.apply(name1, [43, "Actor"])

// printFullName.call(name2, 35, "Actor")

let newMethod = printFullName.bind(name1);

newMethod(30, "Actor")

