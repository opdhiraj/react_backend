const express = require("express");
const app = express();

require("./db/config");

const User = require("./db/User");
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("app is working.....");
});

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.listen(5000);
