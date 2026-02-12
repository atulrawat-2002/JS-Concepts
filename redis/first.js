import redis, { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
  username: "default",
  password: process.env.REDIS_URI,
  socket: {
    host: "redis-18235.c264.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 18235,
  },
});

async function connect() {
  await redisClient.connect();
}

connect();

// let response = await redisClient.set("name", 9)
// console.log(await redisClient.get("name"))

// await redisClient.expire("name", 5)
// await redisClient.incr("name");
// await redisClient.incr("name");
// await redisClient.incr("name");
// await redisClient.incr("name");



// console.log(await redisClient.get("name"))
await redisClient.hSet("user:1", {"name":"atul", "age": 23});

console.log(await redisClient.hGetAll("user:1"))
