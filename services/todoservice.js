const todoModel = require("../models/todomodel");

class TodoService {
    static async createTodo(userId, title, desc) {
        const createTodo = new todoModel({ userId, title, desc });
        return await createTodo.save();
    }
    static async getTodoData(userId) {
        const getTodoData = await todoModel.find({ userId })
        return getTodoData;
    }
}

module.exports = TodoService;