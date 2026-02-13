import { redisClient } from "./redis.js";

try {
  let result = await redisClient.connect();

  // result = await redisClient.rPush("tasks", "taks1")
  // result = await redisClient.rPush("tasks", "taks2")
  // result = await redisClient.rPush("tasks", "taks3")

  const tasks = await redisClient.blPop("tasks", 3)
  console.log(tasks)

} catch (error) {
  console.log(error.message);
}
