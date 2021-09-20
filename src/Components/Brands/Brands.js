import React, { Fragment } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import godrej from '../../images/logo-godrej.png'
import cocacula from '../../images/logo-coca-cola.png'
import oppo from '../../images/logo-oppo.png'
import paypal from '../../images/logo-paypal.png'
import philips from '../../images/logo-philips.png'

export default function Brands () {

        return (
            <Fragment>
                <Container className="brands">
                    <Row className="brands-margin">
                        <Col lg={2} md={4} sm={12} className="m-2">
                           <div className="brands-img">
                               <img src={godrej} className=""/>
                           </div>
                        </Col>

                        <Col lg={2} md={4} sm={12} className="m-2">
                           <div className="brands-img">
                               <img src={cocacula} className=""/>
                           </div>
                        </Col>

                        <Col lg={2} md={4} sm={12} className="m-2">
                           <div className="brands-img">
                               <img src={oppo} className=""/>
                           </div>
                        </Col>

                        <Col lg={2} md={4} sm={12} className="m-2">
                           <div className="brands-img">
                               <img src={paypal} className=""/>
                           </div>
                        </Col>

                        <Col lg={2} md={4} sm={12} className="m-2">
                           <div className="brands-img">
                               <img src={philips} className=""/>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

