
import React, { Fragment,useState,useEffect } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';
import headerImg from '../../images/banner-e-commerce11.png'


export default function Header () {
    const [ spinner, setSpinner ] = useState(true);
      
      useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
      }, [])

        return (
            <Fragment>
                <Container fluid className="header-color mb-3">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                           <div className="header">
                               {

                                spinner 
                               ? 
                                            
                                 <div className="skeletonIconMargin">
                                     <Skeleton animation="wave" variant="text" style={{width:'60%', height:'5vh'}}/>
                                     <Skeleton animation="wave" variant="text" style={{width:'40%', height:'5vh'}} />
                                     <Skeleton animation="wave" variant="text" style={{width:'95%', height:'3vh'}} />
                                     <Skeleton animation="wave" variant="text" style={{width:'95%', height:'3vh'}} />
                                     <Skeleton animation="wave" variant="text" style={{width:'30%', height:'3vh'}} /><br/>
                                     <Skeleton animation="wave" variant="text" style={{width:'25%', height:'10vh'}} />
                                 </div> 

                               :
                               <div>
                                    <h1 className="header-title">Give Your Workout<br/>A New Way</h1>
                                    <p className="text-justify header-des">
                                      Google Fonts is a library of 1,093 free licensed font families and APIs for convenient use via CSS and Android. The library also has delightful and beautifully crafted icons for common actions and items
                                    </p>
                                    <Link to='/products' className="button">Explore More &#x2192;</Link>
                               </div>

                               }
                           </div>
                        </Col> 

                        <Col lg={6} md={6} sm={12}>
                            {
                            spinner

                            ? 
                              <div className="skeletonIconImgMargin">
                                  <Skeleton variant="rectangular" animation="wave" style={{width:'95%', height:'40vh'}} />
                              </div>

                            :
                               <div>
                                   <img src={headerImg} className="header header-img rounded"/>
                               </div>

                            }
                           
                        </Col>  
                    </Row>
                </Container>
            </Fragment>
        )
    }

