import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt,faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function CustomerReviewCard(props) {
    const {name,image,review} = props

    return (
        <Fragment>
            <Col lg={12} md={12} sm={12} className="p-2 m-2 test-mar-top">
                <div className="testimonial test-margin">
                    <FontAwesomeIcon icon={faQuoteLeft}/><br/>
                    <span className="text-justify testimonial-text">{review}</span><br/>
                    <span className="rating-star">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </span>
                    <div>
                        <img src={image} className="testimonial-img"/>
                        <h3 className="testimonial-title">{name}</h3>
                    </div>
                </div>
            </Col>
        </Fragment>
    )
}
