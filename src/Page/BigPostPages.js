import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import BigPost from '../Components/BIgPost/BIgPost';

export default function BigPostPages () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="BigPost"/>
                <BigPost />
                <Footer />
            </Fragment>
        )
    }

