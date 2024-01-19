const mongoose = require("mongoose");
const DbURL = "mongodb://127.0.0.1:27017/ToDoApp";


const connection = mongoose.createConnection(DbURL).on("open", () => {
    console.log("MongoDb Connected");
}).on("error", () => {
    console.log("MongoDb Connection Error");
});


module.exports = connection;