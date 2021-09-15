import React, { Component, Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import NavigationTwo from '../NavigationTwo/NavigationTwo'

export default class HelpsMore extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} md={12} className="help-more-img-1">
                            <div className="helps-margin-top">
                               <NavigationTwo />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} md={12} >
                            <h1 className="faq-title">FAQ</h1>
                            <div className="mt-5">
                                <h2 className="faq-q-title">Q. How does the site work?</h2>
                                <p className="text-justify mt-4 faq-ans-text">
                                    A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on place order. You let us know your address, select a delivery time – and voila, you are done.  A Chaldal representative will then deliver your order right to your home or office. 
                                </p>

                                <h2 className="mt-4 faq-q-title">Q. How much do deliveries cost?</h2>
                                <p className="text-justify faq-ans-text mt-4">
                                    A. Delivery fee inside Dhaka is BDT 19. And outside Dhaka is BDT 9.
                                </p>

                                <h2 className="mt-4  faq-q-title">Q. How much do deliveries cost?</h2>
                                <p className="text-justify faq-ans-text mt-4">
                                   A. You can always call <b>+880-188-1234-567</b> or mail us at support@chaldal.com. 
                                </p>

                                <h2 className="mt-4 faq-q-title">Q. What are your delivery hours? </h2>
                                <p className="text-justify faq-ans-text mt-4">
                                   A. We deliver from 8 am to 10 pm every day. You can choose from available slots to find something that is convenient to you.
                                </p>

                                <h2 className="mt-4 faq-q-title">Q. How do I know when my order is here?  </h2>
                                <p className="text-justify faq-ans-text mt-4">
                                    A. A Chaldal representative will call you as soon as they are at your house to let you know about your delivery. 
                                </p>

                                <h2 className="mt-4 faq-q-title">Q. How do I pay?  </h2>
                                <p className="text-justify faq-ans-text mt-4">
                                   A. We accept cash on delivery and we also have Online Credit Card and Online bKash service. Don’t worry, our Chaldal representatives should always carry enough change. 
                                </p>

                                <h2 className="mt-4 faq-q-title">Q. Do you serve my area?  </h2>
                                <p className="text-justify faq-ans-text mt-4">
                                   A. We are currently serving four big cities of Bangladesh including Dhaka, Chattogram, Narayanganj, and Jashore
                                </p>

                                <h2 className="mt-4 faq-q-title">Q. I can’t find the product I am looking for. What do I do?   </h2>
                                <p className="text-justify faq-ans-text mt-4">
                                    A. We are always open to new suggestions and will add an item to our inventory just for you. There is a "Product Request" feature that you can use to inform us of your requirement. You can also call +880-188-1234-567 or mail us at support@chaldal.com to add an item to our inventory
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
