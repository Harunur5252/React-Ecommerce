import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import ReturnPolicy from '../Components/ReturnPolicy/ReturnPolicy';

export default function ReturnPolicyPages () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Return-Policy"/>
                <ReturnPolicy />
                <Footer />
            </Fragment>
        )
    }

