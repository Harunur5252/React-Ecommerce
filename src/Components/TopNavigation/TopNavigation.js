import React, { Component } from 'react'
import  { useState } from 'react'
import { Fragment } from 'react'
import { Container,Navbar,Modal,Form,Nav } from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import redStore from '../../images/logo.png'
import cartImg from '../../images/cart.png'
import { HashRouter, Link, NavLink } from 'react-router-dom'
import '../../Assets/style.css'
import '../../Assets/responsive.css'

export default function TopNavigation(props)  {
      const {title} = props
      const [show, setShow] = useState({modal:false})

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
                 <title>{title}</title>
               <Navbar bg="success" variant="dark" expand="lg" sticky="top">
                    <Container fluid>
                       
                        <Navbar.Brand>
                        <img
                        alt=""
                        src={redStore}
                        width="100"
                        height="30"
                        className="d-inline-block align-top m-1"
                        />{' '}
                           <NavLink exact to='/' activeStyle={{color:'#fff'}} className="brand-title"> E-commerce</NavLink>
                        </Navbar.Brand>
                      
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={NavLink} className="nav-title" exact to='/'>Home</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='/products'> Products</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='/About'> About</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='/contact'> contact</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='/account'> Account</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='/helps_more'>Helps & More</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='/checkout'> CheckOut</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='/order'> Order</Nav.Link>
                            <Nav.Link as={NavLink} className="nav-title" exact to='#' onClick={modalOpen}><FontAwesomeIcon icon={faSearch}/> Search</Nav.Link>
                        </Nav>
                        <HashRouter><NavLink exact to="/cart"><img src={cartImg} className="cart-img"/></NavLink></HashRouter>
                        </Navbar.Collapse>

                            <Modal
                                show={show.modal}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                onHide={modalClose}
                                >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Search Any Product
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter p_name" />
                                    </Form.Group>
                                   
                                    <Link to='#' className="btn-3 text">
                                       Search
                                    </Link>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Link to='#' className="btn-4 text m-2" onClick={modalClose}>Close</Link>
                                </Modal.Footer>
                            </Modal>

                    </Container>
                </Navbar>
            </Fragment>
        )
    }

