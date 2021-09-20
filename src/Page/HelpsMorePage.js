import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import HelpsMore from '../Components/HelpsMore/HelpsMore';

export default function HelpsMorePage () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="HelpsMore"/>
                <HelpsMore />
                <Footer />
            </Fragment>
        )
    }

