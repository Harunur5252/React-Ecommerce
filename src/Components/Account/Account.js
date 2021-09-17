import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Card,Tabs,Tab,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'
import account_img from '../../images/R.png' 
import Login from '../Login/Login'
import Register from '../Register/Register'
export default class Account extends Component {
   
    render() {
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
                                    <Button className="btn-3"><FontAwesomeIcon icon={faFacebook} style={{fontSize:'22px'}}/> &nbsp;Login With Facebook</Button>
                                    <Button className="btn-4 m-2"><FontAwesomeIcon icon={faGoogle} style={{fontSize:'22px'}}/>&nbsp;Login With Google</Button>
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
}



