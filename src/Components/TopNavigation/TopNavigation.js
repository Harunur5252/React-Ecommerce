import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import redStore from '../../images/logo.png'
import cartImg from '../../images/cart.png'
import { BrowserRouter, HashRouter, Link, NavLink } from 'react-router-dom'


export default class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            title:props.title
        }
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
                        </Nav>
                        <HashRouter><NavLink exact to="/cart"><img src={cartImg} className="cart-img"/></NavLink></HashRouter>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}
