import React, { Fragment,useState,useEffect } from 'react'
import { Col, Container, Row,Form,Button,InputGroup,FormControl,FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Skeleton from '@material-ui/lab/Skeleton';
import product_1 from '../../images/product-1.jpg'
import paypal from '../../images/logo-paypal.png'
import bkash from '../../images/BKash_logo.png'
import rocket from '../../images/rocket.png'
import nogod from '../../images/Nagad-Logo.wine.png'
import upai from '../../images/upai-2.png'

export default function Order () {
    const [ spinner, setSpinner ] = useState(true);
      
    useEffect(() => {
      setTimeout(() => setSpinner(false), 1000)
    }, [])

        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="order text-center">
                           <h1 className="margin-con title text-white">Order Now</h1>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-4 mb-4">
                    {
                        spinner ?
                            <Row>
                                <Col lg={6} md={12} sm={12} >
                                    <Row>
                                        <Col className="text-center">
                                           <Skeleton variant="rect" animation="wave" className="rounded" style={{width:'100%', height:'25vh'}} />
                                        </Col>

                                        <Col className="text-center">
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                        </Col>
                                    </Row>
                                </Col>   
                            </Row>

                            :

                            <Row>
                                <Col lg={6} md={12} sm={12} >
                                    <Row>
                                        <Col className="text-center">
                                        <img src={product_1} className="order-img"/>
                                        </Col>

                                        <Col className="text-center">
                                            <span className="order-text">Order Number</span><span><strong>&nbsp;3,556,423</strong></span><br/>
                                            <span className="order-text"><strong>Your oder is on its way</strong></span>
                                            <p className="order-text">Please pay with <span className="cash">cash on delivery</span></p>
                                        </Col>
                                    </Row>
                                </Col>   
                            </Row>
                    }
                    
                </Container>

                <Container className="mb-4 text-center">
                    {
                        spinner ?
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                   <Skeleton variant="text" animation="wave" style={{width:'100%', height:'4vh'}} />
                                </Col>
                            </Row>

                            :

                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                   <span className="order-text">Do you want to</span><span className="cash pay">&nbsp;Pay Now?</span>
                                </Col>
                            </Row>
                    }
                    
                </Container>

                <Container className="mb-3 text-center">
                    {
                        spinner ?
                             <Row>
                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#'>
                                        <div className="pay-card-2 text-center">
                                            <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'16vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                        </div>
                                    </Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#'>
                                        <div className="pay-card-2 text-center">
                                            <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'16vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                        </div>
                                    </Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#'>
                                        <div className="pay-card-2 text-center">
                                            <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'16vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                        </div>
                                    </Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#'>
                                        <div className="pay-card-2 text-center">
                                            <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'16vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                        </div>
                                    </Link>
                                </Col>
                                
                            </Row>


                            :

                            <Row>
                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                            <div className="pay-card text-center">
                                                <img src={bkash} className="pay-img"/>
                                                <h6 className="pay-text mt-1">Bkash</h6>
                                            </div>
                                    </Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                            <div className="pay-card text-center">
                                                <img src={rocket} className="pay-img"/>
                                                <h6 className="pay-text mt-1">Rocket</h6>
                                            </div>
                                    </Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                            <div className="pay-card text-center">
                                                <img src={nogod} className="pay-img"/>
                                                <h6 className="pay-text mt-1">Nogod</h6>
                                            </div>
                                    </Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                            <div className="pay-card text-center">
                                                <img src={upai} className="pay-img"/>
                                                <h6 className="pay-text mt-1">Upai</h6>
                                            </div>
                                    </Link>
                                </Col>
                                
                            </Row>
                    }
                    
                </Container>

                <Container className="mb-3 text-center">
                    {
                        spinner ?

                        <Row>
                            <Col lg={12} md={12} sm={12}>
                               <Skeleton variant="text" animation="wave" style={{width:'100%', height:'4vh'}} />
                            </Col>
                        </Row>

                        :

                        <Row>
                            <Col lg={12} md={12} sm={12}>
                               <h2>Or</h2>
                            </Col>
                        </Row>
                    }
                   
                </Container>

                <Container className="mb-4 text-center">
                    {
                        spinner ?
                            <Row>
                                <Col lg={6} md={12} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                        <div className="box-0">
                                           <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'5vh'}} />
                                        </div>
                                    </Link>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                        <div className="box-0">
                                           <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'5vh'}} />
                                        </div>
                                    </Link>
                                </Col>
                            </Row>

                            :


                            <Row>
                                <Col lg={6} md={12} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                        <div className="box">
                                            <span><img src={paypal} className="another-pay-img" /></span>&nbsp;
                                            <span className="credit-card">&nbsp;/&nbsp;&nbsp;</span>
                                            <span className="credit-card">International Credit Card</span>
                                        </div>
                                    </Link>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="p-2">
                                    <Link to='#' className="text">
                                        <div className="box">
                                            <span><img src={bkash} className="another-pay-img" /></span>&nbsp;
                                            <span className="credit-card">&nbsp;/&nbsp;&nbsp;</span>
                                            <span className="credit-card">Bkash (TrxID Method)</span>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>

                    }
                    
                </Container>

                <Container className="mb-4 text-center">
                    {
                        spinner ?

                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                        <div className="box-10">
                                            <div className="confirm-email">
                                            <Row>
                                                <Col className="form-margin-1">
                                                  <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                                </Col>
                                            </Row>
                                            <Form className="form-margin-1">
                                                <Row className="align-items-center">
                                                    <Col lg={6} md={6} sm={12}>
                                                        <InputGroup>
                                                          <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'8vh'}} />
                                                        </InputGroup>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <Link to='#'>
                                                           <Skeleton variant="rect" className="rounded" animation="wave" style={{width:'100%', height:'6vh'}} />
                                                        </Link>
                                                    </Col>
                                                </Row>         
                                            </Form>
                                            </div>
                                        </div>
                                </Col>
                            </Row>


                             :

                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                        <div className="box-2">
                                            <div className="confirm-email">
                                            <p className="privacy-des">Do you want to an order confirmation email?</p>
                                            <Form className="form-margin">
                                                <Row className="align-items-center">
                                                    <Col xs="auto" lg={6} md={6} sm={12}>
                                                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                            Email
                                                        </Form.Label>
                                                        <InputGroup className="mb-2">
                                                            <InputGroup.Text>@</InputGroup.Text>
                                                            <FormControl id="inlineFormInputGroup" placeholder="Email" />
                                                        </InputGroup>
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Link to='#' className="mb-2 btn-2 text">
                                                            Submit
                                                        </Link>
                                                    </Col>
                                                </Row>         
                                            </Form>
                                            </div>
                                        </div>
                                </Col>
                            </Row>
                    }
                    
                </Container>


                <Container className="mb-4">
                    {
                        spinner ?
                            <Row>
                                <Col lg={6} md={6} sm={12} className="text-center p-3">
                                        <div className="box-11">
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} /><br/>
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                            <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                        </div>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-3">
                                        <div className="box-12">
                                        <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                        <Row>
                                            <Col>
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                            </Col>
                                            
                                            <Col>
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'5vh'}} />
                                                <Skeleton variant="text" animation="wave" style={{width:'100%', height:'3vh'}} />
                                            </Col>
                                            
                                        </Row>
                                        
                                        </div>
                                </Col>
                            </Row>


                            :


                            <Row>
                                <Col lg={6} md={6} sm={12} className="text-center p-3">
                                        <div className="box-3">
                                            <p className="privacy-des">Delivery Address</p>
                                            <h5 className="faq-q-title">Nikunja</h5>
                                            <p className="privacy-des mt-5">Preferred Delivery Timings</p>
                                            <h5 className="faq-q-title">16 Sep</h5>
                                            <h5 className="faq-q-title">8:00 AM - 9:00 AM</h5>
                                        </div>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-3">
                                        <div className="box-3">
                                        <p className="privacy-des text-center">Order Summary</p>
                                        <Row>
                                            <Col>
                                                <span className="privacy-des">Subtotal</span><br/>
                                                <span className="privacy-des">Delivery Charge</span><br/>
                                                <span className="privacy-des">Discount</span><br/>
                                                <span className="privacy-des">Order Total</span><br/>
                                                <span style={{color:'red',fontSize:'17px',fontFamily:'Raleway, sans-serif'}}>Amount Paid</span>
                                            </Col>
                                            
                                            <Col>
                                                <FontAwesomeIcon icon={faDollarSign}/><span>&nbsp;690</span><br/>
                                                <FontAwesomeIcon icon={faDollarSign}/><span>&nbsp;19</span><br/>
                                                <FontAwesomeIcon icon={faDollarSign}/><span>&nbsp;151</span><br/>
                                                <FontAwesomeIcon icon={faDollarSign}/><span>&nbsp;558</span><br/>
                                                <FontAwesomeIcon icon={faDollarSign}/><span>&nbsp;0</span>
                                            </Col>
                                            
                                        </Row>
                                        </div>
                                </Col>
                            </Row>

                    }
                    
                </Container>


                <Container className="mb-4">
                    {
                        spinner ?
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                              <Skeleton variant="text" animation="wave" style={{width:'100%', height:'4vh'}} />  
                            </Col>
                        </Row>

                        :

                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="faq-q-title">Order Instructions</h5>    
                            </Col>
                        </Row>
                    }
                    
                </Container>

                <Container className="mb-4">
                    {
                        spinner ?
                               <Row>
                                    <Col lg={3} md={6} sm={12}>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            className="mb-3"
                                        >
                                            <Skeleton variant="rect" animation="wave" style={{width:'100%', height:'8vh'}} />  
                                        </FloatingLabel>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                    <Link to='#'>
                                       <Skeleton variant="rect" animation="wave" style={{width:'100%', height:'6vh'}} />  
                                    </Link>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                       <Skeleton variant="text" animation="wave" style={{width:'100%', height:'4vh'}} />  
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                    <Link to='#'> 
                                       <Skeleton variant="rect" animation="wave" style={{width:'100%', height:'6vh'}} />  
                                    </Link>
                                    </Col>
                                </Row>


                                :

                            <Row>
                                <Col lg={3} md={6} sm={12}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="E.g Call me when you arrive"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                </Col>

                                <Col lg={3} md={6} sm={12}>
                                    <Link to='#' className="btn-3 text" >Submit</Link>
                                </Col>

                                <Col lg={3} md={6} sm={12}>
                                   <p className="privacy-des-sm">Would you like to cancel this order?</p>
                                </Col>

                                <Col lg={3} md={6} sm={12}>
                                   <Link to='#' className="btn-4 text" >Cancel Order</Link>
                                </Col>
                            </Row>

                    }
                    
                </Container>

            </Fragment>
        )
    }



