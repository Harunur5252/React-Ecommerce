import React, { Component, Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import NavigationTwo from '../NavigationTwo/NavigationTwo'


export default class Privacy extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} md={12} className="help-more-img-6">
                            <div className="helps-margin-top">
                               <NavigationTwo />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} md={12}>
                            <h1 className="faq-title">Privacy Policy</h1>
                            <div className="mt-3">
                               <p className="text-justify privacy-des">
                                  When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so, we collect personal information from you that we consider necessary for achieving this purpose. 
                               </p>

                               <p className="text-justify privacy-des">
                                   Below are some of the ways in which we collect and store your information
                               </p>

                               <ul>
                                   <li className="line"><p className="text-justify privacy-sm-des">We receive and store any information you enter on our website or give us in any other way. We use the information that you provide for such purposes as responding to your requests, customizing future shopping for you, improving our stores, and communicating with you.</p></li>
                                   <li className="line"><p className="text-justify privacy-sm-des">We also store certain types of information whenever you interact with us. For example, like many websites, we use "cookies," and we obtain certain types of information when your web browser accesses Chaldal.com or advertisements and other content served by or on behalf of Chaldal.com on other websites</p></li>
                                   <li className="line"><p className="text-justify privacy-sm-des">When signing up via Facebook, we collect your Name and Email (provided by Facebook) as part of your Chaldal account Information.</p></li>
                                   <li className="line"><p className="text-justify privacy-sm-des">To help us make e-mails more useful and interesting, we often receive a confirmation when you open e-mail from Chaldal if your computer supports such capabilities</p></li>
                               </ul>

                               <p className="text-justify privacy-des">
                                   Changes To Your Information:
                               </p>

                               <p className="text-justify privacy-des">
                                  The information you provide us isn’t set in stone. You may review, update, correct or delete the personal information in your profile at any time. 
                               </p>

                               <ul>
                                   <li className="line"><p className="text-justify privacy-sm-des">If you would like us to remove your information from our records, please create a request at the Contact Us page. </p></li>
                                   <li className="line"><p className="text-justify privacy-sm-des">To Delete your Facebook login, visit the Contact Us page while logged in via Facebook. You should see a "Delete Facebook Login" option to create a request to remove Facebook login from your account.</p></li>
                               </ul>

                               <p className="text-justify privacy-des">
                                  Information about our customers is an important part of our business, and we are not in the business of selling it to others. 
                               </p>

                               <p className="text-justify privacy-des">
                                  We release account and other personal information when we believe release is appropriate to comply with the law; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Chaldal.com, our users, or others. This includes exchanging information with other companies and organizations for fraud protection.
                               </p>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}
