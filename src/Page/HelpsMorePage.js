import React, { Component, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import HelpsMore from '../Components/HelpsMore/HelpsMore';

export default class HelpsMorePage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="HelpsMore"/>
                <HelpsMore />
                <Footer />
            </Fragment>
        )
    }
}
