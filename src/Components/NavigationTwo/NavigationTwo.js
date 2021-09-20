import React, { Fragment } from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavigationTwo () {
 
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Helps & More</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={NavLink} exact to='/helps_more' activeStyle={{color:'pink'}} className="nav-title-two">FAQ</Nav.Link>
                        <Nav.Link as={NavLink} exact to='/company_info' activeStyle={{color:'pink'}} className="nav-title-two">Company Info</Nav.Link>
                        <Nav.Link as={NavLink} exact to='/team' activeStyle={{color:'pink'}} className="nav-title-two">Team</Nav.Link>
                        <Nav.Link as={NavLink} exact to='/career' activeStyle={{color:'pink'}} className="nav-title-two">Career</Nav.Link>
                        <Nav.Link as={NavLink} exact to='/privacy' activeStyle={{color:'pink'}} className="nav-title-two">Privacy Policy</Nav.Link>
                        <Nav.Link as={NavLink} exact to='/terms' activeStyle={{color:'pink'}} className="nav-title-two">Terms of Use</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </Fragment>
        )
    }

