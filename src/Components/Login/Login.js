import React, { Fragment,useState } from 'react'
import { Modal,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Login () {
   const [show,setShow] = useState({modal:false})

   const modalOpen=()=>{
        setShow({
            modal:true
        })
    }
    const modalClose=()=>{
        setShow({
            modal:false
        })
    }

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
                    <a className="text m-2" onClick={modalOpen} style={{cursor:'pointer'}}>Forgot Password?</a>
                </Form>

                <Modal show={show.modal} onHide={modalClose}>
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
                    <a className="button" onClick={modalClose}>
                        Close
                    </a>
                    <a to='#' className="button m-2" onClick="">
                        Reset
                    </a>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }

