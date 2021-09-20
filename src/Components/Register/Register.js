import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Register () {

        return (
            <Fragment>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="enter user_name" />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="enter mobile_no" />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="enter password" />
                    </Form.Group>    
                    <Link to='#' className="button">
                        Register
                    </Link>
                </Form>
            </Fragment>
        )
    }

