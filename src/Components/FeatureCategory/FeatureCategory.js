import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import category_1 from '../../images/category-1.jpg'
import category_2 from '../../images/category-2.jpg'
import category_3 from '../../images/category-3.jpg'

export default class FeatureCategory extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                           <div className="center">
                               <img src={category_1} className="feature-img rounded"/>
                           </div>
                        </Col>

                        <Col lg={4} md={4} sm={12}>
                           <div className="center">
                               <img src={category_2} className="feature-img rounded"/>
                           </div>
                        </Col>

                        <Col lg={4} md={4} sm={12}>
                           <div className="center">
                               <img src={category_3} className="feature-img rounded"/>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
