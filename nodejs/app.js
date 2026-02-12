import express, { urlencoded } from "express";
import { main } from "./database.js";
import { User } from "./model/user.js";
import morgan from "morgan";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { userAuth } from "./src/middlewares/userAuth.js";
import dotenv from "dotenv";
import redisClient from "./src/config/redis.js";
// import './src/testing script.js'
// import './src/password.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || "3000";

app.use(morgan("common"));
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded())

app.get("/user", userAuth, async (req, res) => {
  try {
    res.json({
      message: "Information",
      data: req.user,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "Hi from server"
  })
})

app.patch("/user", async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    console.log(update);
    const result = await User.findOneAndUpdate({ name: "Gohan" }, update);
    res.json({
      message: result,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    console.log("id: ", id, "result: ", result);
    res.json({
      message: result,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    console.log(req.ip, req.socket.remoteAddress);


    const user = await User.findOne({ emailId: emailId });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      res.json({
        message: "Incorrect Password",
      });
      return;
    }

    const token = user.getJwt();

    res.cookie("token", token);

    res.json({
      message: "You are logged in",
      data: user,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
    });
  }
});

app.post("/signUp", async (req, res) => {
  try {
    const { name, emailId, password, age } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword);

    const user = await User.create({
      name: name,
      age: age,
      emailId: emailId,
      password: hashPassword,
    });

    res.json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
    });
  }
});

app.post("/logout", userAuth, async (req, res) => {
  try {
      const { token } = req.cookies;
      const payload = jwt.decode(token);

      await redisClient.set(`token:${token}`, "Blocked");
      // await redisClient.expire(`token$:{token}`, 1800)
      await redisClient.expireAt(`token:${token}`, payload.exp)

    res.cookie("token", null, { expires: new Date(Date.now()) });
    res.json({
      message: "Logout successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
    });
  }
});

async function initializeConnections() {
  try {
    await Promise.all([redisClient.connect(), main()]);
    console.log("connected to db")

    app.listen(PORT, async () => {
      console.log("App is listening on port 3000");
    });
  } catch (error) {
    console.log(error.message);
  }
}

initializeConnections();