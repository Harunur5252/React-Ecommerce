import React, { Component, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import CheckOut from '../Components/CheckOut/CheckOut';
export default class CheckOutPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                 <TopNavigation title="Checkout"/>
                 <CheckOut />
                 <Footer />
            </Fragment>
        )
    }
}
