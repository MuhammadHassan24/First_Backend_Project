const router = require("express").Router();
const TodoController = require("../controller/todo.controller");

router.post("/storetodo", TodoController.createTodo);
router.get("/getusertodotask", TodoController.getUserTodo);

module.exports = router;