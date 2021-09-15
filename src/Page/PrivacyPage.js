import React, { Component, Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'
import Privacy from '../Components/Privacy/Privacy';

export default class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy & Policy"/>
                <Privacy />
                <Footer />
            </Fragment>
        )
    }
}
