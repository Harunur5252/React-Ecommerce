import React, { Fragment,useState,useEffect } from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import product_1 from '../../images/product-1.jpg'
import product_2 from '../../images/product-2.jpg'
import product_3 from '../../images/product-3.jpg'
import product_4 from '../../images/product-4.jpg'
import big_post_img_1 from '../../images/category_images/CT11121025_39_M_1_2x_dc6fe1-d8cc0.jpg'
import big_post_img_2 from '../../images/category_images/adi1690715_1.jpg'
import big_post_img_3 from '../../images/category_images/men-s-t-shirt-depeche-mode-delta-machine.jpg'
import big_post_img_4 from '../../images/category_images/9c08acdb4c0670b54134bf090e5de0ce.jpg'

export default function BigPost () {
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 50000)
   }, [])

        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="f-product-title">BigPost Products</h2>
                    <div className="underline"></div>
                    <Row className="mt-5">
                       <Col lg={4} md={6} sm={12}>
                          <select className="form-control select-sort">
                              <option value="">Default Sorting</option>
                              <option value="">Short By Price</option>
                              <option value="">Short By Popularity</option>
                              <option value="">Short By Rating Star</option>
                              <option value="">Short By Sale</option>
                           </select>
                           
                       </Col>

                       <Col lg={4} md={6} sm={12}>
                           <Form.Control type="text" placeholder="Search_Product" />
                       </Col>
                    </Row>
                    <Row>
                       {
                          spinner ?

                          <Row>
                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                    <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                 <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                 <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                 <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                 <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                 <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                 <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                 <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                    <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                    <span className="rating-star">
                                       <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                    </span>
                                    <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                                    <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
                                 </div>
                              </Col>
                          </Row>

                          :

                          <Row>
                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                    <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                       <img src={big_post_img_1} className="product-img rounded"/>
                                    </Link>
                                    <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                       <span className="product-title">Black Printed T-Shirt</span><br/>
                                    </Link>
                                    <span className="rating-star">
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                                    </span><br/>
                                    <del className="product-price">$1000</del>
                                    <p className="product-price">$700.00</p>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                    <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                       <img src={big_post_img_2} className="product-img rounded"/>
                                    </Link>
                                    <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                       <span className="product-title">Women's Glue Saree</span><br/>
                                    </Link>
                                    <span className="rating-star">
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                    </span><br/>
                                    <del className="product-price">$800</del>
                                    <p className="product-price">$600.00</p>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                    <img src={big_post_img_3} className="product-img rounded"/>
                                    <span className="product-title">Black T_Shirt</span><br/>
                                    <span className="rating-star">
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                    </span><br/>
                                    <del className="product-price">$1300</del>
                                    <p className="product-price">$1000.00</p>
                                 </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                    <img src={big_post_img_4} className="product-img rounded"/>
                                    <span className="product-title">Women's Green Saree</span><br/>
                                    <span className="rating-star">
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStar}/>
                                       <FontAwesomeIcon icon={faStarHalfAlt}/>
                                    </span><br/>
                                    <del className="product-price">$900</del>
                                    <p className="product-price">$600.00</p>
                                 </div>
                              </Col>

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
                                    </span><br/>
                                    <del className="product-price">$1500</del>
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
                                    </span><br/>
                                    <del className="product-price">$1000</del>
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
                                    </span><br/>
                                    <del className="product-price">$2000</del>
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
                                    </span><br/>
                                    <del className="product-price">$1100</del>
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
