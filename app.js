const body_Parser = require("body-parser");
const express = require("express");
const userRouter = require("./routers/user.router")

const app = express();

app.use(body_Parser.json());
app.use("/", userRouter);

module.exports = app;