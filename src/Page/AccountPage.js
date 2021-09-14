import React, { Component, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import Account from '../Components/Account/Account';

export default class AccountPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Account"/>
                <Account />
                <Footer />
            </Fragment>
        )
    }
}
