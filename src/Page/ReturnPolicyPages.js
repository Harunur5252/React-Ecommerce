import React, { Component, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import ReturnPolicy from '../Components/ReturnPolicy/ReturnPolicy';

export default class ReturnPolicyPages extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Return-Policy"/>
                <ReturnPolicy />
                <Footer />
            </Fragment>
        )
    }
}
