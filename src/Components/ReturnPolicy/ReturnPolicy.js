import React, { Fragment } from 'react'
import { Container,Row,Col,Card,Form,Button,FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Contact () {

        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="return_policy text-center">
                           <h1 className="margin-con title text-white">Return Policy</h1>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                           <Card className="mb-5">
                              <Card.Body>
                                   <p className="text-justify des mt-3">
                                     1. If you have already set up a store with us and need a hand with anything, you can direct your question to the correct team via the Support section of your Control Panel, for a fast response.
                                   </p>
                                   <p className="text-justify des mt-3">
                                     2. If you have any general questions or sales enquiries before signing up for your store, please feel free to get in touch via the contact form below or by e-mailing us directly on.
                                   </p>
                                   <p className="text-justify des mt-3">
                                     3. Most e-commerce stores should have a Return or Refund Policy. This includes retail stores as well. Customers must be informed about their rights to refunds. 
                                   </p>
                                   <p className="text-justify des mt-3">
                                     4. This "policy" is the page where businesses inform customers about their policy on return and refunds. The Policy is part of the 3 legal agreements your e-commerce business should have:
                                   </p>
                                   <p className="text-justify des mt-3">
                                     5. The "Return and Refund Policy" Generator will create a custom policy for your ecommerce store. Most e-commerce stores should have a Return or Refund Policy. This includes retail stores as well. Customers must be informed about their rights to refunds.
                                   </p>
                                   <p className="text-justify des mt-3">
                                     6. TermsFeed provides a custom return policy based on various inputs from store owners. Returning a product means the customer will return the purchased product back to the retailer. In such cases, the e-commerce store can provide one of the below options: Provide a cash refund on the returned product.
                                   </p>
                                   <p className="text-justify des mt-3">
                                     7. You should display your Return Policy as a link in your website footer along with your other important legal agreements and policies. You should also add a short paragraph to your Terms and Conditions agreement where you summarize your Return Policy and link to the full policy.
                                   </p>
                                   <p className="text-justify des mt-3">
                                     8. A return policy is an elaborate terms and conditions along with an agreement using which online store owners inform customers about refund and return policies. Policies are categorised as: The return policy usually will include: The mode in which the refund will be provided to you Cost of shipping on return products if any
                                   </p>
                              </Card.Body>
                           </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
