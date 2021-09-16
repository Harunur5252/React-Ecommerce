import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Navbar,Nav,Modal,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import redStore from '../../images/logo.png'
import cartImg from '../../images/cart.png'
import { HashRouter, Link, NavLink } from 'react-router-dom'


export default class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            title:props.title,
            show:false
        }
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
                 <title>{this.state.title}</title>
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
                            <Nav.Link> <NavLink className="nav-title" exact to='/'>Home</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" exact to='/products'>Products</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" exact to='/about'>About</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" exact to='/contact'>Contact</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" exact to='/account'>Account</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" exact to='/helps_more'>Helps & More</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" exact to='/checkout'>CheckOut</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" exact to='/order'>Order</NavLink></Nav.Link>
                            <Nav.Link> <NavLink className="nav-title" onClick={this.modalOpen} to='#'><FontAwesomeIcon icon={faSearch}/> Search</NavLink></Nav.Link>
                        </Nav>
                        <HashRouter><NavLink exact to="/cart"><img src={cartImg} className="cart-img"/></NavLink></HashRouter>
                        </Navbar.Collapse>

                            <Modal
                                show={this.state.show}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                onHide={this.modalClose}
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
                                    <Link to='#' className="btn-4 text m-2" onClick={this.modalClose}>Close</Link>
                                </Modal.Footer>
                            </Modal>

                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}
