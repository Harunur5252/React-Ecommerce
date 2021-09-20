import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import CompanyInfo from '../Components/CompanyInfo/CompanyInfo';


export default function CompanyInfoPage () {

    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Company-Info"/>
                <CompanyInfo />
                <Footer />
            </Fragment>
        )
    }

