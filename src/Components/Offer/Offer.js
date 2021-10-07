import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import exclusive_img from '../../images/exclusive.png'

export default function Offer () {
        return (
            <Fragment>
                <Container  className="offer mb-5">
                    <Row>
                        <Col lg={6} md={6} sm={12} className="mt-2">
                           <div className="offer-margin">
                              <img src={exclusive_img} className="offer-img img-margin"/>
                           </div>
                        </Col>

                        <Col lg={6} md={6} sm={12} className="mt-2">
                           <div className="offer-margin-text mx-5">
                              <p className="text-justify offer-text">Exclusively Available on RedStore</p>
                              <h1 className="offer-title">Smart Band 4</h1>
                              <small className="offer-text">The Mi Smart Band 4 feature a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.</small><br/>
                              <Link to="/cart" className="button">Buy Now &#8594;</Link>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

