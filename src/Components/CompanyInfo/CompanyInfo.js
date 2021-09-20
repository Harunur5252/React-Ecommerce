import React, { Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import NavigationTwo from '../NavigationTwo/NavigationTwo'


export default function CompanyInfo () {

        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} md={12} className="help-more-img-2">
                            <div className="helps-margin-top">
                               <NavigationTwo />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} md={12} >
                            <h1 className="faq-title">Company Info</h1>
                            <div className="mt-5">
                               <h2 className="com-name">Company Name : Chaldal.com</h2>
                               <hr />
                               <p className="text-justify com-des">
                                   Chaldal.com  is a Bangladeshi online grocery and food products provider, founded in 2013. It sells fresh fruits and vegetables, meat and dairy, groceries, personal care and household items via its website and mobile app
                               </p>

                               <p className="text-justify com-des">
                                  Chaldal is a Bengali word colloquially used to refer to "groceries" (Chal means Rice, and Dal means Pulses).
                               </p>

                               <p className="text-justify com-des">
                                  Chaldal is currently operating and providing all their services in Dhaka, Narayanganj, Chittagong and most recently in Jashore. As of May 2021, it has a total of 25 active warehouses which are working 24/7 to provide the best service possible.
                               </p>
                            </div>

                            <div className="mt-5">
                               <h2 className="com-name">History</h2>
                               <hr />
                               <p className="text-justify com-des">
                                  Chaldal was founded by Waseem Alim (Founder and CEO), Zia Ashraf (Founder and COO), and Tejas Viswanath (Founder and CTO).[1][2] It was founded on the idea that time is extremely valuable to urban residents and that people should not have to waste hours in city traffic or brave harsh weather to buy simple household necessities
                               </p>

                               <p className="text-justify com-des">
                                  The company initially started off with just one warehouse/office in Gulshan, Dhaka while offering next day delivery. Over the years, it has expanded to 25 other locations and can now provide 1-hour delivery for 6000+ products. Now they deliver 10,000+ orders per day and serve almost 20000+ households across Bangladesh.
                               </p>

                               <p className="text-justify com-des">
                                   Chaldal received financing from IFC (International Finance Corporation), World Bank. The company has also received funding from other private, national and international venture capitalists through different series of investments.[3][4][5]
                               </p>
                            </div>

                            <div className="mt-5">
                               <h2 className="com-name">Operations and service</h2>
                               <hr />
                               <p className="text-justify com-des">
                                  Chaldal has a website and Android and iOS app for smartphone users where users can order products.[6] Anyone can place an order by calling their hotline number +8801881234567. Customers are able to choose their preferred time slots for delivery and can make use of the livechat and 24/7 customer service in case of any issues with orders.
                               </p>

                               <p className="text-justify com-des">
                                  Chaldal is known for its commitment to quality customer service and easy return/exchange policies. Customers can return or exchange any unopened products within 7 days of receiving the item.
                               </p>
                            </div>

                            <div className="mt-5">
                               <h2 className="com-name">Warehouses</h2>
                               <hr />
                               <p className="text-justify com-des">
                                  To ensure one-hour delivery, Chaldal maintains 25 different micro warehouses across Dhaka, Chattogram, Narayanganj, and Jashore. At Dhaka, the warehouses are situated in Hajaribag, Banani, Rajarbag, Mirpur, Uttara, Dhalibari, Kallyanpur, Rampura, Jatrabari, Fakirbari, Panthapath, Mohammadpur, Badda, Uttarkhan, and Shewrapara. Its primary warehouse is in Rampura. The company also maintains a perishables processing warehouse in Gabtoli for its vegetables, dairy, fruits, etc.
                               </p>
                            </div>

                            <div className="mt-5">
                               <h2 className="com-name">Achievement</h2>
                               <hr />
                               <p className="text-justify com-des">
                                  In 2020 Chaldal was announced as the best e-commerce company of the year at Digital World 2020 for serving its customers loyally during the COVID-19 crisis. has ranked ninth in world's best 500 startups 2015. The ranking was produced by Forbes Magazine's startup assister ‘Y Combinator’.[7][8][9] It has also received The Daily Star E-Business Of The Year 2017.[10] Its name comes up in FT/IFC Transformation Business Award 2018.[11]
                               </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

