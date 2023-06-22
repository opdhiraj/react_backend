const express = require("express");
const app = express();

require("./db/config");
const user = require("./db/user");

app.use(express.json);

// app.get("/", (req, resp) => {
//   resp.send("app is working");
// });

app.post("/register", (req, resp) => {
  resp.send(req.body);
});

app.listen(5000);
