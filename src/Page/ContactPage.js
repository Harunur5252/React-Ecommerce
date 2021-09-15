import React, { Component, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';
export default class ContactPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <Contact />
                <Footer />
            </Fragment>
        )
    }
}
