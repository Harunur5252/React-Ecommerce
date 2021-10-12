import React, { Fragment,useState,useEffect } from 'react'
import { Col, Container, Row ,Form } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import ga_img1 from '../../images/gallery-1.jpg'
import ga_img2 from '../../images/gallery-2.jpg'
import ga_img3 from '../../images/gallery-3.jpg'
import ga_img4 from '../../images/gallery-4.jpg'
import RelatedProductData from '../AllProductData/RelatedProductData/RelatedProductData'
import RelatedProductCard from '../ReuseAbleComponent/Card/RelatedProductCard';
import FeatureProductSkeletonAnimation from '../ReuseAbleComponent/SkeletonComponent/FeatureProductSkeletonAnimation';


export default function ProductDetails () {
    const [ spinner, setSpinner ] = useState(true);
      
    useEffect(() => {
      setTimeout(() => setSpinner(false), 1000)
    }, [])

    const data = RelatedProductData.map(item=>{
        return (
           <RelatedProductCard 
              productImg={item.productImg}
              product_title={item.product_title}
              price={item.price}
              key={item.id}
        />
        )
     })

        return (
            <Fragment>
                <Container className="mt-5 mb-5">
                    <Row>
                        {
                            spinner ?
                             <div>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <Row>
                                            <Col>
                                               <Skeleton animation="wave" variant="rectangular" className="rounded" style={{width:'100%', height:'85vh'}}/><br/>
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col lg={12} md={12} sm={12}>
                                                <Row>
                                                    <Col lg={3} md={3} sm={3}>
                                                       <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'15vh'}}/>
                                                    </Col>

                                                    <Col lg={3} md={3} sm={3}>
                                                       <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'15vh'}}/>
                                                    </Col>

                                                    <Col lg={3} md={3} sm={3}>
                                                       <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'15vh'}}/>
                                                    </Col>

                                                    <Col lg={3} md={3} sm={3}>
                                                       <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'15vh'}}/>
                                                    </Col>
                                                </Row>
                                            </Col>                       
                                        </Row>     
                                    </Col>

                                    <Col lg={6} md={6} sm={12} className="padding-product-size p-3">
                                        <div>
                                            <Skeleton animation="wave" variant="text" style={{width:'18%', height:'4vh'}}/>
                                            <Skeleton animation="wave" variant="text" style={{width:'80%', height:'6vh'}}/>
                                            <Skeleton animation="wave" variant="text" style={{width:'40%', height:'6vh'}}/>
                                            <Skeleton animation="wave" variant="text" style={{width:'15%', height:'4vh'}}/>
                                            <Row>
                                                <Col lg={4} md={5} sm={6}>
                                                   <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'8vh'}}/>
                                                </Col>
                                            </Row>
                                            
                                            <Row>
                                                <Col lg={2} md={5} sm={6} className="mt-3">
                                                   <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'8vh'}}/>
                                                </Col>   

                                                <Col lg={5} md={5} sm={6} className="mt-3">
                                                   <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'8vh'}}/>
                                                </Col>       
                                            </Row>
                                            <Skeleton animation="wave" variant="text" style={{width:'30%', height:'5vh'}}/>
                                            <Skeleton animation="wave" variant="text" style={{width:'100%', height:'4vh'}}/>
                                            <Skeleton animation="wave" variant="text" style={{width:'100%', height:'4vh'}}/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            :
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

                                <Col lg={6} md={6} sm={12} className="padding-product-size p-2">
                                    <div>
                                        <p className="product-d-text-title"><Link to='/' className="text">Home</Link>/T-Shirt</p>
                                        <h1 className="product-d-name">Red Printed T-Shirt<br/>by HRX </h1>
                                        <p className="product-d-price">$500.00</p>
                                        <Row>
                                            <Col lg={4} md={5} sm={6}>
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
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col lg={2} md={5} sm={6} className="mt-3">
                                                <Form.Control type="number" defaultValue={1}/>
                                            </Col>   

                                            <Col lg={5} md={5} sm={6}>
                                                <Link to='/cart' className="button-2">Add To Cart</Link>
                                            </Col>       
                                        </Row>
                                        <h3 className="product-d-title">PRODUCT DETAILS <FontAwesomeIcon icon={faListAlt} style={{color:'red'}}/></h3>
                                        <p className="text-justify header-des">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                    </div>
                                </Col>
                            </Row>

                        }
                    </Row>
                </Container>

                <Container className="mb-5">
                    <h2 className="f-product-title">Related Products</h2>
                    <Link to='/products' className="text"><span>View More</span></Link>
                    <div className="underline"></div>
                    <Row>
                        {
                            spinner ?
                            <Row>
                                <FeatureProductSkeletonAnimation />
                                <FeatureProductSkeletonAnimation />
                                <FeatureProductSkeletonAnimation />
                                <FeatureProductSkeletonAnimation />
                            </Row>

                            :

                            <Row>
                               {data}
                            </Row>
                        }
                    
                    </Row>
                </Container>
            </Fragment>
        )
    }

