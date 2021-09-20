import React, { Fragment } from 'react'
import { Col, Container, Row,Carousel } from 'react-bootstrap'
import slider_1 from '../../images/carousel_img/banner-ecommerce-1024x281.jpg'
import slider_2 from '../../images/carousel_img/OIP.jpg'
import slider_3 from '../../images/carousel_img/96824-big.jpg'
import slider_4 from '../../images/carousel_img/Binimal-Shopify-Top-Theme.png'

export default function Carousels () {

        return (
            <Fragment>
                <Container fluid={true} className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="carousel-img rounded"
                                    src={slider_1}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item interval={2000}>
                                <img
                                    className="carousel-img rounded"
                                    src={slider_2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item interval={2000}>
                                <img
                                    className="carousel-img rounded"
                                    src={slider_3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item interval={2000}>
                                <img
                                    className="carousel-img rounded"
                                    src={slider_4}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

