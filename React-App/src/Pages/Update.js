import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

export default class Update extends Component {
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
