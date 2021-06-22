import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import AuthHandler from '../utils/AuthHandler'
import Config from '../utils/Config';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

export default class Create extends Component {

    state = {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        address: "",
        date_of_birth: "",
        company: "",
        mobile: "",
        city: ""
    }

    saveInputs = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        AuthHandler.AddEmployee(this.state, this.handleAjaxResponse);
    }

    handleAjaxResponse = (data) => {
        console.log(data);
        if (data.error) {
            console.log("Error from ajax");
        }
        else {
            console.log("Data Inserted Successfully")
            // window.location = "http://localhost:3000/";
            window.location = Config.homeUrl;
        }
    }
    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Add Employee</h1>
                <Form style={{ margin: '50px' }} method="POST" onSubmit={this.formSubmit}>
                    <Form.Row style={{ marginBottom: '50px' }}>
                        <Col>
                            <Form.Control name="first_name" placeholder="Employee First Name" required onChange={this.saveInputs} />
                        </Col>
                        <Col>
                            <Form.Control name="last_name" placeholder="Employee Last Name" required onChange={this.saveInputs} />
                        </Col>
                        <Col>
                            <Form.Control name="email" type="email" placeholder="Employee Email" onChange={this.saveInputs} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ marginBottom: '50px' }}>
                        <Col>
                            <Form.Control name="password" placeholder="Password" type="password" required onChange={this.saveInputs} />
                        </Col>
                        <Col>
                            <Form.Control name="address" placeholder="Address" required onChange={this.saveInputs} />
                        </Col>
                        <Col>
                            <Form.Control type="date" name="date_of_birth" placeholder="Date of Birth" onChange={this.saveInputs} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control name="company" placeholder="Company" required onChange={this.saveInputs} />
                        </Col>
                        <Col>
                            <Form.Control name="mobile" type="number" placeholder="Mobile" required onChange={this.saveInputs} />
                        </Col>
                        <Col>
                            <Form.Control name="city" placeholder="City" onChange={this.saveInputs} />
                        </Col>
                    </Form.Row>
                    <Button style={{ margin: '30px', float: 'right' }} type="submit">Add Employee</Button>
                </Form>
            </Container>
        )
    }
}
