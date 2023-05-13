import React, {useEffect, useState} from "react";
import Todo from "./Todo";
import {useDispatch, useSelector} from "react-redux";
import {createTodo, fetchTodos} from "../actions";
import {motion} from "framer-motion";
import {GoPlus} from "react-icons/go";

const TodoList = () => {
    const todos = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const handleClick = (e) => {
        if (text) {
            dispatch(createTodo(text))
            setText('')
        }
    }

    return (
        <div>
            <div className="addTodos">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Enter todo task ..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                ></input>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    type="submit"
                    className="add-btn"
                    onClick={handleClick}
                ><GoPlus/>
                </motion.button>
                <br/>
            </div>

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