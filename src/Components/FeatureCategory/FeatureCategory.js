import React, { Fragment,useState,useEffect } from 'react'
import { Col, Container, Row,Nav,NavDropdown,Accordion } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';
import category_1 from '../../images/category-1.jpg'
import category_2 from '../../images/category-2.jpg'
import category_3 from '../../images/category-3.jpg'
import sub_category_img_12 from '../../images/category_images/adi2261383.jpg'

export default function FeatureCategory () {
    const [ spinner, setSpinner ] = useState(true);
      
      useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, [])

        return (
            <Fragment>
                <Container>
                    <h2 className="f-product-title">All Categories</h2>
                    <div className="underline"></div>
                    <Row>
                       <div>
                           {
                            spinner
                            ?
                             <Skeleton animation="wave" variant="text" style={{width:'20%', height:'3vh'}}/>
                            :

                             <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="All Categories"
                                    menuVariant="dark"
                                >
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="pay-text">Women's Fashion</Accordion.Header>
                                            <Accordion.Body>
                                                <NavDropdown.Item ><NavLink to='/saree' className="sub-category-title text">Saree</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Shalwar Kameez</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Women's Dresses</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Kurtis</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Lingerie, Sleep &amp; Lounge</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Western &amp; Winter Clothing</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Girl's Fashion</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Women's Bag</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Shoes</NavLink></NavDropdown.Item>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header className="pay-text">Men's Fashion</Accordion.Header>
                                            <Accordion.Body>
                                            <NavDropdown.Item ><NavLink to='/t_shirt' className="sub-category-title text">T-Shirts</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Shirts</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Kurtas</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Jeans</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Pant</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Shoes</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Girl's Fashion</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Men's Bag</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item ><NavLink to='#' className="sub-category-title text">Clothing</NavLink></NavDropdown.Item>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </NavDropdown>
                             </Nav>
                          }
                          
                       </div>        
                          
                           {
                               spinner ?
                               <Row>
                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                          <Skeleton variant="rect" animation="wave" className="wave rounded" style={{height:'37vh'}} />
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                          <Skeleton variant="rect" animation="wave" className="wave rounded" style={{height:'37vh'}} />
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                          <Skeleton variant="rect" animation="wave" className="wave rounded" style={{height:'37vh'}} />
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                          <Skeleton variant="rect" animation="wave" className="wave rounded" style={{height:'37vh'}} />
                                        </div>
                                    </Col>
                               </Row>

                               :

                               <Row>
                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                            <img src={category_1} className="feature-img rounded"/>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                            <img src={category_2} className="feature-img rounded"/>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                            <img src={category_3} className="feature-img rounded"/>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} sm={12}>
                                        <div className="center">
                                            <img src={sub_category_img_12} className="feature-img rounded"/>
                                        </div>
                                    </Col>
                               </Row>
                           }
                    </Row>
                </Container>
            </Fragment>
        )
    }

