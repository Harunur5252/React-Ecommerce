import React, { Fragment,useState,useEffect } from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
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

import sub_category_img_1 from '../../images/category_images/R (1).jpg'
import sub_category_img_2 from '../../images/category_images/R (2).jpg'
import sub_category_img_3 from '../../images/category_images/pineapple-yellow-half-sleeve-t-shirt-men-s-plain-t-shirts-231522-1585315740.jpg'
import sub_category_img_4 from '../../images/category_images/AMFT001O_2-600x800.jpg'
import sub_category_img_5 from '../../images/category_images/OIP (3).jpg'
import sub_category_img_6 from '../../images/category_images/CT11121025_39_M_1_2x_dc6fe1-d8cc0.jpg'
import sub_category_img_7 from '../../images/category_images/men-s-knitted-long-sleeve-t-shirt.jpg'
import sub_category_img_8 from '../../images/category_images/OIP (4).jpg'
import sub_category_img_9 from '../../images/category_images/Green-House-Multi-Regular-Fit-SDL070635809-1-d35e8.jpg'
import sub_category_img_10 from '../../images/category_images/Royal-Crown-Multi-Casuals-Slim-SDL258428393-1-c7732.jpg'
import sub_category_img_11 from '../../images/category_images/195313-572959-large.jpg'
import sub_category_img_12 from '../../images/category_images/men-s-t-shirt-depeche-mode-delta-machine.jpg'
import sub_category_img_13 from '../../images/category_images/Kilted-front-1-768x768.jpg'
import sub_category_img_14 from '../../images/category_images/OIP (5).jpg'
import sub_category_img_15 from '../../images/category_images/OIP (6).jpg'
import sub_category_img_16 from '../../images/category_images/OIP (7).jpg'

import sub_category_img_17 from '../../images/category_images/R.jpg'
import sub_category_img_18 from '../../images/category_images/dark-green-embroidered-saree-sasvrt5412-u.jpg'
import sub_category_img_19 from '../../images/category_images/9c08acdb4c0670b54134bf090e5de0ce.jpg'
import sub_category_img_20 from '../../images/category_images/763910ccaf6187332b1936e61d00def3.jpg'
import sub_category_img_21 from '../../images/category_images/su5201.jpg'
import sub_category_img_22 from '../../images/category_images/0439869_comely-cream-silk-sarees.jpeg'
import sub_category_img_23 from '../../images/category_images/purple-embroidered-saree-sasli678303-u.jpg'
import sub_category_img_24 from '../../images/category_images/bfc553a969e3b5af8b8c39f918d21c71.jpg'
import sub_category_img_25 from '../../images/category_images/OIP.jpg'
import sub_category_img_26 from '../../images/category_images/OIP (1).jpg'
import sub_category_img_27 from '../../images/category_images/adi2261383.jpg'
import sub_category_img_28 from '../../images/category_images/adi3300008.jpg'
import sub_category_img_29 from '../../images/category_images/adi2710919.jpg'
import sub_category_img_30 from '../../images/category_images/adi1690789.jpg'
import sub_category_img_31 from '../../images/category_images/adi1690715_1.jpg'
import sub_category_img_32 from '../../images/category_images/OIP (2).jpg'
import Button from '@restart/ui/esm/Button';

const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       marginTop: theme.spacing(2),
     },
   },
 }));


export default function AllProduct() {
   const classes = useStyles();
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, [])

        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="product-title">All Products</h2>
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
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>


                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>


                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
                                       <Skeleton variant="rectangular" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                                       <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                                       <span className="rating-star">
                                          <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                                       </span>
                                       <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
                                    </div>
                              </Col>

                              <Col lg={3} md={6} sm={12}>
                                    <div className="product mt-5">
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
                                       <img src={sub_category_img_17} className="product-img rounded"/>
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
                                       <img src={sub_category_img_18} className="product-img rounded"/>
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
                                       <img src={sub_category_img_19} className="product-img rounded"/>
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
                                       <img src={sub_category_img_20} className="product-img rounded"/>
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
                                       <img src={sub_category_img_21} className="product-img rounded"/>
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
                                       <img src={sub_category_img_22} className="product-img rounded"/>
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
                                       <img src={sub_category_img_23} className="product-img rounded"/>
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
                                       <img src={sub_category_img_24} className="product-img rounded"/>
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
                                       <img src={sub_category_img_25} className="product-img rounded"/>
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



                              <Col lg={3} md={6} sm={12}>
                                 <div className="product mt-5">
                                    <Link to={`/productDetails/1/red_printed_saree`}>
                                       <img src={sub_category_img_26} className="product-img rounded"/>
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
                                       <img src={sub_category_img_27} className="product-img rounded"/>
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
                                       <img src={sub_category_img_28} className="product-img rounded"/>
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
                                       <img src={sub_category_img_29} className="product-img rounded"/>
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
                                       <img src={sub_category_img_30} className="product-img rounded"/>
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
                                       <img src={sub_category_img_31} className="product-img rounded"/>
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
                                       <img src={sub_category_img_32} className="product-img rounded"/>
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
                          
                       }
                        
                    </Row>
                    <div className={classes.root} style={{marginTop:'5%',background:'pink',paddingTop:'10px',paddingBottom:'20px'}}>
                        <Pagination count={10} showFirstButton  showLastButton  variant="outlined" size="large" color="secondary" />
                    </div>
                </Container>
            </Fragment>
        )
    
}
