const todoService = require("../../src/service/todo");
const {updateTodo} = require("../../src/service/todo");

describe('TODO Service', () => {
    it('should be able to get todos from repository', async () => {
        const expected = {
            todos: [
                {
                    "id": "1",
                    "task": "task1",
                    "status": true
                }
            ]
        };
        const todoRepository = {
            getTodos: async () => Promise.resolve(expected)
        };

        const actual = await todoService.getTodos();
        expect(actual).toEqual(expected);
    });

    it('should create new todo to repository', async () => {
        const newTodo = {"task": "create new task"}

        const actual = await todoService.createTodo(newTodo);
        expect(actual).toHaveProperty('id')
        expect(actual.task).toEqual('create new task')
    })

    it('should update existing todo', async () => {
        const newTodo = {"task": "create new task"}
        const actual = await todoService.createTodo(newTodo);

        expect(actual.task).not.toEqual('updated task')
        const updatedTodo = {...actual, ...{task: 'updated task'}}

        const updatedTask = await updateTodo(updatedTodo)
        expect(updatedTask.task).toEqual('updated task')
    })
})