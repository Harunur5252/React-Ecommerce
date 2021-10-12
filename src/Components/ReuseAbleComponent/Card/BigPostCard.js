import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

export default function BigPostCard(props) {
    const {productImg,product_title,price,cutPrice} = props

    return (
        <Fragment>
            <Col lg={3} md={6} sm={12}>
                <div className="product">
                    <img src={productImg} className="product-img rounded"/>
                    <span className="product-title">{product_title}</span><br/>
                    <span className="rating-star">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </span><br/>
                    <del className="product-price">{cutPrice}</del>
                    <p className="product-price">{price}</p>
                </div>
            </Col>
        </Fragment>
    )
}
