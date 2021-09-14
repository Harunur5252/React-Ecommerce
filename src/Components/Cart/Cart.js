import Button from '@restart/ui/esm/Button';
import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Table,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import product_1 from '../../images/product-1.jpg'
export default class Cart extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Table striped bordered >
                                <thead style={{background:'#ff523b',color:'white'}}>
                                    <tr>
                                        <td width="50%">Product</td>
                                        <td width="30%">Quantity</td>
                                        <td width="20%">SubTotal</td>
                                    </tr>
                                </thead>
                                <tbody>
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

                                      <Row>
                                          <Col lg={1} md={12} sm={12}>
                                              <img src={product_1} className="cart-img-product"/>
                                          </Col>
                                          <Col className="mx-5" lg={4} md={12} sm={12}>
                                             <h6>Red Printed T-Shirt</h6>
                                             <p>Price $500.00<br/><Link to='/cart' className="text cart-r-text"><span>Remove</span></Link></p> 
                                          </Col>
                                      </Row>

                                      <Row>
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

                                      <Row>
                                        <Col lg={5} md={12} sm={12} className="cart-quantity">
                                           <Form.Control type="number" defaultValue={1} />
                                        </Col>
                                      </Row>

                                      <Row>
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

                                      <Row>
                                        <Col lg={5} md={12} sm={12} className="cart-price-size cart-price">
                                           <p>$500.00</p>
                                        </Col>
                                      </Row>

                                      <Row>
                                        <Col lg={5} md={12} sm={12} className="cart-price-size cart-price">
                                           <p>$500.00</p>
                                        </Col>
                                      </Row>
                                   </td>
                                   
                                </tbody>
                                </Table>

                        </Col>
                        <Col lg={12} sm={12} md={12}>
                        
                            <p className="hr-2"></p>
                                <Table striped responsive>
                                    <tr>
                                        <th>Subtotal</th>
                                        <th>Tax</th>
                                        <th>Total</th>
                                    </tr>
                                    <tr>
                                        <td>$1500.00</td>
                                        <td>$100.00</td>
                                        <td>$1600.00</td>
                                    </tr>
                                    
                                </Table>
                                <Button className="btn-2"><Link to='/account' className="text" style={{color:'#fff'}}>Proceed To Checkout &#x2192;</Link></Button>
                                    
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
