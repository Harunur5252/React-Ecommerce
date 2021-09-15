import React, { Component, Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import NavigationTwo from '../NavigationTwo/NavigationTwo'

export default class Career extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} md={12} className="help-more-img-4">
                            <div className="helps-margin-top">
                               <NavigationTwo />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} md={12}>
                            <h1 className="faq-title">Career</h1>

                            <div className="mt-3 text-center">
                               <h2 className="com-name">Join Chaldal Family</h2>
                               <hr />
                               <p className="text-justify com-des">
                                   At Chaldal, you are more than your job title, you are part of one of the fastest growing e-commerce in Bangladesh, a successful, purpose-led business. Work with a team that works to improve the lives of our consumers and the communities around us. If you want to feel proud of what you do, join us.
                               </p>
                            </div>

                            <div className="mt-3 text-center">
                               <h2 className="com-name">Explore Chaldal Engineering</h2>
                               <hr />
                               <p className="text-justify com-des">
                                   <a href="https://chaldal.tech/">Click here</a> to learn more about our engineering team and the work we do behind the scenes.
                               </p>
                            </div>
                        </Col>

                         <Col lg={12} md={12} md={12}> 
                            <div className="mt-3 text-center">
                               <h2 className="com-name">Job Openings</h2>
                               <hr />
                               <div className="help-more-img-5"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg={12} md={12} md={12} className="mb-5">
                            <div className="text-center">
                                <h2 className="com-name">Being an Eggxecutor</h2>
                            </div>
                        </Col>

                        <Col lg={4} md={6} md={12} className="mb-5">
                            <div>
                                <img className="rounded carrier-img" src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2368/Default/components/page/Career/images/Sinthia.jpg?q=best&webp=1" />
                            </div>
                            <p className="text-justify com-des">Chaldal promotes female empowerment. They have provided a respectful environment for all female employees.</p>
                            <b>Sinthia</b><br/>
                            <b>Product Associate</b>
                        </Col>

                        <Col lg={4} md={6} md={12} className="mb-5">
                            <div>
                                <img className="rounded carrier-img" src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2368/Default/components/page/Career/images/Raisul.png?q=best&webp=1" />
                            </div>
                            <p className="text-justify com-des">My profession is my passion and I LOVE my profession. Chaldal has given me the opportunity to build my dream career, which will help me to be successful in life</p>
                            <b>Raisul</b><br/>
                            <b>Picking</b>
                        </Col>

                        <Col lg={4} md={6} md={12} className="mb-5">
                            <div>
                                <img className="rounded carrier-img" src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2368/Default/components/page/Career/images/Faria.jpg?q=best&webp=1" />
                            </div>
                            <p className="text-justify com-des">We support our Shoppers and Customers round the clock until every issue and support call is resolved up until the last order is delivered.</p>
                            <b>Faria</b><br/>
                            <b>Deputy Director</b>
                        </Col>
                        
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg={12} md={12} md={12} className="mb-5">
                            <div className="text-center">
                                <h2 className="com-name">Perks of Being an Eggxecutor</h2>
                            </div>
                        </Col>

                        <Col lg={3} md={6} md={12} className="mb-5">
                           <div className="text-center animation p-3">
                               <img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2368/Default/components/page/Career/images/discount.png?v3&q=best&webp=1" />
                               <h4 className="team-title mt-2">Employee Discount</h4>
                               <p className="text-justify com-des">Enjoy 4% off on all of your orders on Chaldal and other offers</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} md={12} className="mb-5">
                           <div className="text-center animation p-3">
                               <img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2368/Default/components/page/Career/images/graph.png?v3&q=best&webp=1" />
                               <h4 className="team-title mt-2">Increments</h4>
                               <p className="text-justify com-des">Hard work always pays off at Chaldal. Get increments as you go along your journey with us</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} md={12} className="mb-5">
                           <div className="text-center animation p-3">
                               <img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2368/Default/components/page/Career/images/laugh.png?v3&q=best&webp=1" />
                               <h4 className="team-title mt-2">Fun Work Environment</h4>
                               <p className="text-justify com-des">Work hard and have fun on the process. That’s our daily thirve</p>
                           </div>
                        </Col>

                        <Col lg={3} md={6} md={12} className="mb-5">
                           <div className="text-center animation p-3">
                               <img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2368/Default/components/page/Career/images/mortarBoard.png?v3&q=best&webp=1" />
                               <h4 className="team-title mt-2">Development through experience</h4>
                               <p className="text-justify com-des">Progress your learning on the job, through others and via everyday tasks & projects</p>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
