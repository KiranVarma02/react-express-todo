import React, {useState} from "react";
import {motion} from "framer-motion";
import {IoSave} from "react-icons/io5";
import {updateTodo} from "../actions";
import {useDispatch} from "react-redux";

const TaskInTodo = ({todo}) => {
    const dispatch = useDispatch()

    const [updatedText, setUpdatedText] = useState(todo.task);

    const handleSetUpdatedText = (e) => {
        setUpdatedText(e.target.value)
    }

    const handleIsEditingChange = () => {
        dispatch(updateTodo({...todo, task: updatedText, editStatus: false}))
    }

    const Task = () => {
        if (todo.taskStatus) {
            return <label style={{textDecoration: "line-through"}}>{todo.task}</label>
        } else if (todo.editStatus) {
            return (
                <>
                    <input
                        className="todo-input"
                        value={updatedText}
                        onChange={handleSetUpdatedText}
                    />

                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        type="submit"
                        className="add-btn"
                        onClick={handleIsEditingChange}
                    ><IoSave/>
                    </motion.button>
                    <br/>
                </>
            )
        } else {
            return <label>{todo.task}</label>
        }
    }

    return <Task />
}

export default TaskInTodo