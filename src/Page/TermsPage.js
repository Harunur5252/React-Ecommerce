import React, { Component, Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'
import Terms from '../Components/Terms/Terms';

export default class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms"/>
                <Terms />
                <Footer />
            </Fragment>
        )
    }
}
