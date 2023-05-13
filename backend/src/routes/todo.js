const Router = require('express');
const TodoController = require("../controller/todo");
const Paths = require("../paths");

const todoRouter = Router();

todoRouter.get(Paths.Todo, TodoController.getTodoController);
todoRouter.post(Paths.Todo, TodoController.createTodoController);
todoRouter.put(Paths.Todo, TodoController.updateTodoController);
todoRouter.delete(Paths.Todo, TodoController.deleteTodoController);

module.exports = todoRouter;

