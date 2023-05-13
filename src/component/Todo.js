import React, {useState} from "react";
import {RiDeleteBin5Fill} from "react-icons/ri";
import CompleteTodo from "./CompleteTodo";
import EditTodo from "./EditTodo";
import {FaEdit} from "react-icons/fa";
import DeleteTodo from "./DeleteTodo";

const Todo = ({todo}) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleIsEditing = () => {
        setIsEditing(true)
    }


    const editCallback = (editStatus) => {
        if (editStatus) setIsEditing(false)
    }

    const TodoTask = () => {
        if (!isEditing) {
            return (
                <>
                    <CompleteTodo todo={todo} />

                    <FaEdit
                        type="checkbox"
                        onClick={handleIsEditing}
                    />

                    <DeleteTodo todo={todo} />
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