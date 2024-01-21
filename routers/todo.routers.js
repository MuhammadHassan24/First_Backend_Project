const router = require("express").Router();
const TodoController = require("../controller/todo.controller");

router.post("/storetodo", TodoController.createTodo);
router.post("/getusertodotask", TodoController.getUserTodo);

module.exports = router;