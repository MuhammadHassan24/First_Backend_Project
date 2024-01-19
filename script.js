const app = require("./app");
const db = require("./config/db");
const userModel = require("./models/user");

app.get("/", (req, res) => {
    res.send("hdsgsjdk");
});


app.listen(4000, () => {
    console.log(`Server is running on ${4000}`);
});
module.exports = app;
