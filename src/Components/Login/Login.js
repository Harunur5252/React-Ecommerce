import React, { Component, Fragment } from 'react'
import { Modal,Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class Login extends Component {
    state={
        show:false
    }
    modalOpen=()=>{
        this.setState({
            show:true
        })
    }
    modalClose=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <Fragment>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="enter user_name" />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="enter password" />
                    </Form.Group>    
                    <Link to='#' className="button">
                        Login
                    </Link>
                    <p onClick={this.modalOpen} style={{cursor:'pointer'}}>Forgot Password?</p>
                </Form>

                <Modal show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Forget Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="enter email" />
                        </Form.Group> 
                    </Modal.Body>
                    <Modal.Footer>
                    <Link className="button" onClick={this.modalClose}>
                        Close
                    </Link>
                    <Link to='#' className="button m-2" onClick="">
                        Reset
                    </Link>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}
