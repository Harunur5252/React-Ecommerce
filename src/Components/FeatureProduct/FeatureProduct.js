import React, { Fragment,useState,useEffect } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom'
import product_1 from '../../images/product-1.jpg'
import product_2 from '../../images/product-2.jpg'
import product_3 from '../../images/product-3.jpg'
import product_4 from '../../images/product-4.jpg'



export default function FeatureProduct () {
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, [])

        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="f-product-title">Feature Products</h2>
                    <div className="underline"></div>
                    <Row>
                       {
                          spinner ?
                          <Row>
                              <Col lg={3} md={6} sm={12}>
                                 <div className="mt-5">
                                    <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="mt-5">
                                    <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="mt-5">
                                    <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="mt-5">
                                    <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                 </div>
                              </Col>
                          </Row>

                          :
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

                       }
                    </Row>
                </Container>
            </Fragment>
        )
    }
