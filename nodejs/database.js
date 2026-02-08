import mongoose from "mongoose"

export const main = async () => {

 await mongoose.connect(process.env.MONGODB_URI);


}