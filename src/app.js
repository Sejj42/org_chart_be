const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRouter = require("./routes/auth");
const infoRouter = require("./routes/info");

const app = express();
app.use(bodyParser.json());
app.use(cors());

module.exports = app;

app.get("/", (req, res) => {
  res.send("hi!");
});

app.use("/auth", authRouter);
app.use("/info", infoRouter);

app.listen(5000, () => {
  console.log(`Listening on http://localhost:5000`);
});

module.exports = app;
