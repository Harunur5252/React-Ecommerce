import React, { Fragment,useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import Skeleton from '@material-ui/lab/Skeleton';
import product_5 from '../../images/product-5.jpg'
import product_6 from '../../images/product-6.jpg'
import product_7 from '../../images/product-7.jpg'
import product_8 from '../../images/product-8.jpg'
import product_9 from '../../images/product-9.jpg'
import product_10 from '../../images/product-10.jpg'
import product_11 from '../../images/product-11.jpg'
import product_12 from '../../images/product-12.jpg'

export default function LatestProduct () {
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, [])

        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="f-product-title">Latest Products</h2>
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
                                 <div className="product">
                                    <img src={product_5} className="product-img rounded"/>
                                    <span className="product-title">White Shoe Case</span><br/>
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
                                    <img src={product_6} className="product-img rounded"/>
                                    <span className="product-title">Black Printed T-Shirt</span><br/>
                                    <span className="rating-star">
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                                    </span>
                                    <p className="product-price">$800.00</p>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product">
                                    <img src={product_7} className="product-img rounded"/>
                                    <span className="product-title">Black Muja</span><br/>
                                    <span className="rating-star">
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                                    </span>
                                    <p className="product-price">$200.00</p>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product">
                                    <img src={product_8} className="product-img rounded"/>
                                    <span className="product-title">Black Watch</span><br/>
                                    <span className="rating-star">
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                                    </span>
                                    <p className="product-price">$1200.00</p>
                                 </div>
                              </Col>

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
                       }
                    </Row>
                </Container>
            </Fragment>
        )
    }

