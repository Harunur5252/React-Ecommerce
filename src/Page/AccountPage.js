import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import Account from '../Components/Account/Account';

export default function AccountPage () {
    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Account"/>
                <Account />
                <Footer />
            </Fragment>
        )
    }

