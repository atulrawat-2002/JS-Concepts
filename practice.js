let name1 = {
    firstName: "Atul",
    lastName: "Rawat",
    
}

const printFullName = function (homeTown, state) {
        console.log(this.firstName, this.lastName, "from",  homeTown, state);
    }
// printFullName.call(name1, "Faridabad", "Haryana")

const name2 = {
    firstName: "Slaman",
    lastName: "Khan"
}

// printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

const newPrintfunction = printFullName.bind(name2, "Maharashtra");
// newPrintfunction("Mumbai");
printFullName("Faridabad", "haryana")

