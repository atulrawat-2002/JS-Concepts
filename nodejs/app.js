import express from "express";
import main from "./database.js";
import User from "./models/user.js";

const app = express();

await main()
  .then(() => {
    app.listen('3000', async () => {
      console.log("App is listening to the port number 3000");
    });

    app.get("/server/users", async (req, res) => {
      console.log("Incoming request");
      const users = await User.find({});
      console.log(users);
      res.send(users)
    });
  })
  .catch((error) => {
    console.log("Something went wrong", error.message);
  });
