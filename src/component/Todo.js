import React from "react";
import CompleteTodo from "./CompleteTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import TaskInTodo from "./TaskInTodo";

const Todo = ({todo}) => {
    return (
        <div className="todo-list">
            <li>
                <>
                    <CompleteTodo todo={todo} />
                    <TaskInTodo todo={todo} />
                    <EditTodo todo={todo} />
                    <DeleteTodo todo={todo} />
                </>
            </li>
        </div>
    );
}

export default Todo;