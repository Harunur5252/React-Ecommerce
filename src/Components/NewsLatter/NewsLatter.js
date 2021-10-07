import React, { Fragment } from 'react'
import { Col, Container, Row,Form,InputGroup,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NewsLatter() {
    return (
        <Fragment>
            <Container fluid={true} className="mb-5">
                <Row>
                    <Col sm={12} md={12} lg={12} className="text-center">
                        <div className="nesLatterColor">
                           <div className="news-card-box">
                                <h1 className="news-title news-title-margin-top">Newslatter</h1>
                                <p  className="news-des">Get timely updates from your favorite products</p>
                                <Form className="form-margin mb-5">
                                    <Row className="align-items-center">
                                        <Col xs="auto" lg={6} md={6} sm={12}>
                                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                                 Email
                                            </Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text>@</InputGroup.Text>
                                                <FormControl id="inlineFormInputGroup" className="news-input-margin" placeholder="Your Email" />
                                            </InputGroup>
                                        </Col>
                                        <Col xs="auto">
                                            <Link to='#' className="mb-2 btn-2 text">
                                                Submit
                                            </Link>
                                        </Col>
                                    </Row>         
                                </Form>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
