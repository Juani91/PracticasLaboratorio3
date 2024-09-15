import { Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const NewTask = ({ addNewTask }) => {

    const [enteredNewTask, setEnteredNewTask] = useState("");

    const changeTaskHandler = (event) => {
        setEnteredNewTask(event.target.value);
    }

    const SubmitForm = (event) => {
        event.preventDefault();
        if (enteredNewTask.trim()) {
            const newTask = {
                name: enteredNewTask,
            }
            addNewTask(newTask);
        } else {

            addNewTask(null);
        }
        setEnteredNewTask("");
    }

    return (
        <>
            <hr />
            <h4>To Do List</h4>
            <hr />
            <Form onSubmit={SubmitForm}>
                <Row style={{ width: "100%", justifyContent: "center" }}>
                    <Col lg="6">
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Ingresar Tarea"
                                onChange={changeTaskHandler}
                                value={enteredNewTask}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg="2">
                        <Button variant="primary" type="submit">
                            Agregar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

NewTask.propTypes = {
    addNewTask: PropTypes.func,
}

export default NewTask;