const express = require("express");

const app = express();

const mongoose = require("mongoose");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const factsRouter = require("./api/routes/facts");
const riddlesRouter = require("./api/routes/riddles");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./client/build/"));

mongoose.connect(
  `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0.ojcfk.azure.mongodb.net/facts?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "options") {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname + "/client/build/",
  });
});

app.use("/facts", factsRouter);
app.use("/riddles", riddlesRouter);

module.exports = app;
