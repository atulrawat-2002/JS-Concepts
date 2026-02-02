import { model, Schema } from "mongoose";

const userSchema = Schema({
    name: String,
    age: Number,
    gender: String
})

const User = model('user', userSchema);


export default User;