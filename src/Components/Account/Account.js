import React, { Fragment,useState,useEffect } from 'react'
import { Col, Container, Row,Card,Tabs,Tab } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'
import Skeleton from '@material-ui/lab/Skeleton';
import account_img from '../../images/R.png' 
import Login from '../Login/Login'
import Register from '../Register/Register'

export default function Account () {
    const [ spinner, setSpinner ] = useState(true);
      
    useEffect(() => {
      setTimeout(() => setSpinner(false), 1000)
    }, [])


        return (
            <Fragment>
                <Container fluid className="account-color" id="header">
                    <Row>
                        {
                            spinner ?
                            <Row>
                                <Col lg={6} md={6} sm={12} className="mt-5 mb-5 account-card-3">
                                  <Skeleton variant="rect" className="rounded ske-acc-height-width" />
                                </Col>

                                <Col lg={6} md={6} sm={12} className="mt-5 mb-5">
                                    <div>
                                        <Card className="account-card-2">
                                            <Card.Body>
                                                <Row>
                                                    <Col lg={4} md={4} sm={12}>
                                                       <Skeleton variant="rect" className="rounded" style={{width:'100%', height:'8vh'}} />
                                                    </Col>

                                                    <Col lg={4} md={4} sm={12}>
                                                       <Skeleton variant="rect" className="rounded" style={{width:'100%', height:'8vh'}} />
                                                    </Col>
                                                </Row>
                                                 <Skeleton variant="rect" className="rounded mt-3" style={{width:'100%', height:'6vh'}} />
                                                 <Skeleton variant="rect" className="rounded mt-3" style={{width:'100%', height:'6vh'}} />
                                                 <Skeleton variant="rect" className="rounded mt-3" style={{width:'100%', height:'6vh'}} />
                                                 <Row>
                                                     <Col lg={4} md={4} sm={12}>
                                                        <Skeleton variant="rect" className="rounded mt-3" style={{width:'100%', height:'6vh'}} />
                                                     </Col>

                                                     <Col lg={4} md={4} sm={12}>
                                                        <Skeleton variant="rect" className="rounded mt-3" style={{width:'100%', height:'6vh'}} />
                                                     </Col>
                                                 </Row>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>

                            :

                            <Row>
                                <Col lg={6} md={6} sm={12} className="mt-5 mb-5">
                                    <img src={account_img} className="account-img-size rounded animated"/>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="mt-5 mb-5">
                                    <div>
                                            <Card className="account-card">
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
                        }
                        
                    </Row>
                </Container>

            </Fragment>
        )
    }




