import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { faFacebook,faYoutube,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import  {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link } from 'react-router-dom';
import app from '../../images/logo-white.png'
import play from '../../images/play-store.png'
import store from '../../images/app-store.png'

export default function Footer () {

        return (
            <Fragment>
                 <Container fluid={true} className="footer">
                     <Row className="footer-row">
                         <Col lg={3} md={6} sm={12} className="text-justify footer-column">
                            <h3>Download Our App</h3>
                            <p>Download app for Android and Ios phone</p>
                            <div className="">
                                <Link to='#'><img src={play}  className="dw-app"/></Link>
                                <Link to='#'><img src={store} className="dw-app"/></Link>
                            </div>
                         </Col>

                         <Col lg={3} md={6} sm={12} className="text-justify footer-column">
                            <img src={app} className="footer-img"/>
                            <p>Our purpose is to sustainable make the pleasure and benefits of sports accessible to the many </p>
                         </Col>

                         <Col lg={3} md={6} sm={12} className="text-justify footer-column">
                            <h3>Useful Links</h3>
                            <ul className="list-item">
                                <li><Link to='/cart' className="a">Coupons</Link></li>
                                <li><Link to='/big_post' className="a">Big Post</Link></li>
                                <li><Link to='/return_policy' className="a">Return Policy</Link></li>
                                <li><Link to='#' className="a">Join Affiliate</Link></li>
                            </ul>
                         </Col>

                         <Col lg={3} md={6} sm={12} className="text-justify footer-column">
                            <h3>Follow Us</h3>
                            <ul className="list-item">
                                <li><a href='https://www.facebook.com/'  target='_blank' className="a"><FontAwesomeIcon icon={faFacebook}/>&nbsp;Facebook</a></li>
                                <li><a href='https://www.twitter.com/'   target='_blank' className="a"><FontAwesomeIcon icon={faTwitter}/>&nbsp;Twitter</a></li>
                                <li><a href='https://www.instagram.com/' target='_blank' className="a"><FontAwesomeIcon icon={faInstagram}/>&nbsp;Instagram</a></li>
                                <li><a href='https://www.youtube.com/'   target='_blank' className="a"><FontAwesomeIcon icon={faYoutube}/>&nbsp;Youtube</a></li>
                            </ul>
                         </Col>
                         <div className="hr"></div>
                         <p className="copyright">Copyright 2021-2022 Harunur Roshid</p>
                     </Row>
                     
                 </Container>
            </Fragment>
        )
    }

