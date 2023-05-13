import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im";
import React, {useState} from "react";
import {updateTodo} from "../actions";
import {useDispatch} from "react-redux";

const CompleteTodo = ({todo}) => {
    const dispatch = useDispatch()

    const [isCompleted, setIsCompleted] = useState(todo.status === false);

    const handleIsCheckedChange = () => {
        setIsCompleted(!isCompleted)
        dispatch(updateTodo({...todo, status: true}))
    }

    return (
        <>
            {
                isCompleted ?
                    <ImCheckboxChecked
                        type="checkbox"
                        onClick={handleIsCheckedChange}
                    /> :
                    <ImCheckboxUnchecked
                        type="checkbox"
                        onClick={handleIsCheckedChange}
                    />
            }
        </>
    )
}

export default CompleteTodo;