import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';

export default function AboutPage () {
  
    const [count] = useState(window.scroll(0,0));

      useEffect(() => {
         const windowScroll = {count}
      });

        return (
            <Fragment>
                <TopNavigation title="About"/>
                <About />
                <Footer />
            </Fragment>
        )
    }

