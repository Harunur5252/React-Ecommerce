import React, { Component, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import BigPost from '../Components/BIgPost/BIgPost';

export default class BigPostPages extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="BigPost"/>
                <BigPost />
                <Footer />
            </Fragment>
        )
    }
}
