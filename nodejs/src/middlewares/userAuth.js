import { User } from "../../model/user.js";
import jwt from "jsonwebtoken";

export async function userAuth(req, res, next) {
    try {
        
        const cookie = req.cookies;

        if(!cookie) {
            throw new Error("No cookie present")
        }

        // const {emailId, id} = jwt.verify(cookie.token, "a-string-secret-at-least-256-bits-long");
        const { emailId, id } = User.verifyJwt(cookie.token);

        const user = await User.find({_id: id});

        if(!user) {
            throw new Error("User not found");
        } 

        req.user = user;
        console.log("user authentication")
        next();

    } catch (error) {
        console.log(error.message)
        res.json({
            message: error.message
        })   
    }
}