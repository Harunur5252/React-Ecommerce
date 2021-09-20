import React, { useState,useEffect, Fragment } from 'react'
import Footer from '../../../Components/Footer/Footer';
import Saree from '../../../Components/SubCategoryComponents/Women\'s/Saree/Saree';
import TopNavigation from '../../../Components/TopNavigation/TopNavigation';


export default function SareePages () {
    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Saree"/>
                <Saree />
                <Footer />
            </Fragment>
        )
    }

