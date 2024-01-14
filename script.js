const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const DbURL = "mongodb+srv://test:test786@cluster0.pe8gz4z.mongodb.net/?retryWrites=true&w=majority";
const User = require("./models/user.js")

mongoose
    .connect(DbURL)
    .then(() => console.log("Database connected..."))
    .catch((err) => console.log(err));

app.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        console.log("error"), res.send("Something wnet wrong");
    }
});
app.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const users = await User.create(req.body);
        res.json(users);

    } catch (error) {
        console.log(error), res.send("Something wnet wrong");
    }
})
app.delete("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;

        // Assuming you have a User model with a method like findByIdAndDelete
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
});

app.put("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;

        // Assuming you have a User model with a method like findByIdAndUpdate
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
});

app.listen(4000, () => {
    console.log(`Server is running on ${4000}`);
});
