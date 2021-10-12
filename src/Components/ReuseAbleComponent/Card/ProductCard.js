import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

export default function ProductCard(props) {
    const {productImg,product_title,price} = props

    return (
        <Fragment>
            <Col lg={3} md={6} sm={12}>
                <div className="product mt-5">
                    <Link to={`/productDetails/1/red_printed_saree`}>
                        <img src={productImg} className="product-img rounded"/>
                    </Link>
                    <Link to={`/productDetails/1/red_printed_t-shirt`} className="text">
                        <span className="product-title">{product_title}</span><br/>
                    </Link>
                    <span className="rating-star">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                    </span>
                    <p className="product-price">{price}</p>
                </div>
            </Col>
        </Fragment>
    )
}
