import React, { Component, Fragment } from 'react'
import { Container, Row,Col,Navbar,Nav } from 'react-bootstrap'
import { BrowserRouter, HashRouter, Link, NavLink } from 'react-router-dom'

export default class NavigationTwo extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Helps & More</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link><NavLink exact to='/helps_more' activeStyle={{color:'pink'}} className="nav-title-two">FAQ</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to='/company_info' activeStyle={{color:'pink'}} className="nav-title-two">Company Info</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to='/team' activeStyle={{color:'pink'}} className="nav-title-two">Team</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to='/career' activeStyle={{color:'pink'}} className="nav-title-two">Career</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to='/privacy' activeStyle={{color:'pink'}} className="nav-title-two">Privacy Policy</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact to='/terms' activeStyle={{color:'pink'}} className="nav-title-two">Terms of Use</NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </Fragment>
        )
    }
}
