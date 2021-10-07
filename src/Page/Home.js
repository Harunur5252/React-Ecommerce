import React, { useState,useEffect, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Header from '../Components/Header/Header';
import FeatureCategory from '../Components/FeatureCategory/FeatureCategory';
import FeatureProduct from '../Components/FeatureProduct/FeatureProduct';
import LatestProduct from '../Components/LatestProduct/LatestProduct';
import Offer from '../Components/Offer/Offer';
import Testimonial from '../Components/Testimonial/Testimonial';
import Brands from '../Components/Brands/Brands';
import Footer from '../Components/Footer/Footer';
import Carousels from '../Components/Carousels/Carousels';
import Giveaway from '../Components/Giveaway/Giveaway';
import NewsLatter from '../Components/NewsLatter/NewsLatter';

export default function Home () {
    const [count] = useState(window.scroll(0,0));

    useEffect(() => {
       const windowScroll = {count}
    });

        return (
            <Fragment>
                <TopNavigation title="Home"/>
                <Header />
                 <Carousels />
                <FeatureCategory />
                <FeatureProduct />
                <LatestProduct />
                <Offer />
                <Giveaway />
                <Testimonial />
                <Brands />
                <NewsLatter />
                <Footer />
            </Fragment>
        )
    }

