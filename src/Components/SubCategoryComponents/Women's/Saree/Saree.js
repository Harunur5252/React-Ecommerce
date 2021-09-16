import React, {Fragment } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import sub_category_img_1 from '../../../../images/category_images/R.jpg'
import sub_category_img_2 from '../../../../images/category_images/dark-green-embroidered-saree-sasvrt5412-u.jpg'
import sub_category_img_3 from '../../../../images/category_images/9c08acdb4c0670b54134bf090e5de0ce.jpg'
import sub_category_img_4 from '../../../../images/category_images/763910ccaf6187332b1936e61d00def3.jpg'
import sub_category_img_5 from '../../../../images/category_images/su5201.jpg'
import sub_category_img_6 from '../../../../images/category_images/0439869_comely-cream-silk-sarees.jpeg'
import sub_category_img_7 from '../../../../images/category_images/purple-embroidered-saree-sasli678303-u.jpg'
import sub_category_img_8 from '../../../../images/category_images/bfc553a969e3b5af8b8c39f918d21c71.jpg'
import sub_category_img_9 from '../../../../images/category_images/OIP.jpg'
import sub_category_img_10 from '../../../../images/category_images/OIP (1).jpg'
import sub_category_img_11 from '../../../../images/category_images/adi2261383.jpg'
import sub_category_img_12 from '../../../../images/category_images/adi3300008.jpg'
import sub_category_img_13 from '../../../../images/category_images/adi2710919.jpg'
import sub_category_img_14 from '../../../../images/category_images/adi1690789.jpg'
import sub_category_img_15 from '../../../../images/category_images/adi1690715_1.jpg'
import sub_category_img_16 from '../../../../images/category_images/OIP (2).jpg'

const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       marginTop: theme.spacing(2),
     },
   },
 }));

export default function Saree() {
       const classes = useStyles();
       const date = new Date();
       const year = date.getFullYear()
        return (
            <Fragment>
                 <Container className="mt-5 mb-5">
                    <h2 className="f-product-title">Bangladeshi Saree Collection {year}</h2>
                    <div className="underline"></div>
                    <h2 className="product-title">All Saree</h2>
                    <select className="form-control select-sort">
                        <option value="">Default Shorting</option>
                        <option value="">Short By Price</option>
                        <option value="">Short By Popularity</option>
                        <option value="">Short By Rating Star</option>
                        <option value="">Short By Sale</option>
                    </select>
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
