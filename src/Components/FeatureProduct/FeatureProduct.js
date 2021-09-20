import React, { Fragment } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import product_1 from '../../images/product-1.jpg'
import product_2 from '../../images/product-2.jpg'
import product_3 from '../../images/product-3.jpg'
import product_4 from '../../images/product-4.jpg'
import { Link } from 'react-router-dom'


export default function FeatureProduct () {

        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="f-product-title">Feature Products</h2>
                    <div className="underline"></div>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                           <div className="product mt-5">
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                  <img src={product_1} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed T-Shirt</span><br/>
                               </Link>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <p className="product-price">$700.00</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                           <div className="product mt-5">
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_2} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Black Shoe Case</span><br/>
                               </Link>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                                  <FontAwesomeIcon icon={faStar}/>
                               </span>
                               <p className="product-price">$600.00</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                           <div className="product mt-5">
                               <img src={product_3} className="product-img rounded"/>
                               <span className="product-title">Gray Gins Pent</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                               </span>
                               <p className="product-price">$1000.00</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                           <div className="product mt-5">
                               <img src={product_4} className="product-img rounded"/>
                               <span className="product-title">Black T-Shirt</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <p className="product-price">$600.00</p>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
