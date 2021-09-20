import React, { useState, useEffect,Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';


export default function ContactPage () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <Contact />
                <Footer />
            </Fragment>
        )
    }

