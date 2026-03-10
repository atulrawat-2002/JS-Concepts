// function *generateIds() {
//     let id = 0;

//     while(true) {
//         yield id++;
//     }
// }



function *iterator(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const gen = iterator([1,2,3,4])
    