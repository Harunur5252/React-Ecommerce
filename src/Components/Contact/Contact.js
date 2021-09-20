import React, { Fragment } from 'react'
import { Container,Row,Col,Card,Form,Button,FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Contact () {

        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="contact text-center">
                           <h1 className="margin-con title text-white">Contact Us</h1>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                           <Card className="mb-5">
                              <Card.Body>
                                   <h1 className="title">Contact</h1>
                                   <p className="text-justify des mt-3">
                                      If you have already set up a store with us and need a hand with anything, you can direct your question to the correct team via the Support section of your Control Panel, for a fast response.
                                   </p>
                                   <p className="text-justify des mt-3">
                                      If you have any general questions or sales enquiries before signing up for your store, please feel free to get in touch via the contact form below or by e-mailing us directly on: <a href="#">info@redStore.com</a> .
                                   </p>
                                   <Row>
                                       <Col lg={6} md={12} sm={12} className="mt-3">
                                       <Form>
                                            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                               <Form.Control type="text" placeholder="Name" />
                                            </FloatingLabel>

                                            <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3">
                                               <Form.Control type="email" placeholder="abc@gmail.com" />
                                            </FloatingLabel>

                                             <FloatingLabel controlId="floatingInput" label="Confirm Email Address" className="mb-3">
                                                <Form.Control type="email" placeholder="abc@gmail.com" />
                                             </FloatingLabel>

                                             <FloatingLabel controlId="floatingInput" label="Subject" className="mb-3">
                                                <Form.Control type="text" placeholder="Subject" />
                                             </FloatingLabel>

                                             <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                                <Form.Control
                                                  as="textarea"
                                                  placeholder="Leave a comment here"
                                                  style={{ height: '100px' }}
                                                />
                                             </FloatingLabel>
                                          
                                            <Link to='#' className="button">
                                                Send Message
                                            </Link>
                                          </Form>
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

