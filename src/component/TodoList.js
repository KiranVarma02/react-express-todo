import React, {useEffect} from "react";
import Todo from "./Todo";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../actions";
import NewTodo from "./NewTodo";

const TodoList = () => {
    const todos = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div className="row d-flex justify-content-center container">
            <NewTodo/>

            <ul className="todo_item__component list-group">
                {todos && todos.length
                    ? todos.map((todo, index) => {
                        return (
                            <Todo key={`todo-${index}`} todo={todo}/>
                        );
                    })
                    : "No todos, yay!"}
            </ul>
        </div>

    );
}

export default TodoList