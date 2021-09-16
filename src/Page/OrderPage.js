import React, { Component, Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'
import Order from '../Components/Order/Order';

export default class OrderPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Order"/>
                <Order />
                <Footer />
            </Fragment>
        )
    }
}
