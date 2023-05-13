import React, {useState} from "react";
import {motion} from "framer-motion";
import {IoSave} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {updateTodo} from "../actions";

const EditTodo = ({todo, handleEditCallback}) => {
    const dispatch = useDispatch()

    const [updatedText, setUpdatedText] = useState(todo.task);

    const handleIsEditingChange = () => {
        dispatch(updateTodo({...todo, task: updatedText}))
        handleEditCallback(true)
    }

    const handleSetUpdatedText = (e) => {
        setUpdatedText(e.target.value)
    }

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
}

export default EditTodo;