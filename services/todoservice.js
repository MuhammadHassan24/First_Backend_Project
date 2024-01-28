const todoModel = require("../models/todomodel");

class TodoService {
    static async createTodo(userId, title, desc) {
        const createTodo = new todoModel({ userId, title, desc });
        return await createTodo.save();
    }
    static async getTodoData(userId) {
        const getTodo = await todoModel.find({ userId })
        return getTodo;
    }
}

module.exports = TodoService;