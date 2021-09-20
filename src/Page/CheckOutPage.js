import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import CheckOut from '../Components/CheckOut/CheckOut';

export default function CheckOutPage () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                 <TopNavigation title="Checkout"/>
                 <CheckOut />
                 <Footer />
            </Fragment>
        )
    }

