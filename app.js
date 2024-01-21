const body_Parser = require("body-parser");
const express = require("express");
const userRouter = require("./routers/user.router")
const todoRouter = require("./routers/todo.routers")

const app = express();

app.use(body_Parser.json());
app.use("/", userRouter);
app.use("/", todoRouter);

module.exports = app;