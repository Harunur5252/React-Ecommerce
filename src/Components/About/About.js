import React, { Fragment,useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton from '@material-ui/lab/Skeleton';

export default function About () {
    const [ spinner, setSpinner ] = useState(true);
      
    useEffect(() => {
      setTimeout(() => setSpinner(false), 1000)
    }, [])


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
                        {
                            spinner ?

                            <Row className="about-skeleton-length">
                                <Col lg={12} md={12} sm={12} className="mt-5">
                                   <Skeleton animation="wave" variant="text" style={{width:'20%', height:'5vh'}}/>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="mt-4">
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="mt-4">
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="mt-4">
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="mt-4">
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="mt-4">
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                </Col>

                                <Col lg={6} md={12} sm={12} className="mt-4">
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                   <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                                </Col>

                                <Col lg={12} md={12} sm={12} className="mt-5 skeleton-about">
                                   <Skeleton animation="wave" variant="text" style={{width:'20%', height:'5vh'}}/>
                                </Col>

                                <Col lg={12} md={12} sm={12} className="mt-4 mb-5 skeleton-about">
                                   <Skeleton animation="wave" variant="circular" className="rounded-circle" style={{width:'20%', height:'30vh'}}/>
                                </Col>

                            </Row>

                            :

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
                        }
                       
                    </Row>
                </Container>
            </Fragment>
        )
    }

