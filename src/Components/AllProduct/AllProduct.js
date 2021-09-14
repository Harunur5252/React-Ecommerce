import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import product_1 from '../../images/product-1.jpg'
import product_2 from '../../images/product-2.jpg'
import product_3 from '../../images/product-3.jpg'
import product_4 from '../../images/product-4.jpg'
import product_5 from '../../images/product-5.jpg'
import product_6 from '../../images/product-6.jpg'
import product_7 from '../../images/product-7.jpg'
import product_8 from '../../images/product-8.jpg'
import product_9 from '../../images/product-9.jpg'
import product_10 from '../../images/product-10.jpg'
import product_11 from '../../images/product-11.jpg'
import product_12 from '../../images/product-12.jpg'



const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       marginTop: theme.spacing(2),
     },
   },
 }));


export default function AllProduct() {
   const classes = useStyles();
        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="product-title">All Products</h2>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_3} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                 <span className="product-title">Gray Gins Pent</span><br/>
                               </Link>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_4} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                 <span className="product-title">Black T-Shirt</span><br/>
                               </Link>
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

                        <Col lg={3} md={6} sm={12}>
                           <div className="product">
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_5} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                 <span className="product-title">White Shoe Case</span><br/>
                               </Link>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_6} className="product-img rounded"/>
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
                               </span>
                               <p className="product-price">$800.00</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                           <div className="product">
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_7} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                 <span className="product-title">Black Muja</span><br/>
                               </Link>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_8} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                 <span className="product-title">Black Watch</span><br/>
                               </Link>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_9} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Gray Diamond Watch</span><br/>
                               </Link>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                  <img src={product_10} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Black Shoe Case</span><br/>
                               </Link>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_11} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                 <span className="product-title">Gray Shoe Case</span><br/>
                               </Link>
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
                               <Link to={`/productDetails/1/red_printed_t-shirt`}>
                                 <img src={product_12} className="product-img rounded"/>
                               </Link>
                               <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                                  <span className="product-title">Black Gins Pent</span><br/>
                               </Link>
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
                    <div className={classes.root} style={{marginTop:'5%',background:'pink',paddingTop:'10px',paddingBottom:'20px'}}>
                        <Pagination count={10} showFirstButton  showLastButton  variant="outlined" size="large" color="secondary" />
                    </div>
                </Container>
            </Fragment>
        )
    
}
