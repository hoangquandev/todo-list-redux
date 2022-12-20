import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from '../redux/action/action'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);//input: "1+1"=> reducer
        this.setState({ input: "" });
    };

    render() {
        return (
            <Form className='mx-2 my-2 text-center'>
                <Row>
                    <Col md={10}>
                        <Form.Control
                            onChange={e => this.updateInput(e.target.value)} //input:"1+2" reducer {[item,item]}
                            value={this.state.input}
                        />
                    </Col>
                    <Col md={2}>
                        <Button className="" onClick={this.handleAddTodo}>
                            Add Todo
                        </Button>
                    </Col>
                </Row>

            </Form>
        );
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo);
// export default AddTodo;
