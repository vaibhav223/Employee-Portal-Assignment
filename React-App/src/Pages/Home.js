import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import AuthHandler from '../utils/AuthHandler'
import Config from '../utils/Config';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.fetchdata = this.fetchdata.bind(this);
        this.state = {
            empdata: [],
            isLoading: true,
            error: false,
            time: Date.now()
        };
    }

    componentWillMount() {
        this.fetchdata();
    }
    // componentDidMount() {
    //     this.fetchdata();
    //     setInterval(() => this.setState({ time: Date.now() }), 10000)
    // }
    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }
    fetchdata() {
        this.setState({ isLoading: true })
        var response = AuthHandler.GetEmployee(this.handleAjaxResponse)

        // if (response.status === 200) {
        //     const res_todos = response.data["Todolist"]
        //     console.log("after status:", res_todos)
        //     this.setState({ todos: res_todos, isLoading: false })

        // }
        // else {
        //     this.setState({ isError: true, isLoading: false })

        // }

    }
    handleAjaxResponse = (data) => {
        console.log(data);
        if (data.error) {
            console.log("Error from ajax");
        }
        else {
            console.log("Data fetched Successfully", data.empdata)
            // window.location = "http://localhost:3000/";
            this.setState({ empdata: data.empdata })
        }
    }

    renderTableHeader = () => {
        // var myheading={
        // }
        return (
            <>
                <th key="sr.no">Sr.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Date Of Birth</th>
                <th>Company</th>
                <th>Mobile</th>
                <th>City</th>
                <th>Update</th>
                <th>Delete</th>
            </>
        )
    }

    handleupdate = (emp) => {
        console.log("I am updating employee", emp);

    }
    handledelete = (emp) => {
        // console.log("I am updating employee", emp);
        var response = AuthHandler.DeleteEmployee(emp.id, this.handleAjaxResponseDelete)
    }

    handleAjaxResponseDelete = (data) => {
        console.log(data);
        if (data.error) {
            console.log("Error from ajax");
        }
        else {
            console.log("Data from Delete", data)
            this.fetchdata();
        }
    }


    renderTableRows = () => {
        let count = 0;
        return this.state.empdata.map(emp => {
            count = count + 1
            console.log("from table rows", emp)
            return (
                <>
                    <tr key={emp.id}>
                        <td >{count}</td>
                        <td key={emp.first_name}>{emp.first_name}</td>
                        <td key={emp.last_name}>{emp.last_name}</td>
                        <td key={emp.email}>{emp.email}</td>
                        <td key={emp.address}>{emp.address}</td>
                        <td key={emp.date_of_birth}>{emp.date_of_birth}</td>
                        <td key={emp.company}>{emp.company}</td>
                        <td key={emp.mobile}>{emp.mobile}</td>
                        <td key={emp.city}>{emp.city}</td>
                        <td><Button className="btn-sm" onClick={() => { this.handleupdate(emp) }}>Update</Button></td>
                        <td> <Button variant="danger" onClick={() => { this.handledelete(emp) }} className="btn-sm">Delete</Button></td>
                    </tr>

                </>

            )

        })
    }
    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <Button variant="secondary" style={{ float: 'right', margin: '20px' }} onClick={() => this.props.history.push('/createemp')}>Add a Employee</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
