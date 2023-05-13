import {motion} from "framer-motion";
import {GoPlus} from "react-icons/go";
import React, {useState} from "react";
import {createTodo} from "../actions";
import {useDispatch} from "react-redux";

const NewTodo = () => {
    const dispatch = useDispatch()

    const [text, setText] = useState('');

    const handleClick = (e) => {
        if (text) {
            dispatch(createTodo(text))
            setText('')
        }
    }
    return (
        <>
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
        </>
    )
}

export default NewTodo;