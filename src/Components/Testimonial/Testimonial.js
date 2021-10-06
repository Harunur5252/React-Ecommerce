import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt,faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Row,Col, Container } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import user_1 from '../../images/user-1.png'
import user_2 from '../../images/user-2.png'
import user_3 from '../../images/user-3.png'
import user_4 from '../../images/user-4.jpg'

let settings = {
    autoplaySpeed: 3000,
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 3000,
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default function Testimonial () {

        return (
            <Fragment>
                <Container className="text-center mb-5">
                    <Row>
                    <Slider {...settings}>
                        <Col lg={12} md={12} sm={12} className="p-2 test-mar-top">
                           <div className="testimonial test-margin">
                               <FontAwesomeIcon icon={faQuoteLeft}/><br/>
                               <span className="text-justify testimonial-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <div>
                                    <img src={user_1} className="testimonial-img"/>
                                    <h3 className="testimonial-title">Sen Rakhi</h3>
                               </div>
                           </div>
                        </Col>

                        <Col lg={12} md={12} sm={12} className="p-2 test-mar-top">
                           <div className="testimonial test-margin">
                               <FontAwesomeIcon icon={faQuoteLeft}/><br/>
                               <span className="text-justify testimonial-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <div>
                                    <img src={user_2} className="testimonial-img"/>
                                    <h3 className="testimonial-title">Mickle Jua</h3>
                               </div>
                           </div>
                        </Col>

                        <Col lg={12} md={12} sm={12} className="p-2 test-mar-top">
                           <div className="testimonial test-margin">
                               <FontAwesomeIcon icon={faQuoteLeft}/><br/>
                               <span className="text-justify testimonial-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <div>
                                    <img src={user_3} className="testimonial-img"/>
                                    <h3 className="testimonial-title">Rakhesa Hena</h3>
                               </div>
                           </div>
                        </Col>

                        <Col lg={12} md={12} sm={12} className="p-2 test-mar-top">
                           <div className="testimonial test-margin">
                               <FontAwesomeIcon icon={faQuoteLeft}/><br/>
                               <span className="text-justify testimonial-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</span><br/>
                               <span className="rating-star">
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStar}/>
                                  <FontAwesomeIcon icon={faStarHalfAlt}/>
                               </span>
                               <div>
                                    <img src={user_4} className="testimonial-img"/>
                                    <h3 className="testimonial-title">Stephen Jon</h3>
                               </div>
                           </div>
                        </Col>
                       
                    </Slider>
                    </Row>
                </Container>
            </Fragment>
        )
    }

