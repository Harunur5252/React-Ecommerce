import React, { useState,useEffect, Fragment } from 'react'
import Footer from '../../../Components/Footer/Footer';
import T_Shirts from '../../../Components/SubCategoryComponents/Men\'s/T_Shirts/T_Shirts';
import TopNavigation from '../../../Components/TopNavigation/TopNavigation';


export default function T_ShirtsPage () {

    const [count] = useState(window.scroll(0,0));

      useEffect(() => {
         const windowScroll = {count}
      });

        return (
            <Fragment>
                <TopNavigation title="T_Shirts"/>
                <T_Shirts />
                <Footer />
            </Fragment>
        )
    }

