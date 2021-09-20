
import React, { Fragment } from 'react'
import { Col, Container, Row,Table,Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import product_1 from '../../images/product-1.jpg'

export default function Cart () {

        return (
            <Fragment>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Table striped bordered >
                                <thead style={{background:'#ff523b',color:'white'}}>
                                    <tr>
                                        <th width="50%">Product</th>
                                        <th width="30%">Quantity</th>
                                        <th width="20%">SubTotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                   <td>
                                      <Row>
                                          <Col lg={1} md={12} sm={12}>
                                              <img src={product_1} className="cart-img-product"/>
                                          </Col>
                                          <Col className="mx-5" lg={4} md={12} sm={12}>
                                             <h6>Red Printed T-Shirt</h6>
                                             <p>Price $500.00<br/><Link to='/cart' className="text cart-r-text"><span>Remove</span></Link></p> 
                                          </Col>
                                      </Row>

                                      <Row className="mt-4">
                                          <Col lg={1} md={12} sm={12}>
                                              <img src={product_1} className="cart-img-product"/>
                                          </Col>
                                          <Col className="mx-5" lg={4} md={12} sm={12}>
                                             <h6>Red Printed T-Shirt</h6>
                                             <p>Price $500.00<br/><Link to='/cart' className="text cart-r-text"><span>Remove</span></Link></p> 
                                          </Col>
                                      </Row>

                                      <Row className="mt-4">
                                          <Col lg={1} md={12} sm={12}>
                                              <img src={product_1} className="cart-img-product"/>
                                          </Col>
                                          <Col className="mx-5" lg={4} md={12} sm={12}>
                                             <h6>Red Printed T-Shirt</h6>
                                             <p>Price $500.00<br/><Link to='/cart' className="text cart-r-text"><span>Remove</span></Link></p> 
                                          </Col>
                                      </Row>
                                   </td>

                                   <td>
                                      <Row>
                                        <Col lg={5} md={12} sm={12}>
                                           <Form.Control type="number" defaultValue={1} />
                                        </Col>
                                      </Row>

                                      <Row className="mt-4">
                                        <Col lg={5} md={12} sm={12} className="cart-quantity">
                                           <Form.Control type="number" defaultValue={1} />
                                        </Col>
                                      </Row>

                                      <Row className="mt-4">
                                        <Col lg={5} md={12} sm={12} className="cart-quantity">
                                           <Form.Control type="number" defaultValue={1} />
                                        </Col>
                                      </Row>
                                   </td>

                                   <td>
                                      <Row>
                                        <Col lg={5} md={12} sm={12} className="cart-price-size">
                                           <p>$500.00</p>
                                        </Col>
                                      </Row>

                                      <Row className="mt-4">
                                        <Col lg={5} md={12} sm={12} className="cart-price-size cart-price">
                                           <p>$500.00</p>
                                        </Col>
                                      </Row>

                                      <Row className="mt-4">
                                        <Col lg={5} md={12} sm={12} className="cart-price-size cart-price">
                                           <p>$500.00</p>
                                        </Col>
                                      </Row>
                                   </td>
                                   </tr>
                                </tbody>
                                </Table>
                        </Col>
                        
                        <Col lg={12} sm={12} md={12}>
                            <p className="hr-2"></p>
                            <Row>
                                <Col lg={5} sm={12} md={6} className="mb-3">
                                   <Form.Control type="text" placeholder="have any coupon?" />
                                   <Button variant="outline-success" className="mt-2">Add Coupon</Button>
                                </Col>
                            </Row>
                            <Table striped responsive>
                                <thead>
                                <tr>
                                    <th>Subtotal</th>
                                    <th>Tax</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                        <td>$1500.00</td>
                                        <td>$100.00</td>
                                        <td>$1600.00</td>
                                        </tr>
                                    </tbody>
                                
                            </Table>
                            <Link to='/account' className="button">Proceed To Checkout &#x2192;</Link>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

