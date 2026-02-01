import mongoose, { Schema } from "mongoose";

function main() {
    mongoose.connect('');

    const newSchema = Schema({
        name: String,
        age: Number,    
    })

    const User = mongoose.model('user', newSchema);

    const user = new User({
        name: 'Atul',
        age: 23,
    })
}