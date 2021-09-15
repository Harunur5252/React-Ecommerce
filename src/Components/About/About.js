import React, { Component,Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="about-back-img">
                           
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="mt-5">
                           <h1 className="text-center title">Our Story</h1>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="mt-4">
                           <p className="text-justify des">
                               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                            </p>
                            <p className="text-justify des">
                               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                            </p>
                            <p className="text-justify des">
                               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                            </p>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="mt-4">
                           <p className="text-justify des">
                               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                            </p>
                            <p className="text-justify des">
                               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                            </p>
                            <p className="text-justify des">
                               Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                            </p>
                        </Col>

                        <Col lg={12} md={12} sm={12} className="mt-5">
                           <h1 className="text-center title">Our Values</h1>
                        </Col>

                        <Col lg={12} md={12} sm={12} className="about-back-img-2 mt-4 mb-5">
                           
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}
