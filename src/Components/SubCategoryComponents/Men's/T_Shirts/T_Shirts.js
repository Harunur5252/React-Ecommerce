import React, {Fragment } from 'react'
import { Row,Col, Container,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import sub_category_img_1 from '../../../../images/category_images/R (1).jpg'
import sub_category_img_2 from '../../../../images/category_images/R (2).jpg'
import sub_category_img_3 from '../../../../images/category_images/pineapple-yellow-half-sleeve-t-shirt-men-s-plain-t-shirts-231522-1585315740.jpg'
import sub_category_img_4 from '../../../../images/category_images/AMFT001O_2-600x800.jpg'
import sub_category_img_5 from '../../../../images/category_images/OIP (3).jpg'
import sub_category_img_6 from '../../../../images/category_images/CT11121025_39_M_1_2x_dc6fe1-d8cc0.jpg'
import sub_category_img_7 from '../../../../images/category_images/men-s-knitted-long-sleeve-t-shirt.jpg'
import sub_category_img_8 from '../../../../images/category_images/OIP (4).jpg'
import sub_category_img_9 from '../../../../images/category_images/Green-House-Multi-Regular-Fit-SDL070635809-1-d35e8.jpg'
import sub_category_img_10 from '../../../../images/category_images/Royal-Crown-Multi-Casuals-Slim-SDL258428393-1-c7732.jpg'
import sub_category_img_11 from '../../../../images/category_images/195313-572959-large.jpg'
import sub_category_img_12 from '../../../../images/category_images/men-s-t-shirt-depeche-mode-delta-machine.jpg'
import sub_category_img_13 from '../../../../images/category_images/Kilted-front-1-768x768.jpg'
import sub_category_img_14 from '../../../../images/category_images/OIP (5).jpg'
import sub_category_img_15 from '../../../../images/category_images/OIP (6).jpg'
import sub_category_img_16 from '../../../../images/category_images/OIP (7).jpg'

const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       marginTop: theme.spacing(2),
     },
   },
 }));

export default function T_Shirts() {
       const classes = useStyles();
       const date = new Date();
       const year = date.getFullYear()
        return (
            <Fragment>
                 <Container className="mt-5 mb-5">
                    <h2 className="f-product-title">Bangladeshi T_Shirts Collection {year}</h2>
                    <div className="underline"></div>
                    <h2 className="product-title">All T_Shirt</h2>
                    <Row className="mt-3">
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
                           <Form.Control type="text" placeholder="Search_T_Shirt" />
                       </Col>
                    </Row>
                    <Row>
                    <Col lg={3} md={6} sm={12}>
                           <div className="product mt-5">
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_13} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_14} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_15} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_16} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_1} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_2} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_3} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_4} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_5} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_6} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_7} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_8} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_9} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_10} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_11} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                               <Link to={`/productDetails/1/red_printed_saree`}>
                                  <img src={sub_category_img_12} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Red Printed Saree</span><br/>
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
                    </Row>
                    <div className={classes.root} style={{marginTop:'5%',background:'pink',paddingTop:'10px',paddingBottom:'20px'}}>
                        <Pagination count={10} showFirstButton  showLastButton  variant="outlined" size="large" color="secondary" />
                    </div>
                </Container>
            </Fragment>
        )
}
