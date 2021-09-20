import React, { Fragment } from 'react'
import { Col, Container, Row,Card,Tabs,Tab } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'
import account_img from '../../images/R.png' 
import Login from '../Login/Login'
import Register from '../Register/Register'

export default function Account () {
   
        return (
            <Fragment>
                <Container fluid className="account-color">
                    <Row>
                        <Col lg={6} md={6} sm={12} className="mt-5 mb-5">
                            <img src={account_img} className="account-img-size"/>
                        </Col>

                        <Col lg={6} md={6} sm={12} className="mt-5 mb-5">
                           <div>
                                <Card>
                                   <Card.Body>
                                    <a className="btn-3 text"><FontAwesomeIcon icon={faFacebook} style={{fontSize:'22px'}}/> &nbsp;Login With Facebook</a>
                                    <a className="btn-4 m-2 text"><FontAwesomeIcon icon={faGoogle} style={{fontSize:'22px'}}/>&nbsp;Login With Google</a>
                                    <Tabs defaultActiveKey="register"  transition={true} id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="login" title="Login">
                                                <Login />
                                            </Tab>
                                            <Tab eventKey="register" title="Register">
                                                <Register />
                                            </Tab>
                                        </Tabs>
                                    </Card.Body>
                                </Card>
                           </div>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }




