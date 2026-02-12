import { User } from "../../model/user.js";
import jwt from "jsonwebtoken";
import redisClient from "../config/redis.js";

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

        const isBlocked = await redisClient.exists(`token:${cookie.token}`);
        if (isBlocked)
            throw new Error("Token is blocked ")

        req.user = user;
        next();

    } catch (error) {
        console.log(error.message)
        res.json({
            message: error.message
        })   
    }
}