import React, { Component, Fragment } from 'react'
import AllProduct from '../Components/AllProduct/AllProduct'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';


export default class AllProductPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="All-Product"/>
                <AllProduct />
                <Footer />
            </Fragment>
        )
    }
}
