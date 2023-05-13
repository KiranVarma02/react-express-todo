import React, {useState} from "react";
import {RiDeleteBin5Fill} from "react-icons/ri";
import CompleteTodo from "./CompleteTodo";
import EditTodo from "./EditTodo";
import {FaEdit} from "react-icons/fa";
import DeleteTodo from "./DeleteTodo";

const Todo = ({todo}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleIsEditing = () => {
        setIsEditing(true)
    }

    const handleIsDelete = () => {
        setIsDeleting(!isDeleting)
    }

    const editCallback = (editStatus) => {
        if (editStatus) setIsEditing(false)
    }

    const deleteCallback = (deleteCallback) => {
        setIsDeleting(deleteCallback)
    }

    const HandleDeleteTask = () => {
        if (isDeleting)
        return <DeleteTodo todo={todo} handleDeleteCallback={deleteCallback}/>
    }

    const TodoTask = () => {
        if (!isEditing) {
            return (
                <>
                    <label> {todo.task} </label>
                    <CompleteTodo todo={todo}/>

                    <FaEdit
                        type="checkbox"
                        onClick={handleIsEditing}
                    />

                    <RiDeleteBin5Fill
                        type="checkbox"
                        onClick={handleIsDelete}
                    />

                    <HandleDeleteTask />
                </>
            )
        } else {
            return <EditTodo todo={todo} handleEditCallback={editCallback}/>
        }
    }

    return (
        <div className="todo-list">
            <li>
                <TodoTask />
            </li>
        </div>
    );
}

export default Todo;