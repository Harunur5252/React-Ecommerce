import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Card,Form,FloatingLabel,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faClock,faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default class CheckOut extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <Container  fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="checkout text-center">
                           <h1 className="margin-con title text-white">CheckOut</h1>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                           <Card className="mb-5">
                              <Card.Body>
                              <h2 className="title"><FontAwesomeIcon icon={faMapMarkerAlt}/> Select a Delivery Address</h2>
                                   
                                   <Row>
                                       <Col lg={6} md={12} sm={12} className="mt-3 p-1">
                                       <Form>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Name</Form.Label>
                                                   <Form.Control type="text" placeholder="Enter name" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridMobile">
                                                <Form.Label>Mobile</Form.Label>
                                                   <Form.Control type="text" placeholder="Enter mobile_no" />
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                   <Form.Control placeholder="Enter city_name"/>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Area</Form.Label>
                                                <Form.Select defaultValue="Choose..." className="form-control">
                                                    <option value="">Dhaka</option>
                                                    <option value="">Khilkhet</option>
                                                    <option value="">Badda</option>
                                                    <option value="">Uttara</option>
                                                    <option value="">Mohakhali</option>
                                                    <option value="">Basabo</option>
                                                    <option value="">Motijil</option>
                                                </Form.Select>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Zip</Form.Label>
                                                    <Form.Control placeholder="Enter zip_code"/>
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder="Enter address" />
                                            </Form.Group>   
                                            <Link to='#'  className="button">
                                                Confirm
                                            </Link>
                                            </Form>
                                       </Col>

                                       <Col lg={6} md={12} sm={12} className="mt-3 p-1">
                                           <p className="text-justify privacy-des">$19 Delivery charge included</p>
                                           <Form.Control defaultValue={"$1600.00"} readOnly/>
                                           <small>I agree to Chaldal's <span style={{color:"red"}}>Terms of Services</span></small>
                                           <p className="text-justify privacy-des mt-4"><strong><FontAwesomeIcon icon={faClock}/></strong> Preferred Delivery Timings</p>
                                           <small>Payment options available on the next page</small>
                                       </Col>
                                   </Row>
                              </Card.Body>
                           </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
