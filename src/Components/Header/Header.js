import React, { Component, Fragment } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import headerImg from '../../images/banner-e-commerce11.png'
export default class Header extends Component {
    render() {
      
        return (
            <Fragment>
                <Container fluid className="header-color mb-3">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                           <div className="header">
                               <h1 className="header-title">Give Your Workout<br/>A New Way</h1>
                                <p className="text-justify header-des">
                                Google Fonts is a library of 1,093 free licensed font families and APIs for convenient use via CSS and Android. The library also has delightful and beautifully crafted icons for common actions and items
                                </p>
                                <a href="" className="btn">Explore More &#x2192;</a>
                           </div>
                        </Col> 

                        <Col lg={6} md={6} sm={12}>
                           <img src={headerImg} className="header header-img rounded"/>
                        </Col>  
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
