
let todoList = {
  todos: [
    {
      "id": "1",
      "task": "task1",
      "taskStatus": false,
      "editStatus": false,
      "deleteStatus": false,
    }
  ]
};

const TodosRepo = () => Promise.resolve(todoList)

module.exports = TodosRepo;