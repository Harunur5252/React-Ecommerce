import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Timer from 'react-compound-timer'
import { Link } from 'react-router-dom'
import exclusive_img from '../../images/exclusive.png'


export default function Giveaway () {

        return (
            <Fragment>
                <Container className="mt-5 mb-5 offer">
                    <Row>
                        <Col lg={6} md={6} sm={12} className="mt-2">
                           <div className="offer-margin">
                              <img src={exclusive_img} className="offer-img img-margin"/>
                           </div>
                        </Col>

                        <Col lg={6} md={6} sm={12} className="text-center">
                           <div className="give-margin-text mx-5">
                             <h5>
                             <Timer
                                initialTime={500000000}
                                direction="backward"
                            >
                                {() => (
                                    <React.Fragment>
                                        <Timer.Days /> &nbsp;days&nbsp;
                                        <Timer.Hours /> &nbsp;hours&nbsp;
                                        <Timer.Minutes /> &nbsp;minutes&nbsp;
                                        <Timer.Seconds /> &nbsp;seconds&nbsp;
                                        <Timer.Milliseconds /> &nbsp;milliseconds
                                    </React.Fragment>
                                )}
                            </Timer>
                             </h5>
                              <h5 className="offer-left">Time is left hurry up to take a low price</h5>
                              <p className="text-justify offer-text">Exclusively Available on RedStore</p>
                              <h1 className="offer-title">Smart Band 5</h1>
                              <small className="offer-text">The Mi Smart Band 5 feature a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.</small><br/>
                              <Link to="/cart" className="button">Buy Now &#8594;</Link>
                           </div>
                           
                       </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

