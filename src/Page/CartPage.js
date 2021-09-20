import React, { useState,useEffect, Fragment } from 'react'
import Cart from '../Components/Cart/Cart'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';


export default function CartPage () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Cart"/>
                 <Cart />
                <Footer />
            </Fragment>
        )
    }

