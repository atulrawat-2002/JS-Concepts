import { createClient } from "redis";

const redisClient = createClient({
    username: 'default',
    password: 'mmkRQBpbOPf5jslGAH9laVQrPLoorCDI',
    socket: {
        host: 'redis-18235.c264.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 18235
    }
})


export default redisClient;