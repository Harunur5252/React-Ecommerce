import React, { useState,useEffect, Fragment } from 'react'
import AllProduct from '../Components/AllProduct/AllProduct'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';


export default function AllProductPage () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="All-Product"/>
                <AllProduct />
                <Footer />
            </Fragment>
        )
    }

