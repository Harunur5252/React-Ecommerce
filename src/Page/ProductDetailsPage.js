import React, { useState,useEffect, Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import TopNavigation from '../Components/TopNavigation/TopNavigation'

export default function ProductDetailsPage () {
    
    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Product-Details"/>
                <ProductDetails />
                <Footer />
            </Fragment>
        )
    }

