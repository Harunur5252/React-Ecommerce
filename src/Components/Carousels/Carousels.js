import React, { Fragment,useState,useEffect } from 'react'
import { Col, Container, Row,Carousel } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Skeleton from '@material-ui/lab/Skeleton';
import slider_1 from '../../images/carousel_img/istockphoto-1224339637-1024x1024.jpg'
import slider_2 from '../../images/carousel_img/istockphoto-1224339512-1024x1024.jpg'
import slider_3 from '../../images/carousel_img/istockphoto-902819636-1024x1024.jpg'
import slider_4 from '../../images/carousel_img/istockphoto-1067359372-1024x1024.jpg'
import slider_5 from '../../images/carousel_img/istockphoto-1157335319-1024x1024.jpg'
import slider_6 from '../../images/carousel_img/istockphoto-1224339625-1024x1024.jpg'
import slider_7 from '../../images/carousel_img/istockphoto-1049132190-1024x1024.jpg'

const settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed:true,
    fade: true,
    infinite: true,
    focusOnSelect:true,
    touchMove:true,
    draggable:true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousels () {
    const [ spinner, setSpinner ] = useState(true);
      
      useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, [])
      
        return (
            <Fragment>
                <Container fluid={true} className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            {
                             spinner
                             ?
                              <Skeleton variant="rect" animation="wave" style={{width:'100%', height:'50vh'}} />
                             :
                                <Slider {...settings}>
                                    <div className=" rounded">
                                        <img src={slider_1} />
                                    </div>

                                    <div className="carousel-img rounded">
                                        <img src={slider_2} />
                                    </div>

                                    <div className="carousel-img rounded">
                                        <img src={slider_3} />
                                    </div>

                                    <div className="carousel-img rounded">
                                        <img src={slider_4} />
                                    </div>

                                    <div className="carousel-img rounded">
                                        <img src={slider_5} />
                                    </div>

                                    <div className="carousel-img rounded">
                                        <img src={slider_6} />
                                    </div>

                                    <div className="carousel-img rounded">
                                        <img src={slider_7} />
                                    </div>
                                </Slider>

                            }
                            
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

