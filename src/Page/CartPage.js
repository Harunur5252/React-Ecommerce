import React, { Component, Fragment } from 'react'
import Cart from '../Components/Cart/Cart'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';


export default class CartPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Cart"/>
                 <Cart />
                <Footer />
            </Fragment>
        )
    }
}
