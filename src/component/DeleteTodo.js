import {useDispatch} from "react-redux";
import {deleteTodo} from "../actions";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

const DeleteTodo = ({ todo, handleDeleteCallback }) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(true);

    const handleDelete = () => {
        dispatch(deleteTodo({...todo, deleteStatus: true}))
        setShow(!show)
        handleDeleteCallback(false)
    };

    return (
        <>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Todo Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>{todo.task}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(!show)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteTodo