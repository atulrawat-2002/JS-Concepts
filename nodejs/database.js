import mongoose from "mongoose";




async function main () {

    try {
        await mongoose.connect('mongodb+srv://Initiation:oIbJe1jkQCYrsGIa@namastenodejs.ecrw1k1.mongodb.net/Bookstore');
    } catch (error) {
        console.log('Error while connecting to the database');
    }

}


export default main;