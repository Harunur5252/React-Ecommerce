import React, { useState,useEffect, Fragment } from 'react'
import Team from '../Components/Team/Team';
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'

export default function TeamPage () {
    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Team"/>
                <Team />
                <Footer />
            </Fragment>
        )
    }

