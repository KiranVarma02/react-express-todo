const TodosRepo = require("../repository/todo");
const crypto = require('crypto');

const getTodos = async () => {
    return await TodosRepo()
};

const getTodo = async (id) => {
    const allTodos = (await getTodos()).todos
    return allTodos.filter(todo => todo.id === id)
}

const createTodo = async (newTodo) => {
    const id = crypto.randomUUID();
    const repo = await TodosRepo();
    const addNewTodo = Object.assign({id}, newTodo)

    repo.todos.push(addNewTodo);
    return addNewTodo
};

const updateTodo = async (changeTodo) => {
    const repo = await TodosRepo();
    const index = repo.todos.findIndex(x => x.id === changeTodo.id)

    if (index !== -1) {
        repo.todos[index].task = changeTodo.task
        repo.todos[index].taskStatus = changeTodo.taskStatus
        return repo.todos[index]
    }
    return new Error('Index out of bounds')
};

const deleteTodo = async (id) => {
    const repo = await TodosRepo();

    const index = repo.todos.findIndex(x => x.id === id)
    return repo.todos.splice(index, 1).pop();
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};