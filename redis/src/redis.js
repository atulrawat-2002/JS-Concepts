import dotenv from "dotenv";

dotenv.config();
console.log(process.env.REDIS_URI)

import { createClient } from "redis";


export const redisClient = createClient({
  username: "default",
  password: process.env.REDIS_URI,
  socket: {
    host: "redis-18235.c264.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 18235,
  },
});


