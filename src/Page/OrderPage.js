import React, { useState,useEffect, Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'
import Order from '../Components/Order/Order';

export default function OrderPage () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Order"/>
                <Order />
                <Footer />
            </Fragment>
        )
    }

