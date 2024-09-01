import { Form, InputGroup, Button, Col, Row } from 'react-bootstrap';
import { useState } from "react";
import PropTypes from 'prop-types';

const Login = ({validation}) => {

    const [enteredUserName, setEnteredUserName] = useState("");

    const changeP = (event) => {
        setEnteredUserName(event.target.value);
    };

    const submitForm = (event) => {

        event.preventDefault();
        const userName = enteredUserName;

        validation(userName);

        setEnteredUserName("");
    }

    return (
        <div style={{backgroundColor: 'black'}}>
            <Form onSubmit={submitForm}>
                <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Nombre de usuario:</InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={changeP}
                                value={enteredUserName}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <p style={{color: 'white'}}>Usuario ingresado: {enteredUserName}</p>
                    </Col>
                    <Col md={1}>
                        <Button variant="primary" type="submit">Registrarse</Button>{' '}
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

Login.propTypes = {
    validation: PropTypes.func.isRequired,
};

export default Login;