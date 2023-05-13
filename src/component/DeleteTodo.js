import {useDispatch} from "react-redux";
import {deleteTodo} from "../actions";
import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {RiDeleteBin5Fill} from "react-icons/ri";

const DeleteTodo = ({ todo }) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleDelete = () => {
        setShow(!show)
    };

    const handleDeleteSave = () => {
        dispatch(deleteTodo({...todo, deleteStatus: true}))
    }

    return (
        <>
            <RiDeleteBin5Fill
                type="checkbox"
                onClick={handleDelete}
            />

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Todo Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>{todo.task}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(!show)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteSave}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteTodo