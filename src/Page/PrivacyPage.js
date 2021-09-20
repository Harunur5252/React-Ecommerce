import React, { useState, useEffect,Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'
import Privacy from '../Components/Privacy/Privacy';

export default function PrivacyPage () {
    
    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Privacy & Policy"/>
                <Privacy />
                <Footer />
            </Fragment>
        )
    }

