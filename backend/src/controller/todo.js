const TodoService = require("../service/todo");

const getTodoController = async (req, res) => {
    res.json(await TodoService.getTodos())
}

const createTodoController = async (req, res) => {

    const {body} = req;
    res.json(await TodoService.createTodo(body))
}

const updateTodoController = async (req, res) => {

    const {body} = req;
    res.json(await TodoService.updateTodo(body))
}

const deleteTodoController = async (req, res) => {

    const {id} = req.query;
    const result = await TodoService.deleteTodo(id)
    res.json(result)
}


module.exports = {
    getTodoController,
    createTodoController,
    updateTodoController,
    deleteTodoController
}