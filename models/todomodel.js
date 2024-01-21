const mongoose = require("mongoose");
const db = require("../config/db");
const UserModel = require("../models/user");

const { Schema } = mongoose;

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: false,
    },
});
const todoModel = db.model("todo", todoSchema);
module.exports = todoModel;