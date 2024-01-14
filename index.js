// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// app.use(express.json());
// const DbURL = "mongodb+srv://test:test786@cluster0.pe8gz4z.mongodb.net/?retryWrites=true&w=majority";
// const User = require("./models/user.js")

// mongoose
//     .connect(DbURL)
//     .then(() => console.log("Database connected..."))
//     .catch((err) => console.log(err));

// app.get("/", async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);

//     } catch (error) {
//         console.log("error"), res.send("Something wnet wrong");
//     }
// });
// app.post("/", async (req, res) => {
//     try {
//         const users = await User.create(res.body);
//         res.json(users);

//     } catch (error) {
//         console.log("error"), res.send("Something wnet wrong");
//     }
// })

// app.listen(4000, () => {
//     console.log(`Server is running on ${4000}`);
// });
