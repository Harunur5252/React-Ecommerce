import React, { useState,useEffect, Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'
import Terms from '../Components/Terms/Terms';

export default function TermsPage () {
    
    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Terms"/>
                <Terms />
                <Footer />
            </Fragment>
        )
    }

