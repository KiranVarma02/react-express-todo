import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTodo} from "../actions";
import {FaEdit} from "react-icons/fa";

const EditTodo = ({todo}) => {
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false);

    const handleIsEditing = () => {
        setIsEditing(!isEditing)
        dispatch(updateTodo({...todo, editStatus: isEditing}))
    }

    return (
        <FaEdit
            type="checkbox"
            onClick={handleIsEditing}
        />
    )
}

export default EditTodo;