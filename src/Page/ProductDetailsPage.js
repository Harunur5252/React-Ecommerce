import React, { Component, Fragment } from 'react'
import Footer from '../Components/Footer/Footer'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import TopNavigation from '../Components/TopNavigation/TopNavigation'

export default class ProductDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Product-Details"/>
                <ProductDetails />
                <Footer />
            </Fragment>
        )
    }
}
