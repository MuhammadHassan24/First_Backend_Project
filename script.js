const app = require("./app");
const db = require("./config/db");
const userModel = require("./models/user");
const todoModel = require("./models/todomodel");

app.get("/", (req, res) => {
    res.send("hdsgsjdk");
});


app.listen(3000, () => {
    console.log(`Server is running on ${3000}`);
});
module.exports = app;
