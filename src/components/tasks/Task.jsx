import PropTypes from "prop-types";
import { Button, Card, Row, Col } from "react-bootstrap";

const Task = ({ id, name, complete, deleteTask, completeTask }) => {

    return (
        <>
            <Card style={{ width: "100%", margin: "5px", background: complete ? "lightgrey" : "#282A36", color: "white" }}>
                <Row>
                    <Col lg="8" >
                        <Card.Body>
                            <Card.Title
                                style={{
                                    color: complete ? "grey" : "white",
                                    textDecoration: complete ? "line-through" : "none"}}>
                                {name}
                            </Card.Title>
                        </Card.Body>
                    </Col>
                    <Col lg="2" style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            variant={complete ? "secondary" : "success"}
                            style={{ margin: "2px" }}
                            onClick={() => completeTask(id)}>
                            {complete ? "Deshacer" : "Hecho"}
                        </Button>
                    </Col>
                    <Col lg="2" style={{ display: "flex", alignItems: "center" }}>
                        <Button
                            variant="danger"
                            style={{ margin: "2px" }}
                            onClick={() => deleteTask(id)}>
                            Borrar
                        </Button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

Task.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    complete: PropTypes.bool,
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
}

export default Task;