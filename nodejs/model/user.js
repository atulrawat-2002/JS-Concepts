import { Schema, model } from "mongoose";   
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
const userSchema = Schema({
    name: String,
    age: Number,
    emailId: {
      type: String,
      unique: true
    },
    password: {
      type: String,
    }
  })

userSchema.methods.getJwt = function () {
  const token = jwt.sign({emailId: this.emailId, id: this._id}, process.env.JWT_KEY, {expiresIn: '1d'});
  return token;
};

userSchema.statics.verifyJwt = function (token) {
  const data = jwt.verify(token, process.env.JWT_KEY);
  return data;
}

userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash("Atul", 10)
    console.log("saving the user", hash)
 
})

export const User = model('users', userSchema);