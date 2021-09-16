import React, { Component, Fragment } from 'react'
import { Col, Container, Row ,Form,Button } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt,faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ga_img1 from '../../images/gallery-1.jpg'
import ga_img2 from '../../images/gallery-2.jpg'
import ga_img3 from '../../images/gallery-3.jpg'
import ga_img4 from '../../images/gallery-4.jpg'
import product_9 from '../../images/product-9.jpg'
import product_10 from '../../images/product-10.jpg'
import product_11 from '../../images/product-11.jpg'
import product_12 from '../../images/product-12.jpg'


export default class ProductDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <Carousel autoPlay={true} autoFocus={true} dynamicHeight={true} emulateTouch={true} infiniteLoop={true} interval={2000}>
                            <div>
                                <img src={ga_img1}/>
                                <p className="legend">Red Printed T-Shirt</p>
                            </div>
                            <div>
                                <img src={ga_img2}/>
                                <p className="legend">Red Printed T-Shirt</p>
                            </div>
                            <div>
                                <img src={ga_img3}/>
                                <p className="legend">Red Printed T-Shirt</p>
                            </div>
                            <div>
                                <img src={ga_img4}/>
                                <p className="legend">Red Printed T-Shirt</p>
                            </div>
                        </Carousel>
                        </Col>

                        <Col lg={6} md={6} sm={12} className="padding-product-size">
                            <div>
                                <p className="product-d-text-title"><Link to='/' className="text">Home</Link>/T-Shirt</p>
                                <h1 className="product-d-name">Red Printed T-Shirt<br/>by HRX </h1>
                                <p className="product-d-price">$500.00</p>
                                <select className="form-control select-sort">
                                    <option selected disabled>Select Size</option>
                                    <option value="">SM</option>
                                    <option value="">XSM</option>
                                    <option value="">MD</option>
                                    <option value="">XMD</option>
                                    <option value="">LG</option>
                                    <option value="">XLG</option>
                                    <option value="">XXLG</option>
                                </select>
                                
                                <Row>
                                    <Col lg={5} md={5} sm={6} className="mt-3">
                                      <Form.Control type="number" defaultValue={1}/>
                                      <Link to='/cart' className="button">Add To Cart</Link>
                                    </Col>        
                                </Row>
                                <h3 className="product-d-title">PRODUCT DETAILS <FontAwesomeIcon icon={faListAlt} style={{color:'red'}}/></h3>
                                <p className="text-justify header-des">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mb-5">
                    <h2 className="f-product-title">Related Products</h2>
                    <Link to='/products' className="text"><span>View More</span></Link>
                    <div className="underline"></div>
                    <Row>
                    <Col lg={3} md={6} sm={12}>
                           <div className="product">
                               <img src={product_9} className="product-img rounded"/>
                               <span className="product-title">Gray Diamond Watch</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <p className="product-price">$1500.00</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                           <div className="product">
                               <img src={product_10} className="product-img rounded"/>
                               <span className="product-title">Black Shoe Case</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <p className="product-price">$1300.00</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                           <div className="product">
                               <img src={product_11} className="product-img rounded"/>
                               <span className="product-title">Gray Shoe Case</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <p className="product-price">$900.00</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                           <div className="product">
                               <img src={product_12} className="product-img rounded"/>
                               <span className="product-title">Black Gins Pent</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <p className="product-price">$2000.00</p>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
